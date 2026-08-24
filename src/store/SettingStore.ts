import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type Currency = "EUR" | "USD" | "GBP" | "TOMAN";
export type Language = "en" | "de" | "fa";

type SettingsStore = {
  currency: Currency;
  language: Language;
  setCurrency: (currency: Currency) => void;
  setLanguage: (language: Language) => void;
};

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      currency: "EUR",
      language: "en",

      setCurrency: (currency) => {
        set({
          currency,
        });
      },
      setLanguage: (language) => set({ language }),
    }),
    {
      name: "settings-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
