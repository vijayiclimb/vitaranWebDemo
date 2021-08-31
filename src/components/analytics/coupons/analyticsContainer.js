import React from 'react'
import CouponAnalyticsGraph from './CouponAnalyticsGraph';
import './styles/analyticsContainer.scss';

const AnalyticsContainer = () => {
    return (
        <div className="analyticsContainer">

            <label className="Title">Coupon Analytics</label>

            <div className="DataContainer">
                <div className="One">
                    <div className="OneDataContainer">
                        <div className="OneHead"> 
                        <label className="OneHeadTitle">Stakeholders</label> <label  className="OneHeadValue">No. of stakeholders</label> 
                        </div>
                        <div className="OneRow"><label className="OneRowTitle">Retailers</label><label  className="OneRowValue">06</label></div>
                        <div className="OneRow"> <label  className="OneRowTitle">Rider</label> <label  className="OneRowValue">08</label></div>
                        <div className="OneRow"> <label  className="OneRowTitle">Wholesaler</label> <label  className="OneRowValue">09</label></div>
                        <div className="OneRow"> <label  className="OneRowTitle">Distributor</label> <label  className="OneRowValue">10</label></div>

                    </div>

                </div>

                
                <div className="Two">
                <label>Daily Usage</label>
                <CouponAnalyticsGraph />
            </div>
            <div className="Three">
                <div className="ThreeDataContainer">
                   <div className="ThreeRow"><label className="ThreeTitle">No. of times coupon was used</label><label className="ThreeValue">1800</label></div>
                   <div className="ThreeRow"><label className="ThreeTitle">No. of times coupon was used</label><label className="ThreeValue">1800</label></div>
                  
                </div>
            </div>
          
           
        </div>

        </div>
    )
}

export default AnalyticsContainer
