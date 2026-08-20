import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, useColorScheme, View } from "react-native";

import { formatCurrency } from "../utils/currency";
import { useExpenseStore } from "../store/ExpenseStore";
import { useSettingsStore } from "../store/SettingStore";

const RecentTransation = () => {
  const router = useRouter();
  const isDark = useColorScheme() === "dark";
  const iconColor = isDark ? "#F5F5F5" : "#2B2B2B";

  const expenses = useExpenseStore(
    (state) => state.expenses
  );

  const currency = useSettingsStore(
    (state) => state.currency
  );

  const recentExpenses = expenses
    .slice(-3)
    .reverse();

  if (expenses.length === 0) {
    return (
      <View className="w-full gap-4 px-5">
        <View className="w-full flex-row justify-between items-center">
          <Text className="font-poppins-semibold text-xl text-text-primary dark:text-dark-text-primary">
            Recent Transactions
          </Text>

          <Pressable
            onPress={() =>
              router.push("/transaction")
            }
          >
            <Text className="font-poppins-semibold text-sm text-primary">
              see all
            </Text>
          </Pressable>
        </View>

        <View className="w-full bg-white dark:bg-dark-surface rounded-2xl items-center justify-center py-6 gap-3">
          <Ionicons
            name="receipt-outline"
            size={40}
            color={isDark ? "#F5F5F5" : "#6B705C"}
          />

          <Text className="font-poppins-semibold text-text-primary dark:text-dark-text-primary">
            No transactions yet
          </Text>

          <Text className="font-poppins text-sm text-text-secondary dark:text-dark-text-secondary">
            Add your first transaction
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View className="w-full gap-4 px-5">
      <View className="w-full flex-row justify-between items-center">
        <Text className="font-poppins-semibold text-xl text-text-primary dark:text-dark-text-primary">
          Recent Transactions
        </Text>

        <Pressable
          onPress={() =>
            router.push("/transaction")
          }
        >
          <Text className="font-poppins-semibold text-sm text-primary">
            see all
          </Text>
        </Pressable>
      </View>

      <View className="gap-2 w-full">
        {recentExpenses.map((item) => (
          <View
            key={item.id}
            className="w-full bg-white dark:bg-dark-surface rounded-2xl p-3 flex-row justify-between items-center"
          >
            <View className="flex-row items-center gap-3 flex-1">
              <View className="w-11 h-11 rounded-2xl bg-surface dark:bg-dark-surface items-center justify-center">
                <Ionicons
                  name={
                    item.category === "Food"
                      ? "fast-food-outline"
                      : item.category === "Transport"
                      ? "car-outline"
                      : item.category === "Shopping"
                      ? "cart-outline"
                      : "cash-outline"
                  }
                  size={24}
                  color={iconColor}
                />
              </View>

              <View>
                <Text className="font-poppins-semibold text-base text-text-primary dark:text-dark-text-primary">
                  {item.title}
                </Text>

                <Text className="font-poppins text-xs text-text-secondary dark:text-dark-text-secondary">
                  {item.category}
                </Text>
              </View>
            </View>

            <View className="items-end gap-1">
              <Text className="font-poppins text-xs text-text-secondary dark:text-dark-text-secondary">
                {new Date(
                  item.date
                ).toLocaleDateString()}
              </Text>

              {item.type === "Expense" ? (
                <Text className="font-poppins-semibold text-base text-danger">
                  -{" "}
                  {formatCurrency(
                    item.amount,
                    currency
                  )}
                </Text>
              ) : (
                <Text className="font-poppins-semibold text-base text-success">
                  +{" "}
                  {formatCurrency(
                    item.amount,
                    currency
                  )}
                </Text>
              )}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default RecentTransation;
