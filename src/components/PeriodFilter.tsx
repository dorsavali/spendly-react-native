import { useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type Props = {
  period: "Week" | "Year";
  setPeriod: (value: "Week" | "Year") => void;
};

const PeriodFilter = ({ period, setPeriod }: Props) => {
  const weekScale = useSharedValue(1);
  const yearScale = useSharedValue(1);

  useEffect(() => {
    weekScale.value = withTiming(period === "Week" ? 1.05 : 1, {
      duration: 300,
    });

    yearScale.value = withTiming(period === "Year" ? 1.05 : 1, {
      duration: 300,
    });
  }, [period]);

  const weekStyle = useAnimatedStyle(() => ({
    transform: [{ scale: weekScale.value }],
  }));

  const yearStyle = useAnimatedStyle(() => ({
    transform: [{ scale: yearScale.value }],
  }));

  return (
    <View className="flex justify-center items-center">
      <View className="flex-row justify-center items-center gap-4 bg-surface p-2 rounded-2xl">
        <Animated.View style={weekStyle}>
          <Pressable
            className={
              period === "Week"
                ? "bg-[#d8f3dc] rounded-2xl p-2"
                : "bg-transparent p-2"
            }
            onPress={() => setPeriod("Week")}
          >
            <Text className="font-poppins-semibold text-text-primary">
              Week
            </Text>
          </Pressable>
        </Animated.View>

        <Text>|</Text>

        <Animated.View style={yearStyle}>
          <Pressable
            className={
              period === "Year"
                ? "bg-[#d8f3dc] rounded-2xl p-2"
                : "bg-transparent p-2"
            }
            onPress={() => setPeriod("Year")}
          >
            <Text className="font-poppins-semibold text-text-primary">
              Year
            </Text>
          </Pressable>
        </Animated.View>
      </View>
    </View>
  );
};

export default PeriodFilter;