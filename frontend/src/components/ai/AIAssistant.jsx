import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send } from "lucide-react";
import ChatBubble from "./ChatBubble";
import SuggestedQuestions from "./SuggestedQuestions";

const responses = {
  "what is this app?":
    "LambdaSyncCode is a real-time collaborative coding platform built with serverless architecture. You can run Python, JS, Java, and C++ code natively.",
  "how to run code?":
    "Click the 'Run Code' button on the top right or simply press the play button. Your code is executed in a secure serverless sandbox.",
  "how to join room?":
    "Use the Room Modal accessed by 'Log In' on the landing page, or share your URL to invite others.",
};

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hi 👋 Ask me about LambdaSyncCode!" },
  ]);

  const handleSend = (text) => {
    if (!text.trim()) return;
    const lower = text.trim().toLowerCase();
    
    // Simple matching
    let response = "I'm designed to specifically help with LambdaSyncCode features. How can I assist you?";
    Object.keys(responses).forEach(key => {
      if (lower.includes(key.replace("?", ""))) {
        response = responses[key];
      }
    });

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: text.trim() },
      { sender: "ai", text: response },
    ]);
    setInputText("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 p-4 rounded-full shadow-glow-blue bg-blue-600 text-white hover:bg-blue-700 hover:scale-110 transition-all z-50 flex items-center justify-center"
      >
        {open ? <X size={24} /> : <Bot size={24} />}
      </button>

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-96 h-[500px] glass-panel bg-white/95 dark:bg-dark-surface/95 dark:border-dark-border flex flex-col shadow-2xl z-40 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-100 dark:border-dark-border flex items-center justify-between bg-blue-600 dark:bg-blue-600/20 text-white dark:text-blue-400">
              <div className="flex items-center gap-2 font-semibold">
                <Bot size={20} /> AI Copilot
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
              {messages.map((msg, i) => (
                <ChatBubble key={i} {...msg} />
              ))}
            </div>

            {/* Suggested Questions */}
            <SuggestedQuestions onSelect={handleSend} />

            {/* Input Area */}
            <div className="p-3 border-t border-gray-100 dark:border-dark-border bg-gray-50 dark:bg-[#121c2d] flex items-center gap-2">
              <input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask about features..."
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSend(inputText);
                  }
                }}
                className="flex-1 px-3 py-2 bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-900 dark:text-white placeholder-gray-400"
              />
              <button 
                onClick={() => handleSend(inputText)}
                className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}