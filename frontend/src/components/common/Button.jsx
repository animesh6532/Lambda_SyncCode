import { motion } from "framer-motion";

export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
}) {
  const base =
    "px-4 py-2 rounded-xl font-medium transition-all duration-200";

  const variants = {
    primary:
      "bg-blue-500 text-white shadow-md hover:bg-blue-600 hover:shadow-lg",
    secondary:
      "bg-gray-100 text-gray-800 hover:bg-gray-200",
    danger:
      "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.03 }}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}