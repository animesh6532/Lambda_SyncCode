import { Activity, Bell } from "lucide-react";

export default function ActivityPanel({ activities = [] }) {
  return (
    <div className="h-full flex flex-col bg-white dark:bg-dark-surface">
      
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-100 dark:border-dark-border flex items-center justify-between">
        <h2 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest flex items-center gap-2">
          <Activity size={14} />
          Recent Activity
        </h2>
        <div className="relative">
          <Bell size={14} className="text-gray-400" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full border border-white dark:border-dark-surface" />
        </div>
      </div>

      {/* Feed */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {activities.length === 0 ? (
          <p className="text-center text-xs text-gray-400 mt-4">No recent activity</p>
        ) : (
          activities.map((a) => (
            <div key={a.id} className="relative pl-4">
              <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-blue-500" />
              <div className="absolute left-[3px] top-3 bottom-[-16px] w-[1px] bg-gray-100 dark:bg-dark-border last:bg-transparent" />
              
              <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {a.text}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">
                {a.time}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}