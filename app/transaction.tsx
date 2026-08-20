import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  FlatList,
  Pressable,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import AppButton from "../src/components/AppButton";
import Search from "../src/components/Search";

import { useExpenseStore } from "../src/store/ExpenseStore";
import { useSettingsStore } from "../src/store/SettingStore";
import { formatCurrency } from "../src/utils/currency";

type FilterButtonProps = {
  title: "All" | "Income" | "Expense";
  active: boolean;
  onPress: () => void;
};

const FilterButton = ({
  title,
  active,
  onPress,
}: FilterButtonProps) => {
  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withTiming(
      active ? 1.05 : 1,
      {
        duration: 300,
      }
    );
  }, [active]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: scale.value,
      },
    ],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <AppButton
        variant={active ? "primary" : "outline"}
        onPress={onPress}
      >
        {title}
      </AppButton>
    </Animated.View>
  );
};

const Transaction = () => {
  const router = useRouter();

  const expenses = useExpenseStore(
    (state) => state.expenses
  );

  const currency = useSettingsStore(
    (state) => state.currency
  );

  const [filter, setFilter] = useState<
    "All" | "Income" | "Expense"
  >("All");

  const [search, setSearch] = useState("");

  const filteredExpenses = expenses.filter((item) => {
    const matchesType =
      filter === "All" ||
      item.type === filter;

    const matchesSearch =
      item.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.category
        .toLowerCase()
        .includes(search.toLowerCase());

    return matchesType && matchesSearch;
  });

  return (
    <SafeAreaView className="flex-1 bg-background dark:bg-dark-background px-4">
      <View className="relative flex-row items-center justify-center py-3">
        <Pressable
          className="absolute left-0 p-1"
          onPress={() => router.back()}
        >
          <Ionicons
            name="return-down-back-outline"
            size={24}
            color="#2B2B2B"
          />
        </Pressable>

        <Text className="font-poppins-semibold text-xl text-text-primary dark:text-dark-text-primary">
          Transactions
        </Text>
      </View>

      <View className="gap-4">
        <Search
          search={search}
          setSearch={setSearch}
        />

        <View className="flex-row gap-3">
          <FilterButton
            title="All"
            active={filter === "All"}
            onPress={() => setFilter("All")}
          />

          <FilterButton
            title="Expense"
            active={filter === "Expense"}
            onPress={() =>
              setFilter("Expense")
            }
          />

          <FilterButton
            title="Income"
            active={filter === "Income"}
            onPress={() =>
              setFilter("Income")
            }
          />
        </View>
      </View>

      <FlatList
        className="flex-1 mt-4"
        data={filteredExpenses}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          gap: 12,
          paddingBottom: 30,
          flexGrow: 1,
        }}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center">
            <Ionicons
              name="receipt-outline"
              size={42}
              color="#6B705C"
            />

            <Text className="font-poppins-semibold text-text-primary dark:text-dark-text-primary mt-3">
              No transactions found
            </Text>

            <Text className="font-poppins text-sm text-text-secondary dark:text-dark-text-secondary mt-1">
              Try another search or filter
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <View className="w-full bg-white dark:bg-dark-surface rounded-2xl p-3 flex-row justify-between items-center">
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
                  color="#2B2B2B"
                />
              </View>

              <View className="flex-1">
                <Text
                  numberOfLines={1}
                  className="font-poppins-semibold text-base text-text-primary dark:text-dark-text-primary"
                >
                  {item.title}
                </Text>

                <Text className="font-poppins text-xs text-text-secondary dark:text-dark-text-secondary">
                  {item.category}
                </Text>
              </View>
            </View>

            <View className="flex-row items-center gap-1">
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

              <Pressable
                onPress={() =>
                  router.push({
                    pathname:
                      "/editTransaction/[id]",
                    params: {
                      id: item.id,
                    },
                  })
                }
                className="p-2"
              >
                <Ionicons
                  name="ellipsis-vertical"
                  size={20}
                  color="#6B705C"
                />
              </Pressable>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Transaction;