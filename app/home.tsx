import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Categories from "../src/components/HomeCategories";
import Navbar from "../src/components/Nav";
import RecentTransation from "../src/components/RecentTransactions";


import { formatCurrency } from "../src/utils/currency";
import { useSettingsStore } from "../src/store/SettingStore";
import { useExpenseStore } from "../src/store/ExpenseStore";
import { useAuthStore } from "../src/store/AuthStrore";
import { getAvatar } from "../src/constants/avatars";
import { useTranslation } from "../src/i18n/translations";

const Home = () => {
  const { t, language } = useTranslation();
  const username = useAuthStore((state) => state.username);
  const avatarId = useAuthStore((state) => state.avatarId);
  const avatar = getAvatar(avatarId);

  const expenses = useExpenseStore(
    (state) => state.expenses
  );

  const currency = useSettingsStore(
    (state) => state.currency
  );

  const totalIncome = expenses
    .filter((item) => item.type === "Income")
    .reduce(
      (sum, item) => sum + item.amount,
      0
    );

  const totalExpense = expenses
    .filter((item) => item.type === "Expense")
    .reduce(
      (sum, item) => sum + item.amount,
      0
    );

  const totalBalance =
    totalIncome - totalExpense;

  return (
    <SafeAreaView className="flex-1 bg-background dark:bg-dark-background w-full gap-4">
      <View className="flex-row justify-between items-center gap-2 px-5 py-3">
        <Text className="font-poppins-semibold text-xl text-text-primary dark:text-dark-text-primary">
          {t("welcomeBack", { name: username })}
        </Text>

        <Pressable
          onPress={() => router.push("/profile")}
          className="w-10 h-10 items-center justify-center rounded-full active:opacity-60"
          style={{ backgroundColor: avatar.backgroundColor }}
        >
          <Ionicons
            name={avatar.icon}
            size={24}
            color="#FFFFFF"
          />
        </Pressable>
      </View>

      <View className="w-full gap-3 px-5">
        <View className="bg-white dark:bg-dark-surface w-full h-52 rounded-2xl justify-center items-center gap-6">
          <Text className="font-poppins-semibold text-xl text-text-secondary dark:text-dark-text-secondary">
            {t("totalBalance")}
          </Text>

          <Text className="font-poppins-bold text-2xl text-text-primary dark:text-white">
            {formatCurrency(
              totalBalance,
              currency,
              language
            )}
          </Text>
        </View>

        <View className="flex-row gap-2">
          <View className="bg-white dark:bg-dark-surface flex-1 rounded-2xl h-32 justify-center items-center gap-6">
            <Text className="font-poppins-semibold text-lg text-success">
              {t("income")}
            </Text>

            <Text className="font-poppins-bold text-xl text-text-primary dark:text-white">
              {formatCurrency(
                totalIncome,
                currency,
                language
              )}
            </Text>
          </View>

          <View className="bg-white dark:bg-dark-surface flex-1 rounded-2xl h-32 justify-center items-center gap-6">
            <Text className="font-poppins-semibold text-lg text-danger">
              {t("expense")}
            </Text>

            <Text className="font-poppins-bold text-xl text-text-primary dark:text-white">
              {formatCurrency(
                totalExpense,
                currency,
                language
              )}
            </Text>
          </View>
        </View>
      </View>

      <Categories />

      <RecentTransation />

      <Navbar />
    </SafeAreaView>
  );
};

export default Home;
