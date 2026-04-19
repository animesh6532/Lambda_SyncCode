const questions = [
  "What is this app?",
  "How to run code?",
  "How to join room?",
];

export default function SuggestedQuestions({ onSelect }) {
  return (
    <div className="p-3 border-t border-gray-100 dark:border-dark-border flex flex-wrap gap-2 bg-white dark:bg-dark-surface">
      {questions.map((q, i) => (
        <button
          key={i}
          onClick={() => onSelect(q)}
          className="text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-[#1e293b] border border-gray-200 dark:border-dark-border px-3 py-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {q}
        </button>
      ))}
    </div>
  );
}