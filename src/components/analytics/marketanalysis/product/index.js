import React,{useEffect} from 'react'
import { getProductData } from '../../../../actions/analytics/market/product'
import ProductAnalyticsOne from './productOne'
import ProductAnalyticsTwo from './productTwo'
import { useDispatch } from 'react-redux'


const ProductAnalytics = ({place,job}) => {
    const dispatch = useDispatch();
    

    // React.useEffect(()=>{
    //     if(job==="All"){
    //         console.log("yes")
    //     }else{
    //         console.log("no")
    //     }
    // },[job])

    useEffect(()=>{
         dispatch(getProductData(place,job))
    },[place,job])

   


    return (
       <div>
       {job==='All'?(<ProductAnalyticsOne  place={place} role={job}/>):(<ProductAnalyticsTwo place={place} role={job}/>)}

       </div>
    )
}

export default ProductAnalytics