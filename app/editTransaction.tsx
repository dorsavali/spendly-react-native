import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useExpenseStore } from "../src/store/ExpenseStore";
import AppButton from "../src/components/AppButton";
import { CATEGORIES } from "../src/constants/categories";



const EditTransaction = () => {
  const router = useRouter();
  const isDark = useColorScheme() === "dark";

  const { id } = useLocalSearchParams<{ id: string }>();

  const expenses = useExpenseStore((state) => state.expenses);

  const updateExpense = useExpenseStore(
    (state) => state.updateExpense
  );

  const transaction = expenses.find(
    (item) => item.id === id
  );

  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [category, setCategory] = useState("");
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [type, setType] =
    useState<"Expense" | "Income">("Expense");

  const [errors, setErrors] = useState({ amount: "", title: "", category: "" });

  useEffect(() => {
    if (!transaction) return;

    setAmount(transaction.amount.toString());
    setTitle(transaction.title);
    setCategory(transaction.category);
    setDate(new Date(transaction.date));
    setNotes(transaction.notes ?? "");
    setType(transaction.type);
  }, [transaction]);

  if (!transaction) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-background dark:bg-dark-background">
        <Text className="font-poppins-semibold">
          Transaction not found
        </Text>
      </SafeAreaView>
    );
  }

  const handleSave = () => {
    const nextErrors = {
      amount: !amount.trim() || !Number.isFinite(Number(amount)) || Number(amount) <= 0
        ? "Enter an amount greater than zero"
        : "",
      title: title.trim() ? "" : "Title is required",
      category: category ? "" : "Choose a category",
    };

    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    updateExpense(id, {
      title: title.trim(),
      amount: Number(amount),
      category,
      date: date.toISOString(),
      notes: notes.trim(),
      type,
    });
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 w-full bg-background px-4 dark:bg-dark-background">
      <View className="relative flex-row items-center justify-center py-3">
        <Pressable
          className="absolute left-0 w-11 h-11 rounded-xl items-center justify-center bg-white dark:bg-dark-surface active:bg-surface dark:active:bg-gray-700"
          onPress={() => router.back()}
          hitSlop={8}
        >
          <Ionicons
            name="return-down-back-outline"
            size={24}
            color={isDark ? "#F5F5F5" : "#2B2B2B"}
          />
        </Pressable>

        <Text className="font-poppins-semibold text-xl text-text-primary dark:text-dark-text-primary">
          Edit Transaction
        </Text>
      </View>

      <KeyboardAvoidingView className="flex-1" behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" contentContainerStyle={{ paddingBottom: 32 }}>

      <View className="flex justify-center items-center">
        <View className="flex-row justify-center items-center gap-4 bg-surface dark:bg-dark-surface p-2 rounded-2xl">
          <Pressable
            className={
              type === "Expense"
                ? "bg-[#d8f3dc] rounded-2xl p-2"
                : "bg-transparent p-2"
            }
            onPress={() => setType("Expense")}
          >
            <Text className="font-poppins-semibold text-text-primary dark:text-dark-text-primary">
              Expense
            </Text>
          </Pressable>

          <Text>|</Text>

          <Pressable
            className={
              type === "Income"
                ? "bg-[#d8f3dc] rounded-2xl p-2"
                : "bg-transparent p-2"
            }
            onPress={() => setType("Income")}
          >
            <Text className="font-poppins-semibold text-text-primary dark:text-dark-text-primary">
              Income
            </Text>
          </Pressable>
        </View>
      </View>

      <View>
        <Text className="font-poppins-semibold mb-1 text-text-primary dark:text-dark-text-primary">
          Amount
        </Text>

        <TextInput
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          className="w-full h-12 border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-surface rounded-md px-3 mb-4 text-text-primary dark:text-dark-text-primary"
        />
        {!!errors.amount && <Text className="font-poppins text-xs text-danger -mt-3 mb-3">{errors.amount}</Text>}
      </View>

      <View>
        <Text className="font-poppins-semibold mb-1 text-text-primary dark:text-dark-text-primary">
          Title
        </Text>

        <TextInput
          value={title}
          onChangeText={setTitle}
          className="w-full h-12 border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-surface rounded-md px-3 mb-4 text-text-primary dark:text-dark-text-primary"
        />
        {!!errors.title && <Text className="font-poppins text-xs text-danger -mt-3 mb-3">{errors.title}</Text>}
      </View>

      <View className="w-full">
        <Text className="font-poppins-semibold mb-1 text-text-primary dark:text-dark-text-primary">
          Category
        </Text>

        <Pressable
          onPress={() =>
            setCategoryOpen(!categoryOpen)
          }
          className="w-full h-12 flex-row items-center justify-between border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-surface rounded-md px-3"
        >
          <Text className="font-poppins text-text-secondary dark:text-dark-text-secondary">
            {category}
          </Text>

          <Ionicons
            name={
              categoryOpen
                ? "chevron-up"
                : "chevron-down"
            }
            size={20}
            color="#6B705C"
          />
        </Pressable>

        {categoryOpen && (
          <View className="w-full bg-white dark:bg-dark-surface rounded-2xl border border-gray-200 dark:border-gray-700 mt-2 overflow-hidden">
            {CATEGORIES.map((item) => (
              <Pressable
                key={item.id}
                onPress={() => {
                  setCategory(item.title);
                  setCategoryOpen(false);
                }}
                className="w-full px-3 py-3 border-b border-gray-100 flex-row items-center gap-2"
              >
                <View
                  className={`w-9 h-9 rounded-full items-center justify-center ${item.bgClass}`}
                >
                  <Ionicons
                    name={item.icon as any}
                    size={18}
                    color="#2B2B2B"
                  />
                </View>

                <Text className="font-poppins text-text-primary dark:text-dark-text-primary">
                  {item.title}
                </Text>
              </Pressable>
            ))}
          </View>
        )}
        {!!errors.category && <Text className="font-poppins text-xs text-danger mt-1">{errors.category}</Text>}
      </View>

      <View className="py-3">
        <Text className="font-poppins-semibold mb-1 text-text-primary dark:text-dark-text-primary">
          Date
        </Text>

        <Pressable
          onPress={() =>
            setShowDatePicker(true)
          }
          className="w-full h-12 flex-row items-center justify-between border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-surface rounded-md px-3"
        >
          <Text className="font-poppins text-text-secondary dark:text-dark-text-secondary">
            {date.toLocaleDateString()}
          </Text>

          <Ionicons
            name="calendar-outline"
            size={20}
            color="#6B705C"
          />
        </Pressable>

        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);

              if (selectedDate) {
                setDate(selectedDate);
              }
            }}
          />
        )}
      </View>

      <View>
        <Text className="font-poppins-semibold mb-1 text-text-primary dark:text-dark-text-primary">
          Notes (Optional)
        </Text>

        <TextInput
          value={notes}
          onChangeText={setNotes}
          multiline
          textAlignVertical="top"
          className="w-full h-36 border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-surface rounded-md px-3 mb-4 text-text-primary dark:text-dark-text-primary"
        />
      </View>

      <AppButton
        variant="outline"
        onPress={handleSave}
      >
        Save Changes
      </AppButton>
      </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default EditTransaction;
