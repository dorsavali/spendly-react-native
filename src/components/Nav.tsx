import { Ionicons } from "@expo/vector-icons";
import { ComponentProps, useState } from "react";
import { Pressable, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const Navbar = () => {
  type IconName = ComponentProps<typeof Ionicons>["name"];

  type MenuType = {
    id: number;
    title: string;
    icon: IconName;
  };

  const data: MenuType[] = [
    { id: 1, title: "Home", icon: "home-outline" },
    { id: 2, title: "Statistics", icon: "stats-chart-outline" },
    { id: 3, title: "Add", icon: "add-circle-outline" },
    { id: 4, title: "Transactions", icon: "pricetags-outline" },
    { id: 5, title: "Profile", icon: "person-outline" },
  ];

  const [activeTab, setActiveTab] = useState(1);

  return (
    <View className="flex-row bg-white rounded-2xl items-center justify-around">
      {data.map((item) => {
        const isAdd = item.id === 3;
        const isActive = activeTab === item.id;

        const scale = useSharedValue(1);

        const animatedStyle = useAnimatedStyle(() => ({
          transform: [{ scale: scale.value }],
        }));

        return (
          <Pressable
            key={item.id}
            onPress={() => {
              if (!isAdd) {
                setActiveTab(item.id);
              }
            }}
            onPressIn={() => {
              scale.value = withTiming(isAdd ? 1.12 : 0.96, {
                duration: 120,
              });
            }}
            onPressOut={() => {
              scale.value = withSpring(isAdd ? 1 : isActive ? 1.04 : 1, {
                damping: 18,
                stiffness: 110,
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
                  color={isAdd ? "#2B2B2B" : isActive ? "#2E8B57" : "#6B705C"}
                />

                <Text
                  className={
                    isAdd
                      ? "font-poppins text-xs text-text-primary"
                      : `font-poppins text-xs ${
                          isActive
                            ? "text-primary font-poppins-semibold"
                            : "text-text-primary"
                        }`
                  }
                >
                  {item.title}
                </Text>
              </View>
            </Animated.View>
          </Pressable>
        );
      })}
    </View>
  );
};

export default Navbar;
