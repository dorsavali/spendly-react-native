import { Ionicons } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";

const RecentTransation = () => {
    return ( <View className="flex-1 gap-5 w-full bg-white rounded-2xl p-3">
        <Text className="font-poppins-semibold text-xl text-text-primary">
            Recent Transactions
        </Text>
        <View className="flex-row w-full justify-between  items-center">
                <View className="flex-row justify-start gap-3">
                    <Ionicons name="car-sport-outline" className="p-2 rounded-2xl " size={30} />
            <View >
                <Text className="font-poppins-semibold text-lg text-text-primary">Taxi</Text>
                <Text className="font-poppins text-sm text-text-secondary">Transport</Text>
            </View>
                </View>
            <View>
                <Text className="font-poppins text-sm text-text-secondary">Today</Text>
            </View>
            <View>
                <Text className="font-poppins-semibold text-lg text-text-primary">- $15.00</Text>
            </View>
        </View>
        <View className="flex-row w-full justify-between  items-center">
                <View className="flex-row justify-start gap-3">
                    <Ionicons name="cart-outline" className="p-2 rounded-2xl " size={30} />
            <View >
                <Text className="font-poppins-semibold text-lg text-text-primary">Lidl</Text>
                <Text className="font-poppins text-sm text-text-secondary">Shopping</Text>
            </View>
                </View>
            <View>
                <Text className="font-poppins text-sm text-text-secondary">Today</Text>
            </View>
            <View>
                <Text className="font-poppins-semibold text-lg text-text-primary">- $19.00</Text>
            </View>
        </View>
        <View className="flex-row w-full justify-between  items-center">
                <View className="flex-row justify-start gap-3">
                    <Ionicons name="fast-food-outline" className="p-2 rounded-2xl " size={30} />
            <View >
                <Text className="font-poppins-semibold text-lg text-text-primary">mcDonald</Text>
                <Text className="font-poppins text-sm text-text-secondary">Food</Text>
            </View>
                </View>
            <View>
                <Text className="font-poppins text-sm text-text-secondary">Today</Text>
            </View>
            <View>
                <Text className="font-poppins-semibold text-lg text-text-primary">- $20.00</Text>
            </View>
        </View>
    </View> );
}
 
export default RecentTransation;