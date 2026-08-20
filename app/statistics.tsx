import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useExpenseStore } from "../src/store/ExpenseStore";
import PeriodFilter from "../src/components/PeriodFilter";
import ExpensePieChart from "../src/components/ExpensePieChart";
import ExpenseBarChart from "../src/components/ExpenseBarChart";

const Statistics = () => {
  const router = useRouter();

  const expenses = useExpenseStore((state) => state.expenses);

  const [period, setPeriod] = useState<"Week" | "Year">("Week");

  const filteredExpenses = expenses.filter((item) => item.type === "Expense");

  return (
    <SafeAreaView className="flex-1 w-full gap-4 bg-background px-5 dark:bg-dark-background">
      <View className="flex-1 gap-11 w-full ">
        <View className="relative flex-row items-center justify-center py-3">
        <Pressable className="absolute left-0" onPress={() => router.back()}>
          <Ionicons name="return-down-back-outline" size={24} />
        </Pressable>

        <Text className="font-poppins-semibold text-xl text-text-primary dark:text-dark-text-primary">
          Statistics
        </Text>
      </View>

       <View className="flex gap-11 w-full ">
<Text className="font-poppins-semibold text-xl text-text-primary dark:text-dark-text-primary">
  Expense Overview
</Text>
      <ExpensePieChart expenses={filteredExpenses} />
       </View>
      <View className="flex-1 gap-6 w-full ">
        <PeriodFilter period={period} setPeriod={setPeriod} />

      <ExpenseBarChart expenses={filteredExpenses} period={period} />
      </View>
      </View>
    </SafeAreaView>
  );
};

export default Statistics;
