import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type Currency = "EUR" | "USD" | "GBP";

type SettingsStore = {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
};

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      currency: "EUR",

      setCurrency: (currency) => {
        set({
          currency,
        });
      },
    }),
    {
      name: "settings-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);