import {useEffect, useState} from 'react';
import './App.css';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import { buyList, orderList } from './data';

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

  useEffect(()=> {
    setDataChart({
      labels: orderList.map(item => item.date),
      datasets: [{
        label: 'Ini Data Penjualan',
        data: orderList.map(item => item.totalOrder)
      }]
    })
  },[])

  useEffect(() => {
    setBuyChart({
      labels: buyList.map(item => item.date),
      datasets: [{
        label: 'Ini Data Pembelian',
        data: buyList.map(item => item.totalOrder)
      }]
    })
  },[])

  return (
    <div className="App">
      <h1>Test</h1>
      {!!dataChart.labels.length && <BarChart dataChart={dataChart}/>}
      {!!buyChart.labels.length && <PieChart buyChart={buyChart}/>}
    </div>
  );
}

export default App;
