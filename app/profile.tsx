import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AppButton from "../src/components/AppButton";
import { useAuthStore } from "../src/store/AuthStrore";

const Profile = () => {
  const router = useRouter();
  const isDark = useColorScheme() === "dark";
  const username = useAuthStore((state) => state.username);
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    router.dismissAll();
    router.replace("/login");
  };

  return (
    <SafeAreaView className="flex-1 bg-background dark:bg-dark-background px-4">
      <View className="relative flex-row items-center justify-center py-3">
        <Pressable
          className="absolute left-0 p-1 active:opacity-60"
          onPress={() => router.back()}
        >
          <Ionicons
            name="return-down-back-outline"
            size={24}
            color={isDark ? "#F5F5F5" : "#2B2B2B"}
          />
        </Pressable>

        <Text className="font-poppins-semibold text-xl text-text-primary dark:text-dark-text-primary">
          Profile
        </Text>
      </View>

      <View className="mt-8 items-center">
        <View className="w-24 h-24 rounded-full items-center justify-center bg-primary">
          <Ionicons name="person-outline" size={48} color="#FFFFFF" />
        </View>

        <Text className="mt-4 font-poppins-bold text-2xl text-text-primary dark:text-dark-text-primary">
          {username}
        </Text>
      </View>

      <View className="mt-10 rounded-2xl bg-white dark:bg-dark-surface p-4">
        <View className="flex-row items-center gap-3">
          <View className="w-10 h-10 rounded-xl bg-surface dark:bg-gray-700 items-center justify-center">
            <Ionicons name="person-circle-outline" size={24} color="#2E8B57" />
          </View>

          <View>
            <Text className="font-poppins text-xs text-text-secondary dark:text-dark-text-secondary">
              Username
            </Text>
            <Text className="font-poppins-semibold text-text-primary dark:text-dark-text-primary">
              {username}
            </Text>
          </View>
        </View>
      </View>

      <AppButton
        variant="danger"
        className="mt-6"
        onPress={handleLogout}
      >
        Log Out
      </AppButton>
    </SafeAreaView>
  );
};

export default Profile;
