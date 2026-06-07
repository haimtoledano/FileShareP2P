const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

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

wss.on('connection', (ws) => {
  let currentRoomId = null;
  let clientRole = null; // 'sender' or 'receiver'

  ws.on('message', async (message) => {
    try {
      const parsed = JSON.parse(message);
      const { type, roomId, data } = parsed;

      switch (type) {
        case 'join':
          currentRoomId = roomId;
          
          if (!rooms.has(roomId)) {
            // Check passcode for Sender role
            const requiredKey = process.env.ACCESS_KEY;
            const { accessKey } = parsed;
            if (!requiredKey || accessKey !== requiredKey) {
              console.log(`Room ${roomId} creation blocked: unauthorized or missing access key`);
              ws.send(JSON.stringify({ type: 'unauthorized' }));
              return;
            }

            const iceServers = await getIceServers();
            // First peer joins: they are the sender/host
            rooms.set(roomId, new Set([ws]));
            clientRole = 'sender';
            ws.send(JSON.stringify({
              type: 'joined',
              role: 'sender',
              iceServers: iceServers
            }));
            console.log(`Room ${roomId} created by Sender`);
          } else {
            const iceServers = await getIceServers();
            const clients = rooms.get(roomId);
            if (clients.size >= 2) {
              // Room is full
              ws.send(JSON.stringify({ type: 'full' }));
              console.log(`Room ${roomId} join rejected: full`);
              return;
            }

            // Second peer joins: they are the receiver
            clients.add(ws);
            clientRole = 'receiver';
            ws.send(JSON.stringify({
              type: 'joined',
              role: 'receiver',
              iceServers: iceServers
            }));

            // Notify the sender that receiver has joined
            for (const client of clients) {
              if (client !== ws) {
                client.send(JSON.stringify({
                  type: 'peer-joined',
                  iceServers: iceServers
                }));
              }
            }
            console.log(`Receiver joined Room ${roomId}`);
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
