import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ComponentProps } from "react";
import { Pressable, Text, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AppButton from "../src/components/AppButton";
import { useExpenseStore } from "../src/store/ExpenseStore";

import { formatCurrency } from "../src/utils/currency";
import { useSettingsStore } from "../src/store/SettingStore";

const CategoryDetail = () => {
  const router = useRouter();
  const isDark = useColorScheme() === "dark";
  const { category } = useLocalSearchParams();

  const expenses = useExpenseStore((state) => state.expenses);

  const currency = useSettingsStore(
    (state) => state.currency
  );

  const filteredExpenses = expenses.filter(
    (item) =>
      item.type === "Expense" &&
      item.category === category
  );

  type IconName =
    ComponentProps<typeof Ionicons>["name"];

  const categoryIcons: Record<string, IconName> = {
    Food: "fast-food-outline",
    Transport: "car-outline",
    Shopping: "cart-outline",
    Bills: "cash-outline",
  };

  const categoryTotal = filteredExpenses.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  return (
    <SafeAreaView className="flex-1 w-full px-5 gap-4 bg-background dark:bg-dark-background">
      <View className="relative flex-row items-center justify-center py-3">
        <Pressable
          className="absolute left-0"
          onPress={() => router.back()}
        >
          <Ionicons
            name="return-down-back-outline"
            size={24}
            color={isDark ? "#F5F5F5" : "#2B2B2B"}
          />
        </Pressable>

        <Text className="font-poppins-semibold text-xl text-text-primary dark:text-dark-text-primary">
          {category}
        </Text>
      </View>

      <View className="flex-row gap-5 items-center">
        <View
          className={`rounded-2xl items-center justify-center ${
            category === "Food"
              ? "bg-[#FFB703]"
              : category === "Transport"
              ? "bg-[#7BDFF2]"
              : category === "Shopping"
              ? "bg-[#F7A1C4]"
              : "bg-[#85BB65]"
          }`}
        >
          <Ionicons
            name={
              categoryIcons[
                category as keyof typeof categoryIcons
              ]
            }
            size={100}
            className="p-2"
          />
        </View>

        <View>
          <Text className="font-poppins-bold text-4xl text-text-primary dark:text-dark-text-primary">
            {category}
          </Text>

          <Text className="font-poppins text-2xl text-text-secondary dark:text-dark-text-secondary">
            {formatCurrency(
              categoryTotal,
              currency
            )}
          </Text>
        </View>
      </View>

      {filteredExpenses.map((item) => (
        <View
          key={item.id}
          className="w-full bg-white dark:bg-dark-surface rounded-2xl p-3 flex-row justify-between items-center"
        >
          <View className="flex-row items-center gap-3 flex-1">
            <View className="w-4 h-4 rounded-full bg-primary" />

            <View>
              <Text className="font-poppins-semibold text-base text-text-primary dark:text-dark-text-primary">
                {item.title}
              </Text>

              <Text className="font-poppins text-xs text-text-secondary dark:text-dark-text-secondary">
                {new Date(
                  item.date
                ).toLocaleDateString()}
              </Text>
            </View>
          </View>

          <Text className="font-poppins-semibold text-base text-danger">
            - {formatCurrency(
              item.amount,
              currency
            )}
          </Text>
        </View>
      ))}

      <View className="absolute bottom-9 left-4 right-4">
        <AppButton
          variant="outline"
          onPress={() =>
            router.push("/transaction")
          }
        >
          See All Transactions
        </AppButton>
      </View>
    </SafeAreaView>
  );
};

export default CategoryDetail;
