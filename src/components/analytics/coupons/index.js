import React from 'react'
import AnalyticsContainer from './analyticsContainer';
import Carousels from './carouselContainer';
import CouponAnalyticsDetails from './CouponAnalyticsDetails';
import './styles/index.scss';


const CouponAnalytics = () => {
    return (
        <div className="dealContainer">
            <Carousels />
            <AnalyticsContainer />
            <CouponAnalyticsDetails/>

        </div>
    )
}

export default CouponAnalytics


