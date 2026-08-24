import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useExpenseStore } from "../src/store/ExpenseStore";
import PeriodFilter from "../src/components/PeriodFilter";
import ExpensePieChart from "../src/components/ExpensePieChart";
import ExpenseBarChart from "../src/components/ExpenseBarChart";
import { useTranslation } from "../src/i18n/translations";

const Statistics = () => {
  const router = useRouter();
  const isDark = useColorScheme() === "dark";
  const { t } = useTranslation();

  const expenses = useExpenseStore((state) => state.expenses);

  const [period, setPeriod] = useState<"Week" | "Year">("Week");

  const filteredExpenses = expenses.filter((item) => item.type === "Expense");

  return (
    <SafeAreaView className="flex-1 w-full gap-4 bg-background px-5 dark:bg-dark-background">
      <View className="flex-1 gap-11 w-full ">
        <View className="relative flex-row items-center justify-center py-3">
        <Pressable
          className="absolute left-0 w-11 h-11 rounded-xl items-center justify-center bg-white dark:bg-dark-surface active:bg-surface dark:active:bg-gray-700"
          onPress={() => router.back()}
          hitSlop={8}
        >
          <Ionicons name="return-down-back-outline" size={24} color={isDark ? "#F5F5F5" : "#2B2B2B"} />
        </Pressable>

        <Text className="font-poppins-semibold text-xl text-text-primary dark:text-dark-text-primary">
          {t("statistics")}
        </Text>
      </View>

       {filteredExpenses.length === 0 ? (
        <View className="flex-1 items-center justify-center gap-3">
          <Ionicons name="pie-chart-outline" size={48} color={isDark ? "#A3A3A3" : "#6B705C"} />
          <Text className="font-poppins-semibold text-lg text-text-primary dark:text-dark-text-primary">
            {t("noExpenseData")}
          </Text>
          <Text className="font-poppins text-center text-text-secondary dark:text-dark-text-secondary">
            {t("addExpenseForCharts")}
          </Text>
        </View>
       ) : <>
       <View className="flex gap-11 w-full ">
<Text className="font-poppins-semibold text-xl text-text-primary dark:text-dark-text-primary">
  {t("expenseOverview")}
</Text>
      <ExpensePieChart expenses={filteredExpenses} />
       </View>
      <View className="flex-1 gap-6 w-full ">
        <PeriodFilter period={period} setPeriod={setPeriod} />

      <ExpenseBarChart expenses={filteredExpenses} period={period} />
      </View>
      </>}
      </View>
    </SafeAreaView>
  );
};

export default Statistics;
