
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
  const mondayTotal = expenses
    .filter((item) => new Date(item.date).getDay() === 1)
    .reduce((sum, item) => sum + item.amount, 0);

  const tuesdayTotal = expenses
    .filter((item) => new Date(item.date).getDay() === 2)
    .reduce((sum, item) => sum + item.amount, 0);

  const wednesdayTotal = expenses
    .filter((item) => new Date(item.date).getDay() === 3)
    .reduce((sum, item) => sum + item.amount, 0);

  const thursdayTotal = expenses
    .filter((item) => new Date(item.date).getDay() === 4)
    .reduce((sum, item) => sum + item.amount, 0);

  const fridayTotal = expenses
    .filter((item) => new Date(item.date).getDay() === 5)
    .reduce((sum, item) => sum + item.amount, 0);

  const saturdayTotal = expenses
    .filter((item) => new Date(item.date).getDay() === 6)
    .reduce((sum, item) => sum + item.amount, 0);

  const sundayTotal = expenses
    .filter((item) => new Date(item.date).getDay() === 0)
    .reduce((sum, item) => sum + item.amount, 0);

  const janTotal = expenses
    .filter((item) => new Date(item.date).getMonth() === 0)
    .reduce((sum, item) => sum + item.amount, 0);

  const febTotal = expenses
    .filter((item) => new Date(item.date).getMonth() === 1)
    .reduce((sum, item) => sum + item.amount, 0);

  const marTotal = expenses
    .filter((item) => new Date(item.date).getMonth() === 2)
    .reduce((sum, item) => sum + item.amount, 0);

  const aprTotal = expenses
    .filter((item) => new Date(item.date).getMonth() === 3)
    .reduce((sum, item) => sum + item.amount, 0);

  const mayTotal = expenses
    .filter((item) => new Date(item.date).getMonth() === 4)
    .reduce((sum, item) => sum + item.amount, 0);

  const junTotal = expenses
    .filter((item) => new Date(item.date).getMonth() === 5)
    .reduce((sum, item) => sum + item.amount, 0);

  const julTotal = expenses
    .filter((item) => new Date(item.date).getMonth() === 6)
    .reduce((sum, item) => sum + item.amount, 0);

  const augTotal = expenses
    .filter((item) => new Date(item.date).getMonth() === 7)
    .reduce((sum, item) => sum + item.amount, 0);

  const sepTotal = expenses
    .filter((item) => new Date(item.date).getMonth() === 8)
    .reduce((sum, item) => sum + item.amount, 0);

  const octTotal = expenses
    .filter((item) => new Date(item.date).getMonth() === 9)
    .reduce((sum, item) => sum + item.amount, 0);

  const novTotal = expenses
    .filter((item) => new Date(item.date).getMonth() === 10)
    .reduce((sum, item) => sum + item.amount, 0);

  const decTotal = expenses
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
    <View className="w-full bg-white rounded-2xl ">
  <Text className="font-poppins-semibold text-lg text-text-primary mb-4 p-5">
    Expense by Time
  </Text>

  <BarChart
    data={chartData}

    barWidth={period === "Week" ? 28 : 18}

    spacing={period === "Week" ? 15 : 16}

    initialSpacing={period === "Week" ? 12 : 10}

    endSpacing={period === "Week" ? 12 : 10}

    maxValue={1000}
    noOfSections={5}

    roundedTop
    showGradient

    isAnimated
    animationDuration={900}

    disableScroll={period === "Week"}

    width={period === "Week" ? 300 : undefined}

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
