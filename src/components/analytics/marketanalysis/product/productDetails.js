import React from 'react'
import ProductCard from './productCard'
import ProductTable from './productTable'
import './styles/productDetails.scss'

const ProductDetails = ({place,role}) => {
    return (
        <div className="detailContainer">
            <div className="product_list">
              <ProductTable place={place} role={role}/>
            </div>
            <div className="product_detail">
             <ProductCard place={place}/>
            </div>
        </div>
    )
}

export default ProductDetails
