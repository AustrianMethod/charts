import { ChartElem } from "./ChartElem";
import { InstanceProps } from './types';
import { useEffect, useRef } from 'react';
import { useHeight } from './HeightContext';

export function Test({data}: InstanceProps) {

  const { setTestHeight } = useHeight();
  const testRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (testRef.current) {
      setTestHeight(testRef.current.clientHeight);
    }
  }, [data]);
  
  return (
    <>
      <div className="chart-column" ref={testRef}>
        <ChartElem data={data}/>
        <span className="chart-sign">test</span>
      </div>
    </>
  )
}