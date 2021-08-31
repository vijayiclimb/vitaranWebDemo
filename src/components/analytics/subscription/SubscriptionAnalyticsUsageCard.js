import React, { useState, useEffect } from 'react';
import './styles/SubscriptionAnalyticsUsageCard.scss';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { HashLink as Link } from 'react-router-hash-link';
import { useSelector,useDispatch } from 'react-redux'
import { GetSubscriberUsageList } from '../../../actions/analytics/subscription';
import { GETTYPE } from '../../../constants/analytics/subscription';


const SubscriptionAnalyticsUsageCard = ({ place, job }) => {

    const SubscriberCount = useSelector(state => state.subscriberAnalytics)
const dispatch = useDispatch();
    const total = parseInt(SubscriberCount && SubscriberCount.subscriberUsageCount ? SubscriberCount.subscriberUsageCount.LOW : 0) + parseInt(SubscriberCount && SubscriberCount.subscriberUsageCount ? SubscriberCount.subscriberUsageCount.MEDIUM : 0) + parseInt(SubscriberCount && SubscriberCount.subscriberUsageCount ? SubscriberCount.subscriberUsageCount.HIGH : 0) + parseInt(SubscriberCount && SubscriberCount.subscriberUsageCount ? SubscriberCount.subscriberUsageCount.INACTIVE : 0);
    const [status, setStatus] = useState('');


    console.log(status);


    useEffect(() => {

        let paramType={
            Title:"Subscriber Usage",
            Type:`${status}`
        }

        let param={
            "zone":`${place}`,
            "role":`${job}`,
            "type":`${status}`
        }

    dispatch(GetSubscriberUsageList(param));
    dispatch({type:GETTYPE,payload:paramType})
    },[status])



    const lowpercent = 100 * (parseInt(SubscriberCount && SubscriberCount.subscriberUsageCount ? SubscriberCount.subscriberUsageCount.LOW : 0) / total);
    const mediumpercent = 100 * (parseInt(SubscriberCount && SubscriberCount.subscriberUsageCount ? SubscriberCount.subscriberUsageCount.MEDIUM : 0) / total);
    const highpercent = 100 * (parseInt(SubscriberCount && SubscriberCount.subscriberUsageCount ? SubscriberCount.subscriberUsageCount.HIGH : 0) / total);
    const veryhighpercent = 100 * (parseInt(SubscriberCount && SubscriberCount.subscriberUsageCount ? SubscriberCount.subscriberUsageCount.INACTIVE : 0) / total);

    // console.log(lowpercent)
    // console.log(mediumpercent)
    // console.log(highpercent)
    // console.log(veryhighpercent)

    const progress = [
        { value: `${SubscriberCount && SubscriberCount.subscriberUsageCount ? SubscriberCount.subscriberUsageCount.LOW : 0}`, percent: `${lowpercent}`, title: "Low", transaction: "Less than 3" },
        { value: `${SubscriberCount && SubscriberCount.subscriberUsageCount ? SubscriberCount.subscriberUsageCount.MEDIUM : 0}`, percent: `${mediumpercent}`, title: "Medium", transaction: "3 To 6" },
        { value: `${SubscriberCount && SubscriberCount.subscriberUsageCount ? SubscriberCount.subscriberUsageCount.HIGH : 0}`, percent: `${highpercent}`, title: "High", transaction: "Greater than 7" },
        { value: `${SubscriberCount && SubscriberCount.subscriberUsageCount ? SubscriberCount.subscriberUsageCount.INACTIVE : 0}`, percent: `${veryhighpercent}`, title: "Inactive", transaction: "0" },
    ]



    return (
        <div className="UsageCardContainer">
            <div className="UsageCardWrapper">
                {progress.map((item, index) => (

                    <div className="UsageCards">
                        <div className="UsageProgress">

                            <CircularProgressbar value={item.percent} text={item.value} styles={buildStyles({
                                rotation: 0,
                                textSize: '26px',
                                pathTransitionDuration: 0.5,
                                pathColor: '#adc2eb',
                                textColor: "#99b3e6",
                                trailColor: '#bfbfbf',
                                backgroundColor: "white",



                            })
                            } />
                        </div>
                        <label className="UsageProgressTitle" onClick={() => setStatus(item.title.toUpperCase())}><Link smooth to='#subscriptionuser'>{item.title}</Link></label>
                        <label className="UsageAverageTitle">{item.Average}</label>
                        <label className="UsageProgressStatus">{item.transaction}</label>

                    </div>
                ))}


            </div>


        </div>
    )
}

export default SubscriptionAnalyticsUsageCard
