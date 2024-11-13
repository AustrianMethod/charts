export interface InstanceData {
  front: number;
  back: number;
  db: number;
}
  
export interface ChartData {
  title: string;
  dev: InstanceData;
  test: InstanceData;
  prod: InstanceData;
  norm: number;
}

export interface DataVisualize {
  data: ChartData | null;
}

export interface DataElem {
  data: InstanceData;
}