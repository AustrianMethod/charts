import { MainChart } from './MainChart';
import { ChartProps, InstanceData } from './types';
import { useHeight } from './HeightContext';

export function DataVisualize({data}: ChartProps) {
  
    const { devHeight, testHeight } = useHeight();
    console.log(devHeight, testHeight)
    const arrowStartY = devHeight;  // Расчет на основе высоты Dev
    const arrowEndY = testHeight; 
      
//функция для нахождения суммы по трем компонентам каждого инстанса
    const sumFunc = ( component: InstanceData | undefined): number => { 
      return component ? Object.values(component).reduce( (acc, curr) => acc + curr, 0) : 0
    }

    const sumDev = data ? sumFunc(data.dev) : 0;
    const sumTest = data ? sumFunc(data.test) : 0;
    const sumProd = data ? sumFunc(data.prod) : 0;

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
        <span>Количество пройденных тестов "{data?.title}"</span>
          <div className='arrows-wrapper'>
            <div className="svg-container">
              <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
                <path d={`M 10 ${arrowStartY} L 10 10 L 190 10 L 190 ${arrowEndY}`} fill="none" stroke="#898290" strokeWidth="2"/>
                <polygon points={`185,${arrowEndY} 195,${arrowEndY} 190,${arrowEndY + 10}`} fill="#898290" />
              </svg>
              <div className={`box ${devToTest}`}>{testDev}</div>
            </div>
            <div className="svg-container">
              <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
                <path d="M 10 80 L 10 10 L 190 10 L 190 80" fill="none" stroke="#898290" strokeWidth="2"/>
                <polygon points="185,80 195,80 190,90" fill="#898290" />
              </svg>
              <div className={`box ${testToProd}`}>{prodTest}</div>
            </div>
          </div>
          <MainChart data={data}/>
          <div className='footer'>
            <span className='client-side item-color'>Клиентская часть</span>
            <span className='server-side item-color'>Серверная часть</span>
            <span className='data-base item-color'>База данных</span>
          </div>
      </div>
    )
}