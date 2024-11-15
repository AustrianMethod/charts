export interface InstanceData {
  front: number;
  back: number;
  db: number;
}

// export interface InstanceProps {
//   data: InstanceData | undefined;
// }
  
export interface ChartData {
  title: string;
  dev: {
    front: number;
    back: number;
    db: number;
  }
  test: InstanceData;
  prod: InstanceData;
  norm: number;
}

export interface ChartProps {
  data: ChartData | null;
  heights: {
    devHeight: number;
    testHeight: number;
    prodHeight: number;
    normHeight: number;
  } | null;
}



