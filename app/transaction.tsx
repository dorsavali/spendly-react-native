import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "../src/components/Search";

const Transaction = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 w-full px-4">
      <View className="relative flex-row items-center justify-center py-3">
        <Pressable className="absolute left-0" onPress={() => router.back()}>
          <Ionicons name="return-down-back-outline" size={24} />
        </Pressable>
        <Text className="font-poppins-semibold text-xl text-text-primary">
          Transactions
        </Text>
      </View>
      <Search />
    </SafeAreaView>
  );
};

export default Transaction;
