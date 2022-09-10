import {useEffect, useState} from 'react';
import './App.css';
import BarChart from './components/BarChart';
import { orderList } from './data';

function App() {
  const [dataChart, setDataChart] = useState({
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

  return (
    <div className="App">
      <h1>Test</h1>
      {!!dataChart.labels.length && <BarChart dataChart={dataChart}/>}
    </div>
  );
}

export default App;
