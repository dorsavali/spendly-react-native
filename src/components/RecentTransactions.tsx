import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { useExpenseStore } from "../store/ExpenseStore";
import { useRouter } from "expo-router";

const RecentTransation = () => {
  const expenses = useExpenseStore((state) => state.expenses);

  const recentExpenses = expenses.slice(-3).reverse();
  const router = useRouter();
if (expenses.length === 0) {
  return (
    <View className="w-full bg-white rounded-2xl p-5 gap-5">
      <View className="w-full flex-row justify-between items-center">
        <Text className="font-poppins-semibold text-xl text-text-primary">
          Recent Transactions
        </Text>

        <Pressable onPress={() => router.push("/transaction")}>
          <Text className="font-poppins-semibold text-sm text-primary">
            see all
          </Text>
        </Pressable>
      </View>

      <View className="w-full items-center justify-center py-6 gap-3">
        <Ionicons name="receipt-outline" size={40} color="#6B705C" />

        <Text className="font-poppins-semibold text-text-primary">
          No transactions yet
        </Text>

        <Text className="font-poppins text-sm text-text-secondary">
          Add your first expense
        </Text>
      </View>
    </View>
  );
}

return (
  <View className="w-full gap-4">
    <View className="w-full flex-row justify-between items-center">
      <Text className="font-poppins-semibold text-xl text-text-primary">
        Recent Transactions
      </Text>

      <Pressable onPress={() => router.push("/transaction")}>
        <Text className="font-poppins-semibold text-sm text-primary">
          see all
        </Text>
      </Pressable>
    </View>

    <View className="flex gap-1 w-full">
      {recentExpenses.map((item) => (
      <View
        key={item.id}
        className="w-full bg-white rounded-2xl p-4 flex-row justify-between items-center"
      >
        <View className="flex-row items-center gap-3 flex-1">
          <View className="w-11 h-11 rounded-2xl bg-surface items-center justify-center">
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
              color="#2B2B2B"
              className="p-2"
            />
          </View>

          <View>
            <Text className="font-poppins-semibold text-base text-text-primary">
              {item.title}
            </Text>

            <Text className="font-poppins text-xs text-text-secondary">
              {item.category}
            </Text>
          </View>
        </View>

        <View className="items-end gap-1">
          <Text className="font-poppins text-xs text-text-secondary">
            {new Date(item.date).toLocaleDateString()}
          </Text>

          {item.type === "Expense" ? (
            <Text className="font-poppins-semibold text-base text-danger">
              - ${item.amount}
            </Text>
          ) : (
            <Text className="font-poppins-semibold text-base text-success">
              + ${item.amount}
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
