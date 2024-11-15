import { useState } from "react";
import { ChartElem } from "./ChartElem";
import { ChartProps } from './types';

export function Prod({data, maxSum, onHeightUpdate}: ChartProps & { onHeightUpdate?: (height: number) => void }) {
  
  const [height, setHeight] = useState(0);

    const handleHeightChange = (newHeight: number) => {
        setHeight(newHeight);
        onHeightUpdate?.(newHeight); // Передаем высоту в DataVisualize
    };
  
  if (!maxSum) {
    return null; 
  }

  return (
    <div className="chart-column ">
      <ChartElem data={data?.prod} maxSum={maxSum} onHeightChange={handleHeightChange}/>
      <span className="chart-sign">prod</span>
    </div>
  )
}