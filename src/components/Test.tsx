import { ChartElem } from "./ChartElem";
import { InstanceProps } from './types';

export function Test({data}: InstanceProps) {
  return (
    <>
      <div className="chart-column">
        <ChartElem data={data}/>
        <span className="chart-sign">test</span>
      </div>
    </>
  )
}