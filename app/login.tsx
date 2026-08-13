import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AppButton from "../src/components/AppButton";
import { useRouter } from "expo-router";

const Login = () => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");
  const router = useRouter();
  return (
    <SafeAreaProvider className="flex justify-center items-center bg-background">
      <SafeAreaView className="flex-1 justify-center items-center   p-6 w-full ">
        <KeyboardAvoidingView className="flex-1 w-full" behavior="padding">
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "center",
              padding: 12,
            }}
            keyboardShouldPersistTaps="handled"
          >
            <View className="flex justify-center items-center mb-6">
              <Image
                source={require("../src/assets/images/logo.webp")}
                className="w-32 h-32 mb-4 "
              />
              <Text className="font-poppins-semibold text-2xl text-text-primary mb-6">
                Take Control of Your Finances
              </Text>
            </View>
            <View className="flex justify-center items-start gap-1 w-full">
              <Text className="font-poppins-semibold text-xl text-text-primary ">
                Welcome Back!
              </Text>
              <Text className="font-poppins-semibold text-md text-text-secondary">
                Login to your account
              </Text>
            </View>
            <View className="flex justify-center items-center  w-full mt-6">
              <TextInput
                onChangeText={setText}
                value={text}
                className="w-full h-12 border border-gray-300 rounded-md p-2 mb-4"
                placeholder="Username"
              />
              <TextInput
                onChangeText={setNumber}
                value={number}
                className="w-full h-12 border border-gray-300 rounded-md p-2 mb-4"
                placeholder="Password"
                keyboardType="numeric"
              />
              <AppButton variant="outline" onPress={() => router.push("/home")}>
                Login
              </AppButton>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Login;
