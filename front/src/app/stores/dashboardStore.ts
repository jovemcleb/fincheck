import { create } from 'zustand';

interface DashBoardState {
  areValuesVisible: boolean;
  toggleValuesVisibility: () => void;
  isNewAccountModalOpen: boolean;
  openNewAccountModal: () => void;
  closeNewAccountModal: () => void;
}

export const useDashBoardStore = create<DashBoardState>((set) => ({
  areValuesVisible: false,
  toggleValuesVisibility: () =>
    set((state) => ({ areValuesVisible: !state.areValuesVisible })),
  isNewAccountModalOpen: true,
  openNewAccountModal: () => set({ isNewAccountModalOpen: true }),
  closeNewAccountModal: () => set({ isNewAccountModalOpen: false }),
}));
