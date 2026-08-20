import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ComponentProps } from "react";
import { Pressable, Text, View } from "react-native";
import { useExpenseStore } from "../store/ExpenseStore";

type IconName = ComponentProps<typeof Ionicons>["name"];

type CategoryType = {
  id: number;
  title: string;
  icon: IconName;
  bg: string;
};

const Categories = () => {
  const expenses = useExpenseStore((state) => state.expenses);

  const data: CategoryType[] = [
    {
      id: 1,
      title: "Food",
      icon: "fast-food-outline",
      bg: "bg-[#FFB703]",
    },
    {
      id: 2,
      title: "Transport",
      icon: "car-outline",
      bg: "bg-[#7BDFF2]",
    },
    {
      id: 3,
      title: "Shopping",
      icon: "cart-outline",
      bg: "bg-[#F7A1C4]",
    },
    {
      id: 4,
      title: "Bills",
      icon: "cash-outline",
      bg: "bg-[#85BB65]",
    },
  ];

  return (
    <View className="w-full gap-4 px-5">
      <View className="flex-row justify-between items-center">
        <Text className="font-poppins-semibold text-xl text-text-primary dark:text-dark-text-primary">
          Categories
        </Text>
      </View>

      <View className="flex-row justify-between gap-2 bg-white dark:bg-dark-surface rounded-2xl py-2">
        {data.map((item) => {
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
                className={`p-2 rounded-2xl ${item.bg}`}
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