import { Text, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";

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
    { value: mondayTotal, label: "Mon", frontColor: "#2E8B57" },
    { value: tuesdayTotal, label: "Tue", frontColor: "#2E8B57" },
    { value: wednesdayTotal, label: "Wed", frontColor: "#2E8B57" },
    { value: thursdayTotal, label: "Thu", frontColor: "#2E8B57" },
    { value: fridayTotal, label: "Fri", frontColor: "#2E8B57" },
    { value: saturdayTotal, label: "Sat", frontColor: "#2E8B57" },
    { value: sundayTotal, label: "Sun", frontColor: "#2E8B57" },
  ];

  const yearlyData = [
    { value: janTotal, label: "Jan", frontColor: "#2E8B57" },
    { value: febTotal, label: "Feb", frontColor: "#2E8B57" },
    { value: marTotal, label: "Mar", frontColor: "#2E8B57" },
    { value: aprTotal, label: "Apr", frontColor: "#2E8B57" },
    { value: mayTotal, label: "May", frontColor: "#2E8B57" },
    { value: junTotal, label: "Jun", frontColor: "#2E8B57" },
    { value: julTotal, label: "Jul", frontColor: "#2E8B57" },
    { value: augTotal, label: "Aug", frontColor: "#2E8B57" },
    { value: sepTotal, label: "Sep", frontColor: "#2E8B57" },
    { value: octTotal, label: "Oct", frontColor: "#2E8B57" },
    { value: novTotal, label: "Nov", frontColor: "#2E8B57" },
    { value: decTotal, label: "Dec", frontColor: "#2E8B57" },
  ];

  const chartData = period === "Week" ? weeklyData : yearlyData;

  return (
    <View className="w-full bg-white rounded-2xl overflow-hidden">
      <Text className="font-poppins-semibold text-lg text-text-primary mb-4 p-5">
        Expense by Time
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
    "0",
    "200",
    "400",
    "600",
    "800",
    "1000",
  ]}

  yAxisTextStyle={{
    color: "#6B705C",
    fontSize: 11,
    fontFamily: "Poppins_400Regular",
  }}

  xAxisLabelTextStyle={{
    color: "#6B705C",
    fontSize: 10,
    fontFamily: "Poppins_400Regular",
  }}

  rulesColor="#E5E7EB"
  xAxisColor="#D1D5DB"
  yAxisColor="#D1D5DB"
/>
    </View>
  );
};

export default ExpenseBarChart;