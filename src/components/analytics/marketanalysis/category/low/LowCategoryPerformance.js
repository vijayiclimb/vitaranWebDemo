import React,{useState} from 'react';
import './lowCategory.scss';
import {Collapse} from '@material-ui/core'
import SingleCategoryLow from './singleCategoryLow';

const LowPerformance = () => { 
    const [open,setOpen]=useState(false);

    return (
        <div className="LowWrapper">
            <div className="labelContainer">
                <label className="LowWrapperTitle">Lowest Performance</label>
                <label className="LowWrapperSubTitle">Category Wise</label>
            </div>
            <div className="Low">
                <div className="LowOne">
                    <div className="LowTitleWrapper"><label className="LowTitle">Low 1</label></div>
                    <div className="LowImage">
                        <div className="ImageContainer"><img src="https://miro.medium.com/max/4800/1*EJQo5RqxAlHvlRaJsMZtBQ.jpeg" /></div>
                    </div>
                    <div className="LowCategoryTitleWrapper">
                        <label className="LowCategoryTitle">Gold Flake
                            kings Red</label>
                    </div>
                    <div className="buttonWrapper">
                        <button type="button" id="CategoryAnalyticsButtonLowPerformanceOne" onClick={()=>setOpen(!open)}>See More</button>
                    </div>
                </div>
                <div className="LowTwo">
                <div className="LowTitleWrapper"><label className="LowTitle">Low 2</label></div>
                    <div className="LowImage">
                        <div className="ImageContainer"><img src="https://miro.medium.com/max/4800/1*EJQo5RqxAlHvlRaJsMZtBQ.jpeg" /></div>
                    </div>
                    <div className="LowCategoryTitleWrapper">
                        <label className="LowCategoryTitle">Gold Flake
                            kings Red flower Buyer</label>
                    </div>
                    <div className="buttonWrapper">
                        <button type="button" id="CategoryAnalyticsButtonLowPerformanceTwo" onClick={()=>setOpen(!open)}>See More</button>
                    </div>
                </div>
                <div className="LowThree">
                <div className="LowTitleWrapper"><label className="LowTitle">Low 3</label></div>
                    <div className="LowImage">
                        <div className="ImageContainer"><img src="https://miro.medium.com/max/4800/1*EJQo5RqxAlHvlRaJsMZtBQ.jpeg" /></div>
                    </div>
                    <div className="LowCategoryTitleWrapper">
                        <label className="LowCategoryTitle">Gold Flake
                            kings Red</label>
                    </div>
                    <div className="buttonWrapper">
                        <button type="button" id="CategoryAnalyticsButtonLowPerformanceThree" onClick={()=>setOpen(!open)}>See More</button>
                    </div>
                </div>
            </div>


            <Collapse in={open} timeout="auto" unmountOnExit>
               <SingleCategoryLow/>
            </Collapse>


        </div>
    )
}

export default LowPerformance
