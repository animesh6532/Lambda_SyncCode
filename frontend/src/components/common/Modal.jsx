import { motion } from "framer-motion";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl shadow-xl p-6 w-[400px]"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500"
        >
          ✕
        </button>
        {children}
      </motion.div>
    </div>
  );
}