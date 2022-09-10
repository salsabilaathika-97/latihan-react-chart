import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({buyChart}) => {
    return (
        <div>
            <Pie data = {buyChart}/>
        </div>
    )
}

export default PieChart;