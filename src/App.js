import {useEffect, useState} from 'react';
import './App.css';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import { buyList, orderList, pendingList } from './data';

function App() {
  const [dataChart, setDataChart] = useState({
    labels: [],
    datasets: [{
      label: "",
      data: [],
    }],
  });

  const [buyChart, setBuyChart] = useState({
    labels: [],
    datasets: [{
      label: "",
      data: [],
    }],
  });

  const [pendingChart, setPendingChart] = useState({
    labels: [],
    datasets: [{
      label: "",
      data: [],
    }],
  });

  useEffect(()=> {
    setDataChart({
      labels: orderList.map(item => item.date),
      datasets: [{
        label: 'Ini Data Penjualan',
        data: orderList.map(item => item.totalOrder),
        backgroundColor: 'rgba(65, 105, 225)',
      }]
    })
  },[])

  useEffect(() => {
    setBuyChart({
      labels: buyList.map(item => item.date),
      datasets: [{
        label: 'Ini Data Pembelian',
        data: buyList.map(item => item.totalOrder),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
      }]
    })
  },[])

  useEffect(() => {
    setPendingChart({
      labels: pendingList.map(item => item.date),
      datasets: [{
        label: 'Ini Data Pending',
        data: pendingList.map(item => item.totalOrder),
        backgroundColor: 'rgba(95, 158, 160)'
      }]
    })
  },[])

  return (
    <div className="App">
      <h1>Latihan Membuat Chart Menggunakan React</h1>
      {!!dataChart.labels.length && <BarChart dataChart={dataChart}/>}
      {!!buyChart.labels.length && <PieChart buyChart={buyChart}/>}
      {!!pendingChart.labels.length && <LineChart pendingChart={pendingChart}/>}
    </div>
  );
}

export default App;
