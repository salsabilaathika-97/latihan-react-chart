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
        <div style = {{ width: "1000px" }}>
            <Bar data={dataChart} />
        </div>
    )
}

export default BarChart;