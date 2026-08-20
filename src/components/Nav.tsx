import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { Pressable, Text, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, usePathname } from "expo-router";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

type IconName = ComponentProps<typeof Ionicons>["name"];

type MenuType = {
  id: number;
  title: string;
  icon: IconName;
  route?: "/home" | "/statistics" | "/transaction" | "/setting";
};

type TabItemProps = {
  item: MenuType;
  active: boolean;
  onPress: () => void;
};

const TabItem = ({ item, active, onPress }: TabItemProps) => {
  const isAdd = item.id === 3;
  const isDark = useColorScheme() === "dark";
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => {
        scale.value = withTiming(isAdd ? 1.12 : 0.96, {
          duration: 120,
        });
      }}
      onPressOut={() => {
        scale.value = withSpring(1, {
          damping: 18,
          stiffness: 100,
          mass: 0.8,
        });
      }}
      className="w-1/5 items-center justify-center py-1"
    >
      <Animated.View style={animatedStyle}>
        <View
          className={
            isAdd
              ? "w-14 h-14 rounded-2xl bg-accent items-center justify-center"
              : "items-center justify-center gap-1"
          }
        >
          <Ionicons
            name={item.icon}
            size={isAdd ? 22 : 18}
            color={
              isAdd
                ? isDark
                  ? "#F5F5F5"
                  : "#2B2B2B"
                : active
                ? "#2E8B57"
                : isDark
                ? "#F5F5F5"
                : "#6B705C"
            }
          />

          <Text
            className={
              isAdd
                ? "font-poppins text-xs text-text-primary dark:text-dark-text-primary"
                : `font-poppins text-xs ${
                    active
                      ? "text-primary font-poppins-semibold"
                      : "text-text-primary dark:text-dark-text-primary"
                  }`
            }
          >
            {item.title}
          </Text>
        </View>
      </Animated.View>
    </Pressable>
  );
};

const Navbar = () => {
  const pathname = usePathname();

  const data: MenuType[] = [
    { id: 1, title: "Home", icon: "home-outline", route: "/home" },
    {
      id: 2,
      title: "Statistics",
      icon: "stats-chart-outline",
      route: "/statistics",
    },
    { id: 3, title: "Add", icon: "add-circle-outline" },
    {
      id: 4,
      title: "Transactions",
      icon: "pricetags-outline",
      route: "/transaction",
    },
    { id: 5, title: "setting", icon: "person-outline", route: "/setting" },
  ];

  const handlePress = (item: MenuType) => {
    if (item.id === 3) {
      router.push("/addTransaction");
      return;
    }

    if (item.route) {
      router.push(item.route);
    }
  };

  return (
    <SafeAreaView
      edges={["bottom"]}
      className="absolute bottom-0 left-0 right-0 bg-white dark:bg-dark-surface"
    >
      <View className="flex-row bg-white dark:bg-dark-surface rounded-t-2xl items-center justify-around px-2 py-1">
        {data.map((item) => (
          <TabItem
            key={item.id}
            item={item}
            active={item.route ? pathname === item.route : false}
            onPress={() => handlePress(item)}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Navbar;
