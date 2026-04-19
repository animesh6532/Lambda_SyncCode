import { create } from 'zustand';

export const useModalStore = create((set) => ({
  isRoomModalOpen: false,
  openRoomModal: () => set({ isRoomModalOpen: true }),
  closeRoomModal: () => set({ isRoomModalOpen: false }),

  isGitModalOpen: false,
  openGitModal: () => set({ isGitModalOpen: true }),
  closeGitModal: () => set({ isGitModalOpen: false }),

  isSettingsModalOpen: false,
  openSettingsModal: () => set({ isSettingsModalOpen: true }),
  closeSettingsModal: () => set({ isSettingsModalOpen: false }),
}));
