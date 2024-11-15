import { useState } from 'react';
import { MainChart } from './MainChart';
import { ChartProps, InstanceData } from './types';

export function DataVisualize({data}: ChartProps) { 

  const [devHeight, setDevHeight] = useState(0);
  const [testHeight, setTestHeight] = useState(0);
  const [prodHeight, setProdHeight] = useState(0);
      
//функция для нахождения суммы по трем компонентам каждого инстанса
    const sumFunc = ( component: InstanceData | undefined): number => { 
      return component ? Object.values(component).reduce( (acc, curr) => acc + curr, 0) : 0
    }
    
    
    const sumDev = data ? sumFunc(data.dev) : 0;
    const sumTest = data ? sumFunc(data.test) : 0;
    const sumProd = data ? sumFunc(data.prod) : 0;

    const maxSum = Math.max(sumDev, sumTest, sumProd, (data?.norm ? data.norm : 0) );
    
    const arrowStartY = 380 - devHeight;
    const arrowEndY = 380 - testHeight;
    const arrowEndY2 = 380 - prodHeight;

//добавляем стрелки

    const testDev = (sumTest - sumDev) > 0 
      ? `↑+${sumTest - sumDev}` 
      : (sumTest - sumDev) < 0
      ? `↓${sumTest - sumDev}`
      : `${sumTest - sumDev}`;

    const prodTest = (sumProd - sumTest) > 0 
      ? `↑+${sumProd - sumTest}` 
      : (sumProd - sumTest) > 0 
      ? `↓${sumProd - sumTest}`
      : `${sumProd - sumTest}`;
    
//добавляем цвета фону для овалов на стрелках 

    const devToTest = (sumTest - sumDev) > 0 ? 'green-background' 
      : (sumTest - sumDev) < 0 ? 'red-background' 
      : 'gray-background';

    const testToProd = (sumProd - sumTest) > 0 ? 'green-background' 
      : (sumProd - sumTest) < 0 ? 'red-background' 
      : 'gray-background';  

    return (
      <div className='data-wrapper'>
        <span className='medium'>Количество пройденных тестов "{data?.title}"</span>
          <div className='arrows-wrapper'>
            <div className="svg-container">
              <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
                <path d={`M 40 ${arrowStartY + 10} L 40 10 L 200 10 L 200 ${arrowEndY}`} fill="none" stroke="#898290" strokeWidth="2"/>
                <polygon points={`195,${arrowEndY} 205,${arrowEndY} 200,${arrowEndY + 10}`} fill="#898290" />
              </svg>
              <span className={`box bold ${devToTest}`}>{testDev}</span>
            </div>
            <div className="svg-container">
              <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
                <path d={`M 25 ${arrowEndY + 10} L 25 10 L 190 10 L 190 ${arrowEndY2}`} fill="none" stroke="#898290" strokeWidth="2"/> 
                <polygon points={`185,${arrowEndY2} 195,${arrowEndY2} 190,${arrowEndY2 + 10}`} fill="#898290" />
              </svg>
              <span className={`box bold ${testToProd}`}>{prodTest}</span>
            </div>
          </div>
          <MainChart data={data} maxSum={maxSum} onDevHeightUpdate={setDevHeight} onTestHeightUpdate={setTestHeight} onProdHeightUpdate={setProdHeight}/>
          <div className='footer'>
            <span className='client-side item-color'>Клиентская часть</span>
            <span className='server-side item-color'>Серверная часть</span>
            <span className='data-base item-color'>База данных</span>
          </div>
      </div>  
    ) //M 10 80 L 10 10 L 190 10 L 190 80
      //"185,80 195,80 190,90"
}