import { create } from "zustand";

export const useAppStore = create((set) => ({
  code: "print('Hello LambdaSyncCode 🚀')",
  language: "python",
  logs: [],
  users: [],
  history: [],
  activities: [],

  setCode: (code) => set({ code }),

  setLanguage: (language) => set({ language }),

  addLog: (log) =>
    set((state) => ({
      logs: [...state.logs, log],
    })),

  setUsers: (users) => set({ users }),

  addUser: (user) =>
    set((state) => ({
      users: [...new Set([...state.users, user])],
    })),

  removeUser: (user) =>
    set((state) => ({
      users: state.users.filter((u) => u !== user),
    })),

  addHistory: (code) =>
    set((state) => ({
      history: [code, ...state.history.slice(0, 4)],
    })),

  addActivity: (activity) =>
    set((state) => ({
      activities: [activity, ...state.activities.slice(0, 5)],
    })),
}));