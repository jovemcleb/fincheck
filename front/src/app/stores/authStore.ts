import { create } from 'zustand';
import { localStorageKeys } from '../config/localStorageKeys';
import { queryClient } from '../lib/queryClient';

interface AuthState {
  signedIn: boolean;

  setSignedIn: (value: boolean) => void;
  signin: (token: string) => void;
  signout: () => void;
}

export const useAuthStore = create<AuthState>((set) => {
  return {
    signedIn: Boolean(localStorage.getItem(localStorageKeys.TOKEN)),

    setSignedIn: (value) => set({ signedIn: value }),
    signin: (token) => {
      localStorage.setItem(localStorageKeys.TOKEN, JSON.stringify(token));

      set({ signedIn: true });
    },
    signout: () => {
      localStorage.removeItem(localStorageKeys.TOKEN);
      queryClient.removeQueries({ queryKey: ['users', 'me'] });
      set({ signedIn: false });
    },
  };
});
