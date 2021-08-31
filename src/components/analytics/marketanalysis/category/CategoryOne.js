import React from 'react'
import Card from './card'
import CompareCategory from './compareCategory'
import CategoryDetails from './categoryDetails'
import './styles/index.scss'
import WeekWise from './weekWise';
import Performance from './performance'
import CategoryWiseRates from './CategoryWiseRates'

const CategoryAnalyticsOne = ({role}) => {
    return (
        <div className="ProductContainerIndex">
            <Card role={role}/>
            <WeekWise role={role}/>
            <CompareCategory role={role}/>
            <Performance role={role}/>   
              <CategoryDetails role={role}/>
              <CategoryWiseRates role={role}/>
        </div>
    )
}

export default CategoryAnalyticsOne
