SyncCode/
│
├── frontend/                # Client side (UI)
│   ├── index.html
│   ├── style.css
│   ├── app.js              # WebSocket logic
│   └── editor.js           # Code editor logic
│
├── backend/                # Lambda functions (Python)
│   ├── handlers/
│   │   ├── connect.py
│   │   ├── disconnect.py
│   │   ├── join_room.py
│   │   ├── send_code.py
│   │   └── execute_code.py
│   │
│   ├── services/
│   │   ├── db.py           # MySQL connection
│   │   ├── broadcast.py    # Send message to users
│   │   └── room_service.py
│   │
│   ├── utils/
│   │   ├── response.py
│   │   └── validator.py
│   │
│   ├── requirements.txt
│   └── lambda_function.py  # Entry point
│
├── database/
│   ├── schema.sql
│   └── seed.sql
│
├── infrastructure/         # (IMPORTANT for top 1%)
│   ├── template.yaml       # AWS SAM / CloudFormation
│   └── config.json
│
├── docs/                   # Documentation
│   ├── architecture.md
│   └── api.md
│
├── README.md               # Recruiter-focused
└── .gitignore




Fronted folder structure 

frontend/
│
├── public/
│   └── favicon.svg
│
├── src/
│   │
│   ├── assets/                # icons, images, logos
│   │   ├── icons/
│   │   └── images/
│   │
│   ├── components/            # reusable UI components
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── Toast.jsx
│   │   │   └── Avatar.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── editor/
│   │   │   ├── CodeEditor.jsx
│   │   │   ├── LanguageSelector.jsx
│   │   │   └── EditorToolbar.jsx
│   │   │
│   │   ├── console/
│   │   │   ├── OutputConsole.jsx
│   │   │   └── ConsoleLogs.jsx
│   │   │
│   │   ├── presence/
│   │   │   ├── UserList.jsx
│   │   │   ├── TypingIndicator.jsx
│   │   │   └── PresenceBadge.jsx
│   │   │
│   │   ├── ai/
│   │   │   ├── AIAssistant.jsx
│   │   │   ├── ChatBubble.jsx
│   │   │   └── SuggestedQuestions.jsx
│   │   │
│   │   └── panels/
│   │       ├── ActivityPanel.jsx
│   │       ├── HistoryPanel.jsx
│   │       └── SettingsPanel.jsx
│   │
│   ├── pages/                 # full pages (routing)
│   │   ├── Landing.jsx
│   │   ├── App.jsx            # main coding app
│   │   └── NotFound.jsx
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx
│   │
│   ├── hooks/                 # custom hooks
│   │   ├── useWebSocket.js
│   │   ├── useEditor.js
│   │   ├── usePresence.js
│   │   ├── useAIChat.js
│   │   └── useLocalStorage.js
│   │
│   ├── services/              # API / WebSocket logic
│   │   ├── websocket.js
│   │   └── aiService.js
│   │
│   ├── store/                 # global state (Zustand or Context)
│   │   ├── useAppStore.js
│   │   └── useUIStore.js
│   │
│   ├── data/                  # static data
│   │   ├── faq.js             # 100+ AI Q&A
│   │   └── mockUsers.js
│   │
│   ├── utils/                 # helper functions
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   └── formatters.js
│   │
│   ├── styles/                # styling
│   │   ├── globals.css
│   │   └── theme.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── vite.config.js
│
├── .env
├── package.json
└── README.md