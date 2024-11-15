import { useState, useEffect } from 'react';
import { DataVisualize } from './components/DataVisualize'
import { ChartData } from './components/types';
import { HeightProvider } from './components/HeightContext';
import './App.css'

function App() {
  const [data, setData] = useState<ChartData | null>(null);

  useEffect(() => {
    fetch('https://rcslabs.ru/ttrp1.json')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  return (
    <HeightProvider>
      <div className='wrapper'>
        <DataVisualize data={data}/>
      </div>
    </HeightProvider>
  )
}

export default App




