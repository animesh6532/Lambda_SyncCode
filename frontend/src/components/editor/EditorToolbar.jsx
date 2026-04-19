import Button from "../common/Button";
import LanguageSelector from "./LanguageSelector";

export default function EditorToolbar({
  language,
  setLanguage,
  onRun
}) {
  return (
    <div className="w-full h-12 bg-white border-b flex items-center justify-between px-4">
      
      {/* Left */}
      <div className="flex items-center gap-3">
        <LanguageSelector
          language={language}
          setLanguage={setLanguage}
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        <Button onClick={onRun}>
          Run ▶
        </Button>
      </div>
    </div>
  );
}