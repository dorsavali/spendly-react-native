import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { TextInput, View } from "react-native";

const Search = () => {
  const [search, setSearch] = useState("");
  return (
    <View className="flex-row justify-center items-center rounded-2xl">
        <Ionicons name="search-outline" size={26} className="absolute z-10 top-2 left-1" color={"#adb5bd"}></Ionicons>
        <TextInput
      value={search}
      onChangeText={setSearch}
      placeholder="Search transactions..."
      keyboardType="default"
      className="w-full h-12 border rounded-2xl border-gray-300 bg-white rounded-md px-10 mb-4 text-gray-300"
    />
    </View>
  );
};

export default Search;
