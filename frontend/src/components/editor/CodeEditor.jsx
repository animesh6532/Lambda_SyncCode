import Editor from "@monaco-editor/react";
import { useThemeStore } from "../../store/themeStore";

export default function CodeEditor({
  code,
  setCode,
  language = "python"
}) {
  const { isDarkMode } = useThemeStore();

  return (
    <div className="h-full w-full bg-white dark:bg-[#1e1e1e]">
      <Editor
        height="100%"
        defaultLanguage={language}
        value={code}
        onChange={(value) => setCode(value)}
        theme={isDarkMode ? "vs-dark" : "light"}
        options={{
          fontSize: 14,
          fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
          minimap: { enabled: false },
          smoothScrolling: true,
          padding: { top: 16 },
          cursorBlinking: "smooth",
          lineHeight: 24,
        }}
      />
    </div>
  );
}