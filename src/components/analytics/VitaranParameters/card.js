import React from 'react';
import './styles/card.scss';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';

const ParametersCard = () => {
    return (
        <div className="cardWrapper">
            <div className="one">

                <div className="onesubOne">
                    <div className="OrdersCountContainer">
                        <label className="OrdersCountLabel">156</label>
                    </div>
                    <div className="OrdersTitleContainer">
                        <label className="OrdersTitleLabel">Orders</label>
                    </div>
                </div>

                <div className="onesubTwo">
                    <div className="IncreaseContainer">
                        <ArrowUpwardOutlinedIcon className="increaseIcon" />
                    </div>
                    <div className="PercentageInfo">
                        <label className="PercentageCount">5%</label>
                        <label className="PercentageTitle">Increase</label>
                    </div>


                </div>
            </div>
            <div className="two">
                <div className="twosubone">
                    <div className="twoOrdersCountContainer">
                        <label className="twoOrdersCountLabel">156</label>
                    </div>
                    <div className="twoOrdersTitleContainer">
                        <label className="twoOrdersTitleLabel">Bids</label>
                    </div>
                </div>

                <div className="twosubTwo">
                    <div className="twoIncreaseContainer">
                        <ArrowUpwardOutlinedIcon className="twoincreaseIcon" />
                    </div>
                    <div className="twoPercentageInfo">
                        <label className="twoPercentageCount">5%</label>
                        <label className="twoPercentageTitle">Increase</label>
                    </div>


                </div>
            </div>
            <div className="three">
            <div className="threesubone">
                    <div className="threeOrdersCountContainer">
                        <label className="threeOrdersCountLabel">156</label>
                    </div>
                    <div className="threeOrdersTitleContainer">
                        <label className="threeOrdersTitleLabel">Bids <label className="threeOrdersSubTitleLabel" >vs</label> Orders</label>
                    </div>
                </div>

                <div className="threesubTwo">
                    <div className="threeIncreaseContainer">
                        <ArrowUpwardOutlinedIcon className="threeincreaseIcon" />
                    </div>
                    <div className="threePercentageInfo">
                        <label className="threePercentageCount">5%</label>
                        <label className="threePercentageTitle">Increase</label>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ParametersCard
