import React from 'react';
import "./singleCategoryHigh.scss";
import HighGraphCategory from './HighGraph';

const SingleCategoryHigh = () => {
    return (
        <div className="CategoryContainer">
        <div className="details">
            <div className="CategoryDetail">
                <div className="sideImage">
                    <div className="ImageContainer"><img src="https://miro.medium.com/max/4800/1*EJQo5RqxAlHvlRaJsMZtBQ.jpeg" /></div>
                </div>
                <div className="sideDetails">
                    <div className="sideList"><label className="sideTitle">Category Name:</label><label className="sideValue">Gold Flake Kings Red</label></div>
                    <div className="sideList"><label className="sideTitle">Category:</label><label className="sideValue">Cigarettes</label></div>
                    <div className="sideList"><label className="sideTitle">Category:</label><label className="sideValue">Gold Flake</label></div>
                    <div className="sideList"><label className="sideTitle">Brand:</label><label className="sideValue">ITC Limited</label></div>
                </div>
            </div>
            <div className="CategoryTable">
               <div className="One">
                 <label className="OneTitle">StakeHolder</label>
                 <label className="OneValue">Retailer</label>
                 <label className="OneValue">Rider</label>
                 <label className="OneValue">Wholeseller</label>
                 <label className="OneValue">SDistributor</label>
               </div>
               <div className="Two">
               <label className="TwoTitle">No. of Stake Holders</label>
                 <label className="TwoValue">600</label>
                 <label className="TwoValue">600</label>
                 <label className="TwoValue">600</label>
                 <label className="TwoValue">600</label>  
               </div>
               <div className="Three">
               <label className="ThreeTitle">Average Value per Transaction</label>
                 <label className="ThreeValue">600</label>
                 <label className="ThreeValue">600</label>
                 <label className="ThreeValue">600</label>
                 <label className="ThreeValue">600</label> 
               </div>
               <div className="Four">
               <label className="FourTitle">Active</label>
                 <label className="FourValue">96%</label>
                 <label className="FourValue">96%</label>
                 <label className="FourValue">96%</label>
                 <label className="FourValue">96%</label>  
               </div>
            </div>
        </div>
        <div className="detailsGraph">
            <label className="detailsGraphTitle">Weekly Orders</label>
            <HighGraphCategory/>
        </div>
    </div>
    )
}

export default SingleCategoryHigh
