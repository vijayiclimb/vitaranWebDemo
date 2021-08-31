import React from 'react'
import DailyOrder from './DailyOrder'
import WeeklyOrder from './WeeklyOrder';
import './styles/OrderSection.scss'

const OrderSection = () => {
    return (
        <div className="SectionWrapper">
            <div className="one">
                <DailyOrder />
            </div>

            <div className="two">
                <WeeklyOrder />
            </div>



        </div>
    )
}

export default OrderSection
