import { useEffect } from "react";
import { InstanceProps } from "./types";

export function ChartElem({data, maxSum, onHeightChange}: InstanceProps & { onHeightChange?: (height: number) => void }) {
    if (!data) {
        return null; 
      }

    const { front, back, db } = data;
    const frontHeight = Math.round((front / maxSum) * 300);
    const backHeight = Math.round((back / maxSum) * 300);
    const dbHeight = Math.round((db / maxSum) * 300);

    const totalHeight = frontHeight + backHeight + dbHeight;

    useEffect(() => {
      onHeightChange?.(totalHeight);
  }, [totalHeight, onHeightChange]);

    return (
      <div className="chart-elem"
        style={{
          "--front-value": `${frontHeight}px`,
          "--back-value": `${backHeight}px`,
          "--db-value": `${dbHeight}px`,
        } as React.CSSProperties}
      >
        <div className="front component bold">{front}</div>
        <div className="back component bold">{back}</div>
        <div className="db component bold">{db}</div>
      </div>
    )
}