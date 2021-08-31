import React from 'react'
import CategoryAnalyticsOne from './CategoryOne'
import CategoryAnalyticsTwo from './CategoryTwo'

const CategoryAnalytics = ({job}) => {
    return (
        <div>
        {job==='All'?(<CategoryAnalyticsOne role={job}/>):(<CategoryAnalyticsTwo role={job}/>)}
 
        </div>
    )
}

export default CategoryAnalytics
