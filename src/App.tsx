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
        <svg className="menu" width="14" height="3" viewBox="0 0 14 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 3C1.60218 3 1.22064 2.84196 0.93934 2.56066C0.658035 2.27936 0.5 1.89782 0.5 1.5C0.5 1.10218 0.658035 0.720644 0.93934 0.43934C1.22064 0.158035 1.60218 0 2 0C2.39782 0 2.77936 0.158035 3.06066 0.43934C3.34196 0.720644 3.5 1.10218 3.5 1.5C3.5 1.89782 3.34196 2.27936 3.06066 2.56066C2.77936 2.84196 2.39782 3 2 3ZM7 3C6.60218 3 6.22064 2.84196 5.93934 2.56066C5.65804 2.27936 5.5 1.89782 5.5 1.5C5.5 1.10218 5.65804 0.720644 5.93934 0.43934C6.22064 0.158035 6.60218 0 7 0C7.39782 0 7.77936 0.158035 8.06066 0.43934C8.34196 0.720644 8.5 1.10218 8.5 1.5C8.5 1.89782 8.34196 2.27936 8.06066 2.56066C7.77936 2.84196 7.39782 3 7 3ZM12 3C11.6022 3 11.2206 2.84196 10.9393 2.56066C10.658 2.27936 10.5 1.89782 10.5 1.5C10.5 1.10218 10.658 0.720644 10.9393 0.43934C11.2206 0.158035 11.6022 0 12 0C12.3978 0 12.7794 0.158035 13.0607 0.43934C13.342 0.720644 13.5 1.10218 13.5 1.5C13.5 1.89782 13.342 2.27936 13.0607 2.56066C12.7794 2.84196 12.3978 3 12 3Z" fill="#898290"/>
        </svg>
      </div>
  )
}

export default App




