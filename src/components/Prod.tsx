import { ChartElem } from "./ChartElem";
import { InstanceProps } from './types';

export function Prod({data}: InstanceProps) {
  return (
    <div className="chart-column">
      <ChartElem data={data}/>
      <span className="chart-sign">prod</span>
    </div>
  )
}