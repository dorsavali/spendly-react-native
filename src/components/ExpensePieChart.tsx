import { Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";

import { CATEGORIES } from "../constants/categories";
import { useSettingsStore } from "../store/SettingStore";
import { formatCurrency } from "../utils/currency";

type Expense = { id: string; amount: number; category: string };
type Props = { expenses: Expense[] };

const ExpensePieChart = ({ expenses }: Props) => {
  const currency = useSettingsStore((state) => state.currency);
  const totalExpense = expenses.reduce((sum, item) => sum + item.amount, 0);
  const categoryTotals = CATEGORIES.map((category) => {
    const value = expenses.filter((item) => item.category === category.title).reduce((sum, item) => sum + item.amount, 0);
    return { ...category, value, percent: totalExpense === 0 ? 0 : Math.round((value / totalExpense) * 100) };
  });

  return (
    <View className="flex-row justify-between gap-2">
      <PieChart
        data={categoryTotals.map((item) => ({ value: item.value, color: item.color, text: item.title }))}
        donut
        radius={90}
        innerRadius={60}
        centerLabelComponent={() => (
          <View className="items-center">
            <Text className="font-poppins-bold text-lg text-text-primary dark:text-primary">
              {formatCurrency(totalExpense, currency)}
            </Text>
            <Text className="font-poppins text-xs text-text-secondary dark:text-dark-text-secondary">Total Expense</Text>
          </View>
        )}
      />

      <View className="flex justify-start gap-3 w-1/2">
        {categoryTotals.map((item) => (
          <View key={item.id} className="flex-row justify-between">
            <View className="flex-row gap-2">
              <View className={`w-4 h-4 rounded-sm ${item.bgClass}`} />
              <View>
                <Text className="font-poppins-semibold text-sm text-text-primary dark:text-dark-text-primary">{item.title}</Text>
                <Text className="font-poppins-semibold text-sm text-text-secondary dark:text-dark-text-secondary">
                  {formatCurrency(item.value, currency)}
                </Text>
              </View>
            </View>
            <Text className="text-text-primary dark:text-dark-text-primary">{item.percent}%</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ExpensePieChart;
