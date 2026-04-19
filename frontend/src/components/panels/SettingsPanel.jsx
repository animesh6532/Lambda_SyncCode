import { useState } from "react";

export default function SettingsPanel() {
  const [dark, setDark] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow p-4 h-full">
      <h2 className="text-sm font-semibold mb-3">Settings</h2>

      <div className="flex flex-col gap-3 text-sm">
        
        {/* Theme toggle */}
        <div className="flex items-center justify-between">
          <span>Dark Mode</span>
          <input
            type="checkbox"
            checked={dark}
            onChange={() => setDark(!dark)}
          />
        </div>

        {/* Font size */}
        <div>
          <label className="block mb-1">Font Size</label>
          <input type="range" min="12" max="20" />
        </div>
      </div>
    </div>
  );
}