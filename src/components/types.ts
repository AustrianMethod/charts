export interface InstanceData {
  front: number;
  back: number;
  db: number;
}

export interface InstanceProps {
  data: InstanceData | undefined;
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
}

export interface HeightContextType {
  devHeight: number;
  testHeight: number;
  setDevHeight: (height: number) => void;
  setTestHeight: (height: number) => void;
};


