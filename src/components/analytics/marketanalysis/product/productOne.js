import React from 'react'
import Card from './card'
import CompareProduct from './compareProduct'
import Performance from './performance'
import ProductDetails from './productDetails'
import ProductWiseRates from './ProductWiseRates'
import './styles/index.scss'
import WeekWise from './weekWise';
import { useSelector } from 'react-redux'

const ProductAnalyticsOne = ({place,role}) => {
    const Product =useSelector(state => state.productAnalytics)
    // console.log(Product.SkuDetailList)
 

    return (
        <div className="ProductContainerIndex">
            <Card role={role}/>
            {/* <WeekWise role={role}/> */}
            <CompareProduct place={place} role={role}/>
            <Performance place={place} role={role}/>
            <ProductDetails place={place} role={role}/>
            <ProductWiseRates role={role}/>
        </div>
    )
}

export default ProductAnalyticsOne
