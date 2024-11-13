import { ChartProps } from './types';


export function ReferenceChart({ data }: ChartProps) {
  if (!data) {
    return null;
  };
  const { norm } = data;
  
  return (
    <div className="chart-column">
      <div className="chart-elem  chart-norm"
        style={{
          "--norm-value": `${norm}px`,
        } as React.CSSProperties}
      >
        <div className="norm">{norm}</div>  
      </div>
      <span className="chart-sign">норматив</span>
    </div>
  );
}