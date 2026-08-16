import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../src/components/Nav";
import DateTimePicker from "@react-native-community/datetimepicker";
import AppButton from "../src/components/AppButton";
import { useExpenseStore } from "../src/store/ExpenseStore";
const AddExpense = () => {
  const router = useRouter();
  const addExpense = useExpenseStore((state) => state.addExpense);
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [category, setCategory] = useState("Choose the category");
  const [notes, setNotes] = useState("");
  const data = [
    {
      id: 1,
      title: "Food",
      icon: "fast-food-outline",
      spend: "$200",
      bg: "bg-[#FFB703]",
    },
    {
      id: 2,
      title: "Transport",
      icon: "car-outline",
      spend: "$100",
      bg: "bg-[#7BDFF2]",
    },
    {
      id: 3,
      title: "Shopping",
      icon: "cart-outline",
      spend: "$300",
      bg: "bg-[#F7A1C4]",
    },
    {
      id: 4,
      title: "Bills",
      icon: "cash-outline",
      spend: "$400",
      bg: "bg-[#F4D35E]",
    },
  ];

  return (
    <SafeAreaView className="flex-1 w-full px-4">
      <View className="relative flex-row items-center justify-center py-3">
        <Pressable className="absolute left-0" onPress={() => router.back()}>
          <Ionicons name="return-down-back-outline" size={24} />
        </Pressable>
        <Text className="font-poppins-semibold text-xl text-text-primary">
          Add Expense
        </Text>
      </View>
      <View>
        <Text className="font-poppins-semibold mb-1">Amount</Text>

        <TextInput
          value={amount}
          onChangeText={setAmount}
          placeholder="Enter Amount"
          keyboardType="numeric"
          className="w-full h-12 border border-gray-300 bg-white rounded-md px-3 mb-4"
        />
      </View>
      <View>
        <Text className="font-poppins-semibold mb-1">Title</Text>

        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Enter Title"
          className="w-full h-12 border border-gray-300 bg-white rounded-md px-3 mb-4"
        />
      </View>
      <View className="w-full">
        <Text className="font-poppins-semibold mb-1">Category</Text>

        <Pressable
          onPress={() => setCategoryOpen(!categoryOpen)}
          className="w-full h-12 flex-row items-center justify-between border border-gray-300 bg-white rounded-md px-3"
        >
          <Text className="font-poppins text-text-secondary">{category}</Text>

          <Ionicons
            name={categoryOpen ? "chevron-up" : "chevron-down"}
            size={20}
            color="#6B705C"
          />
        </Pressable>

        {categoryOpen && (
          <View className="w-full bg-white rounded-2xl border border-gray-200 mt-2 overflow-hidden">
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

                <Text className="font-poppins text-text-primary">
                  {item.title}
                </Text>
              </Pressable>
            ))}
          </View>
        )}
      </View>
      <View className="py-3">
        <Text className="font-poppins-semibold mb-1">Date</Text>

        <Pressable
          onPress={() => setShowDatePicker(true)}
          className="w-full h-12 flex-row items-center justify-between border border-gray-300 bg-white rounded-md px-3"
        >
          <Text className="font-poppins text-text-secondary">
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
        <Text className="font-poppins-semibold mb-1">Notes (Optional)</Text>
        <TextInput
          value={notes}
          onChangeText={setNotes}
          multiline
          textAlignVertical="top"
          placeholder="Enter notes"
          className="w-full h-36 border border-gray-300 bg-white rounded-md px-3 mb-4"
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
