export default function LanguageSelector({ language, setLanguage }) {
  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="px-3 py-1 border rounded-lg text-sm bg-white shadow-sm"
    >
      <option value="python">Python</option>
      <option value="javascript">JavaScript</option>
    </select>
  );
}