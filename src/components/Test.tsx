import { useState } from "react";
import { ChartElem } from "./ChartElem";
import { ChartProps } from './types';

export function Test({data, maxSum, onHeightUpdate}: ChartProps & { onHeightUpdate?: (height: number) => void }) {


  const [height, setHeight] = useState(0);

  const handleHeightChange = (newHeight: number) => {
      setHeight(newHeight);
      onHeightUpdate?.(newHeight);
  };

  if (!maxSum) {
    return null; 
  }

  return (
      <div className="chart-column ">
        <ChartElem data={data?.test} maxSum={maxSum} onHeightChange={handleHeightChange}/>
        <span className="chart-sign regular">test</span>
      </div>
  )
}