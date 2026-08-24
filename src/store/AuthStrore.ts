import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type AuthStore = {
  username: string;
  hasSeenSplash: boolean;
  hasHydrated: boolean;
  avatarId: string;
  setUsername: (username: string) => void;
  updateAvatar: (avatarId: string) => void;
  completeSplash: () => void;
  setHasHydrated: (hasHydrated: boolean) => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      username: "",
      hasSeenSplash: false,
      hasHydrated: false,
      avatarId: "person-green",

      setUsername: (username) => set({ username }),

      updateAvatar: (avatarId) => set({ avatarId }),

      completeSplash: () => set({ hasSeenSplash: true }),

      setHasHydrated: (hasHydrated) => set({ hasHydrated }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        username: state.username,
        hasSeenSplash: state.hasSeenSplash,
        avatarId: state.avatarId,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
