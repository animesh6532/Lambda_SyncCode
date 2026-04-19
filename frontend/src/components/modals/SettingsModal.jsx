import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Settings, Moon, Sun, Type, RotateCcw } from 'lucide-react';
import { useModalStore } from '../../store/modalStore';
import { useThemeStore } from '../../store/themeStore';
import { useToastStore } from '../../store/toastStore';

export default function SettingsModal() {
  const { isSettingsModalOpen, closeSettingsModal } = useModalStore();
  const { isDarkMode, toggleTheme } = useThemeStore();
  const { addToast } = useToastStore();
  const [fontSize, setFontSize] = useState(14);

  if (!isSettingsModalOpen) return null;

  const handleReset = () => {
    setFontSize(14);
    addToast('Editor settings reset to default', 'success');
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/40 backdrop-blur-sm dark:bg-black/60 pointer-events-auto"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative w-full max-w-md p-6 mx-4 glass-panel bg-white dark:bg-dark-surface dark:border-dark-border"
        >
          {/* Close Button */}
          <button
            onClick={closeSettingsModal}
            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X size={20} />
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-neon-blue rounded-lg">
              <Settings size={24} />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              App Settings
            </h2>
          </div>

          <div className="space-y-6">
            
            {/* Theme Toggle */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Appearance</label>
              <div className="flex items-center justify-between p-3 rounded-xl border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-[#121c2d]">
                <div className="flex items-center gap-2 text-sm text-gray-800 dark:text-gray-200">
                  {isDarkMode ? <Moon size={18} /> : <Sun size={18} />}
                  <span>{isDarkMode ? 'Dark Theme' : 'Light Theme'}</span>
                </div>
                <button
                  onClick={toggleTheme}
                  className="px-4 py-1.5 text-sm font-medium bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg text-gray-800 dark:text-gray-200 transition-colors"
                >
                  Toggle
                </button>
              </div>
            </div>

            {/* Font Size */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <Type size={16} /> Font Size
                </label>
                <span className="text-xs font-mono bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-gray-600 dark:text-gray-400">{fontSize}px</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="24" 
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400">
                (Note: Controls app scaling in future integrations. Editor size is currently fixed.)
              </p>
            </div>

            {/* Reset Defaults */}
            <div className="pt-4 border-t border-gray-100 dark:border-dark-border">
              <button 
                onClick={handleReset}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-500/10 hover:bg-red-100 dark:hover:bg-red-500/20 rounded-xl transition-colors"
              >
                <RotateCcw size={16} />
                Reset Default Settings
              </button>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
