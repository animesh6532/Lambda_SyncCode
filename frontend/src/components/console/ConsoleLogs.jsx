export default function ConsoleLogs({ logs }) {
  return (
    <div className="flex flex-col gap-1">
      {logs.map((log, index) => (
        <div
          key={index}
          className={`px-2 py-1 rounded ${
            log.type === "error"
              ? "bg-red-500/20 text-red-400"
              : "bg-gray-800 text-gray-200"
          }`}
        >
          <span className="text-xs text-gray-500 mr-2">
            [{new Date().toLocaleTimeString()}]
          </span>
          {log.message}
        </div>
      ))}
    </div>
  );
}