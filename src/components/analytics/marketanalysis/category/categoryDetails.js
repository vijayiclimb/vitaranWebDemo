import React from 'react'
import CategoryCard from './categoryCard'
import CategoryTable from './categoryTable'
import './styles/categoryDetails.scss'

const CompanyDetails = ({role}) => {
    return (
        <div className="detailContainer">
            <div className="product_list">
              <CategoryTable role={role}/>
            </div>
            <div className="product_detail">
             <CategoryCard/>
            </div>
        </div>
    )
}

export default CompanyDetails
