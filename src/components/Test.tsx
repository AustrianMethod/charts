import { ChartElem } from "./ChartElem";
import { ChartProps } from './types';

export function Test({data, maxSum, onHeightUpdate}: ChartProps & { onHeightUpdate?: (height: number) => void }) {

  if (!maxSum) {
    return null; 
  }

  return (
      <div className="chart-column ">
        <ChartElem data={data?.test} maxSum={maxSum} onHeightChange={onHeightUpdate}/>
        <span className="chart-sign regular">test</span>
      </div>
  )
}