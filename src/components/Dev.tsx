import { ChartElem } from "./ChartElem";
import { InstanceProps } from './types';

export function Dev({data}: InstanceProps) {
  return (
    <div className="chart-column dev-column">
      <ChartElem data={data}/>
      <span className="chart-sign">dev</span>
    </div>
  )
}