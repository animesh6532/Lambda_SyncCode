import { useState, useEffect, useRef } from "react";
import { connectWebSocket, sendMessage } from "../services/websocket";
import { useLocation } from "react-router-dom";
import jsPDF from "jspdf";

import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import CodeEditor from "../components/editor/CodeEditor";
import OutputConsole from "../components/console/OutputConsole";
import ActivityPanel from "../components/panels/ActivityPanel";
import AIAssistant from "../components/ai/AIAssistant";
import GitModal from "../components/modals/GitModal";
import SettingsModal from "../components/modals/SettingsModal";

import { useToastStore } from "../store/toastStore";
import { Download, FileText } from "lucide-react";

export default function App() {
  const { state } = useLocation();
  const roomId = state?.roomId || "demo-room";

  const { addToast } = useToastStore();

  const wsRef = useRef(null); // ✅ FIX: persistent socket

  const [code, setCode] = useState(
    "def greet(name):\n    print(f'Hello {name} 🚀')\n\ngreet('LambdaSyncCode')"
  );
  const [language, setLanguage] = useState("python");
  const [logs, setLogs] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  const [users] = useState([
    { name: "Animesh", status: "online", active: true },
    { name: "Guest_2", status: "idle", active: false }
  ]);

  const [activities, setActivities] = useState([
    { id: 1, text: "Animesh joined the room", time: "Just now" },
    { id: 2, text: "Repository connected", time: "2 min ago" }
  ]);

  // ✅ Toast on join
  useEffect(() => {
    addToast(`Joined room: ${roomId}`, "success");
  }, [roomId]);

  // ✅ 🔥 FIXED WebSocket Setup
  useEffect(() => {
    if (wsRef.current) return; // prevent duplicate

    const ws = connectWebSocket(import.meta.env.VITE_WS_URL, (data) => {
      console.log("🔥 Incoming:", data);

      if (data.type === "code_update") {
        setCode((prev) => (prev === data.code ? prev : data.code));
      }

      if (data.type === "execution_result") {
        setLogs((prev) => [
          ...prev,
          { type: "output", message: data.output }
        ]);
        setIsRunning(false);
      }
    });

    wsRef.current = ws;

    // ✅ Wait until connection is OPEN (NO setTimeout hack)
    ws.onopen = () => {
      console.log("✅ Connected → Joining room");

      sendMessage({
        action: "joinRoom",
        room_id: roomId
      });
    };

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
      }
    };
  }, []);

  // ✅ RUN CODE
  const handleRun = () => {
    if (!wsRef.current) return;

    setIsRunning(true);
    addToast("Executing code...", "info");

    setLogs((prev) => [
      ...prev,
      { type: "info", message: "Executing on AWS Lambda..." }
    ]);

    sendMessage({
      action: "executeCode",
      room_id: roomId,
      code: code
    });

    setActivities((prev) => [
      { id: Date.now(), text: "Executed code", time: "Just now" },
      ...prev.slice(0, 4)
    ]);
  };

  // ✅ SAVE FILE
  const handleSaveCode = () => {
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `code_${Date.now()}.txt`;
    a.click();

    URL.revokeObjectURL(url);
    addToast("File saved", "success");
  };

  // ✅ EXPORT PDF
  const handleExportPDF = () => {
    try {
      const doc = new jsPDF();

      doc.setFontSize(18);
      doc.text("LambdaSyncCode", 14, 22);

      doc.setFontSize(10);
      doc.text(`Generated: ${new Date().toLocaleString()}`, 14, 30);

      doc.setFont("courier", "normal");
      const splitCode = doc.splitTextToSize(code, 180);
      doc.text(splitCode, 14, 45);

      doc.save(`LambdaSyncCode_${Date.now()}.pdf`);
      addToast("PDF exported", "success");
    } catch {
      addToast("Export failed", "error");
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-gray-50 dark:bg-dark-bg overflow-hidden">
      <GitModal />
      <SettingsModal />
      <AIAssistant />

      <Navbar roomId={roomId} onRun={handleRun} isRunning={isRunning} />

      <div className="flex flex-1 overflow-hidden p-2 gap-2">
        <aside className="w-64 bg-white rounded-xl border overflow-hidden">
          <Sidebar users={users} />
        </aside>

        <main className="flex-1 bg-white rounded-xl border flex flex-col">
          <div className="flex justify-between px-4 py-2 border-b">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="px-2 py-1 border rounded"
            >
              <option value="python">Python</option>
              <option value="javascript">JavaScript</option>
            </select>

            <div className="flex gap-2">
              <button onClick={handleSaveCode}>
                <Download size={14} /> Save
              </button>
              <button onClick={handleExportPDF}>
                <FileText size={14} /> PDF
              </button>
            </div>
          </div>

          <CodeEditor
            code={code}
            setCode={(newCode) => {
              setCode(newCode);

              sendMessage({
                action: "sendCode",
                room_id: roomId,
                code: newCode
              });
            }}
            language={language}
          />
        </main>

        <aside className="w-80 flex flex-col gap-2">
          <OutputConsole logs={logs} onClear={() => setLogs([])} />
          <ActivityPanel activities={activities} />
        </aside>
      </div>
    </div>
  );
}