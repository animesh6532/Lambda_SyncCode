import { motion } from "framer-motion";

export default function TypingIndicator({ user }) {
  if (!user) return null;

  return (
    <div className="text-xs text-gray-500 flex items-center gap-2 mt-2">
      <span>{user} is typing</span>

      <div className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
            className="w-1.5 h-1.5 bg-gray-500 rounded-full"
          />
        ))}
      </div>
    </div>
  );
}