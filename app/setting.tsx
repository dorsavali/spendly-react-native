import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  Currency,
  useSettingsStore,
} from "../src/store/SettingStore";

import { useExpenseStore } from "../src/store/ExpenseStore";

const Settings = () => {
  const router = useRouter();
  const isDark = useColorScheme() === "dark";

  const currency = useSettingsStore(
    (state) => state.currency
  );

  const setCurrency = useSettingsStore(
    (state) => state.setCurrency
  );

  const resetExpenses = useExpenseStore(
    (state) => state.resetExpenses
  );

  const [currencyOpen, setCurrencyOpen] =
    useState(false);

  const currencies: Currency[] = [
    "EUR",
    "USD",
    "GBP",
  ];

  const confirmReset = () => {
    Alert.alert(
      "Reset all transactions?",
      "This action cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Reset", style: "destructive", onPress: resetExpenses },
      ]
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-background dark:bg-dark-background px-4">
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
          Settings
        </Text>
      </View>

      <View className="gap-5 mt-4">
        <View className="gap-2">
          <Text className="font-poppins-semibold text-sm text-text-secondary dark:text-dark-text-secondary">
            Preferences
          </Text>

          <View className="bg-white dark:bg-dark-surface rounded-2xl overflow-hidden">
            <Pressable
              onPress={() =>
                setCurrencyOpen(!currencyOpen)
              }
              className="flex-row items-center justify-between p-4 active:bg-surface dark:active:bg-gray-700"
            >
              <View className="flex-row items-center gap-3">
                <View className="w-10 h-10 bg-surface dark:bg-dark-surface rounded-xl items-center justify-center">
                  <Ionicons
                    name="cash-outline"
                    size={22}
                    color="#2E8B57"
                  />
                </View>

                <View>
                  <Text className="font-poppins-semibold text-text-primary dark:text-dark-text-primary">
                    Currency
                  </Text>

                  <Text className="font-poppins text-xs text-text-secondary dark:text-dark-text-secondary">
                    {currency}
                  </Text>
                </View>
              </View>

              <Ionicons
                name={
                  currencyOpen
                    ? "chevron-up-outline"
                    : "chevron-down-outline"
                }
                size={20}
                color="#6B705C"
              />
            </Pressable>

            {currencyOpen && (
              <View className="border-t border-gray-100">
                {currencies.map((item) => (
                  <Pressable
                    key={item}
                    onPress={() => {
                      setCurrency(item);
                      setCurrencyOpen(false);
                    }}
                    className="flex-row items-center justify-between px-4 py-3 active:bg-surface dark:active:bg-gray-700"
                  >
                    <Text className="font-poppins text-text-primary dark:text-dark-text-primary">
                      {item}
                    </Text>

                    {currency === item && (
                      <Ionicons
                        name="checkmark-outline"
                        size={20}
                        color="#2E8B57"
                      />
                    )}
                  </Pressable>
                ))}
              </View>
            )}
          </View>
        </View>

        <View className="gap-2">
          <Text className="font-poppins-semibold text-sm text-text-secondary dark:text-dark-text-secondary">
            Data
          </Text>

          <View className="bg-white dark:bg-dark-surface rounded-2xl overflow-hidden">
            <Pressable
              onPress={confirmReset}
              className="flex-row items-center justify-between p-4 active:bg-red-50 dark:active:bg-gray-700"
            >
              <View className="flex-row items-center gap-3">
                <View className="w-10 h-10 bg-red-100 rounded-xl items-center justify-center">
                  <Ionicons
                    name="trash-outline"
                    size={22}
                    color="#C65D4B"
                  />
                </View>

                <View>
                  <Text className="font-poppins-semibold text-danger">
                    Reset Transactions
                  </Text>

                  <Text className="font-poppins text-xs text-text-secondary dark:text-dark-text-secondary">
                    Delete all saved transactions
                  </Text>
                </View>
              </View>

              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color="#6B705C"
              />
            </Pressable>
          </View>
        </View>

        <View className="gap-2">
          <Text className="font-poppins-semibold text-sm text-text-secondary dark:text-dark-text-secondary">
            About
          </Text>

          <View className="bg-white dark:bg-dark-surface rounded-2xl">
            <View className="flex-row items-center justify-between p-4">
              <View className="flex-row items-center gap-3">
                <View className="w-10 h-10 bg-surface dark:bg-dark-surface rounded-xl items-center justify-center">
                  <Ionicons
                    name="information-circle-outline"
                    size={22}
                    color="#2E8B57"
                  />
                </View>

                <Text className="font-poppins-semibold text-text-primary dark:text-dark-text-primary">
                  Version
                </Text>
              </View>

              <Text className="font-poppins text-text-secondary dark:text-dark-text-secondary">
                1.0.0
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
