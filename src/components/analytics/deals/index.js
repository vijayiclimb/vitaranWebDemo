import React from 'react'
import AnalyticsContainer from './DealanalyticsContainer';
import Carousels from './carouselContainer';
import DealAnalyticsDetails from './DealAnalyticsDetails';
import './styles/index.scss';


const DealAnalytics = () => {
    return (
        <div className="dealAnalyticsContainer">
            <Carousels />
            <AnalyticsContainer />
            <DealAnalyticsDetails/>

        </div>
    )
}

export default DealAnalytics


