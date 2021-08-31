import React from 'react'
import './styles/ProductMgtcard.scss';
import { useSelector } from 'react-redux';

const ProductMgtCard = () => {

    const state = useSelector(state => state.productMgt)
 

    return (
        state.ProductList && state.ProductList.length!==0 ?
        (       <div className="card_Container">
           <div className="Cards_section">
                    <div className="card_value">
                     <label>{state.ProductMgtCount.popularBrands}</label>
                    </div>
                    <div className="card_title">
                    <label>Popular Product</label>
                    </div>
                </div>
                <div className="Cards_section">
                    <div className="card_value">
                     <label>{state.ProductMgtCount.popularCompany}</label>
                    </div>
                    <div className="card_title">
                    <label>Popular Companies</label>
                    </div>
                </div>
                <div className="Cards_section">
                    <div className="card_value">
                     <label>{state.ProductMgtCount.popularCategory}</label>
                    </div>
                    <div className="card_title">
                    <label>Popular Categories</label>
                    </div>
                </div>
                <div className="Cards_section">
                    <div className="card_value">
                     <label>{state.ProductMgtCount.newLaunch}</label>
                    </div>
                    <div className="card_title">
                    <label>New Launch</label>
                    </div>
                </div>
                <div className="Cards_section">
                    <div className="card_value">
                     <label>{state.ProductMgtCount.otherProduct}</label>
                    </div>
                    <div className="card_title">
                    <label>Other Products</label>
                    </div>
                </div>

        </div>) : (<h1>No data</h1>)
 
    )
}

export default ProductMgtCard
