import { motion } from "framer-motion";

export default function Toast({ message, type = "success" }) {
  const styles = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`${styles[type]} text-white px-4 py-2 rounded-lg shadow-lg fixed bottom-6 right-6`}
    >
      {message}
    </motion.div>
  );
}