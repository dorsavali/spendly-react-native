import { SafeAreaView } from "react-native-safe-area-context";
import { useExpenseStore } from "../src/store/ExpenseStore";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import AppButton from "../src/components/AppButton";

const CategoryDetail = () => {
  const router = useRouter();
  const { category } = useLocalSearchParams();
  const expenses = useExpenseStore((state) => state.expenses);
  const filteredExpenses = expenses.filter(
    (item) => item.type === "Expense" && item.category === category,
  );

  type IconName = ComponentProps<typeof Ionicons>["name"];

  const categoryIcons: Record<string, IconName> = {
    Food: "fast-food-outline",
    Transport: "car-outline",
    Shopping: "cart-outline",
    Bills: "cash-outline",
  };
  const categoryTotal = filteredExpenses.reduce(
    (sum, item) => sum + item.amount,
    0,
  );
  return (
    <SafeAreaView className="flex-1 w-full px-5 gap-4">
      <View className="relative flex-row items-center justify-center py-3">
        <Pressable className="absolute left-0" onPress={() => router.back()}>
          <Ionicons name="return-down-back-outline" size={24} />
        </Pressable>

        <Text className="font-poppins-semibold text-xl text-text-primary">
          {category}
        </Text>
      </View>
      <View className="flex-row gap-5 items-center ">
        <View
          className={` rounded-2xl items-center justify-center ${
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
            name={categoryIcons[category as keyof typeof categoryIcons]}
            size={100}
            className="p-2"
          />
        </View>
        <View>
          <Text className="font-poppins-bold text-4xl text-text-primary">
            {category}
          </Text>
          <Text className="font-poppins text-2xl text-text-secondary">${categoryTotal}</Text>
        </View>
      </View>
      {filteredExpenses.map((item) => (
        <View
          key={item.id}
          className="w-full bg-white rounded-2xl p-3 flex-row justify-between items-center"
        >
          <View className="flex-row items-center gap-3 flex-1">
            <View className="w-4 h-4 rounded-2xl bg-primary items-center justify-center"></View>

            <View>
              <Text className="font-poppins-semibold text-base text-text-primary">
                {item.title}
              </Text>

              <Text className="font-poppins text-xs text-text-secondary">
                {new Date(item.date).toLocaleDateString()}
              </Text>
            </View>
          </View>

          <View className="items-end gap-1">
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
      <View className="absolute bottom-9 left-4 right-4">
  <AppButton
    variant="outline"
    onPress={() => router.push("/transaction")}
  >
    See All Transactions
  </AppButton>
</View>
    </SafeAreaView>
  );
};

export default CategoryDetail;
