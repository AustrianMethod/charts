// import { ChartElem } from "./ChartElem";
import { ChartProps } from './types';


export function Dev({data, heights}: ChartProps) {

  let { front, back, db } = data?.dev;

  return (
    <div className="chart-column dev-column">
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
      <span className="chart-sign">dev</span>
    </div>
  )
}