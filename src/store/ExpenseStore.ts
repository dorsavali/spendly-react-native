import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Expense = {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
  notes?: string;
};

type ExpenseStore = {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
};

export const useExpenseStore = create<ExpenseStore>()(
  persist(
    (set) => ({
      expenses: [],

      addExpense: (expense) =>
        set((state) => ({
          expenses: [...state.expenses, expense],
        })),
    }),

    {
      name: "expense-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);