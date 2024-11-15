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
        <div className='main-chart-wrapper'>
          <Dev data={data} maxSum={maxSum} onHeightUpdate={onDevHeightUpdate}/>
          <Test data={data} maxSum={maxSum} onHeightUpdate={onTestHeightUpdate}/>
          <Prod data={data} maxSum={maxSum} onHeightUpdate={onProdHeightUpdate}/>
          <ReferenceChart data={data} maxSum={maxSum}/>
        </div>
    )
}