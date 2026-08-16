import {  Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";
type IconName = ComponentProps<typeof Ionicons>["name"];
type CategoryType = {
    id: number;
    title: string;
    icon: IconName;
    spend: string;
    bg: string;
}
const Categories  = () => {
    const data: CategoryType[]=[
        {
            id:1,
            title : "Food",
            icon : "fast-food-outline",
            spend:"$200",
            bg: "bg-[#FFB703]"
        },
        {
            id:2,
            title : "Transport",
            icon : "car-outline",
            spend:"$100",
            bg: "bg-[#7BDFF2]"
        },
        {
            id:3,
            title : "Shopping",
            icon : "cart-outline",
            spend:"$300",
            bg: "bg-[#F7A1C4]"
        },
        {
            id:4,
            title : "Bills",
            icon : "cash-outline",
            spend:"$400",
            bg: "bg-[#F4D35E]"
        }
    ]
    return ( 
        <View className="flex justify-around gap-4">
             <View className="flex-row justify-between items-center">
                <Text className="font-poppins-semibold text-xl text-text-primary">
                Categories
            </Text>  
            <Text className="font-poppins-semibold text-sm text-primary">
                see all
            </Text>  
                </View>    
            <View className="flex-row justify-between gap-2">
                {data.map((item,index) => (
                <View className="flex w-1/5 items-center gap-2 py-2 rounded-xl"  key={index}>
                    <Ionicons name={item.icon} className={`p-2 rounded-2xl ${item.bg}`} size={30} />
                    <Text className="font-poppins text-sm text-text-primary">{item.title}</Text>
                    <Text className="font-poppins-semibold text-sm text-text-primary">{item.spend}</Text>
                </View>
            ))}
            </View>
            
        </View>
     );
}
 
export default Categories;