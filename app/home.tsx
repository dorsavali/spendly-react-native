import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
    const {username} = useLocalSearchParams();
    return ( 
        <SafeAreaProvider>
            <SafeAreaView className="flex-1  bg-background p-6 w-full">
                <Text className="font-poppins-semibold text-xl text-text-primary">
                    Welcome Back, {username}!
                </Text>
                
            </SafeAreaView>
        </SafeAreaProvider>
     );
}
 
export default Home;