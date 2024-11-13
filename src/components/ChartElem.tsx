import { InstanceProps } from "./types";

export function ChartElem({data}: InstanceProps) {
    if (!data) {
        return null; 
      }

    const { front, back, db } = data;
    return (
      <div className="chart-elem"
        style={{
          "--front-value": `${front}px`,
          "--back-value": `${back}px`,
          "--db-value": `${db}px`,
        } as React.CSSProperties}
      >
        {/* <h3>{label}</h3> */}
        <div className="front component">{front}</div>
        <div className="back component">{back}</div>
        <div className="db component">{db}</div>
      </div>
    )
}