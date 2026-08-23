import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useEffect} from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Pressable, Text, TextInput, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../src/components/Nav";
import DateTimePicker from "@react-native-community/datetimepicker";
import AppButton from "../src/components/AppButton";
import { useExpenseStore } from "../src/store/ExpenseStore";
const AddExpense = () => {
  const router = useRouter();
  const isDark = useColorScheme() === "dark";
  const addExpense = useExpenseStore((state) => state.addExpense);
  const [amount, setAmount] = useState(""); 
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [category, setCategory] = useState("Choose the category");
  const [notes, setNotes] = useState("");
  const [type, setType] = useState<"Expense" | "Income">("Expense");
  const data = [
    {
      id: 1,
      title: "Food",
      icon: "fast-food-outline",
      bg: "bg-[#FFB703]",
    },
    {
      id: 2,
      title: "Transport",
      icon: "car-outline",
      bg: "bg-[#7BDFF2]",
    },
    {
      id: 3,
      title: "Shopping",
      icon: "cart-outline",
      bg: "bg-[#F7A1C4]",
    },
    {
      id: 4,
      title: "Bills",
      icon: "cash-outline",
      bg: "bg-[#85BB65]",
    },
    {
      id: 5,
      title: "Others",
      icon: "ellipsis-horizontal-circle-outline",
      bg: "bg-[#A78BFA]",
    },
  ];
  const expenseScale = useSharedValue(1);
const incomeScale = useSharedValue(1);

useEffect(() => {
  expenseScale.value = withTiming(type === "Expense" ? 1.05 : 1, {
    duration: 300,
  });

  incomeScale.value = withTiming(type === "Income" ? 1.05 : 1, {
    duration: 300,
  });
}, [type]);

const expenseStyle = useAnimatedStyle(() => ({
  transform: [{ scale: expenseScale.value }],
}));

const incomeStyle = useAnimatedStyle(() => ({
  transform: [{ scale: incomeScale.value }],
}));
  return (
    <SafeAreaView className="flex-1 w-full bg-background px-4 dark:bg-dark-background">
      <View className="relative flex-row items-center justify-center py-3">
        <Pressable className="absolute left-0" onPress={() => router.back()}>
          <Ionicons name="return-down-back-outline" size={24} color={isDark ? "#F5F5F5" : "#2B2B2B"} />
        </Pressable>
        <Text className="font-poppins-semibold text-xl text-text-primary dark:text-dark-text-primary">
          Add Transaction
        </Text>
      </View>
      <View className="flex justify-center items-center">
  <View className="flex-row justify-center items-center gap-4 bg-surface dark:bg-dark-surface p-2 rounded-2xl">
    <Animated.View style={expenseStyle}>
      <Pressable
        className={
          type === "Expense"
            ? "bg-[#d8f3dc] dark:bg-primary rounded-2xl p-2"
            : "bg-transparent p-2"
        }
        onPress={() => {
          setType("Expense");
        }}
      >
        <Text className="font-poppins-semibold text-text-primary dark:text-dark-text-primary">
          Expense
        </Text>
      </Pressable>
    </Animated.View>

    <Text className="font-poppins-semibold text-text-primary dark:text-dark-text-primary">|</Text>

    <Animated.View style={incomeStyle}>
      <Pressable
        className={
          type === "Income"
            ? "bg-[#d8f3dc] dark:bg-primary rounded-2xl p-2"
            : "bg-transparent p-2"
        }
        onPress={() => {
          setType("Income");
        }}
      >
        <Text className="font-poppins-semibold text-text-primary dark:text-dark-text-primary">
          Income
        </Text>
      </Pressable>
    </Animated.View>
  </View>
</View>
      <View>
        <Text className="font-poppins-semibold mb-1 text-text-primary dark:text-dark-text-primary">Amount</Text>

        <TextInput
          value={amount}
          onChangeText={setAmount}
          placeholder="Enter Amount"
          placeholderTextColor={isDark ? "#F5F5F5" : "#6B705C"}
          keyboardType="numeric"
          className="w-full h-12 border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-surface rounded-md px-3 mb-4 text-text-primary dark:text-dark-text-primary"
        />
      </View>
      <View>
        <Text className="font-poppins-semibold mb-1 text-text-primary dark:text-dark-text-primary">Title</Text>

        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Enter Title"
          placeholderTextColor={isDark ? "#F5F5F5" : "#6B705C"}
          className="w-full h-12 border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-surface rounded-md px-3 mb-4 text-text-primary dark:text-dark-text-primary"
        />
      </View>
      <View className="w-full">
        <Text className="font-poppins-semibold mb-1 text-text-primary dark:text-dark-text-primary">Category</Text>

        <Pressable
          onPress={() => setCategoryOpen(!categoryOpen)}
          className="w-full h-12 flex-row items-center justify-between border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-surface rounded-md px-3"
        >
          <Text className="font-poppins text-text-secondary dark:text-dark-text-secondary">{category}</Text>

          <Ionicons
            name={categoryOpen ? "chevron-up" : "chevron-down"}
            size={20}
            color="#6B705C"
          />
        </Pressable>

        {categoryOpen && (
          <View className="w-full bg-white dark:bg-dark-surface rounded-2xl border border-gray-200 dark:border-gray-700 mt-2 overflow-hidden">
            {data.map((item) => (
              <Pressable
                key={item.id}
                onPress={() => {
                  setCategory(item.title);
                  setCategoryOpen(false);
                }}
                className="w-full px-3 py-3 border-b border-gray-100 flex-row items-center gap-2"
              >
                <View
                  className={`w-9 h-9 rounded-full items-center justify-center ${item.bg}`}
                >
                  <Ionicons name={item.icon as any} size={18} color="#2B2B2B" />
                </View>

                <Text className="font-poppins text-text-primary dark:text-dark-text-primary">
                  {item.title}
                </Text>
              </Pressable>
            ))}
          </View>
        )}
      </View>
      <View className="py-3">
        <Text className="font-poppins-semibold mb-1 text-text-primary dark:text-dark-text-primary">Date</Text>

        <Pressable
          onPress={() => setShowDatePicker(true)}
          className="w-full h-12 flex-row items-center justify-between border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-surface rounded-md px-3"
        >
          <Text className="font-poppins text-text-secondary dark:text-dark-text-secondary">
            {date.toLocaleDateString()}
          </Text>

          <Ionicons name="calendar-outline" size={20} color="#6B705C" />
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
        <Text className="font-poppins-semibold mb-1 text-text-primary dark:text-dark-text-primary">Notes (Optional)</Text>
        <TextInput
          value={notes}
          onChangeText={setNotes}
          multiline
          textAlignVertical="top"
          placeholder="Enter notes"
          placeholderTextColor={isDark ? "#F5F5F5" : "#6B705C"}
          className="w-full h-36 border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-surface rounded-md px-3 mb-4 text-text-primary dark:text-dark-text-primary"
        />
      </View>
      <AppButton
        variant="outline"
        onPress={() => {
          addExpense({
            id: Date.now().toString(),
            title,
            amount: Number(amount),
            category,
            date: date.toISOString(),
            notes,
            type,
          });

          router.back();
        }}
      >
        Save Expense
      </AppButton>
      <Navbar />
    </SafeAreaView>
  );
};

export default AddExpense;
