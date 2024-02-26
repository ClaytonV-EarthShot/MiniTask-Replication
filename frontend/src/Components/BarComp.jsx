import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function BarComp(labels, labelOne, labelTwo, dataOne, dataTwo) {
  console.log(labels);
  // console.log(dataOne);
  // console.log(dataTwo);

  const data = {
    labels: labels.labels,
    datasets: [
      {
        label: labels.labelOne,
        data: labels.dataOne,
        backgroundColor: "rgb(101, 206, 241)",
      },
      {
        label: labels.labelTwo,
        data: labels.dataTwo,
        backgroundColor: "rgb(241, 241, 101)",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
      },
      y: {
        ticks: {
          color: "white",
        },
      },
    },
  };

  return (
    <>
      <Bar data={data} options={options}></Bar>
    </>
  );
}
