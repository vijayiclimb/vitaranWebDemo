import React from 'react'
import yel from '../../../../images/product/cig2.jpg'
import './styles/categoryCard.scss'
import AdbIcon from '@material-ui/icons/Adb';
import CategoryIcon from '@material-ui/icons/Category';
import BusinessIcon from '@material-ui/icons/Business';
import AccountTreeIcon from '@material-ui/icons/AccountTree';

const CategoryCard = () => {
    return (
        <div className="containerDetail">
           <div className="img_container">
               <img src={yel} alt="product_img" className="product_image" />
           </div>
           <div className="product_container">
             <div className="product_list">
                 <div className="product_item">
                    <div className="icon"><AdbIcon/></div><label className="product_title">Sku Name : </label> <label className="product_value">Gold Flake Kings</label>
                 </div>
                 <div className="product_item">
                    <div className="icon"><CategoryIcon/></div><label className="product_title">Category : </label> <label className="product_value">Cigarette</label>
                 </div>
                 <div className="product_item">
                    <div className="icon"><BusinessIcon/></div><label className="product_title">Company: </label> <label className="product_value">Ics Pvt Ltd</label>
                 </div>
                 <div className="product_item">
                    <div className="icon"><AccountTreeIcon/></div><label className="product_title">Brand : </label> <label className="product_value">Gold Flake</label>
                 </div>
             </div>
           </div>
           <div className="weekContainer">

              <div className="weekRetailers">
                  <label className="retail_title">No. of Retailers</label>
                  <div className="retail_week">
                  <div className="week">
                       <label className="retail_title">W7</label>
                       <label className="retail_value">25</label>
                  </div>
                  <div className="week">
                       <label className="retail_title">W6</label>
                       <label className="retail">25</label>
                  </div>
                  <div className="week">
                       <label className="retail_title">W5</label>
                       <label className="retail">25</label>
                  </div>
                  <div className="week">
                       <label className="retail_title">W4</label>
                       <label className="retail">25</label>
                  </div>
                  <div className="week">
                       <label className="retail_title">W3</label>
                       <label className="retail">35</label>
                  </div>
                  <div className="week">
                       <label className="retail_title">W2</label>
                       <label className="retail">45</label>
                  </div>
                  </div>
              </div>
              <div className="weekAverage">
                  <label className="retail_title">Average Value Per Transaction</label>
                  <div className="retail_week">
                  <div className="week">
                       <label className="retail_title">W7</label>
                       <label className="retail_value">25</label>
                  </div>
                  <div className="week">
                       <label className="retail_title">W6</label>
                       <label className="retail">25</label>
                  </div>
                  <div className="week">
                       <label className="retail_title">W5</label>
                       <label className="retail">25</label>
                  </div>
                  <div className="week">
                       <label className="retail_title">W4</label>
                       <label className="retail">25</label>
                  </div>
                  <div className="week">
                       <label className="retail_title">W3</label>
                       <label className="retail">35</label>
                  </div>
                  <div className="week">
                       <label className="retail_title">W2</label>
                       <label className="retail">45</label>
                  </div>
                  </div>
              </div>
              <div className="weekActiveUsers">
                  <label className="retail_title">Average Value Per Transaction</label>
                  <div className="retail_week">
                  <div className="week">
                       <label className="retail_title">W7</label>
                       <label className="retail_value">25</label>
                  </div>
                  <div className="week">
                       <label className="retail_title">W6</label>
                       <label className="retail">25</label>
                  </div>
                  <div className="week">
                       <label className="retail_title">W5</label>
                       <label className="retail">25</label>
                  </div>
                  <div className="week">
                       <label className="retail_title">W4</label>
                       <label className="retail">25</label>
                  </div>
                  <div className="week">
                       <label className="retail_title">W3</label>
                       <label className="retail">35</label>
                  </div>
                  <div className="week">
                       <label className="retail_title">W2</label>
                       <label className="retail">45</label>
                  </div>
                  </div>
              </div>
              <div></div>

           </div>
        </div>
    )
}

export default CategoryCard
