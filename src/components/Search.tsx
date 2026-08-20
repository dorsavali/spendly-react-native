import { Ionicons } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

type SearchProps = {
  search: string;
  setSearch: (value: string) => void;
};

const Search = ({ search, setSearch }: SearchProps) => {
  return (
    <View className="flex-row items-center rounded-2xl">
      <Ionicons
        name="search-outline"
        size={26}
        className="absolute z-10 left-3"
        color="#adb5bd"
      />

      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search transactions..."
        className="w-full h-12 border rounded-2xl border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-surface px-12 text-text-secondary dark:text-dark-text-secondary"
      />
    </View>
  );
};

export default Search;