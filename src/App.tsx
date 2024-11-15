import { useState, useEffect } from 'react';
import { DataVisualize } from './components/DataVisualize'
import { ChartData } from './components/types';
import './App.css'

function App() {
  const [data, setData] = useState<ChartData | null>(null);

  useEffect(() => {
    fetch('https://rcslabs.ru/ttrp4.json')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  return (
      <div className='wrapper'>
        <DataVisualize data={data} maxSum={null}/>
      </div>
  )
}

export default App




