import { Text, useColorScheme, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { languageLocale, useTranslation } from "../i18n/translations";
import { formatNumber } from "../utils/currency";

type Expense = {
  id: string;
  amount: number;
  date: string;
};

type Props = {
  expenses: Expense[];
  period: "Week" | "Year";
};

const ExpenseBarChart = ({ expenses, period }: Props) => {
  const isDark = useColorScheme() === "dark";
  const { t, language } = useTranslation();
  const locale = languageLocale(language);
  const dayLabel = (dayIndex: number) => {
    const date = new Date(2024, 0, 1 + dayIndex);
    return new Intl.DateTimeFormat(locale, { weekday: "short" }).format(date);
  };
  const monthLabel = (monthIndex: number) =>
    new Intl.DateTimeFormat(locale, { month: "short" }).format(new Date(2024, monthIndex, 1));
  const now = new Date();

  const currentYear = now.getFullYear();

  const startOfWeek = new Date(now);
  const currentDay = now.getDay();

  const distanceToMonday = currentDay === 0 ? 6 : currentDay - 1;

  startOfWeek.setDate(now.getDate() - distanceToMonday);
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999);

  const currentWeekExpenses = expenses.filter((item) => {
    const itemDate = new Date(item.date);

    return itemDate >= startOfWeek && itemDate <= endOfWeek;
  });

  const currentYearExpenses = expenses.filter((item) => {
    return new Date(item.date).getFullYear() === currentYear;
  });

  const mondayTotal = currentWeekExpenses
    .filter((item) => new Date(item.date).getDay() === 1)
    .reduce((sum, item) => sum + item.amount, 0);

  const tuesdayTotal = currentWeekExpenses
    .filter((item) => new Date(item.date).getDay() === 2)
    .reduce((sum, item) => sum + item.amount, 0);

  const wednesdayTotal = currentWeekExpenses
    .filter((item) => new Date(item.date).getDay() === 3)
    .reduce((sum, item) => sum + item.amount, 0);

  const thursdayTotal = currentWeekExpenses
    .filter((item) => new Date(item.date).getDay() === 4)
    .reduce((sum, item) => sum + item.amount, 0);

  const fridayTotal = currentWeekExpenses
    .filter((item) => new Date(item.date).getDay() === 5)
    .reduce((sum, item) => sum + item.amount, 0);

  const saturdayTotal = currentWeekExpenses
    .filter((item) => new Date(item.date).getDay() === 6)
    .reduce((sum, item) => sum + item.amount, 0);

  const sundayTotal = currentWeekExpenses
    .filter((item) => new Date(item.date).getDay() === 0)
    .reduce((sum, item) => sum + item.amount, 0);

  const janTotal = currentYearExpenses
    .filter((item) => new Date(item.date).getMonth() === 0)
    .reduce((sum, item) => sum + item.amount, 0);

  const febTotal = currentYearExpenses
    .filter((item) => new Date(item.date).getMonth() === 1)
    .reduce((sum, item) => sum + item.amount, 0);

  const marTotal = currentYearExpenses
    .filter((item) => new Date(item.date).getMonth() === 2)
    .reduce((sum, item) => sum + item.amount, 0);

  const aprTotal = currentYearExpenses
    .filter((item) => new Date(item.date).getMonth() === 3)
    .reduce((sum, item) => sum + item.amount, 0);

  const mayTotal = currentYearExpenses
    .filter((item) => new Date(item.date).getMonth() === 4)
    .reduce((sum, item) => sum + item.amount, 0);

  const junTotal = currentYearExpenses
    .filter((item) => new Date(item.date).getMonth() === 5)
    .reduce((sum, item) => sum + item.amount, 0);

  const julTotal = currentYearExpenses
    .filter((item) => new Date(item.date).getMonth() === 6)
    .reduce((sum, item) => sum + item.amount, 0);

  const augTotal = currentYearExpenses
    .filter((item) => new Date(item.date).getMonth() === 7)
    .reduce((sum, item) => sum + item.amount, 0);

  const sepTotal = currentYearExpenses
    .filter((item) => new Date(item.date).getMonth() === 8)
    .reduce((sum, item) => sum + item.amount, 0);

  const octTotal = currentYearExpenses
    .filter((item) => new Date(item.date).getMonth() === 9)
    .reduce((sum, item) => sum + item.amount, 0);

  const novTotal = currentYearExpenses
    .filter((item) => new Date(item.date).getMonth() === 10)
    .reduce((sum, item) => sum + item.amount, 0);

  const decTotal = currentYearExpenses
    .filter((item) => new Date(item.date).getMonth() === 11)
    .reduce((sum, item) => sum + item.amount, 0);

  const weeklyData = [
    { value: mondayTotal, label: dayLabel(0), frontColor: "#2E8B57" },
    { value: tuesdayTotal, label: dayLabel(1), frontColor: "#2E8B57" },
    { value: wednesdayTotal, label: dayLabel(2), frontColor: "#2E8B57" },
    { value: thursdayTotal, label: dayLabel(3), frontColor: "#2E8B57" },
    { value: fridayTotal, label: dayLabel(4), frontColor: "#2E8B57" },
    { value: saturdayTotal, label: dayLabel(5), frontColor: "#2E8B57" },
    { value: sundayTotal, label: dayLabel(6), frontColor: "#2E8B57" },
  ];

  const yearlyData = [
    { value: janTotal, label: monthLabel(0), frontColor: "#2E8B57" },
    { value: febTotal, label: monthLabel(1), frontColor: "#2E8B57" },
    { value: marTotal, label: monthLabel(2), frontColor: "#2E8B57" },
    { value: aprTotal, label: monthLabel(3), frontColor: "#2E8B57" },
    { value: mayTotal, label: monthLabel(4), frontColor: "#2E8B57" },
    { value: junTotal, label: monthLabel(5), frontColor: "#2E8B57" },
    { value: julTotal, label: monthLabel(6), frontColor: "#2E8B57" },
    { value: augTotal, label: monthLabel(7), frontColor: "#2E8B57" },
    { value: sepTotal, label: monthLabel(8), frontColor: "#2E8B57" },
    { value: octTotal, label: monthLabel(9), frontColor: "#2E8B57" },
    { value: novTotal, label: monthLabel(10), frontColor: "#2E8B57" },
    { value: decTotal, label: monthLabel(11), frontColor: "#2E8B57" },
  ];

  const chartData = period === "Week" ? weeklyData : yearlyData;

  return (
    <View className="w-full bg-white dark:bg-dark-surface rounded-2xl overflow-hidden">
      <Text className="font-poppins-semibold text-lg text-text-primary dark:text-dark-text-primary mb-4 p-5">
        {t("expenseByTime")}
      </Text>

      <BarChart
  data={chartData}
  barWidth={period === "Week" ? 24 : 18}
  spacing={period === "Week" ? 19 : 16}
  initialSpacing={10}
  endSpacing={10}

  maxValue={1000}
  noOfSections={5}
  stepValue={200}

  roundedTop
  showGradient

  isAnimated
  animationDuration={900}

  disableScroll={period === "Week"}

  width={period === "Week" ? 310 : undefined}

  yAxisLabelTexts={[
    formatNumber(0, language),
    formatNumber(200, language),
    formatNumber(400, language),
    formatNumber(600, language),
    formatNumber(800, language),
    formatNumber(1000, language),
  ]}

  yAxisTextStyle={{
    color: isDark ? "#A3A3A3" : "#6B705C",
    fontSize: 11,
    fontFamily: "Vazirmatn_400Regular",
  }}

  xAxisLabelTextStyle={{
    color: isDark ? "#A3A3A3" : "#6B705C",
    fontSize: 10,
    fontFamily: "Vazirmatn_400Regular",
  }}

  rulesColor={isDark ? "#374151" : "#E5E7EB"}
  xAxisColor={isDark ? "#4B5563" : "#D1D5DB"}
  yAxisColor={isDark ? "#4B5563" : "#D1D5DB"}
/>
    </View>
  );
};

export default ExpenseBarChart;
