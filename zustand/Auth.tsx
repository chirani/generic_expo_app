import { create } from "zustand";

interface AuthState {
  isLogged: boolean;
  logOut: () => void;
  logIn: () => void;
}

const useAuthState = create<AuthState>((set) => ({
  isLogged: false,
  logOut: () => set((state) => ({ ...state, isLogged: false })),
  logIn: () => set((state) => ({ ...state, isLogged: true })),
}));

export default useAuthState;
