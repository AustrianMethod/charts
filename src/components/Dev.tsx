import { ChartElem } from "./ChartElem";
import { ChartProps } from './types';

export function Dev({data, maxSum, onHeightUpdate}: ChartProps & { onHeightUpdate?: (height: number) => void }) {

// Передаем высоту в DataVisualize

  const handleHeightChange = (newHeight: number) => {
      onHeightUpdate?.(newHeight); 
  };

  if (!maxSum) {
    return null; 
  }

  return (
    <div className="chart-column">
      <ChartElem data={data?.dev} maxSum={maxSum} onHeightChange={handleHeightChange}/>
      <span className="chart-sign regular">dev</span>
    </div>
  )
}