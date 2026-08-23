import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { CATEGORIES } from "../constants/categories";

const Categories = () => {
  return (
    <View className="w-full gap-4 px-5">
      <View className="flex-row justify-between items-center">
        <Text className="font-poppins-semibold text-xl text-text-primary dark:text-dark-text-primary">
          Categories
        </Text>
      </View>

      <View className="flex-row bg-white dark:bg-dark-surface rounded-2xl py-2 px-1">
        {CATEGORIES.map((item) => {
          return (
            <Pressable
              key={item.id}
              onPress={() =>
                router.push({
                  pathname: "/categoryDetail",
                  params: {
                    category: item.title,
                  },
                })
              }
              className="w-1/5 items-center gap-1 py-2 rounded-xl active:opacity-60"
            >
              <Ionicons
                name={item.icon}
                className={`p-2 rounded-2xl ${item.bgClass}`}
                size={30}
              />

              <Text className="font-poppins text-sm text-text-primary dark:text-dark-text-primary">
                {item.title}
              </Text>


            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default Categories;
