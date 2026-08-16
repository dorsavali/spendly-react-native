import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Categories from "../src/components/HomeCategories";
import RecentTransation from "../src/components/RecentTransactions";
import Navbar from "../src/components/Nav";
import { useExpenseStore } from "../src/store/ExpenseStore";
const Home = () => {
  const { username } = useLocalSearchParams();
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1  bg-background  w-full gap-4">
        <View className="flex-row justify-between items-center gap-2 px-5 py-3">
          <Text className="font-poppins-semibold text-xl text-text-primary">
            Welcome Back, {username}!
          </Text>
          <Ionicons name="person-outline" size={24} color="#2E8B57" />
        </View>
        <View className="w-full  flex gap-3 px-5">
          <View className="bg-white w-full h-52 rounded-2xl  flex justify-center items-center gap-6">
            <Text className="font-poppins-semibold text-xl text-text-secondary">
              Total Balance
            </Text>
            <Text className="font-poppins-bold text-2xl">€12,540</Text>
          </View>
          <View className="flex-row justify-between gap-2">
            <View className="bg-white w-1/2 flex rounded-2xl h-32 flex justify-center items-center gap-6">
              <Text className="font-poppins-semibold text-lg text-success">
                Income
              </Text>
              <Text className="font-poppins-bold text-xl">€19,200</Text>
            </View>
            <View className="bg-white w-1/2 flex rounded-2xl h-32 flex justify-center items-center gap-6">
              <Text className="font-poppins-semibold text-lg text-danger">
                Expense
              </Text>
              <Text className="font-poppins-bold text-xl">€6,660</Text>
            </View>
          </View>
        </View>
      <Categories />
      <RecentTransation/>
      <Navbar/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Home;
