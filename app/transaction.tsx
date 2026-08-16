import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "../src/components/Search";
import { useExpenseStore } from "../src/store/ExpenseStore";
import { useEffect, useState } from "react";
import AppButton from "../src/components/AppButton";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
type FilterButtonProps = {
  title: "All" | "Income" | "Expense";
  active: boolean;
  onPress: () => void;
};

const FilterButton = ({ title, active, onPress }: FilterButtonProps) => {
  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withTiming(active ? 1.05 : 1, {
      duration: 300,
    });
  }, [active]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <AppButton variant={active ? "primary" : "outline"} onPress={onPress}>
        {title}
      </AppButton>
    </Animated.View>
  );
};
const Transaction = () => {
  const expenses = useExpenseStore((state) => state.expenses);
  const router = useRouter();
  const [filter, setFilter] = useState<"All" | "Income" | "Expense">("All");
  const filteredExpenses =
    filter === "All"
      ? expenses
      : expenses.filter((item) => item.type === filter);
  return (
    <SafeAreaView className="flex-1 w-full px-4 gap-4">
      <View className="relative flex-row items-center justify-center py-3">
        <Pressable className="absolute left-0" onPress={() => router.back()}>
          <Ionicons name="return-down-back-outline" size={24} />
        </Pressable>
        <Text className="font-poppins-semibold text-xl text-text-primary">
          Transactions
        </Text>
      </View>
      <Search />
      <View className="flex-row gap-3 ">
        <FilterButton
          title="All"
          active={filter === "All"}
          onPress={() => setFilter("All")}
        />

        <FilterButton
          title="Expense"
          active={filter === "Expense"}
          onPress={() => setFilter("Expense")}
        />

        <FilterButton
          title="Income"
          active={filter === "Income"}
          onPress={() => setFilter("Income")}
        />
      </View>
      <View className="flex gap-3 w-full">
        {filteredExpenses.map((item) => (
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
    </SafeAreaView>
  );
};

export default Transaction;
