import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { HeightContextType } from './types';


export const HeightContext = createContext<HeightContextType | null>(null);

export const HeightProvider = ({ children } : PropsWithChildren) => {
  const [devHeight, setDevHeight] = useState(0);
  const [testHeight, setTestHeight] = useState(0);

  return (
    <HeightContext.Provider value={{ devHeight, testHeight, setDevHeight, setTestHeight }}>
      {children}
    </HeightContext.Provider>
  );
};

export const useHeight = () => {
  const context = useContext(HeightContext);
  if (!context) throw new Error("useHeight must be used within HeightProvider");
  return context;
};