import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

ChartJS.defaults.color = "white";

export default function DoughnutComp() {
  const data = {
    labels: [
      "Vitamin A",
      "Vitamin B",
      "Vitamin C",
      "Vitamin D",
      "Vitamin E",
      "Vitamin K",
      "Iron",
      "Calcium",
      "Magnesium",
      "Zinc",
      "Iodine",
      "Selenium",
      "Folate",
      "Carbohydrate",
      "Protein",
      "Fats",
    ],
    datasets: [
      {
        label: "Nutrient Deficiency Percentage",
        data: [10, 3, 6, 18, 10, 1, 10, 3, 6, 18, 10, 1, 12, 14, 20, 8],
        backgroundColor: [
          "rgb(101, 222, 241)",
          "rgb(171, 241, 101)",
          "rgb(101, 101, 241)",
          "rgb(101, 241, 171)",
          "rgb(241, 101, 241)",
          "rgb(101, 206, 241)",
          "rgb(241, 101, 101)",
          "rgb(136, 101, 241)",
          "rgb(241, 171, 101)",
          "rgb(206, 101, 241)",
          "rgb(241, 241, 101)",
          "rgb(241, 101, 101)",
          "rgb(101, 136, 241)",
          "rgb(241, 101, 171)",
          "rgb(101, 241, 241)",
          "rgb(171, 101, 241)",
          "rgb(101, 241, 101)",
          "rgb(101, 171, 241)",
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Nutrient Deficiency Breakdown",
        font: {
          size: "20",
          color: "white",
        },
      },
    },
  };

  return (
    <>
      <Doughnut data={data} options={options} />
    </>
  );
}
