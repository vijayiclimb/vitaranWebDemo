import React from 'react'
import './styles/performance.scss'
import HighPerformance from './high/HighCompanyPerformance';
import LowPerformance from './low/LowCompanyPerformance';

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
