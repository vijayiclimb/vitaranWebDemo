import React,{useState,useEffect} from 'react'
import './styles/sub.scss';
import Count from './count'
import RetailerGraph from './retailerGraph'
import {Container,Containergraph,PageLoader} from './styles/subscriptionStyles.js'
// import RetailerGraph from './retailerGraph'
import SubscriptionAnalyticsAverageValue from './subscriberAverageValue'
import SubscriptionAnalyticsUsage from './subscriberUsage'
import SubscriptionUser from './subscriptionUser'
import {useDispatch} from 'react-redux'
import { getData, getSubs } from '../../../actions/analytics/subscription'
import axios from 'axios'
import {baseUrl} from '../../../baseurl'
import {useSelector} from 'react-redux'
import Spinner from './loader'
import {ERROR} from '../../../constants/analytics/subscription'
import {CircularProgress} from '@material-ui/core'
import RetailerSubscriptionGraph from './retailerGraph';


const Subscription = ({place,job}) => {
const dispatch = useDispatch();
const loading = useSelector(state => state.subscriberAnalytics)




useEffect(()=>{
    dispatch({type: ERROR});
      dispatch(getData(place,job));
    //   dispatch(getSubs(place,job));
  
},[place,job])

console.log(loading.loading)

    return (

        loading.loading? 
        (  
            <PageLoader> <CircularProgress /></PageLoader>
           
        ) :(
       <>
       <Container>
       <Count role={job}/>
        <RetailerSubscriptionGraph role={job}/>
       <SubscriptionAnalyticsUsage place={place} job={job}/>
       <SubscriptionAnalyticsAverageValue place={place} job={job}/>
       <SubscriptionUser place={place} job={job}/>
       </Container>
       </>
        )
    )
}

export default Subscription
