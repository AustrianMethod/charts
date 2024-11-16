import { ChartProps } from './types';

export function ReferenceChart({ data, maxSum }: ChartProps) {
  if (!maxSum || !data) {
    return null;
  };

  const { norm } = data;
  let normHeight = Math.round((norm/maxSum) * 265);
  if (normHeight === 0) normHeight = 20;
  
  return (
    <div className="chart-column">
      <div className="chart-elem  chart-norm"
        style={{
          "--norm-value": `${normHeight}px`,
        } as React.CSSProperties}
      >
        <div className="norm bold">{norm}</div>  
      </div>
      <span className="chart-sign regular">норматив</span>
    </div>
  );
}
