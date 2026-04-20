let socket = null;

export const connectWebSocket = (url, onMessage) => {
  // ✅ Prevent multiple connections
  if (socket && socket.readyState === WebSocket.OPEN) {
    console.log("⚠️ WebSocket already connected");
    return socket;
  }

  console.log("🔗 Connecting to:", url);

  socket = new WebSocket(url);

  socket.onopen = () => {
    console.log("✅ Connected to WebSocket");
  };

  socket.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data);
      console.log("📩 Received:", data);
      onMessage(data);
    } catch (e) {
      console.log("⚠️ Message parse error:", e);
    }
  };

  socket.onclose = () => {
    console.log("❌ WebSocket disconnected");
  };

  socket.onerror = (error) => {
    console.log("❌ WebSocket error:", error);
  };

  return socket;
};

export const sendMessage = (message) => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    console.log("📤 Sending:", message);
    socket.send(JSON.stringify(message));
  } else {
    console.log("❌ WebSocket not connected");
  }
};