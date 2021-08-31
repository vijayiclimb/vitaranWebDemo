import React from 'react'
import CompanyAnalyticsOne from './CompanyOne'
import CompanyAnalyticsTwo from './CompanyTwo'

const CompanyAnalytics = ({job}) => {
    return (
        <div>
        {job==='All'?(<CompanyAnalyticsOne  role={job}/>):(<CompanyAnalyticsTwo  role={job}/>)}
 
        </div>
    )
}

export default CompanyAnalytics
