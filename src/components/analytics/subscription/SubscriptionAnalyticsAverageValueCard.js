import React,{useState,useEffect} from 'react';
import './styles/SubscriptionAnalyticsAverageValueCard.scss';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { HashLink as Link } from 'react-router-hash-link';
import {useSelector,useDispatch} from 'react-redux'
import { GetSubscriberAvgTransactionList } from '../../../actions/analytics/subscription';
import { GETTYPE } from '../../../constants/analytics/subscription';

const SubscriptionAnalyticsAverageValueCard = ({ place, job }) => {
    const AverageCount = useSelector(state => state.subscriberAnalytics)
    // console.log(AverageCount.avgValuePerTransactionCount);
    const [status, setStatus] = useState('');
    const dispatch=useDispatch();

    


    useEffect(() => {

        let paramType={
            Title:"Subscriber Average Transaction",
            Type:`${status}`
        }
      
        let param={
            "zone":`${place}`,
            "role":`${job}`,
            "type":`${status}`
        }
        console.log(param);

        dispatch(GetSubscriberAvgTransactionList(param));

       dispatch({type:GETTYPE,payload:paramType})
    }, [status])
   
    
    const total= parseInt(AverageCount && AverageCount.avgValuePerTransactionCount? AverageCount.avgValuePerTransactionCount.LOW : 0) + parseInt(AverageCount && AverageCount.avgValuePerTransactionCount? AverageCount.avgValuePerTransactionCount.MEDIUM : 0) + parseInt(AverageCount && AverageCount.avgValuePerTransactionCount?AverageCount.avgValuePerTransactionCount.HIGH: 0) + parseInt(AverageCount && AverageCount.avgValuePerTransactionCount?AverageCount.avgValuePerTransactionCount.VERYHIGH:0)
    

     const lowpercent = 100*(parseInt(AverageCount && AverageCount.avgValuePerTransactionCount?AverageCount.avgValuePerTransactionCount.LOW : 0)/total);
     const mediumpercent = 100*(parseInt(AverageCount && AverageCount.avgValuePerTransactionCount?AverageCount.avgValuePerTransactionCount.MEDIUM : 0)/total);
     const highpercent = 100*(parseInt(AverageCount && AverageCount.avgValuePerTransactionCount?AverageCount.avgValuePerTransactionCount.HIGH : 0)/total);
     const veryhighpercent = 100*(parseInt(AverageCount && AverageCount.avgValuePerTransactionCount?AverageCount.avgValuePerTransactionCount.VERYHIGH :0)/total);

    //  console.log(lowpercent)
    //  console.log(mediumpercent)
    //  console.log(highpercent)
    //  console.log(veryhighpercent)

     const progress=[
         {value:`${AverageCount && AverageCount.avgValuePerTransactionCount?AverageCount.avgValuePerTransactionCount.LOW : 0}`,percent:`${lowpercent}`,title: "Low",transaction: "Less than ₹1000",Average:"Average Value Per Transaction"},
         {value:`${AverageCount && AverageCount.avgValuePerTransactionCount?AverageCount.avgValuePerTransactionCount.MEDIUM : 0}`,percent:`${mediumpercent}`,title: "Medium",transaction: "₹1001 - ₹2500",Average:"Average Value Per Transaction"},
         {value:`${AverageCount && AverageCount.avgValuePerTransactionCount?AverageCount.avgValuePerTransactionCount.HIGH:0}`,percent:`${highpercent}`,title: "High",transaction: "₹2501 - ₹5000",Average:"Average Value Per Transaction"},
         {value:`${AverageCount && AverageCount.avgValuePerTransactionCount?AverageCount.avgValuePerTransactionCount.VERYHIGH:0}`,percent:`${veryhighpercent}`,title: "Very High",transaction: "Greater than ₹5000",Average:"Average Value Per Transaction"},
     ]

    return (
        <div className="SubscriptionAverageValueCardContainerSub">
            <div className="SubscriptionAverageValueCardWrapperSub">
                {progress.map((item, index) => (

                    <div className="SubscriptionAverageValueCardsSub">
                        <div className="SubscriptionAverageValueProgressSub">

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
                        <label className="SubscriptionAverageValueProgressTitleSub" onClick={() => setStatus(item.title.toUpperCase().replace(/\s/g, ""))}><Link smooth to='#subscriptionuser'>{item.title}</Link></label>
                        <label className="SubscriptionAverageValueAverageTitleSub">{item.Average}</label>
                        <label className="SubscriptionAverageValueProgressStatusSub">{item.transaction}</label>

                    </div>
                ))}


            </div>


        </div>
    )
}

export default SubscriptionAnalyticsAverageValueCard
