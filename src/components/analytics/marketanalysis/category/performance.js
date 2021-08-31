import React from 'react'
import './styles/performance.scss'
import HighPerformance from './high/HighPerformance';
import LowPerformance from './low/LowCategoryPerformance';

const Performance = () => {
    return (
        <div className="performanceWrapperCategory">
        <div className="highCategory">
            <HighPerformance />
        </div>
           <div className="lowCategory">
            <LowPerformance/>    
           </div>

          
        </div>
    )
}

export default Performance
