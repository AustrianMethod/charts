import { Dev } from './Dev';
import { Test } from './Test';
import { Prod } from './Prod'; 
import { ChartProps } from './types';
import { ReferenceChart } from './ReferenceChart';

export function MainChart({data}: ChartProps) {
    return (
        <div className='main-chart-wrapper'>
          <Dev data={data?.dev}/>
          <Test data={data?.test}/>
          <Prod data={data?.prod}/>
          <ReferenceChart data={data}/>
        </div>
    )
}