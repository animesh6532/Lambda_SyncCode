export default function PresenceBadge({ count = 0 }) {
  return (
    <div className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium shadow-sm">
      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
      {count} online
    </div>
  );
}