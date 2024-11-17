import { ChartElem } from "./ChartElem";
import { ChartProps } from './types';

export function Prod({data, maxSum, onHeightUpdate}: ChartProps & { onHeightUpdate?: (height: number) => void }) {
  
  const handleHeightChange = (newHeight: number) => {
        onHeightUpdate?.(newHeight); 
  };
  
  if (!maxSum) {
    return null; 
  }

  return (
    <div className="chart-column ">
      <ChartElem data={data?.prod} maxSum={maxSum} onHeightChange={handleHeightChange}/>
      <span className="chart-sign regular">prod</span>
    </div>
  )
}