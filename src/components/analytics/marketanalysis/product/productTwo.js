import React from 'react'
import Card from './card'
import CompareProduct from './compareProduct'
import Performance from './performance'
import ProductDetails from './productDetails'
import './styles/index.scss'
import WeekWise from './weekWise'

const ProductAnalyticsTwo = ({place,role}) => {
    
    return (
        <div className="ProductContainerIndex">
            <Card place={place} role={role}/>
            <WeekWise place={place} role={role}/>
            <CompareProduct place={place}  role={role}/>
            <ProductDetails place={place} role={role}/>
        </div>
    )
}

export default ProductAnalyticsTwo
