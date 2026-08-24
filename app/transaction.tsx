import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  Text,
  useColorScheme,
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
import { CATEGORIES, getCategory } from "../src/constants/categories";
import { categoryTranslationKey, languageLocale, useTranslation } from "../src/i18n/translations";

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
  const { t } = useTranslation();
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
        variant={active ? "outline" : "primary"}
        onPress={onPress}
      >
        {t(title === "All" ? "all" : title === "Income" ? "income" : "expense")}
      </AppButton>
    </Animated.View>
  );
};

const Transaction = () => {
  const router = useRouter();
  const isDark = useColorScheme() === "dark";
  const iconColor = isDark ? "#F5F5F5" : "#2B2B2B";
  const secondaryIconColor = isDark ? "#F5F5F5" : "#6B705C";
  const { t, language } = useTranslation();

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
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState<"All" | "7 days" | "30 days">("All");
  const [sortOrder, setSortOrder] = useState<"Newest" | "Oldest">("Newest");

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
        .includes(search.toLowerCase()) ||
      item.notes?.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      categoryFilter === "All" || item.category === categoryFilter;

    const ageInDays =
      (Date.now() - new Date(item.date).getTime()) / (1000 * 60 * 60 * 24);
    const matchesDate =
      dateFilter === "All" || ageInDays <= (dateFilter === "7 days" ? 7 : 30);

    return matchesType && matchesSearch && matchesCategory && matchesDate;
  }).sort((a, b) =>
    sortOrder === "Newest"
      ? new Date(b.date).getTime() - new Date(a.date).getTime()
      : new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <SafeAreaView className="flex-1 bg-background dark:bg-dark-background px-4">
      <View className="relative flex-row items-center justify-center py-3">
        <Pressable
          className="absolute left-0 w-11 h-11 rounded-xl items-center justify-center bg-white dark:bg-dark-surface active:bg-surface dark:active:bg-gray-700"
          onPress={() => router.back()}
          hitSlop={8}
        >
          <Ionicons
            name="return-down-back-outline"
            size={24}
            color={iconColor}
          />
        </Pressable>

        <Text className="font-poppins-semibold text-xl text-text-primary dark:text-dark-text-primary">
          {t("transactions")}
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

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8 }}>
          {["All", ...CATEGORIES.map((item) => item.title)].map((item) => (
            <Pressable
              key={item}
              onPress={() => setCategoryFilter(item)}
              className={`rounded-full px-3 py-2 border active:opacity-60 ${
                categoryFilter === item
                  ? "bg-primary border-primary"
                  : "bg-white dark:bg-dark-surface border-gray-300 dark:border-gray-700"
              }`}
            >
              <Text className={`font-poppins text-xs ${categoryFilter === item ? "text-white" : "text-text-primary dark:text-dark-text-primary"}`}>
                {item === "All" ? t("all") : t(categoryTranslationKey(item))}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        <View className="flex-row gap-2">
          {(["All", "7 days", "30 days"] as const).map((item) => (
            <Pressable
              key={item}
              onPress={() => setDateFilter(item)}
              className={`flex-1 items-center rounded-xl py-2 active:opacity-60 ${dateFilter === item ? "bg-primary" : "bg-white dark:bg-dark-surface"}`}
            >
              <Text className={`font-poppins text-xs ${dateFilter === item ? "text-white" : "text-text-primary dark:text-dark-text-primary"}`}>
                {item === "All" ? t("all") : item === "7 days" ? t("sevenDays") : t("thirtyDays")}
              </Text>
            </Pressable>
          ))}

          <Pressable
            onPress={() => setSortOrder((value) => value === "Newest" ? "Oldest" : "Newest")}
            className="flex-row items-center gap-1 rounded-xl bg-white dark:bg-dark-surface px-3 active:opacity-60"
          >
            <Ionicons name="swap-vertical-outline" size={16} color={secondaryIconColor} />
            <Text className="font-poppins text-xs text-text-primary dark:text-dark-text-primary">{t(sortOrder === "Newest" ? "newest" : "oldest")}</Text>
          </Pressable>
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
              color={secondaryIconColor}
            />

            <Text className="font-poppins-semibold text-text-primary dark:text-dark-text-primary mt-3">
              {expenses.length === 0 ? t("noTransactions") : t("noTransactionsFound")}
            </Text>

            <Text className="font-poppins text-sm text-text-secondary dark:text-dark-text-secondary mt-1">
              {expenses.length === 0 ? t("addFirstTransaction") : t("tryAnotherFilter")}
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <View className="w-full bg-white dark:bg-dark-surface rounded-2xl p-3 flex-row justify-between items-center">
            <View className="flex-row items-center gap-3 flex-1 min-w-0">
              <View className="w-11 h-11 rounded-2xl bg-surface dark:bg-dark-surface items-center justify-center">
                <Ionicons
                  name={getCategory(item.category).icon}
                  size={24}
                  color={iconColor}
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
                  {t(categoryTranslationKey(item.category))}
                </Text>
              </View>
            </View>

            <View className="flex-row items-center gap-1 ml-2 flex-shrink-0">
              <View className="items-end gap-1">
                <Text className="font-poppins text-xs text-text-secondary dark:text-dark-text-secondary">
                  {new Date(
                    item.date
                  ).toLocaleDateString(languageLocale(language))}
                </Text>

                {item.type === "Expense" ? (
                  <Text className="font-poppins-semibold text-base text-danger">
                    -{" "}
                    {formatCurrency(
                      item.amount,
                      currency,
                      language
                    )}
                  </Text>
                ) : (
                  <Text className="font-poppins-semibold text-base text-success">
                    +{" "}
                    {formatCurrency(
                      item.amount,
                      currency,
                      language
                    )}
                  </Text>
                )}
              </View>

              <Pressable
                onPress={() =>
                  router.push({
                    pathname:
                      "/transactionDetail",
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
                  color={secondaryIconColor}
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
