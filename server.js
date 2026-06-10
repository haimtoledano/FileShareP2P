const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');
const helmet = require('helmet');
const crypto = require('crypto');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const isProd = process.env.NODE_ENV === 'production' || process.env.ENFORCE_HTTPS === 'true';

// Configure HTTP security headers with customized Content Security Policy (CSP) for WebRTC and resources
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      "default-src": ["'self'"],
      "connect-src": ["'self'", "ws:", "wss:", "https://*.metered.live", "https://*.metered.ca"],
      "script-src": ["'self'"], // Removed unpkg.com! Fully secure
      "style-src": ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      "font-src": ["'self'", "https://fonts.gstatic.com", "data:"],
      "upgrade-insecure-requests": isProd ? [] : null, // Disable upgrading to HTTPS when served over HTTP in development
    },
  },
  hsts: isProd, // Disable HSTS in development/local environments
}));

if (isProd) {
  app.set('trust proxy', 1);
  // Redirect HTTP to HTTPS in production
  app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https' && !req.secure) {
      return res.redirect(`https://${req.headers.host}${req.url}`);
    }
    next();
  });
}

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Create HTTP server
const server = http.createServer(app);

// Create WebSocket server
const wss = new WebSocket.Server({ server });

// Active rooms: roomId -> Set of ws clients
const rooms = new Map();

let cachedIceServers = null;
let lastFetchTime = 0;

// Generate dynamic ICE configuration based on environment variables or Metered.ca API
async function getIceServers() {
  if (process.env.METERED_API_KEY && process.env.METERED_SUBDOMAIN) {
    const now = Date.now();
    if (cachedIceServers && (now - lastFetchTime < 5 * 60 * 1000)) {
      return cachedIceServers;
    }
    
    try {
      const url = `https://${process.env.METERED_SUBDOMAIN}.metered.live/api/v1/turn/credentials?apiKey=${process.env.METERED_API_KEY}`;
      console.log('Fetching fresh TURN credentials from Metered.ca...');
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        cachedIceServers = data;
        lastFetchTime = now;
        return data;
      } else {
        console.error('Failed to fetch from Metered API:', response.statusText);
      }
    } catch (err) {
      console.error('Error fetching Metered TURN credentials:', err);
    }
  }

  const iceServers = [];

  // STUN Servers (comma-separated)
  if (process.env.STUN_SERVERS && process.env.STUN_SERVERS.trim() !== '') {
    process.env.STUN_SERVERS.split(',').forEach(url => {
      if (url.trim()) {
        iceServers.push({ urls: url.trim() });
      }
    });
  } else {
    // Default fallback Google STUN servers
    iceServers.push({ urls: 'stun:stun.l.google.com:19302' });
    iceServers.push({ urls: 'stun:stun1.l.google.com:19302' });
    iceServers.push({ urls: 'stun:stun2.l.google.com:19302' });
    iceServers.push({ urls: 'stun:stun3.l.google.com:19302' });
  }

  // TURN Server configuration
  if (process.env.TURN_SERVER_URL && process.env.TURN_SERVER_URL.trim() !== '') {
    const turnServer = {
      urls: process.env.TURN_SERVER_URL.trim()
    };
    if (process.env.TURN_SERVER_USERNAME && process.env.TURN_SERVER_USERNAME.trim() !== '') {
      turnServer.username = process.env.TURN_SERVER_USERNAME.trim();
    }
    if (process.env.TURN_SERVER_CREDENTIAL && process.env.TURN_SERVER_CREDENTIAL.trim() !== '') {
      turnServer.credential = process.env.TURN_SERVER_CREDENTIAL.trim();
    }
    iceServers.push(turnServer);
  }

  return iceServers;
}

// Rate limiting map for failed passcode attempts: IP -> { count, lockUntil }
const failedAttempts = new Map();
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function safeCompare(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') return false;
  try {
    return crypto.timingSafeEqual(Buffer.from(a), Buffer.from(b));
  } catch (e) {
    return false;
  }
}

wss.on('connection', (ws, req) => {
  let currentRoomId = null;
  let clientRole = null; // 'sender' or 'receiver'

  // Extract client IP address for rate-limiting
  const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  ws.on('message', async (message) => {
    // WebSocket Message Size Limit (DoS Mitigation)
    const msgLen = Buffer.isBuffer(message) ? message.byteLength : (typeof message === 'string' ? message.length : 0);
    if (msgLen > 65536) {
      console.warn(`Blocked huge message (${msgLen} bytes) from IP ${clientIp}`);
      ws.close(1009, 'Message size limit exceeded');
      return;
    }

    try {
      const parsed = JSON.parse(message);
      const { type, roomId, data } = parsed;

      if (type === 'ping') {
        ws.send(JSON.stringify({ type: 'pong' }));
        return;
      }

      switch (type) {
        case 'join':
          // Strict validation on roomId format to prevent path-traversal or injection
          if (!roomId || typeof roomId !== 'string' || !UUID_REGEX.test(roomId)) {
            console.warn(`Blocked invalid roomId format: ${roomId} from IP ${clientIp}`);
            ws.send(JSON.stringify({ type: 'full' })); // Hide errors behind standard messages to avoid info leakage
            return;
          }

          currentRoomId = roomId;
          
          if (!rooms.has(roomId)) {
            // Enforce maximum concurrent active rooms (DoS mitigation)
            const MAX_ROOMS = 500;
            if (rooms.size >= MAX_ROOMS) {
              console.warn(`Room creation rejected: reached limit of ${MAX_ROOMS} rooms.`);
              ws.send(JSON.stringify({ type: 'full' }));
              return;
            }

            // Check rate limiting for this IP
            const attemptData = failedAttempts.get(clientIp) || { count: 0, lockUntil: 0 };
            if (attemptData.lockUntil > Date.now()) {
              console.log(`Blocked room creation from ${clientIp}: rate limited until ${new Date(attemptData.lockUntil)}`);
              ws.send(JSON.stringify({ type: 'unauthorized' }));
              return;
            }

            // Check passcode for Sender role
            const requiredKey = process.env.ACCESS_KEY;
            const { accessKey } = parsed;
            
            if (!requiredKey || !safeCompare(accessKey, requiredKey)) {
              console.log(`Room ${roomId} creation blocked: unauthorized or missing access key from IP ${clientIp}`);
              
              // Increment rate limit attempts
              attemptData.count += 1;
              if (attemptData.count >= 5) {
                attemptData.lockUntil = Date.now() + 5 * 60 * 1000; // 5 minute lock
                console.log(`IP ${clientIp} locked for 5 minutes due to consecutive failed passcode attempts`);
              }
              failedAttempts.set(clientIp, attemptData);

              ws.send(JSON.stringify({ type: 'unauthorized' }));
              return;
            }

            // Reset failed attempts on successful authentication
            failedAttempts.delete(clientIp);

            const iceServers = await getIceServers();
            // First peer joins: they are the host
            rooms.set(roomId, new Set([ws]));
            clientRole = parsed.hostRole || 'sender';
            ws.clientRole = clientRole;
            ws.autoApprove = !!parsed.autoApprove;
            ws.send(JSON.stringify({
              type: 'joined',
              role: clientRole,
              iceServers: iceServers
            }));
            console.log(`Room ${roomId} created by Host with role ${clientRole} from IP ${clientIp} (autoApprove: ${ws.autoApprove})`);
          } else {
            const clients = rooms.get(roomId);
            const hostWs = Array.from(clients)[0];
            
            if (clients.size >= 2 || (hostWs && hostWs.pendingGuest)) {
              // Room is full or already has a pending connection request
              ws.send(JSON.stringify({ type: 'full' }));
              console.log(`Room ${roomId} join rejected: full or pending request`);
              return;
            }

            if (hostWs && hostWs.autoApprove) {
              // Auto-approve: immediately connect peer
              const iceServers = await getIceServers();
              clientRole = hostWs.clientRole === 'sender' ? 'receiver' : 'sender';
              ws.clientRole = clientRole;
              
              // Add guest to active clients in room
              clients.add(ws);
              
              // Send joined to guest
              ws.send(JSON.stringify({
                type: 'joined',
                role: clientRole,
                iceServers: iceServers
              }));
              
              // Send peer-joined to host
              hostWs.send(JSON.stringify({
                type: 'peer-joined',
                iceServers: iceServers
              }));
              
              console.log(`Guest from ${clientIp} automatically approved and joined Room ${roomId} with role ${clientRole}`);
            } else {
              // Put the guest in pending state on the host socket
              hostWs.pendingGuest = ws;
              ws.pendingRoomId = roomId;

              // Notify host that guest is requesting approval
              hostWs.send(JSON.stringify({
                type: 'peer-request'
              }));
              console.log(`Guest from ${clientIp} requested to join Room ${roomId}. Waiting for Host approval...`);
            }
          }
          break;

        case 'set-auto-approve':
          if (rooms.has(roomId)) {
            const clients = rooms.get(roomId);
            const hostWs = Array.from(clients)[0];
            if (hostWs === ws) {
              hostWs.autoApprove = !!parsed.autoApprove;
              console.log(`Room ${roomId} autoApprove set to ${hostWs.autoApprove}`);
            }
          }
          break;

        case 'approve-peer': {
          if (!rooms.has(roomId)) return;
          const clients = rooms.get(roomId);
          const hostWs = Array.from(clients)[0];
          if (hostWs !== ws) {
            console.warn(`Unauthorized approve-peer from non-host client`);
            return;
          }
          const guestWs = hostWs.pendingGuest;
          if (guestWs && guestWs.readyState === WebSocket.OPEN) {
            const iceServers = await getIceServers();
            clientRole = hostWs.clientRole === 'sender' ? 'receiver' : 'sender';
            guestWs.clientRole = clientRole;
            
            // Add guest to active clients in room
            clients.add(guestWs);
            
            // Send joined to guest
            guestWs.send(JSON.stringify({
              type: 'joined',
              role: clientRole,
              iceServers: iceServers
            }));
            
            // Send peer-joined to host
            hostWs.send(JSON.stringify({
              type: 'peer-joined',
              iceServers: iceServers
            }));
            
            console.log(`Guest approved and joined Room ${roomId} with role ${clientRole}`);
          }
          hostWs.pendingGuest = null;
          break;
        }

        case 'reject-peer': {
          if (!rooms.has(roomId)) return;
          const clients = rooms.get(roomId);
          const hostWs = Array.from(clients)[0];
          if (hostWs !== ws) return;
          
          const guestWs = hostWs.pendingGuest;
          if (guestWs && guestWs.readyState === WebSocket.OPEN) {
            guestWs.send(JSON.stringify({ type: 'rejected' }));
          }
          hostWs.pendingGuest = null;
          console.log(`Guest join request rejected for Room ${roomId}`);
          break;
        }

        case 'signal':
          // Relay the signal (SDP or ICE Candidate) to the other peer in the room
          if (rooms.has(roomId)) {
            const clients = rooms.get(roomId);
            // Verify that the sending socket is actually a member of the room!
            if (!clients.has(ws)) {
              console.warn(`Blocked unauthorized signal from client not in room: ${roomId}`);
              return;
            }
            for (const client of clients) {
              if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({
                  type: 'signal',
                  data
                }));
              }
            }
          }
          break;

        case 'relay-msg':
          // Relay message (used for fallback communication when WebRTC UDP is blocked)
          if (rooms.has(roomId)) {
            const clients = rooms.get(roomId);
            if (!clients.has(ws)) {
              console.warn(`Blocked unauthorized relay-msg from client not in room: ${roomId}`);
              return;
            }
            for (const client of clients) {
              if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({
                  type: 'relay-msg',
                  data
                }));
              }
            }
          }
          break;

        default:
          console.warn('Unknown message type:', type);
      }
    } catch (err) {
      console.error('Error handling WebSocket message:', err);
    }
  });

  ws.on('close', () => {
    // 1. If this was a pending guest, clear the pending reference on the host
    if (ws.pendingRoomId && rooms.has(ws.pendingRoomId)) {
      const clients = rooms.get(ws.pendingRoomId);
      const hostWs = Array.from(clients)[0];
      if (hostWs && hostWs.pendingGuest === ws) {
        hostWs.pendingGuest = null;
        console.log(`Pending guest disconnected from Room ${ws.pendingRoomId}`);
      }
    }

    // 2. If this was the host and had a pending guest, notify and reject the pending guest
    if (ws.pendingGuest) {
      if (ws.pendingGuest.readyState === WebSocket.OPEN) {
        ws.pendingGuest.send(JSON.stringify({ type: 'rejected' }));
      }
      ws.pendingGuest = null;
    }

    // 3. Normal room cleanup
    if (currentRoomId && rooms.has(currentRoomId)) {
      const clients = rooms.get(currentRoomId);
      clients.delete(ws);
      console.log(`Client disconnected from Room ${currentRoomId}. Remaining clients: ${clients.size}`);

      if (clients.size === 0) {
        rooms.delete(currentRoomId);
        console.log(`Room ${currentRoomId} deleted`);
      } else {
        // Notify the remaining client
        for (const client of clients) {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ type: 'peer-left' }));
          }
        }
      }
    }
  });
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Signaling server running on port ${port}`);
});
