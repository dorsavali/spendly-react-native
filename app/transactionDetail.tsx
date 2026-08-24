import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Alert, Pressable, Text, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useExpenseStore } from "../src/store/ExpenseStore";
import { useSettingsStore } from "../src/store/SettingStore";
import { formatCurrency } from "../src/utils/currency";
import { categoryTranslationKey, languageLocale, useTranslation } from "../src/i18n/translations";

const TransactionDetail = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const isDark = useColorScheme() === "dark";
  const iconColor = isDark ? "#F5F5F5" : "#2B2B2B";
  const { t, language } = useTranslation();

  const transaction = useExpenseStore((state) =>
    state.expenses.find((item) => item.id === id)
  );
  const currency = useSettingsStore((state) => state.currency);
  const deleteExpense = useExpenseStore((state) => state.deleteExpense);

  const handleDelete = () => {
    Alert.alert(
      t("deleteQuestion"),
      t("deleteMessage"),
      [
        { text: t("cancel"), style: "cancel" },
        {
          text: t("delete"),
          style: "destructive",
          onPress: () => {
            deleteExpense(id);
            router.dismissAll();
            router.replace("/transaction");
          },
        },
      ]
    );
  };

  if (!transaction) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-background dark:bg-dark-background">
        <Text className="font-poppins-semibold text-text-primary dark:text-dark-text-primary">
          {t("transactionNotFound")}
        </Text>
      </SafeAreaView>
    );
  }

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
          {t("transactionDetails")}
        </Text>

        <Pressable
          className="absolute right-0 p-1"
          onPress={() =>
            router.push({
              pathname: "/editTransaction",
              params: { id: transaction.id },
            })
          }
        >
          <Ionicons name="create-outline" size={24} color={iconColor} />
        </Pressable>
      </View>

      <View className="mt-4 rounded-2xl bg-white dark:bg-dark-surface p-4 gap-5">
        <View>
          <Text className="font-poppins text-sm text-text-secondary dark:text-dark-text-secondary">
            {t("title")}
          </Text>
          <Text className="font-poppins-semibold text-lg text-text-primary dark:text-dark-text-primary">
            {transaction.title}
          </Text>
        </View>

        <View className="flex-row justify-between gap-4">
          <View className="flex-1">
            <Text className="font-poppins text-sm text-text-secondary dark:text-dark-text-secondary">
              {t("amount")}
            </Text>
            <Text
              className={`font-poppins-semibold text-lg ${
                transaction.type === "Expense" ? "text-danger" : "text-success"
              }`}
            >
              {transaction.type === "Expense" ? "- " : "+ "}
              {formatCurrency(transaction.amount, currency, language)}
            </Text>
          </View>

          <View className="flex-1">
            <Text className="font-poppins text-sm text-text-secondary dark:text-dark-text-secondary">
              {t("type")}
            </Text>
            <Text className="font-poppins-semibold text-lg text-text-primary dark:text-dark-text-primary">
              {t(transaction.type === "Expense" ? "expense" : "income")}
            </Text>
          </View>
        </View>

        <View className="flex-row justify-between gap-4">
          <View className="flex-1">
            <Text className="font-poppins text-sm text-text-secondary dark:text-dark-text-secondary">
              {t("category")}
            </Text>
            <Text className="font-poppins-semibold text-text-primary dark:text-dark-text-primary">
              {t(categoryTranslationKey(transaction.category))}
            </Text>
          </View>

          <View className="flex-1">
            <Text className="font-poppins text-sm text-text-secondary dark:text-dark-text-secondary">
              {t("date")}
            </Text>
            <Text className="font-poppins-semibold text-text-primary dark:text-dark-text-primary">
              {new Date(transaction.date).toLocaleDateString(languageLocale(language))}
            </Text>
          </View>
        </View>

        <View>
          <Text className="font-poppins text-sm text-text-secondary dark:text-dark-text-secondary">
            {t("notes")}
          </Text>
          <Text className="font-poppins text-base text-text-primary dark:text-dark-text-primary mt-1">
            {transaction.notes?.trim() || t("noNotes")}
          </Text>
        </View>
      </View>

      <Pressable
        onPress={handleDelete}
        className="mt-5 flex-row items-center justify-center gap-2 rounded-xl bg-red-500 px-4 py-3 active:opacity-60"
      >
        <Ionicons name="trash-outline" size={20} color="#FFFFFF" />
        <Text className="font-poppins-semibold text-white">{t("deleteTransaction")}</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default TransactionDetail;
