import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({buyChart}) => {
    return (
        <div style = {{ width: "1000px" }}>
            <Pie data = {buyChart}/>
        </div>
    )
}

export default PieChart;