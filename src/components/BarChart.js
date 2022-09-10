import React from "react";
import {Bar} from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
  );

const BarChart = ({dataChart}) => {
 
    return (
        <div>
            <Bar data={dataChart} />
        </div>
    )
}

export default BarChart;