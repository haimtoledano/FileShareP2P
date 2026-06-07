// Helper to generate cryptographically secure UUID v4
function generateUUID() {
  if (typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  // Fallback for non-secure/older browser contexts
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// Initialize Lucide Icons
lucide.createIcons();

// Elements
const statusBadge = document.getElementById('connection-status');
const statusText = document.getElementById('status-text');

// Welcome Section
const sectionWelcome = document.getElementById('step-welcome');
const btnModeSend = document.getElementById('btn-mode-send');
const btnModeReceive = document.getElementById('btn-mode-receive');
const senderAuthContainer = document.getElementById('sender-auth-container');
const senderAuthInput = document.getElementById('sender-auth-input');
const btnSubmitAuth = document.getElementById('btn-submit-auth');
const btnBackAuth = document.getElementById('btn-back-auth');
const joinCodeContainer = document.getElementById('join-code-container');
const joinCodeInput = document.getElementById('join-code-input');
const btnSubmitCode = document.getElementById('btn-submit-code');
const btnBackWelcome = document.getElementById('btn-back-welcome');

// Sender Select Section
const sectionSenderSelect = document.getElementById('step-sender-select');
const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const selectedFileCard = document.getElementById('selected-file-card');
const selectedFileName = document.getElementById('selected-file-name');
const selectedFileSize = document.getElementById('selected-file-size');
const btnRemoveFile = document.getElementById('btn-remove-file');
const shareInfoCard = document.getElementById('share-info-card');
const shareCodeDisplay = document.getElementById('share-code-display');
const shareLinkInput = document.getElementById('share-link-input');
const btnCopyLink = document.getElementById('btn-copy-link');
const btnCancelSender = document.getElementById('btn-cancel-sender');

// Receiver Waiting Section
const sectionReceiverWaiting = document.getElementById('step-receiver-waiting');
const btnCancelReceiver = document.getElementById('btn-cancel-receiver');

// Transfer Progress Section
const sectionTransfer = document.getElementById('step-transfer');
const transferTitle = document.getElementById('transfer-title');
const transferDirection = document.getElementById('transfer-direction');
const transferFileName = document.getElementById('transfer-file-name');
const transferFileSize = document.getElementById('transfer-file-size');
const progressFill = document.getElementById('progress-fill');
const progressPct = document.getElementById('progress-pct');
const progressSpeed = document.getElementById('progress-speed');
const transferBytes = document.getElementById('transfer-bytes');
const transferEta = document.getElementById('transfer-eta');
const btnAbortTransfer = document.getElementById('btn-abort-transfer');

// Complete Section
const sectionComplete = document.getElementById('step-complete');
const completeTitle = document.getElementById('complete-title');
const completeDesc = document.getElementById('complete-desc');
const completeFileName = document.getElementById('complete-file-name');
const completeFileSize = document.getElementById('complete-file-size');
const btnDownloadFile = document.getElementById('btn-download-file');
const btnReset = document.getElementById('btn-reset');

// Constants
const CHUNK_SIZE = 16384; // 16 KB chunks for WebRTC Data Channel
const BUFFERED_AMOUNT_LOW_THRESHOLD = 65536; // 64 KB threshold for backpressure

// State variables
let role = null; // 'sender' or 'receiver'
let roomId = null;
let ws = null;
let peerConnection = null;
let dataChannel = null;
let selectedFile = null;

// Transfer state
let receivedChunks = [];
let receivedSize = 0;
let expectedFileInfo = null;
let transferStartTime = null;
let speedCalcInterval = null;
let lastTransferredBytes = 0;
let lastSpeedCalcTime = null;

// Init
window.addEventListener('DOMContentLoaded', () => {
  // Check if Hash is present (i.e. joined via direct link)
  const hash = window.location.hash.substring(1);
  if (hash && /^[a-f0-9-]{8,40}$/i.test(hash)) {
    roomId = hash;
    joinRoom(roomId);
  }
});

// Navigation Helpers
function showSection(section) {
  [sectionWelcome, sectionSenderSelect, sectionReceiverWaiting, sectionTransfer, sectionComplete].forEach(s => {
    s.classList.remove('active');
  });
  section.classList.add('active');
  lucide.createIcons();
}

function updateStatus(state, text) {
  statusBadge.className = `status-badge ${state}`;
  statusText.textContent = text;
}

// Format size
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Reset client state
function resetState() {
  cleanupConnections();
  role = null;
  roomId = null;
  selectedFile = null;
  receivedChunks = [];
  receivedSize = 0;
  expectedFileInfo = null;
  
  // Reset UI elements
  fileInput.value = '';
  selectedFileCard.classList.add('hidden');
  shareInfoCard.classList.add('hidden');
  dropZone.style.display = 'flex';
  joinCodeInput.value = '';
  window.location.hash = '';
  
  updateStatus('disconnected', 'לא מחובר');
  showSection(sectionWelcome);
}

// Cleanup WebRTC and WebSocket connections
function cleanupConnections() {
  clearInterval(speedCalcInterval);
  if (dataChannel) {
    dataChannel.close();
    dataChannel = null;
  }
  if (peerConnection) {
    peerConnection.close();
    peerConnection = null;
  }
  if (ws) {
    ws.close();
    ws = null;
  }
}

// WebSocket connection
function connectSignaling(onConnectCallback) {
  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  const wsUrl = `${protocol}//${window.location.host}`;
  
  updateStatus('connecting', 'מתחבר לשרת התיווך...');
  ws = new WebSocket(wsUrl);

  ws.onopen = () => {
    console.log('Connected to signaling server');
    if (onConnectCallback) onConnectCallback();
  };

  ws.onmessage = (event) => {
    try {
      const message = JSON.parse(event.data);
      handleSignalingMessage(message);
    } catch (err) {
      console.error('Signaling parse error:', err);
    }
  };

  ws.onclose = () => {
    console.log('Signaling server connection closed');
    if (role && (sectionTransfer.classList.contains('active') || sectionReceiverWaiting.classList.contains('active'))) {
      // If we are in the middle of waiting or transferring, notify user
      alert('החיבור לשרת התיווך נותק.');
      resetState();
    }
  };

  ws.onerror = (err) => {
    console.error('Signaling error:', err);
    updateStatus('disconnected', 'שגיאת חיבור לשרת');
  };
}

// Join room as receiver
function joinRoom(code) {
  roomId = code;
  role = 'receiver';
  
  showSection(sectionReceiverWaiting);
  connectSignaling(() => {
    ws.send(JSON.stringify({
      type: 'join',
      roomId: roomId
    }));
  });
}

// Send Mode: Generate code and connect
function initSenderMode() {
  role = 'sender';
  roomId = generateUUID(); // Generate unguessable UUID v4
  
  showSection(sectionSenderSelect);
  connectSignaling(() => {
    const accessKey = localStorage.getItem('sender_access_key') || '';
    ws.send(JSON.stringify({
      type: 'join',
      roomId: roomId,
      accessKey: accessKey
    }));
  });
}

// Handle signaling messages
function handleSignalingMessage(message) {
  const { type, role: assignedRole, iceServers, data } = message;

  switch (type) {
    case 'joined':
      updateStatus('connecting', 'ממתין לצד השני...');
      if (assignedRole === 'sender') {
        shareCodeDisplay.textContent = roomId;
        shareLinkInput.value = `${window.location.origin}/#${roomId}`;
        shareInfoCard.classList.remove('hidden');
      } else {
        console.log('Receiver joined room. Initializing WebRTC...');
        initiateWebRTC(iceServers);
      }
      break;

    case 'peer-joined':
      updateStatus('connected', 'מחובר למשתמש השני');
      console.log('Receiver connected. Initializing WebRTC...');
      initiateWebRTC(iceServers);
      break;

    case 'signal':
      handleWebRTCSignal(data);
      break;

    case 'full':
      alert('החדר מלא או לא זמין.');
      resetState();
      break;

    case 'unauthorized':
      alert('קוד גישה לשולח שגוי או פג תוקף.');
      localStorage.removeItem('sender_access_key');
      resetState();
      break;

    case 'peer-left':
      console.log('Peer disconnected');
      if (sectionTransfer.classList.contains('active')) {
        alert('הצד השני התנתק. ההעברה בוטלה.');
      }
      resetState();
      break;
  }
}

// WebRTC Signaling Handler
function handleWebRTCSignal(data) {
  if (data.sdp) {
    console.log('Received remote SDP:', data.sdp.type);
    peerConnection.setRemoteDescription(new RTCSessionDescription(data.sdp))
      .then(() => {
        if (data.sdp.type === 'offer') {
          peerConnection.createAnswer()
            .then(answer => peerConnection.setLocalDescription(answer))
            .then(() => {
              ws.send(JSON.stringify({
                type: 'signal',
                roomId: roomId,
                data: { sdp: peerConnection.localDescription }
              }));
            });
        }
      })
      .catch(err => console.error('Error handling SDP:', err));
  } else if (data.candidate) {
    console.log('Received remote ICE Candidate');
    peerConnection.addIceCandidate(new RTCIceCandidate(data.candidate))
      .catch(err => console.error('Error adding ICE Candidate:', err));
  }
}

// Initialize WebRTC connection
function initiateWebRTC(iceServers) {
  const configuration = {
    iceServers: iceServers
  };

  peerConnection = new RTCPeerConnection(configuration);

  peerConnection.onicecandidate = (event) => {
    if (event.candidate) {
      ws.send(JSON.stringify({
        type: 'signal',
        roomId: roomId,
        data: { candidate: event.candidate }
      }));
    }
  };

  peerConnection.onconnectionstatechange = () => {
    console.log('WebRTC Connection State:', peerConnection.connectionState);
    if (peerConnection.connectionState === 'connected') {
      updateStatus('connected', 'חיבור ישיר (P2P) פעיל');
    } else if (peerConnection.connectionState === 'disconnected' || peerConnection.connectionState === 'failed') {
      updateStatus('disconnected', 'החיבור הישיר נכשל');
      if (sectionTransfer.classList.contains('active')) {
        alert('חיבור ה-P2P נותק.');
        resetState();
      }
    }
  };

  if (role === 'sender') {
    // Sender creates the data channel
    dataChannel = peerConnection.createDataChannel('fileTransfer', {
      ordered: true
    });
    setupDataChannel(dataChannel);

    peerConnection.createOffer()
      .then(offer => peerConnection.setLocalDescription(offer))
      .then(() => {
        ws.send(JSON.stringify({
          type: 'signal',
          roomId: roomId,
          data: { sdp: peerConnection.localDescription }
        }));
      })
      .catch(err => console.error('Error creating offer:', err));
  } else {
    // Receiver listens to incoming data channel
    peerConnection.ondatachannel = (event) => {
      dataChannel = event.channel;
      setupDataChannel(dataChannel);
    };
  }
}

// Setup Data Channel event listeners
function setupDataChannel(channel) {
  channel.binaryType = 'arraybuffer';
  channel.bufferedAmountLowThreshold = BUFFERED_AMOUNT_LOW_THRESHOLD;

  channel.onopen = () => {
    console.log('Data channel is open!');
    if (role === 'sender' && selectedFile) {
      startSendingFile();
    }
  };

  channel.onclose = () => {
    console.log('Data channel closed');
  };

  channel.onerror = (err) => {
    console.error('Data channel error:', err);
  };

  channel.onmessage = (event) => {
    if (typeof event.data === 'string') {
      // Handle control messages (JSON)
      try {
        const message = JSON.parse(event.data);
        if (message.type === 'metadata') {
          expectedFileInfo = message;
          receivedChunks = [];
          receivedSize = 0;
          
          // Show transfer progress screen
          showSection(sectionTransfer);
          transferTitle.textContent = 'מקבל קובץ...';
          transferDirection.textContent = 'הורדה';
          transferDirection.style.background = 'linear-gradient(135deg, var(--color-cyan), hsl(190, 95%, 45%))';
          transferFileName.textContent = expectedFileInfo.name;
          transferFileSize.textContent = formatBytes(expectedFileInfo.size);
          
          startTransferStats(expectedFileInfo.size);
        } else if (message.type === 'abort') {
          alert('הצד השני ביטל את ההעברה.');
          resetState();
        }
      } catch (err) {
        console.error('Error parsing channel message:', err);
      }
    } else {
      // Handle binary chunks
      receivedChunks.push(event.data);
      receivedSize += event.data.byteLength;
      
      updateTransferProgress(receivedSize, expectedFileInfo.size);
      
      if (receivedSize >= expectedFileInfo.size) {
        completeTransferReceiver();
      }
    }
  };
}

// SENDER: Start File Transmission
function startSendingFile() {
  if (!selectedFile) return;

  // Send metadata
  dataChannel.send(JSON.stringify({
    type: 'metadata',
    name: selectedFile.name,
    size: selectedFile.size,
    fileType: selectedFile.type
  }));

  showSection(sectionTransfer);
  transferTitle.textContent = 'שולח קובץ...';
  transferDirection.textContent = 'העלאה';
  transferDirection.style.background = 'linear-gradient(135deg, var(--color-purple), hsl(263, 85%, 55%))';
  transferFileName.textContent = selectedFile.name;
  transferFileSize.textContent = formatBytes(selectedFile.size);

  startTransferStats(selectedFile.size);

  let offset = 0;
  const fileReader = new FileReader();

  const sendNextChunk = () => {
    while (offset < selectedFile.size) {
      if (dataChannel.bufferedAmount > dataChannel.bufferedAmountLowThreshold) {
        // Wait for buffer to clear before sending more
        return;
      }
      
      const slice = selectedFile.slice(offset, offset + CHUNK_SIZE);
      fileReader.readAsArrayBuffer(slice);
      return; // Wait for onload event to proceed
    }

    if (offset >= selectedFile.size) {
      console.log('File transmission complete!');
      completeTransferSender();
    }
  };

  fileReader.onload = (event) => {
    const buffer = event.target.result;
    dataChannel.send(buffer);
    offset += buffer.byteLength;
    
    updateTransferProgress(offset, selectedFile.size);
    sendNextChunk();
  };

  dataChannel.onbufferedamountlow = () => {
    sendNextChunk();
  };

  // Start sending
  sendNextChunk();
}

// Transfer Statistics tracking
function startTransferStats(totalSize) {
  transferStartTime = Date.now();
  lastTransferredBytes = 0;
  lastSpeedCalcTime = Date.now();
  
  clearInterval(speedCalcInterval);
  speedCalcInterval = setInterval(() => {
    const now = Date.now();
    const timeDelta = (now - lastSpeedCalcTime) / 1000; // seconds
    const currentBytes = (role === 'sender') ? (selectedFile ? selectedFile.size * (parseFloat(progressPct.textContent) / 100) : 0) : receivedSize;
    const byteDelta = currentBytes - lastTransferredBytes;
    
    if (timeDelta > 0) {
      const speedBytesPerSec = byteDelta / timeDelta;
      progressSpeed.textContent = `${formatBytes(speedBytesPerSec)} לשנייה`;
      
      // Calculate ETA
      const remainingBytes = totalSize - currentBytes;
      if (speedBytesPerSec > 0) {
        const etaSeconds = Math.ceil(remainingBytes / speedBytesPerSec);
        if (etaSeconds > 60) {
          const minutes = Math.floor(etaSeconds / 60);
          const seconds = etaSeconds % 60;
          transferEta.textContent = `כ-${minutes} דקות ו-${seconds} שניות`;
        } else {
          transferEta.textContent = `כ-${etaSeconds} שניות`;
        }
      } else {
        transferEta.textContent = 'מחשב...';
      }
    }
    
    lastTransferredBytes = currentBytes;
    lastSpeedCalcTime = now;
  }, 1000);
}

// Update UI progress bar and fields
function updateTransferProgress(current, total) {
  const pct = Math.min(Math.round((current / total) * 100), 100);
  progressFill.style.width = `${pct}%`;
  progressPct.textContent = `${pct}%`;
  
  transferBytes.textContent = `${formatBytes(current)} מתוך ${formatBytes(total)}`;
}

// Sender completion
function completeTransferSender() {
  clearInterval(speedCalcInterval);
  setTimeout(() => {
    completeTitle.textContent = 'הקובץ נשלח בהצלחה!';
    completeDesc.textContent = `הקובץ ${selectedFile.name} הועבר ישירות ובצורה מאובטחת.`;
    completeFileName.textContent = selectedFile.name;
    completeFileSize.textContent = formatBytes(selectedFile.size);
    btnDownloadFile.classList.add('hidden');
    
    showSection(sectionComplete);
  }, 500);
}

// Receiver completion
function completeTransferReceiver() {
  clearInterval(speedCalcInterval);
  setTimeout(() => {
    const fileBlob = new Blob(receivedChunks);
    const downloadUrl = URL.createObjectURL(fileBlob);
    
    completeTitle.textContent = 'הקובץ התקבל בהצלחה!';
    completeDesc.textContent = `הקובץ ${expectedFileInfo.name} מוכן להורדה.`;
    completeFileName.textContent = expectedFileInfo.name;
    completeFileSize.textContent = formatBytes(expectedFileInfo.size);
    
    // Configure download button
    btnDownloadFile.href = downloadUrl;
    btnDownloadFile.download = expectedFileInfo.name;
    btnDownloadFile.classList.remove('hidden');
    
    // Automatically trigger download
    btnDownloadFile.click();
    
    showSection(sectionComplete);
  }, 500);
}

// Event Listeners for UI
btnModeSend.addEventListener('click', () => {
  const savedKey = localStorage.getItem('sender_access_key');
  if (savedKey) {
    initSenderMode();
  } else {
    senderAuthContainer.classList.remove('hidden');
    joinCodeContainer.classList.add('hidden'); // Ensure receiver input is closed
    btnModeSend.parentElement.style.opacity = '0.3';
  }
});

btnSubmitAuth.addEventListener('click', () => {
  const key = senderAuthInput.value.trim();
  if (key) {
    localStorage.setItem('sender_access_key', key);
    senderAuthContainer.classList.add('hidden');
    btnModeSend.parentElement.style.opacity = '1';
    senderAuthInput.value = '';
    initSenderMode();
  } else {
    alert('אנא הזן קוד גישה מורשה');
  }
});

senderAuthInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    btnSubmitAuth.click();
  }
});

btnBackAuth.addEventListener('click', () => {
  senderAuthContainer.classList.add('hidden');
  btnModeSend.parentElement.style.opacity = '1';
  senderAuthInput.value = '';
});

btnModeReceive.addEventListener('click', () => {
  joinCodeContainer.classList.remove('hidden');
  senderAuthContainer.classList.add('hidden'); // Ensure sender input is closed
  btnModeSend.parentElement.style.opacity = '0.3';
  btnModeReceive.classList.add('active'); // CSS style hook if needed
});

btnBackWelcome.addEventListener('click', () => {
  joinCodeContainer.classList.add('hidden');
  btnModeSend.parentElement.style.opacity = '1';
  joinCodeInput.value = '';
});

btnSubmitCode.addEventListener('click', () => {
  const code = joinCodeInput.value.trim();
  if (code.length >= 8 && /^[a-f0-9-]{8,40}$/i.test(code)) {
    joinRoom(code);
  } else {
    alert('אנא הזן מזהה שיתוף תקין (מינימום 8 תווים)');
  }
});

joinCodeInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    btnSubmitCode.click();
  }
});

// Drag and Drop Logic
dropZone.addEventListener('click', () => {
  fileInput.click();
});

fileInput.addEventListener('change', (e) => {
  if (e.target.files.length > 0) {
    handleFileSelection(e.target.files[0]);
  }
});

dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', () => {
  dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropZone.classList.remove('dragover');
  if (e.dataTransfer.files.length > 0) {
    handleFileSelection(e.dataTransfer.files[0]);
  }
});

function handleFileSelection(file) {
  selectedFile = file;
  selectedFileName.textContent = file.name;
  selectedFileSize.textContent = formatBytes(file.size);
  
  selectedFileCard.classList.remove('hidden');
  dropZone.style.display = 'none'; // Hide drop target visual
}

btnRemoveFile.addEventListener('click', (e) => {
  e.stopPropagation(); // Avoid triggering file selection click
  selectedFile = null;
  fileInput.value = '';
  selectedFileCard.classList.add('hidden');
  dropZone.style.display = 'flex';
});

// Copy link button
btnCopyLink.addEventListener('click', () => {
  shareLinkInput.select();
  shareLinkInput.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(shareLinkInput.value)
    .then(() => {
      // Dynamic button state update
      const icon = document.getElementById('copy-icon');
      icon.setAttribute('data-lucide', 'check');
      lucide.createIcons();
      btnCopyLink.style.color = 'var(--color-success)';
      setTimeout(() => {
        icon.setAttribute('data-lucide', 'copy');
        lucide.createIcons();
        btnCopyLink.style.color = '';
      }, 2000);
    })
    .catch(err => {
      console.error('Failed to copy link: ', err);
    });
});

// Abort/Cancel actions
btnCancelSender.addEventListener('click', () => {
  resetState();
});

btnCancelReceiver.addEventListener('click', () => {
  resetState();
});

btnAbortTransfer.addEventListener('click', () => {
  if (dataChannel && dataChannel.readyState === 'open') {
    dataChannel.send(JSON.stringify({ type: 'abort' }));
  }
  resetState();
});

btnReset.addEventListener('click', () => {
  resetState();
});
