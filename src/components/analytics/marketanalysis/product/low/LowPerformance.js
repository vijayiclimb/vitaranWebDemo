import React,{useState} from 'react';
import '../styles/low.scss';
import {Collapse} from '@material-ui/core'
import SingleProductLow from './singleProductLow';

const LowPerformance = () => { 
    const [open,setOpen]=useState(false);

    return (
        <div className="LowWrapper">
            <div className="labelContainer">
                <label className="LowWrapperTitle">Lowest Performance</label>
                <label className="LowWrapperSubTitle">Product Wise</label>
            </div>
            <div className="Low">
                <div className="LowOne">
                    <div className="LowTitleWrapper"><label className="LowTitle">Low 1</label></div>
                    <div className="LowImage">
                        <div className="ImageContainer"><img src="https://miro.medium.com/max/4800/1*EJQo5RqxAlHvlRaJsMZtBQ.jpeg" /></div>
                    </div>
                    <div className="LowProductTitleWrapper">
                        <label className="LowProductTitle">Gold Flake
                            kings Red</label>
                    </div>
                    <div className="buttonWrapper">
                        <button type="button" id="ProductAnalyticsButtonLowPerformanceOne" onClick={()=>setOpen(!open)}>See More</button>
                    </div>
                </div>
                <div className="LowTwo">
                <div className="LowTitleWrapper"><label className="LowTitle">Low 2</label></div>
                    <div className="LowImage">
                        <div className="ImageContainer"><img src="https://miro.medium.com/max/4800/1*EJQo5RqxAlHvlRaJsMZtBQ.jpeg" /></div>
                    </div>
                    <div className="LowProductTitleWrapper">
                        <label className="LowProductTitle">Gold Flake
                            kings Red flower Buyer</label>
                    </div>
                    <div className="buttonWrapper">
                        <button type="button" id="ProductAnalyticsButtonLowPerformanceTwo" onClick={()=>setOpen(!open)}>See More</button>
                    </div>
                </div>
                <div className="LowThree">
                <div className="LowTitleWrapper"><label className="LowTitle">Low 3</label></div>
                    <div className="LowImage">
                        <div className="ImageContainer"><img src="https://miro.medium.com/max/4800/1*EJQo5RqxAlHvlRaJsMZtBQ.jpeg" /></div>
                    </div>
                    <div className="LowProductTitleWrapper">
                        <label className="LowProductTitle">Gold Flake
                            kings Red</label>
                    </div>
                    <div className="buttonWrapper">
                        <button type="button" id="ProductAnalyticsButtonLowPerformanceThree" onClick={()=>setOpen(!open)}>See More</button>
                    </div>
                </div>
            </div>


            <Collapse in={open} timeout="auto" unmountOnExit>
               <SingleProductLow/>
            </Collapse>


        </div>
    )
}

export default LowPerformance
