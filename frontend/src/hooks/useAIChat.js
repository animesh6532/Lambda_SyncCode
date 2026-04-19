import { useState } from "react";
import { getAIResponse } from "../services/aiService";

export default function useAIChat() {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hi 👋 Ask me about this app!" },
  ]);

  const sendMessage = (text) => {
    const response = getAIResponse(text);

    setMessages((prev) => [
      ...prev,
      { sender: "user", text },
      { sender: "ai", text: response },
    ]);
  };

  return { messages, sendMessage };
}