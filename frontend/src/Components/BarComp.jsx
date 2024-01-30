import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function BarComp() {

  const data = {
    labels: [
    'Maize', 'Rice', 'Wheat', 'Sorghum', 'Millet', 'Barley', 'Soybean', 
    'Common Bean', 'Faba Bean', 'Pea', 'Chickpea', 'Cowpea', 'Pigeonpea',
    'Groudnut'
    ],
    datasets: [
      {
        label: 'Rainfed',
        data: [10, 15, 33, 1, 22, 17, 14, 12, 12, 6, 3 ,30, 23, 18, 28],
        backgroundColor: 'rgb(101, 206, 241)'
      },
      {
        label: 'Irrigated',
        data: [1, 25, 13, 21, 12, 7, 4, 22, 30, 16, 23, 3, 3, 28, 8],
        backgroundColor: 'rgb(241, 241, 101)'
      }
    ]
  }

  const options = {
    plugins: { 
      legend: {
        labels: {
          color: "white"
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: 'white'
        }
      },
      y: {
        ticks: {
          color: 'white'
        }
      }
    }
  }

  return (
    <>
      <Bar data={data} options={options}></Bar>
    </>
  );

}