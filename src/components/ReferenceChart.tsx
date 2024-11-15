import { ChartProps } from './types';

export function ReferenceChart({ data, maxSum }: ChartProps) {
  if (!maxSum || !data) {
    return null;
  };

  const { norm } = data;
  
  return (
    <div className="chart-column">
      <div className="chart-elem  chart-norm"
        style={{
          "--norm-value": `${(norm/maxSum) * 300}px`,
        } as React.CSSProperties}
      >
        <div className="norm bold">{norm}</div>  
      </div>
      <span className="chart-sign">норматив</span>
    </div>
  );
}
