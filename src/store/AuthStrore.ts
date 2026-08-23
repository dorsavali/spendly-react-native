import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type AuthStore = {
  isLoggedIn: boolean;
  username: string;
  hasSeenSplash: boolean;
  hasHydrated: boolean;
  login: (username: string) => void;
  logout: () => void;
  completeSplash: () => void;
  setHasHydrated: (hasHydrated: boolean) => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      username: "",
      hasSeenSplash: false,
      hasHydrated: false,

      login: (username) =>
        set({
          isLoggedIn: true,
          username,
        }),

      logout: () =>
        set({
          isLoggedIn: false,
          username: "",
        }),

      completeSplash: () => set({ hasSeenSplash: true }),

      setHasHydrated: (hasHydrated) => set({ hasHydrated }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        isLoggedIn: state.isLoggedIn,
        username: state.username,
        hasSeenSplash: state.hasSeenSplash,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
