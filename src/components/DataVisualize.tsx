import { useState } from 'react';
import { MainChart } from './MainChart';
import { ChartProps, InstanceData } from './types';

export function DataVisualize({data}: ChartProps) { 

    const [devHeight, setDevHeight] = useState(0);
    const [testHeight, setTestHeight] = useState(0);
    const [prodHeight, setProdHeight] = useState(0);
      
//функция для нахождения суммы по трем компонентам каждого инстанса
    const sumFunc = ( component: InstanceData | undefined): number => { 
      return component ? Object.values(component).reduce( (acc, curr) => acc + curr, 0) : 0
    }
    
    const sumDev = data ? sumFunc(data.dev) : 0;
    const sumTest = data ? sumFunc(data.test) : 0;
    const sumProd = data ? sumFunc(data.prod) : 0;

    const maxSum = Math.max(sumDev, sumTest, sumProd, (data?.norm ? data.norm : 0) );
    
    const arrowStartY = 364 - devHeight;
    const arrowEndY = 364 - testHeight;
    const arrowEndY2 = 364 - prodHeight;

//добавляем стрелки

    const testDev = (sumTest - sumDev) > 0 
      ? `+${sumTest - sumDev}` 
      : (sumTest - sumDev) < 0
      ? `${sumTest - sumDev}`
      : `${sumTest - sumDev}`;

    const prodTest = (sumProd - sumTest) > 0 
      ? `+${sumProd - sumTest}` 
      : (sumProd - sumTest) > 0 
      ? `${sumProd - sumTest}`
      : `${sumProd - sumTest}`;
    
//добавляем цвета фону для овалов на стрелках 
    
    const devToTest = (sumTest - sumDev) > 0 ? 'green-background' 
      : (sumTest - sumDev) < 0 ? 'red-background' 
      : 'gray-background';

    const testToProd = (sumProd - sumTest) > 0 ? 'green-background' 
      : (sumProd - sumTest) < 0 ? 'red-background' 
      : 'gray-background';  

//отображение стрелки в зависимости от фона - перевернута или ее отсутствие

    const devRotate = devToTest === 'red-background' ? 'rotate' : devToTest === 'gray-background' ? 'none' : '';
    const testRotate = testToProd === 'red-background' ? 'rotate' :  testToProd === 'gray-background' ? 'none' : '';
    
    return (
      <>
        <span className='medium'>Количество пройденных тестов "{data?.title}"</span>
        <div className='data-wrapper'>
          <div className='arrows-wrapper'>
            <div className="svg-container">
              <svg width="180" height="100" xmlns="http://www.w3.org/2000/svg">
                <path d={`M 40 ${arrowStartY} L 40 33 L 172 33 L 172 ${arrowEndY}`} fill="none" stroke="#898290" strokeWidth="1"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M3.02471 2.3672H3.97529L6.18863 0.140074C6.37424 -0.0466915 6.67518 -0.0466915 6.86079 0.140074C7.0464 0.32684 7.0464 0.629646 6.86079 0.816412L3.83608 3.85993C3.65047 4.04669 3.34953 4.04669 3.16392 3.85993L0.139209 0.816412C-0.0464029 0.629646 -0.0464029 0.32684 0.139209 0.140074C0.32482 -0.0466915 0.625755 -0.0466915 0.811367 0.140074L3.02471 2.3672Z" fill="#898290" transform={`translate(168.5, ${arrowEndY - 3})`}/>
              </svg>
              <span className={`box box1 bold ${devToTest}`}>
                <svg className={`arrow-svg ${devRotate}`} width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.99753 4.76701e-08L3.90761 4.65978e-08C3.81171 0.00457864 3.7172 0.0248461 3.62784 0.0599995C3.55932 0.0867377 3.49529 0.123837 3.438 0.17C3.3924 0.196522 3.34896 0.226616 3.30811 0.26L0.310604 3.12C0.215475 3.21061 0.139109 3.31909 0.0858683 3.43924C0.0326273 3.55939 0.00355357 3.68886 0.00030622 3.82025C-0.0062521 4.08562 0.0927854 4.34272 0.275633 4.535C0.45848 4.72728 0.710158 4.83899 0.975302 4.84556C1.24044 4.85212 1.49733 4.753 1.68946 4.57L2.99837 3.34L2.99837 9C2.99837 9.26522 3.10364 9.51957 3.29102 9.70711C3.4784 9.89464 3.73254 10 3.99753 10C4.26253 10 4.51667 9.89464 4.70405 9.70711C4.89143 9.51957 4.9967 9.26522 4.9967 9L4.9967 3.41L6.28563 4.71C6.37851 4.80373 6.48902 4.87812 6.61078 4.92889C6.73254 4.97966 6.86314 5.0058 6.99504 5.0058C7.12694 5.0058 7.25754 4.97966 7.3793 4.92889C7.50105 4.87812 7.61156 4.80373 7.70445 4.71C7.7981 4.61704 7.87243 4.50644 7.92316 4.38458C7.97388 4.26272 8 4.13201 8 4C8 3.86799 7.97388 3.73728 7.92316 3.61542C7.87243 3.49356 7.7981 3.38296 7.70445 3.29L4.70694 0.290001C4.61487 0.20005 4.5063 0.128743 4.38721 0.08C4.26399 0.027463 4.13147 0.000257541 3.99753 4.76701e-08Z" fill="white"/>
                </svg> 
                {testDev}
              </span>
            </div>
            <div className="svg-container">
              <svg width="180" height="100" xmlns="http://www.w3.org/2000/svg">
                <path d={`M 12 ${arrowEndY} L 12 33 L 144 33 L 144 ${arrowEndY2}`} fill="none" stroke="#898290" strokeWidth="1"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M3.02471 2.3672H3.97529L6.18863 0.140074C6.37424 -0.0466915 6.67518 -0.0466915 6.86079 0.140074C7.0464 0.32684 7.0464 0.629646 6.86079 0.816412L3.83608 3.85993C3.65047 4.04669 3.34953 4.04669 3.16392 3.85993L0.139209 0.816412C-0.0464029 0.629646 -0.0464029 0.32684 0.139209 0.140074C0.32482 -0.0466915 0.625755 -0.0466915 0.811367 0.140074L3.02471 2.3672Z" fill="#898290" transform={`translate(140.5, ${arrowEndY2 - 3})`}/>
              </svg>
              <span className={`box box2 bold ${testToProd}`}>
                <svg className={`arrow-svg ${testRotate}`} width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.99753 4.76701e-08L3.90761 4.65978e-08C3.81171 0.00457864 3.7172 0.0248461 3.62784 0.0599995C3.55932 0.0867377 3.49529 0.123837 3.438 0.17C3.3924 0.196522 3.34896 0.226616 3.30811 0.26L0.310604 3.12C0.215475 3.21061 0.139109 3.31909 0.0858683 3.43924C0.0326273 3.55939 0.00355357 3.68886 0.00030622 3.82025C-0.0062521 4.08562 0.0927854 4.34272 0.275633 4.535C0.45848 4.72728 0.710158 4.83899 0.975302 4.84556C1.24044 4.85212 1.49733 4.753 1.68946 4.57L2.99837 3.34L2.99837 9C2.99837 9.26522 3.10364 9.51957 3.29102 9.70711C3.4784 9.89464 3.73254 10 3.99753 10C4.26253 10 4.51667 9.89464 4.70405 9.70711C4.89143 9.51957 4.9967 9.26522 4.9967 9L4.9967 3.41L6.28563 4.71C6.37851 4.80373 6.48902 4.87812 6.61078 4.92889C6.73254 4.97966 6.86314 5.0058 6.99504 5.0058C7.12694 5.0058 7.25754 4.97966 7.3793 4.92889C7.50105 4.87812 7.61156 4.80373 7.70445 4.71C7.7981 4.61704 7.87243 4.50644 7.92316 4.38458C7.97388 4.26272 8 4.13201 8 4C8 3.86799 7.97388 3.73728 7.92316 3.61542C7.87243 3.49356 7.7981 3.38296 7.70445 3.29L4.70694 0.290001C4.61487 0.20005 4.5063 0.128743 4.38721 0.08C4.26399 0.027463 4.13147 0.000257541 3.99753 4.76701e-08Z" fill="white"/>
                </svg>  
                {prodTest}
              </span>
            </div>
          </div>
          <MainChart data={data} maxSum={maxSum} onDevHeightUpdate={setDevHeight} onTestHeightUpdate={setTestHeight} onProdHeightUpdate={setProdHeight}/>
        </div>
      </>    
    )
}