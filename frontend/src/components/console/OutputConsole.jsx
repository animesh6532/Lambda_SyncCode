import { TerminalSquare, Trash2 } from "lucide-react";

export default function OutputConsole({ logs = [], onClear }) {
  return (
    <div className="h-full w-full flex flex-col bg-gray-900 dark:bg-[#0f172a] text-gray-100 font-mono">
      
      {/* Header */}
      <div className="px-4 py-2 bg-gray-800 dark:bg-[#162032] border-b border-gray-700 dark:border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-semibold text-gray-300">
          <TerminalSquare size={14} />
          Terminal
        </div>
        {logs.length > 0 && (
          <button 
            onClick={onClear}
            className="text-gray-400 hover:text-white transition-colors"
            title="Clear Console"
          >
            <Trash2 size={14} />
          </button>
        )}
      </div>

      {/* Logs */}
      <div className="flex-1 overflow-y-auto p-4 text-sm space-y-1">
        {logs.length === 0 ? (
          <p className="text-gray-500 italic text-xs">Waiting for execution...</p>
        ) : (
          logs.map((log, index) => (
            <div key={index} className="flex gap-3">
              <span className="text-gray-500 whitespace-nowrap">
                [{new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute:'2-digit', second:'2-digit' })}]
              </span>
              <span className={`break-words ${
                log.type === 'error' ? 'text-red-400' : 
                log.type === 'success' ? 'text-green-400' : 
                log.type === 'info' ? 'text-blue-400' : 'text-gray-200'
              }`}>
                {log.type === 'output' ? '> ' : ''}{log.message}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}