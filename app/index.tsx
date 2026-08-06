import { Image, Text, View } from "react-native";
import AppButton from "../src/components/AppButton";
import { LinearGradient } from 'expo-linear-gradient';
export default function Index() {
  return (
    <LinearGradient colors={["#1F4D3A", "#2E8B57", "#6FCF97"]} start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }} className=" w-full h-full flex items-center justify-center  ">
      <View className="w-full h-1/2 items-center justify-center pt-10  ">
      <View className="h-[300px] w-[300px] rounded-full bg-background items-center justify-center flex">
        <Image
        source={require("../src/assets/images/splash.webp")}
        className="!h-full !w-full"
      />
      </View>
    </View>
    <View className="w-full h-1/2 items-center justify-center gap-6 px-6 ">
      <Text className="font-poppins-semibold text-5xl text-white">Spendly</Text>
      <Text className="font-poppins text-2xl text-white">Take Control of Your Finances</Text>
      <Text className="text-center font-poppins text-lg text-white">Easily track, Analyze, and Optimize Your Spending in one place</Text>
      <AppButton variant="primary">
      Get Started
    </AppButton>
    </View>
    </LinearGradient>
  );
}
