import { create } from 'zustand';

interface DashBoardState {
  areValuesVisible: boolean;
  toggleValuesVisibility: () => void;
}

export const useDashBoardStore = create<DashBoardState>((set) => ({
  areValuesVisible: false,
  toggleValuesVisibility: () =>
    set((state) => ({ areValuesVisible: !state.areValuesVisible })),
}));
