import React from 'react'
import SubscriptionAnalyticsUsageGraph from './SubscriptionAnalyticsUsageGraph'
import SubscriptionAnalyticsUsageCard from './SubscriptionAnalyticsUsageCard';
import './styles/SubscriptionAnalyticsUsage.scss';

const SubscriptionAnalyticsUsage = ({place,job}) => {
    return (
        <div className="UsageContainer">
        <label className="UsageTitle">Subscription Usage</label>
        <SubscriptionAnalyticsUsageCard place={place} job={job}/>
        <SubscriptionAnalyticsUsageGraph/>
            
        </div>
    )
}

export default SubscriptionAnalyticsUsage
