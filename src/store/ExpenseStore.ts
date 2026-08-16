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
  type: "Expense" | "Income";
};

type ExpenseStore = {
  expenses: Expense[];

  addExpense: (expense: Expense) => void;

  updateExpense: (
    id: string,
    updatedExpense: Partial<Expense>
  ) => void;
};

export const useExpenseStore = create<ExpenseStore>()(
  persist(
    (set) => ({
      expenses: [],

      addExpense: (expense) =>
        set((state) => ({
          expenses: [...state.expenses, expense],
        })),

      updateExpense: (id, updatedExpense) =>
        set((state) => ({
          expenses: state.expenses.map((item) =>
            item.id === id
              ? { ...item, ...updatedExpense }
              : item
          ),
        })),
    }),

    {
      name: "expense-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);