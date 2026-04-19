import { Users, FolderGit2, Settings } from "lucide-react";
import { useModalStore } from "../../store/modalStore";

export default function Sidebar({ users = [] }) {
  const { openGitModal, openSettingsModal } = useModalStore();

  return (
    <div className="h-full flex flex-col bg-white dark:bg-dark-surface">
      
      {/* Small Header */}
      <div className="p-4 border-b border-gray-100 dark:border-dark-border">
        <h2 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest flex items-center gap-2">
          <Users size={14} />
          Presence
        </h2>
      </div>

      {/* Users List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {users.length === 0 ? (
          <p className="text-center text-xs text-gray-400 mt-4">Room is empty</p>
        ) : (
          users.map((user, index) => (
            <div 
              key={index} 
              className={`flex items-center justify-between p-2 rounded-lg border transition-all ${
                user.active 
                  ? 'bg-blue-50/50 border-blue-200 dark:bg-blue-500/10 dark:border-blue-500/20' 
                  : 'bg-transparent border-transparent hover:bg-gray-50 dark:hover:bg-[#1e293b]'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  {/* Basic Avatar */}
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                    {user.name.substring(0, 2).toUpperCase()}
                  </div>
                  {/* Online Indicator */}
                  <div className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-dark-surface ${
                    user.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                  }`} />
                </div>
                <span className={`text-sm font-medium ${user.active ? 'text-blue-700 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}`}>
                  {user.name} {user.active && '(Me)'}
                </span>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Bottom Actions */}
      <div className="p-3 border-t border-gray-100 dark:border-dark-border space-y-1">
        <button 
          onClick={openGitModal}
          className="w-full flex items-center gap-3 p-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#1e293b] rounded-lg transition-colors"
        >
          <FolderGit2 size={16} />
          Connect Git
        </button>
        <button 
          onClick={openSettingsModal}
          className="w-full flex items-center gap-3 p-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#1e293b] rounded-lg transition-colors"
        >
          <Settings size={16} />
          Settings
        </button>
      </div>

    </div>
  );
}