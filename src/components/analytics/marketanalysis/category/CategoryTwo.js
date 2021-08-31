import React from 'react'
import Card from './card'
import CompareCategory from './compareCategory'
import CategoryDetails from './categoryDetails'
import './styles/index.scss'
import WeekWise from './weekWise';


const CategoryAnalyticsTwo = ({role}) => {
    return (
        <div className="ProductContainerIndex">
            <Card role={role}/>
            <WeekWise role={role}/>
            <CompareCategory role={role}/>
            <CategoryDetails role={role}/>
        </div>
    )
}

export default CategoryAnalyticsTwo
