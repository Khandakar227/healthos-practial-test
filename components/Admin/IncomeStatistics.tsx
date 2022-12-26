import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { CSSProperties } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options: ChartOptions = {
  maintainAspectRatio : false,
  responsive: true,
  // plugins: {
  //   legend: {
  //     position: "top" as const,
  //   },
  // },
};
export type IncomeType = {
  month: string;
  income: number;
};

function IncomeStatistics({
  incomeData,
  borderColor = "gold",
  fillColor = "gold",
}: {
  incomeData: IncomeType[];
  borderColor?: string;
  fillColor?: string;
}) {
  const data: ChartData<"bar"> = {
    labels: incomeData.map((data) => data.month),
    datasets: [
      {
        xAxisID: "BDT",
        yAxisID: "Month",
        label: "Income",
        data: incomeData.map((data) => data.income),
        borderColor: borderColor,
        backgroundColor: fillColor,
      },
    ],
  };

  return (
    <div className="bg-white py-4 rounded-md shadow font-lato max-w-screen-md w-full overflow-x-hidden">
      <h2 className="font-bold p-4 text-xl"> Income Statistics </h2>
      <div
        className="w-full overflow-x-auto scrollbar"
        style={
          {
            "--scroll-color": "#cdcdcd",
            "--scroll-bg-color": "white",
          } as CSSProperties
        }
      >
        <Bar
          options={options}
          data={data}
          datasetIdKey="income statistics"
          className="mx-auto w-full"
        />
      </div>
    </div>
  );
}

export default IncomeStatistics;
