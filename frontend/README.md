# Lambda Sync - Frontend

Real-time collaborative coding IDE built with React + Vite.

## Quick Start

```bash
npm install
npm run dev
```

## Features
- Real-time code collaboration
- Monaco Editor with syntax highlighting
- Live code execution
- User presence & typing indicators
- AI coding assistant
- Responsive design

## Project Structure
```
src/
├── components/     # Reusable UI components
├── pages/          # Route components
├── hooks/          # Custom React hooks
├── store/          # Zustand stores
├── services/       # API/WebSocket services
├── utils/          # Helper functions
└── styles/         # Tailwind + global CSS
```

## Tech Stack
- React 18 + Vite
- Tailwind CSS
- Monaco Editor
- Zustand (state)
- React Router
- Lucide React (icons)
- WebSocket (collaboration)

## Proxy Configuration
Development server proxies to backend at `localhost:9000`:

```
proxy: {
  '/api': 'http://localhost:9000',
  '/ws': 'ws://localhost:9000/ws'
}
```

