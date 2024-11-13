import { ChartElem } from "./ChartElem";
import { InstanceProps } from './types';

export function Dev({data}: InstanceProps) {
  return (
    <div className="chart-column dev-column">
      <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M 10,10 V 50 H 90" fill="none" stroke="black" stroke-width="2"/>
        <polygon points="90,50 85,45 85,55" fill="black"/>
      </svg>
      <ChartElem data={data}/>
      <span className="chart-sign">dev</span>
    </div>
  )
}