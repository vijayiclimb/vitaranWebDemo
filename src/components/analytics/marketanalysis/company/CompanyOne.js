import React from 'react'
import Card from './card'
import CompareCompany from './compareCompany'
import CompanyDetails from './companyDetails'
import './styles/index.scss'
import WeekWise from './weekWise';
import Performance from './performance'
import CompanyWiseRates from './CompanyWiseRates'

const CompanyAnalyticsOne = ({role}) => {
    return (
        <div className="ProductContainerIndex">
            <Card role={role}/>
            <WeekWise role={role}/>
            <CompareCompany role={role}/>
            <Performance role={role}/>  
              <CompanyDetails role={role}/>   
               <CompanyWiseRates role={role}/>
        </div>
    )
}

export default CompanyAnalyticsOne
