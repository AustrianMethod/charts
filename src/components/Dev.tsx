
import { ChartElem } from "./ChartElem";
import { useEffect, useRef } from 'react';
import { InstanceProps } from './types';
import { useHeight } from './HeightContext';

export function Dev({data}: InstanceProps) {

  const { setDevHeight } = useHeight();
  const devRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (devRef.current) {
      setDevHeight(devRef.current.clientHeight);
    }
  }, [data]);


  return (
    <div className="chart-column dev-column" ref={devRef}>
      <ChartElem data={data}/>
      <span className="chart-sign">dev</span>
    </div>
  )
}