import React from 'react'
import CompanyCard from './companyCard'
import CompanyTable from './companyTable'
import './styles/companyDetails.scss'

const CompanyDetails = ({role}) => {
    return (
        <div className="detailContainer">
            <div className="product_list">
              <CompanyTable role={role}/>
            </div>
            <div className="product_detail">
             <CompanyCard/>
            </div>
        </div>
    )
}

export default CompanyDetails
