import { Arrows } from './Arrows'; 
import { MainChart } from './MainChart';
import { ReferenceChart } from './ReferenceChart';
import { DataVisualize as DataFormat } from './types';



export function DataVisualize({data}: DataFormat) {
    return (
      <div className='wrapper'>
        <span>Количество пройденных тестов {data?.title}</span>
          <Arrows  data={data}/>
          <MainChart data={data}/>
          <ReferenceChart data={data}/>
      </div>
    )
}