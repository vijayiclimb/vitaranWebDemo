import React,{useState} from 'react';
import '../styles/high.scss';
import {Collapse} from '@material-ui/core'
import SingleProduct from './singleProduct';

const HighPerformance = () => {
    const [open,setOpen]=useState(false);
    return (
        <div className="HighWrapper">
            <div className="labelContainer">
                <label className="HighWrapperTitle">Highest Performance</label>
                <label className="HighWrapperSubTitle">Product Wise</label>
            </div>
            <div className="Top">
                <div className="TopOne">
                    <div className="TopTitleWrapper"><label className="TopTitle">Top 1</label></div>
                    <div className="TopImage">
                        <div className="ImageContainer"><img src="https://miro.medium.com/max/4800/1*EJQo5RqxAlHvlRaJsMZtBQ.jpeg" /></div>
                    </div>
                    <div className="TopProductTitleWrapper">
                        <label className="TopProductTitle">Gold Flake
                            kings Red</label>
                    </div>
                    <div className="buttonWrapper">
                        <button id="ProductAnalyticsHighButtonOne" type="button" onClick={()=>setOpen(!open)}>See More</button>
                    </div>
                </div>
                <div className="TopTwo">
                <div className="TopTitleWrapper"><label className="TopTitle">Top 2</label></div>
                    <div className="TopImage">
                        <div className="ImageContainer"><img src="https://miro.medium.com/max/4800/1*EJQo5RqxAlHvlRaJsMZtBQ.jpeg" /></div>
                    </div>
                    <div className="TopProductTitleWrapper">
                        <label className="TopProductTitle">Gold Flake
                            kings Red flower Buyer</label>
                    </div>
                    <div className="buttonWrapper">
                        <button type="button" id="ProductAnalyticsHighButtonTwo"  onClick={()=>setOpen(!open)}>See More</button>
                    </div>
                </div>
                <div className="TopThree">
                <div className="TopTitleWrapper"><label className="TopTitle">Top 3</label></div>
                    <div className="TopImage">
                        <div className="ImageContainer"><img src="https://miro.medium.com/max/4800/1*EJQo5RqxAlHvlRaJsMZtBQ.jpeg" /></div>
                    </div>
                    <div className="TopProductTitleWrapper">
                        <label className="TopProductTitle">Gold Flake
                            kings Red</label>
                    </div>
                    <div className="buttonWrapper">
                        <button type="button" id="ProductAnalyticsHighButtonThree" onClick={()=>setOpen(!open)}>See More</button>
                    </div>
                </div>
            </div>
            <Collapse in={open} timeout="auto" unmountOnExit>
               <SingleProduct/>
            </Collapse>


        </div>
    )
}

export default HighPerformance
