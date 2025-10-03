const socket = io(window.location.origin); // connects to same host
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const status = document.getElementById('status');
const predEl = document.getElementById('prediction');

async function startWebcam() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    video.srcObject = stream;
    await video.play();
    status.textContent = "Webcam started";
    startSendingFrames();
  } catch (err) {
    status.textContent = "Webcam error: " + err.message;
  }
}

function startSendingFrames() {
  // Send ~5 FPS
  setInterval(() => {
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.6);
      socket.emit('frame', dataUrl);
    }
  }, 200);
}

socket.on('connect', () => {
  status.textContent = 'Connected to server';
});

socket.on('prediction', (data) => {
  if (data.error) {
    predEl.innerText = 'Error: ' + data.error;
    return;
  }
  const pct = (data.confidence * 100).toFixed(1);
  predEl.innerText = `${data.label} — ${pct}%`;
  // Example: if you want to trigger a client-side action:
  if (data.label === 'ThumbsUp' && data.confidence > 0.85) {
    // dispatch custom DOM event or call local function
    // window.alert('ThumbsUp detected (client action)');
  }
});

// optional manual test button:
document.getElementById('testAction').addEventListener('click', () => {
  // manually emit test event if you want the server to respond
  socket.emit('frame', canvas.toDataURL('image/jpeg', 0.6));
});

startWebcam();
