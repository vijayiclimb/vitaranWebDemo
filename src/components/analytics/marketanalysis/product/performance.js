import React from 'react';
import HighPerformance from './high/HighPerformance';
import LowPerformance from './low/LowPerformance';
import './styles/performance.scss'

const Performance = () => {
    return (
        <div className="performanceWrapper">
        <div className="high">
            <HighPerformance />
        </div>
           <div className="low">
            <LowPerformance/>    
           </div>

          
        </div>
    )
}

export default Performance
