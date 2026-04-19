export default function HistoryPanel({ history = [] }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 h-full">
      <h2 className="text-sm font-semibold mb-3">Code History</h2>

      <div className="flex flex-col gap-2 text-sm">
        {history.length === 0 ? (
          <p className="text-gray-400">No history</p>
        ) : (
          history.map((h, i) => (
            <div
              key={i}
              className="bg-gray-100 p-2 rounded cursor-pointer hover:bg-gray-200"
            >
              {h.slice(0, 40)}...
            </div>
          ))
        )}
      </div>
    </div>
  );
}