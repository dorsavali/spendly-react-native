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
import { useTranslation } from "../src/i18n/translations";


const SetUsername = () => {
  const username = useAuthStore((state) => state.username);
  const [text, setText] = useState(username);
  const [error, setError] = useState("");
  const isDark = useColorScheme() === "dark";
  const { t } = useTranslation();

  const router = useRouter();

  const setUsername = useAuthStore((state) => state.setUsername);

  const handleSetUsername = () => {
    const nextError = text.trim().length < 2 ? t("usernameMin") : "";
    setError(nextError);
    if (nextError) return;

    setUsername(text.trim());

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
                {t("takeControl")}
              </Text>
            </View>

            <View className="flex justify-center items-start gap-1 w-full">
              <Text className="font-poppins-semibold text-xl text-text-primary dark:text-dark-text-primary">
                {t("chooseUsername")}
              </Text>

              <Text className="font-poppins-semibold text-md text-text-secondary dark:text-dark-text-secondary">
                {t("usernameHint")}
              </Text>
            </View>

            <View className="flex justify-center items-center w-full mt-6">
              <TextInput
                onChangeText={setText}
                value={text}
                className="w-full h-12 border border-gray-300 dark:border-gray-700 bg-white p-2 mb-4 font-poppins text-text-primary dark:bg-dark-surface dark:text-dark-text-primary rounded-md"
                placeholder={t("username")}
                placeholderTextColor={isDark ? "#F5F5F5" : "#6B705C"}
              />
              {!!error && (
                <Text className="self-start font-poppins text-xs text-danger -mt-3 mb-3">
                  {error}
                </Text>
              )}

              <AppButton
                variant="outline"
                onPress={handleSetUsername}
              >
                {t("continue")}
              </AppButton>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SetUsername;
