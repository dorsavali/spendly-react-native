import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { useExpenseStore } from "../store/ExpenseStore";
import { useRouter } from "expo-router";

const RecentTransation = () => {
  const expenses = useExpenseStore((state) => state.expenses);

  const recentExpenses = expenses.slice(-3).reverse();
  const router = useRouter()
if (expenses.length === 0) {
  return (
    
    <View className="w-full bg-white rounded-2xl p-6 items-center gap-5">
        <View className="w-full flex-row justify-between items-center">
          <Text className="font-poppins-semibold text-xl text-text-primary">
            Recent Transactions
          </Text>
  
          <Pressable onPress={()=>router.push("/transaction")}>
            <Text className="font-poppins-semibold text-sm text-text-primary">
            see all
          </Text>
          </Pressable>
        </View>
      <Ionicons
        name="receipt-outline"
        size={36}
        color="#6B705C"
      />

      <Text className="font-poppins-semibold text-text-primary">
        No transactions yet
      </Text>

      <Text className="font-poppins text-sm text-text-secondary">
        Add your first expense
      </Text>
    </View>
  );
}else{
    return (
      <View className="flex gap-5 w-full bg-white rounded-2xl p-3">
        <View className="flex-row justify-between items-center">
          <Text className="font-poppins-semibold text-xl text-text-primary">
            Recent Transactions
          </Text>
  
          <Pressable onPress={()=>router.push("/transaction")}>
            <Text className="font-poppins-semibold text-sm text-text-primary">
            see all
          </Text>
          </Pressable>
        </View>
        
        {recentExpenses.map((item) => (
          
          <View
            key={item.id}
            className="flex-row w-full justify-between items-center"
          >
            <View className="flex-row justify-start items-center gap-3">
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
                size={30}
              />
  
              <View>
                <Text className="font-poppins-semibold text-lg text-text-primary">
                  {item.title}
                </Text>
  
                <Text className="font-poppins text-sm text-text-secondary">
                  {item.category}
                </Text>
              </View>
            </View>
  
            <View>
              <Text className="font-poppins text-sm text-text-secondary">
                {new Date(item.date).toLocaleDateString()}
              </Text>
            </View>
  
            <View>
              <Text className="font-poppins-semibold text-lg text-danger">
                - ${item.amount}
              </Text>
            </View>
          </View>
        ))}
      </View>
    );

}
};

export default RecentTransation;