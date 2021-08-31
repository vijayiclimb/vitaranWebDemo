import React from 'react'
import Card from './card'
import CompareCompany from './compareCompany'
import CompanyDetails from './companyDetails'
import './styles/index.scss'
import WeekWise from './weekWise';


const CompanyAnalyticsTwo = ({role}) => {
    return (
        <div className="ProductContainerIndex">
            <Card role={role}/>
            <WeekWise role={role}/>
            <CompareCompany role={role}/>
            <CompanyDetails role={role}/>
        </div>
    )
}

export default CompanyAnalyticsTwo