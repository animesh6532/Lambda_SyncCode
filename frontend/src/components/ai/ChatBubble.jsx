export default function ChatBubble({ sender, text }) {
  const isUser = sender === "user";

  return (
    <div
      className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
        isUser
          ? "bg-blue-600 text-white rounded-br-sm self-end"
          : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-bl-sm self-start border border-gray-200 dark:border-dark-border"
      }`}
    >
      {text}
    </div>
  );
}