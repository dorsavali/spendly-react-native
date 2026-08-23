import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type AuthStore = {
  isLoggedIn: boolean;
  username: string;
  login: (username: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      username: "",

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
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
