import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useModalStore } from '../../store/modalStore';

export default function RoomModal() {
  const { isRoomModalOpen, closeRoomModal } = useModalStore();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('join'); // 'join' or 'create'
  const [roomId, setRoomId] = useState('');

  if (!isRoomModalOpen) return null;

  const handleJoin = (e) => {
    e.preventDefault();
    if (roomId.trim()) {
      closeRoomModal();
      navigate('/app', { state: { roomId } });
    }
  };

  const handleCreate = () => {
    const newRoomId = Math.random().toString(36).substring(2, 9);
    closeRoomModal();
    navigate('/app', { state: { roomId: newRoomId } });
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/40 backdrop-blur-sm dark:bg-black/60"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative w-full max-w-md p-6 mx-4 glass-panel bg-white dark:bg-dark-surface dark:border-dark-border"
        >
          {/* Close Button */}
          <button
            onClick={closeRoomModal}
            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X size={20} />
          </button>

          <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Get Started
          </h2>

          {/* Tabs */}
          <div className="flex p-1 mb-6 bg-gray-100 dark:bg-[#162032] rounded-xl">
            <button
              onClick={() => setActiveTab('join')}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
                activeTab === 'join'
                  ? 'bg-white dark:bg-dark-surface shadow-sm text-blue-600 dark:text-neon-blue'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Join Room
            </button>
            <button
              onClick={() => setActiveTab('create')}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
                activeTab === 'create'
                  ? 'bg-white dark:bg-dark-surface shadow-sm text-purple-600 dark:text-neon-purple'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Create Room
            </button>
          </div>

          {/* Content */}
          {activeTab === 'join' ? (
            <form onSubmit={handleJoin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Room ID
                </label>
                <input
                  type="text"
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  placeholder="Enter room ID..."
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-[#121c2d] border border-gray-200 dark:border-dark-border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 shadow-glow-blue text-white rounded-xl font-medium transition-all transform active:scale-95"
              >
                <LogIn size={18} />
                Join Room
              </button>
            </form>
          ) : (
            <div className="space-y-4 text-center">
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Create a new secure, real-time collaborative workspace.
              </p>
              <button
                onClick={handleCreate}
                className="w-full py-3 px-4 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-glow-purple text-white rounded-xl font-medium transition-all transform active:scale-95"
              >
                <Plus size={18} />
                Generate & Create
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
