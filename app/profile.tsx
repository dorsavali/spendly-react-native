import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useAuthStore } from "../src/store/AuthStrore";
import { AVATARS, getAvatar } from "../src/constants/avatars";
import { useTranslation } from "../src/i18n/translations";

const Profile = () => {
  const router = useRouter();
  const isDark = useColorScheme() === "dark";
  const { t } = useTranslation();
  const username = useAuthStore((state) => state.username);
  const setUsername = useAuthStore((state) => state.setUsername);
  const avatarId = useAuthStore((state) => state.avatarId);
  const updateAvatar = useAuthStore((state) => state.updateAvatar);
  const selectedAvatar = getAvatar(avatarId);
  const [draftUsername, setDraftUsername] = useState(username);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");

  const handleSaveUsername = () => {
    const value = draftUsername.trim();
    if (!value) {
      setError(t("usernameRequired"));
      return;
    }
    setUsername(value);
    setError("");
    setIsEditing(false);
  };

  return (
    <SafeAreaView className="flex-1 bg-background dark:bg-dark-background px-4">
      <View className="relative flex-row items-center justify-center py-3">
        <Pressable
          className="absolute left-0 w-11 h-11 rounded-xl items-center justify-center bg-white dark:bg-dark-surface active:bg-surface dark:active:bg-gray-700"
          onPress={() => router.back()}
          hitSlop={8}
        >
          <Ionicons
            name="return-down-back-outline"
            size={24}
            color={isDark ? "#F5F5F5" : "#2B2B2B"}
          />
        </Pressable>

        <Text className="font-poppins-semibold text-xl text-text-primary dark:text-dark-text-primary">
          {t("profile")}
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 32 }}>
      <View className="mt-8 items-center">
        <View
          className="w-24 h-24 rounded-full items-center justify-center"
          style={{ backgroundColor: selectedAvatar.backgroundColor }}
        >
          <Ionicons name={selectedAvatar.icon} size={48} color="#FFFFFF" />
        </View>

        <Text className="mt-4 font-poppins-bold text-2xl text-text-primary dark:text-dark-text-primary">
          {username}
        </Text>
      </View>

      <View className="mt-8">
        <Text className="mb-3 font-poppins-semibold text-text-primary dark:text-dark-text-primary">
          {t("chooseAvatar")}
        </Text>

        <View className="flex-row flex-wrap justify-between gap-y-3 rounded-2xl bg-white dark:bg-dark-surface p-3">
          {AVATARS.map((avatar) => {
            const isSelected = avatar.id === avatarId;

            return (
              <Pressable
                key={avatar.id}
                onPress={() => updateAvatar(avatar.id)}
                className={`w-24 rounded-2xl border-4 items-center justify-center active:opacity-60 ${
                  isSelected ? "border-primary" : "border-transparent"
                }`}
                style={{ backgroundColor: avatar.backgroundColor, aspectRatio: 1 }}
              >
                <View className="absolute inset-0 items-center justify-center">
                  <Ionicons
                    name={avatar.icon}
                    size={28}
                    color="#FFFFFF"
                    style={{ lineHeight: 28, includeFontPadding: false }}
                  />
                </View>
                {isSelected && (
                  <View className="absolute -right-1 -top-1 rounded-full bg-primary p-1">
                    <Ionicons name="checkmark" size={12} color="#FFFFFF" />
                  </View>
                )}
              </Pressable>
            );
          })}
        </View>
      </View>

      <View className="mt-10 rounded-2xl bg-white dark:bg-dark-surface p-4">
        <View className="flex-row items-center gap-3">
          <View className="w-10 h-10 rounded-xl bg-surface dark:bg-gray-700 items-center justify-center">
            <Ionicons name="person-circle-outline" size={24} color="#2E8B57" />
          </View>

          <View className="flex-1">
            <Text className="font-poppins text-xs text-text-secondary dark:text-dark-text-secondary">
              {t("username")}
            </Text>
            {isEditing ? (
              <TextInput
                value={draftUsername}
                onChangeText={setDraftUsername}
                autoFocus
                placeholder={t("username")}
                placeholderTextColor={isDark ? "#A3A3A3" : "#6B705C"}
                className="mt-1 h-11 rounded-lg border border-gray-300 dark:border-gray-700 px-3 font-poppins text-text-primary dark:text-dark-text-primary"
              />
            ) : (
              <Text className="font-poppins-semibold text-text-primary dark:text-dark-text-primary">
                {username}
              </Text>
            )}
          </View>

          <Pressable
            onPress={isEditing ? handleSaveUsername : () => setIsEditing(true)}
            className="p-2 rounded-lg active:bg-surface dark:active:bg-gray-700"
          >
            <Ionicons name={isEditing ? "checkmark-outline" : "create-outline"} size={22} color="#2E8B57" />
          </Pressable>
        </View>
        {!!error && <Text className="font-poppins text-xs text-danger mt-2">{error}</Text>}
      </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
