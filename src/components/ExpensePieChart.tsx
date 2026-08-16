import { Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";

type Expense = {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
  type: "Expense" | "Income";
  notes?: string;
};

type Props = {
  expenses: Expense[];
};

const ExpensePieChart = ({ expenses }: Props) => {
  const totalExpense = expenses.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const filteredFood = expenses.filter(
    (item) => item.category === "Food"
  );

  const totalFood = filteredFood.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const foodPercent =
    totalExpense === 0
      ? 0
      : ((totalFood / totalExpense) * 100).toFixed(0);

  const filteredBills = expenses.filter(
    (item) => item.category === "Bills"
  );

  const totalBills = filteredBills.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const BillsPercent =
    totalExpense === 0
      ? 0
      : ((totalBills / totalExpense) * 100).toFixed(0);

  const filteredTransport = expenses.filter(
    (item) => item.category === "Transport"
  );

  const totalTransport = filteredTransport.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const TransportPercent =
    totalExpense === 0
      ? 0
      : ((totalTransport / totalExpense) * 100).toFixed(0);

  const filteredShopping = expenses.filter(
    (item) => item.category === "Shopping"
  );

  const totalShopping = filteredShopping.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const ShoppingPercent =
    totalExpense === 0
      ? 0
      : ((totalShopping / totalExpense) * 100).toFixed(0);

  const chartData = [
    { value: totalFood, color: "#FFB703", text: "Food" },
    { value: totalTransport, color: "#7BDFF2", text: "Transport" },
    { value: totalShopping, color: "#F7A1C4", text: "Shopping" },
    { value: totalBills, color: "#85BB65", text: "Bills" },
  ];

  return (
    <View className="flex-row justify-between gap-2">
      <PieChart
        data={chartData}
        donut
        radius={90}
        innerRadius={60}
        centerLabelComponent={() => (
          <View className="items-center">
            <Text className="font-poppins-bold text-lg">
              ${totalExpense}
            </Text>

            <Text className="font-poppins text-xs text-text-secondary">
              Total Expense
            </Text>
          </View>
        )}
      />

      <View className="flex justify-start gap-4 w-1/2">
        <View className="flex-row justify-between">
          <View className="flex-row gap-2">
            <View className="bg-[#FFB703] w-4 h-4 rounded-sm" />

            <View>
              <Text className="font-poppins-semibold text-sm text-text-primary">
                Food
              </Text>

              <Text className="font-poppins-semibold text-sm text-text-secondary">
                {totalFood}
              </Text>
            </View>
          </View>

          <Text>{foodPercent}%</Text>
        </View>

        <View className="flex-row justify-between">
          <View className="flex-row gap-2">
            <View className="bg-[#7BDFF2] w-4 h-4 rounded-sm" />

            <View>
              <Text className="font-poppins-semibold text-sm text-text-primary">
                Transport
              </Text>

              <Text className="font-poppins-semibold text-sm text-text-secondary">
                {totalTransport}
              </Text>
            </View>
          </View>

          <Text>{TransportPercent}%</Text>
        </View>

        <View className="flex-row justify-between">
          <View className="flex-row gap-2">
            <View className="bg-[#F7A1C4] w-4 h-4 rounded-sm" />

            <View>
              <Text className="font-poppins-semibold text-sm text-text-primary">
                Shopping
              </Text>

              <Text className="font-poppins-semibold text-sm text-text-secondary">
                {totalShopping}
              </Text>
            </View>
          </View>

          <Text>{ShoppingPercent}%</Text>
        </View>

        <View className="flex-row justify-between">
          <View className="flex-row gap-2">
            <View className="bg-[#85BB65] w-4 h-4 rounded-sm" />

            <View>
              <Text className="font-poppins-semibold text-sm text-text-primary">
                Bills
              </Text>

              <Text className="font-poppins-semibold text-sm text-text-secondary">
                {totalBills}
              </Text>
            </View>
          </View>

          <Text>{BillsPercent}%</Text>
        </View>
      </View>
    </View>
  );
};

export default ExpensePieChart;