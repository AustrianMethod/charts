import { useEffect } from "react";
import { InstanceProps } from "./types";

export function ChartElem({data, maxSum, onHeightChange}: InstanceProps & { onHeightChange?: (height: number) => void }) {
    if (!data) {
        return null; 
      }

    const { front, back, db } = data;
    let frontHeight = Math.round((front / maxSum) * 265);
    let backHeight = Math.round((back / maxSum) * 265);
    let dbHeight = Math.round((db / maxSum) * 265);

    if (frontHeight === 0) frontHeight = 20;
    if (backHeight === 0) backHeight = 20;
    if (dbHeight === 0) dbHeight = 20;

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