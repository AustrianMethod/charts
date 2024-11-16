import { Dev } from './Dev';
import { Test } from './Test';
import { Prod } from './Prod'; 
import { ChartProps } from './types';
import { ReferenceChart } from './ReferenceChart';

export function MainChart({data, maxSum, onDevHeightUpdate, onTestHeightUpdate, onProdHeightUpdate}: ChartProps & {
  onDevHeightUpdate?: (height: number) => void,
  onTestHeightUpdate?: (height: number) => void,
  onProdHeightUpdate?: (height: number) => void
}) {
    return (
      <>
        <div className='main-chart-wrapper'>
          <Dev data={data} maxSum={maxSum} onHeightUpdate={onDevHeightUpdate}/>
          <Test data={data} maxSum={maxSum} onHeightUpdate={onTestHeightUpdate}/>
          <Prod data={data} maxSum={maxSum} onHeightUpdate={onProdHeightUpdate}/>
          <ReferenceChart data={data} maxSum={maxSum}/>
        </div>
        <div className='footer'>
          <span className='client-side item-color regular'>Клиентская часть</span>
          <span className='server-side item-color regular'>Серверная часть</span>
          <span className='data-base item-color regular'>База данных</span>
        </div>
      </>
        
        
    )
}