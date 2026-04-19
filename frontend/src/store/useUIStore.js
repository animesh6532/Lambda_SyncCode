import { create } from "zustand";

export const useUIStore = create((set) => ({
  darkMode: false,
  isAIOpen: false,
  activePanel: "activity",

  toggleDarkMode: () =>
    set((state) => ({ darkMode: !state.darkMode })),

  toggleAI: () =>
    set((state) => ({ isAIOpen: !state.isAIOpen })),

  setActivePanel: (panel) => set({ activePanel: panel }),
}));