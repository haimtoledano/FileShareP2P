const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');
const helmet = require('helmet');
const crypto = require('crypto');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Configure HTTP security headers with customized Content Security Policy (CSP) for WebRTC and resources
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      "default-src": ["'self'"],
      "connect-src": ["'self'", "ws:", "wss:", "https://*.metered.live", "https://*.metered.ca"],
      "script-src": ["'self'", "https://unpkg.com"],
      "style-src": ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      "font-src": ["'self'", "https://fonts.gstatic.com", "data:"],
    },
  },
}));

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
  if (process.env.STUN_SERVERS) {
    process.env.STUN_SERVERS.split(',').forEach(url => {
      iceServers.push({ urls: url.trim() });
    });
  } else {
    // Default fallback Google STUN servers
    iceServers.push({ urls: 'stun:stun.l.google.com:19302' });
    iceServers.push({ urls: 'stun:stun1.l.google.com:19302' });
    iceServers.push({ urls: 'stun:stun2.l.google.com:19302' });
    iceServers.push({ urls: 'stun:stun3.l.google.com:19302' });
  }

  // TURN Server configuration
  if (process.env.TURN_SERVER_URL) {
    const turnServer = {
      urls: process.env.TURN_SERVER_URL
    };
    if (process.env.TURN_SERVER_USERNAME) {
      turnServer.username = process.env.TURN_SERVER_USERNAME;
    }
    if (process.env.TURN_SERVER_CREDENTIAL) {
      turnServer.credential = process.env.TURN_SERVER_CREDENTIAL;
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
            ws.send(JSON.stringify({
              type: 'joined',
              role: clientRole,
              iceServers: iceServers
            }));
            console.log(`Room ${roomId} created by Host with role ${clientRole} from IP ${clientIp}`);
          } else {
            const iceServers = await getIceServers();
            const clients = rooms.get(roomId);
            if (clients.size >= 2) {
              // Room is full
              ws.send(JSON.stringify({ type: 'full' }));
              console.log(`Room ${roomId} join rejected: full`);
              return;
            }

            // Second peer joins: they get the opposite role of the host
            const hostWs = Array.from(clients)[0];
            clientRole = hostWs.clientRole === 'sender' ? 'receiver' : 'sender';
            ws.clientRole = clientRole;
            clients.add(ws);
            ws.send(JSON.stringify({
              type: 'joined',
              role: clientRole,
              iceServers: iceServers
            }));

            // Notify the host that receiver/sender has joined
            for (const client of clients) {
              if (client !== ws) {
                client.send(JSON.stringify({
                  type: 'peer-joined',
                  iceServers: iceServers
                }));
              }
            }
            console.log(`Guest joined Room ${roomId} with role ${clientRole} from IP ${clientIp}`);
          }
          break;

        case 'signal':
          // Relay the signal (SDP or ICE Candidate) to the other peer in the room
          if (rooms.has(roomId)) {
            const clients = rooms.get(roomId);
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

        default:
          console.warn('Unknown message type:', type);
      }
    } catch (err) {
      console.error('Error handling WebSocket message:', err);
    }
  });

  ws.on('close', () => {
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
