import { ChartProps } from './types';
import { Arrow } from './Arrow'

export function Arrows({data}: ChartProps) {
  return (
    <div className='arrows'>
      <div className='test-dev'>
        <Arrow data={data}/>
      </div>
      <div className='prod-test'>
        <Arrow data={data}/>
      </div>
    </div>
  )
}