import React from 'react'
import './styles/weekWise.scss'
import cig from '../../../../images/product/cig2.jpg'
import { TextField } from '@material-ui/core'
import CompanyGraph from './companyGraph'

const WeekWise = () => {
    return (
        <div className="second_section">
          <div className="product_wise">
            <label>Company Wise Per Week</label>

             <div className="product_display">
                 <div className="product_img">
                    <img src={cig} alt="product img"></img>
                 </div>
                 <div className="product_value">
                 <div className="button_value">
                    <div className="value">
                      <label>25</label>
                    </div>
                    <div className="value_label">
                        <label>Number of Retailers</label>
                    </div>
                    </div>


                    <div className="button_value">
                    <div className="value">
                      <label>25</label>
                    </div>
                    <div className="value_label">
                        <label>Number of Retailers</label>
                    </div>
                    </div>

                    <div className="button_value">
                    <div className="value">
                      <label>25</label>
                    </div>
                    <div className="value_label">
                        <label>Number of Retailers</label>
                    </div>
                    </div>
                 </div>

             </div>


             <div className="product_search">
                 <TextField  label="Company Name" className="product_search_box" variant="outlined" />
                 
             </div>
          </div>
          <div className="product_graph">
          <label>Average Value</label>
          <CompanyGraph/>
          </div>
        </div>
    )
}

export default WeekWise
