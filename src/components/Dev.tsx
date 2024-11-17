import { ChartElem } from "./ChartElem";
import { ChartProps } from './types';

export function Dev({data, maxSum, onHeightUpdate}: ChartProps & { onHeightUpdate?: (height: number) => void }) {

  if (!maxSum) {
    return null; 
  }

  return (
    <div className="chart-column">
      <ChartElem data={data?.dev} maxSum={maxSum} onHeightChange={onHeightUpdate}/>
      <span className="chart-sign regular">dev</span>
    </div>
  )
}