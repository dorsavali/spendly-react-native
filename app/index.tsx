import { Image, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Redirect, useRouter } from "expo-router";


import { useAuthStore } from "../src/store/AuthStrore";
import AppButton from "../src/components/AppButton";


export default function Index() {
  const router = useRouter();

  const isLoggedIn = useAuthStore(
    (state) => state.isLoggedIn
  );
  const hasSeenSplash = useAuthStore((state) => state.hasSeenSplash);
  const hasHydrated = useAuthStore((state) => state.hasHydrated);
  const completeSplash = useAuthStore((state) => state.completeSplash);

  if (!hasHydrated) {
    return null;
  }

  if (isLoggedIn) {
    return <Redirect href="/home" />;
  }

  if (hasSeenSplash) {
    return <Redirect href="/login" />;
  }

  return (
    <LinearGradient
      colors={[
        "#2F6B53",
        "#45A873",
        "#91DDB0",
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="w-full h-full items-center justify-center"
    >
      <View className="w-full h-1/2 items-center justify-center pt-10">
        <View className="h-[300px] w-[300px] rounded-full bg-background dark:bg-dark-background items-center justify-center">
          <Image
            source={require("../src/assets/images/splash.webp")}
            className="!h-full !w-full"
          />
        </View>
      </View>

      <View className="w-full h-1/2 items-center justify-center gap-6 px-6">
        <Text className="font-poppins-semibold text-5xl text-white">
          Spendly
        </Text>

        <Text className="font-poppins text-2xl text-white">
          Take Control of Your Finances
        </Text>

        <Text className="text-center font-poppins text-lg text-white">
          Easily track, Analyze, and Optimize Your Spending in one place
        </Text>

        <AppButton
          variant="primary"
          onPress={() => {
            completeSplash();
            router.replace("/login");
          }}
        >
          Get Started
        </AppButton>
      </View>
    </LinearGradient>
  );
}
