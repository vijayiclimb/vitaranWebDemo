import React from 'react'
import './singleCompanyLow.scss';
import LowGraphCompany from './LowCompanyGraph';

const SingleCompanyLow = () => {
    return (
        <div className="CompanyContainerLow">
        <div className="detailsLow">
            <div className="CompanyDetailLow">
                <div className="sideImageLow">
                    <div className="ImageContainerLow"><img src="https://miro.medium.com/max/4800/1*EJQo5RqxAlHvlRaJsMZtBQ.jpeg" /></div>
                </div>
                <div className="sideDetailsLow">
                    <div className="sideListLow"><label className="sideTitleLow">Company Name:</label><label className="sideValueLow">Gold Flake Kings Red</label></div>
                    <div className="sideListLow"><label className="sideTitleLow">Category:</label><label className="sideValueLow">Cigarettes</label></div>
                    <div className="sideListLow"><label className="sideTitleLow">Company:</label><label className="sideValueLow">Gold Flake</label></div>
                    <div className="sideListLow"><label className="sideTitleLow">Brand:</label><label className="sideValueLow">ITC Limited</label></div>
                </div>
            </div>
            <div className="CompanyTableLow">
               <div className="OneLow">
                 <label className="OneTitleLow">StakeHolder</label>
                 <label className="OneValueLow">Retailer</label>
                 <label className="OneValueLow">Rider</label>
                 <label className="OneValueLow">Wholeseller</label>
                 <label className="OneValueLow">SDistributor</label>
               </div>
               <div className="TwoLow">
               <label className="TwoTitleLow">No. of Stake Holders</label>
                 <label className="TwoValueLow">600</label>
                 <label className="TwoValueLow">600</label>
                 <label className="TwoValueLow">600</label>
                 <label className="TwoValueLow">600</label>  
               </div>
               <div className="ThreeLow">
               <label className="ThreeTitleLow">Average Value per Transaction</label>
                 <label className="ThreeValueLow">600</label>
                 <label className="ThreeValueLow">600</label>
                 <label className="ThreeValueLow">600</label>
                 <label className="ThreeValueLow">600</label> 
               </div>
               <div className="FourLow">
               <label className="FourTitleLow">Active</label>
                 <label className="FourValueLow">96%</label>
                 <label className="FourValueLow">96%</label>
                 <label className="FourValueLow">96%</label>
                 <label className="FourValueLow">96%</label>  
               </div>
            </div>
        </div>
        <div className="detailsGraphLow">
            <label className="detailsGraphTitleLow">Weekly Orders</label>
              <LowGraphCompany/>
        </div>
    </div>
    )
}

export default SingleCompanyLow
