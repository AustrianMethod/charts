import { Dev } from './Dev';
import { Test } from './Test';
import { Prod } from './Prod'; 
import { DataVisualize as DataFormat } from './types';

export function MainChart({data}: DataFormat) {
    return (
        <div className='main-chart-wrapper'>
          <Dev data={data?.dev}/>
          <Test data={data?.test}/>
          <Prod data={data?.prod}/>
        </div>
    )
}