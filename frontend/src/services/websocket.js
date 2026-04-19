let socket = null;

export const connectWebSocket = (url, onMessage) => {
  socket = new WebSocket(url);

  socket.onopen = () => {
    console.log("✅ Connected to WebSocket");
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    onMessage(data);
  };

  socket.onclose = () => {
    console.log("❌ WebSocket disconnected");
  };

  return socket;
};

export const sendMessage = (message) => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(message));
  }
};