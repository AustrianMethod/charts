import { MainChart } from './MainChart';
import { ChartProps } from './types';

export function DataVisualize({data}: ChartProps) {

    const sumFunc: number ( component: number{} ) => { return data?.component? Object.values(data.component).reduce( (acc, curr) => acc + curr, 0) : 0}

    const sumDev = data?.dev ? Object.values(data.dev).reduce( (acc, curr) => acc + curr, 0) : 0;
    const sumTest = data?.test? Object.values(data.test).reduce( (acc, curr) => acc + curr, 0) : 0;
    const sumTest = data?.test? Object.values(data.test).reduce( (acc, curr) => acc + curr, 0) : 0;
    return (
      <div className='data-wrapper'>
        <span>Количество пройденных тестов "{data?.title}"</span>
          <div className='arrows-wrapper'>
            <div className="svg-container">
              <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
                <path d="M 10 80 L 10 10 L 190 10 L 190 80" fill="none" stroke="#898290" stroke-width="2"/>
                <polygon points="185,80 195,80 190,90" fill="#898290" />
              </svg>
              <div className="dev-box">{data?.test ?? 0 - data?.dev}</div>
            </div>
            <div className="svg-container">
              <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
                <path d="M 10 80 L 10 10 L 190 10 L 190 80" fill="none" stroke="#898290" stroke-width="2"/>
                <polygon points="185,80 195,80 190,90" fill="#898290" />
              </svg>
              <div className="test-box"></div>
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