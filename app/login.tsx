import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  useColorScheme,
  View,
} from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import AppButton from "../src/components/AppButton";
import { useAuthStore } from "../src/store/AuthStrore";


const Login = () => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });
  const isDark = useColorScheme() === "dark";

  const router = useRouter();

  const login = useAuthStore(
    (state) => state.login
  );

  const handleLogin = () => {
    const nextErrors = {
      username: text.trim().length < 2 ? "Enter at least 2 characters" : "",
      password: number.length < 4 ? "Enter at least 4 characters" : "",
    };
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    login(text.trim());

    router.replace("/home");
  };

  return (
    <SafeAreaProvider className="flex justify-center items-center bg-background dark:bg-dark-background">
      <SafeAreaView className="flex-1 justify-center items-center p-6 w-full">
        <KeyboardAvoidingView
          className="flex-1 w-full"
          behavior="padding"
        >
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
                className="w-32 h-32 mb-4"
              />

              <Text className="font-poppins-semibold text-2xl text-text-primary dark:text-dark-text-primary mb-6">
                Take Control of Your Finances
              </Text>
            </View>

            <View className="flex justify-center items-start gap-1 w-full">
              <Text className="font-poppins-semibold text-xl text-text-primary dark:text-dark-text-primary">
                Welcome Back!
              </Text>

              <Text className="font-poppins-semibold text-md text-text-secondary dark:text-dark-text-secondary">
                Login to your account
              </Text>
            </View>

            <View className="flex justify-center items-center w-full mt-6">
              <TextInput
                onChangeText={setText}
                value={text}
                className="w-full h-12 border border-gray-300 dark:border-gray-700 bg-white p-2 mb-4 text-text-primary dark:bg-dark-surface dark:text-dark-text-primary rounded-md"
                placeholder="Username"
                placeholderTextColor={isDark ? "#F5F5F5" : "#6B705C"}
              />
              {!!errors.username && (
                <Text className="self-start font-poppins text-xs text-danger -mt-3 mb-3">
                  {errors.username}
                </Text>
              )}

              <TextInput
                onChangeText={setNumber}
                value={number}
                className="w-full h-12 border border-gray-300 dark:border-gray-700 bg-white p-2 mb-4 text-text-primary dark:bg-dark-surface dark:text-dark-text-primary rounded-md"
                placeholder="Password"
                placeholderTextColor={isDark ? "#F5F5F5" : "#6B705C"}
                secureTextEntry
              />
              {!!errors.password && (
                <Text className="self-start font-poppins text-xs text-danger -mt-3 mb-3">
                  {errors.password}
                </Text>
              )}

              <AppButton
                variant="outline"
                onPress={handleLogin}
              >
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
