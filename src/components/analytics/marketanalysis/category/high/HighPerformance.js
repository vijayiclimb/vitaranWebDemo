import React,{useState} from 'react';
import './high.scss';
import {Collapse} from '@material-ui/core'
// import Accordion from '@material-ui/core/Accordion';
// import AccordionSummary from '@material-ui/core/AccordionSummary';
// import AccordionDetails from '@material-ui/core/AccordionDetails';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SingleCategoryHigh from './singleCategoryHigh';

const HighPerformance = () => {
    const [open,setOpen]=useState(false);
    
    return (
        <div className="HighWrapperCategory">
        <div className="labelContainerCategory">
            <label className="HighWrapperTitleCategory">Highest Performance</label>
            <label className="HighWrapperSubTitleCategory">Category Wise</label>
        </div>
        <div className="TopCategory">
            <div className="TopOneCategory">
                <div className="TopTitleWrapperCategory"><label className="TopTitleCategory">Top 1</label></div>
                <div className="TopImageCategory">
                    <div className="ImageContainerCategory"><img src="https://miro.medium.com/max/4800/1*EJQo5RqxAlHvlRaJsMZtBQ.jpeg" /></div>
                </div>
                <div className="TopCategoryTitleWrapperCategory">
                    <label className="TopCategoryTitleCategory">Gold Flake
                        kings Red</label>
                </div>
                <div className="buttonWrapperCategory">
                    <button id="CategoryAnalyticsHighButtonOneCategory" type="button" onClick={()=>setOpen(!open)}>See More</button>
                </div>
            </div>
            <div className="TopTwoCategory">
            <div className="TopTitleWrapperCategory"><label className="TopTitleCategory">Top 2</label></div>
                <div className="TopImageCategory">
                    <div className="ImageContainerCategory"><img src="https://miro.medium.com/max/4800/1*EJQo5RqxAlHvlRaJsMZtBQ.jpeg" /></div>
                </div>
                <div className="TopCategoryTitleWrapperCategory">
                    <label className="TopCategoryTitleCategory">Gold Flake
                        kings Red flower Buyer</label>
                </div>
                <div className="buttonWrapperCategory">
                    <button type="button" id="CategoryAnalyticsHighButtonTwoCategory"  onClick={()=>setOpen(!open)}>See More</button>
                </div>
            </div>
            <div className="TopThreeCategory">
            <div className="TopTitleWrapperCategory"><label className="TopTitleCategory">Top 3</label></div>
                <div className="TopImageCategory">
                    <div className="ImageContainerCategory"><img src="https://miro.medium.com/max/4800/1*EJQo5RqxAlHvlRaJsMZtBQ.jpeg" /></div>
                </div>
                <div className="TopCategoryTitleWrapperCategory">
                    <label className="TopCategoryTitleCategory">Gold Flake
                        kings Red</label>
                </div>
                <div className="buttonWrapperCategory">
                    <button type="button" id="CategoryAnalyticsHighButtonThreeCategory" onClick={()=>setOpen(!open)}>See More</button>
                </div>
            </div>
        </div>
        <Collapse in={open} timeout="auto" unmountOnExit>
           <SingleCategoryHigh/>
        </Collapse>


        


    </div>
    )
}

export default HighPerformance
