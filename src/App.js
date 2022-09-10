import {useState} from 'react';
import './App.css';
import { orderList } from './data';

function App() {
  const [dataChart, setDataChart] = useState({
    label: [],
    datasets: {
      label: "",
      data: [],
    },
  });

  console.log(orderList);

  return (
    <div className="App">
      <h1>Test</h1>
    </div>
  );
}

export default App;
