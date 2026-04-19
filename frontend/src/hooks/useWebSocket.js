import { useEffect } from "react";
import { connectWebSocket, sendMessage } from "../services/websocket";

export default function useWebSocket(url, onMessage) {
  useEffect(() => {
    const socket = connectWebSocket(url, onMessage);

    return () => socket.close();
  }, [url]);

  return { sendMessage };
}