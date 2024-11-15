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

export interface ChartProps {
  data: ChartData | null;
  maxSum: number | null;
}



export interface InstanceProps {
  data: InstanceData | undefined;
  maxSum: number;
}