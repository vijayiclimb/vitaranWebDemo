import React from 'react'
import DealAnalyticsGraph from './DealAnalyticsGraph';
import './styles/DealanalyticsContainer.scss';

const AnalyticsContainer = () => {
    return (
        <div className="analyticsContainer">

            <label className="Title">Deals Analytics</label>

            <div className="DataContainer">
                <div className="DealAnalyticsOne">
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
                <DealAnalyticsGraph />
            </div>
            <div className="Three">
                <div className="ThreeDataContainer">
                   <div className="ThreeRow"><label className="ThreeTitle">No. of views on the Deal</label><label className="ThreeValue">1800</label></div>
                   <div className="ThreeRow"><label className="ThreeTitle">No. of Deals Used</label><label className="ThreeValue">1800</label></div>
                   <div className="ThreeRow"><label className="ThreeTitle">Deal Revenue</label><label className="ThreeValue">1800</label></div>
                </div>
            </div>
          
           
        </div>

        </div>
    )
}

export default AnalyticsContainer
