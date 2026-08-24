import { Ionicons } from "@expo/vector-icons";
import { TextInput, useColorScheme, View } from "react-native";
import { useTranslation } from "../i18n/translations";

type SearchProps = {
  search: string;
  setSearch: (value: string) => void;
};

const Search = ({ search, setSearch }: SearchProps) => {
  const isDark = useColorScheme() === "dark";
  const { t } = useTranslation();

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
        placeholder={t("searchTransactions")}
        placeholderTextColor={isDark ? "#F5F5F5" : "#6B705C"}
        className="w-full h-12 border rounded-2xl border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-surface px-12 font-poppins text-text-secondary dark:text-dark-text-secondary"
      />
    </View>
  );
};

export default Search;
