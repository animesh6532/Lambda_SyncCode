export const WS_URL = import.meta.env.VITE_WS_URL || "wss://your-websocket-url";

export const DEFAULT_CODE = `print("Welcome to LambdaSyncCode 🚀")`;

export const LANGUAGES = [
  { label: "Python", value: "python" },
  { label: "JavaScript", value: "javascript" },
];

export const MAX_HISTORY = 5;
export const MAX_ACTIVITIES = 5;