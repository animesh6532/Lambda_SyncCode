import { Play, Code2, Moon, Sun, Loader2, CheckCircle2 } from "lucide-react";
import { useThemeStore } from "../../store/themeStore";

export default function Navbar({ roomId, onRun, isRunning }) {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <header className="h-16 w-full bg-white dark:bg-dark-surface border-b border-gray-200 dark:border-dark-border flex items-center justify-between px-6 z-10">
      
      {/* Left: Branding & Room info */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white">
          <div className="p-1.5 bg-blue-600 dark:bg-neon-blue rounded-lg">
            <Code2 size={20} className="text-white" />
          </div>
          LambdaSync<span className="text-blue-600 dark:text-neon-blue">Code</span>
        </div>
        
        <div className="h-6 w-px bg-gray-200 dark:bg-dark-border" />
        
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Workspace</span>
          <span className="px-2.5 py-1 text-xs font-mono font-semibold bg-gray-100 dark:bg-[#162032] text-gray-700 dark:text-gray-300 rounded border border-gray-200 dark:border-dark-border">
            {roomId}
          </span>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 text-green-600 dark:text-green-400 text-sm font-medium mr-2">
          <CheckCircle2 size={16} />
          <span className="hidden sm:inline">Connected</span>
        </div>

        <button 
          onClick={toggleTheme}
          className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-[#1e293b]"
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button
          onClick={onRun}
          disabled={isRunning}
          className={`flex items-center gap-2 px-6 py-2 rounded-lg font-medium text-white transition-all transform active:scale-95 shadow-lg ${
            isRunning 
              ? 'bg-blue-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 shadow-glow-blue'
          }`}
        >
          {isRunning ? <Loader2 size={18} className="animate-spin" /> : <Play size={18} fill="currentColor" />}
          {isRunning ? 'Running...' : 'Run Code'}
        </button>
      </div>
    </header>
  );
}