import { Arrows } from './Arrows'; 
import { MainChart } from './MainChart';
import { ChartProps } from './types';

export function DataVisualize({data}: ChartProps) {
    return (
      <div className='data-wrapper'>
        <span>Количество пройденных тестов "{data?.title}"</span>
          <Arrows  data={data}/>
          <MainChart data={data}/>
          <div className='footer'>
            <span className='client-side item-color'>Клиентская часть</span>
            <span className='server-side item-color'>Серверная часть</span>
            <span className='data-base item-color'>База данных</span>
          </div>
      </div>
    )
}