import React from 'react'
import SubscriptionAnalyticsAverageValueGraph from './SubscriptionAnalyticsAverageValueGraph'
import SubscriptionAnalyticsAverageValueCard from './SubscriptionAnalyticsAverageValueCard';
import './styles/SubscriptionAnalyticsAverageValue.scss';

const SubscriptionAnalyticsAverageValue = ({place, job}) => {
    return (
        <div className="SubscriptionAnalyticsAverageContainer">
        <label className="SubscriptionAnalyticsAverageTitle">Subscription Average</label>
        <SubscriptionAnalyticsAverageValueCard place={place} job={job}/>
        <SubscriptionAnalyticsAverageValueGraph/>
            
        </div>
    )
}

export default SubscriptionAnalyticsAverageValue