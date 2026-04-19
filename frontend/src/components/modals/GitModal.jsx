import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FolderGit2 } from 'lucide-react';
import { useModalStore } from '../../store/modalStore';
import { useToastStore } from '../../store/toastStore';

export default function GitModal() {
  const { isGitModalOpen, closeGitModal } = useModalStore();
  const { addToast } = useToastStore();
  const [repoUrl, setRepoUrl] = useState('');

  if (!isGitModalOpen) return null;

  const handleConnect = (e) => {
    e.preventDefault();
    if (repoUrl.trim()) {
      addToast('Connected successfully', 'success');
      closeGitModal();
      setRepoUrl('');
    }
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
            onClick={closeGitModal}
            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X size={20} />
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-neon-purple rounded-lg">
              <FolderGit2 size={24} />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Connect Repository
            </h2>
          </div>

          <form onSubmit={handleConnect} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                GitHub Repository URL
              </label>
              <input
                type="url"
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
                placeholder="https://github.com/username/repo"
                required
                className="w-full px-4 py-3 bg-gray-50 dark:bg-[#121c2d] border border-gray-200 dark:border-dark-border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
              />
            </div>
            
            <p className="text-xs text-gray-500 dark:text-gray-400">
              For this prototype, entering any valid URL will simulate a successful connection.
            </p>

            <button
              type="submit"
              className="w-full py-3 px-4 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-glow-purple text-white rounded-xl font-medium transition-all transform active:scale-95"
            >
              <FolderGit2 size={18} />
              Connect Git
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
