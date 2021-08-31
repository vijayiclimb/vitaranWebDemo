import React from 'react'
import yel from '../../../../images/product/cig2.jpg'
import './styles/productCard.scss'
import AdbIcon from '@material-ui/icons/Adb';
import CategoryIcon from '@material-ui/icons/Category';
import BusinessIcon from '@material-ui/icons/Business';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import { useSelector } from 'react-redux';

const ProductCard = () => {


     const Product = useSelector(state => state.productAnalytics);

     // console.log(Product.SkuDetail);

     return (
          <div className="containerDetail">
               <div className="img_container">
                    <img src={Product && Product.SkuDetail && Product.SkuDetail.sku_image} alt="product_img" className="product_image" />
               </div>
               <div className="product_container">
                    <div className="product_list">
                         <div className="product_item">
                              <div className="icon"><AdbIcon /></div><label className="product_title">Sku Name : </label> <label className="product_value">{Product.SkuDetail.sku_name}</label>
                         </div>
                         <div className="product_item">
                              <div className="icon"><CategoryIcon /></div><label className="product_title">Category : </label> <label className="product_value">{Product.SkuDetail.category}</label>
                         </div>
                         <div className="product_item">
                              <div className="icon"><BusinessIcon /></div><label className="product_title">Company: </label> <label className="product_value">{Product.SkuDetail.company}</label>
                         </div>
                         <div className="product_item">
                              <div className="icon"><AccountTreeIcon /></div><label className="product_title">Brand : </label> <label className="product_value">{Product.SkuDetail.brand}</label>
                         </div>
                    </div>
               </div>
               <div className="weekContainer">

                    <div className="weekRetailers">
                         <label className="retail_title">No. of Retailers</label>
                         <div className="retail_week">

                              {
                                   Product ? (
                                        <>
                                             {
                                                  Product.SkuDetail ?
                                                       (
                                                            <>{
                                                                 Product.SkuDetail.users_per_week && Product.SkuDetail.users_per_week.length !== 0 ? (
                                                                      <>{
                                                                           Product.SkuDetail.users_per_week.map((item, index) =>
                                                                           (
                                                                                <>{
                                                                                     index === 0 ? (
                                                                                          <div className="week" key={index}>
                                                                                               <label className="retail_title">W{item.wk}</label>
                                                                                               <label className="retail_value">{item.count_by_role}</label>
                                                                                          </div>
                                                                                     )
                                                                                          :
                                                                                          (
                                                                                               <div className="week">
                                                                                                    <label className="retail_title">W{item.wk}</label>
                                                                                                    <label className="retail">{item.count_by_role}</label>
                                                                                               </div>
                                                                                          )
                                                                                }
                                                                                </>

                                                                           ))
                                                                      }
                                                                      </>
                                                                 ) : (null)

                                                            }
                                                            </>
                                                       )
                                                       :
                                                       (null)


                                             }

                                        </>
                                   ) : (null)

                              }


                         </div>
                    </div>
                    <div className="weekAverage">
                         <label className="retail_title">Average Value Per Transaction</label>
                         <div className="retail_week">
                          
                         {
                                   Product ? (
                                        <>
                                             {
                                                  Product.SkuDetail ?
                                                       (
                                                            <>{
                                                                 Product.SkuDetail.avg_value_per_week && Product.SkuDetail.avg_value_per_week.length !== 0 ? (
                                                                      <>{
                                                                           Product.SkuDetail.avg_value_per_week.map((item, index) =>
                                                                           (
                                                                                <>{
                                                                                     index === 0 ? (
                                                                                          <div className="week" key={index}>
                                                                                               <label className="retail_title">W{item.wk}</label>
                                                                                               <label className="retail_value">{parseInt(item.avg_weekly_transaction).toFixed(0)}</label>
                                                                                          </div>
                                                                                     )
                                                                                          :
                                                                                          (
                                                                                               <div className="week">
                                                                                                    <label className="retail_title">W{item.wk}</label>
                                                                                                    <label className="retail">{parseInt(item.avg_weekly_transaction).toFixed(0)}</label>
                                                                                               </div>
                                                                                          )
                                                                                }
                                                                                </>

                                                                           ))
                                                                      }
                                                                      </>
                                                                 ) : (null)

                                                            }
                                                            </>
                                                       )
                                                       :
                                                       (null)


                                             }

                                        </>
                                   ) : (null)

                              }
                         </div>
                    </div>
                    {/*<div className="weekActiveUsers">
                         <label className="retail_title">Week Active Users</label>
                         <div className="retail_week">
                            
                          {
                                   Product ? (
                                        <>
                                             {
                                                  Product.SkuDetail ?
                                                       (
                                                            <>{
                                                                 Product.SkuDetail.no_of_users_weel_list && Product.SkuDetail.no_of_users_weel_list.length !== 0 ? (
                                                                      <>{
                                                                           Product.SkuDetail.no_of_users_weel_list.map((item, index) =>
                                                                           (
                                                                                <>{
                                                                                     index === 0 ? (
                                                                                          <div className="week" key={index}>
                                                                                               <label className="retail_title">W{item.wk}</label>
                                                                                               <label className="retail_value">{item.no_of_users}</label>
                                                                                          </div>
                                                                                     )
                                                                                          :
                                                                                          (
                                                                                               <div className="week">
                                                                                                    <label className="retail_title">W{item.wk}</label>
                                                                                                    <label className="retail">{item.no_of_users}</label>
                                                                                               </div>
                                                                                          )
                                                                                }
                                                                                </>

                                                                           ))
                                                                      }
                                                                      </>
                                                                 ) : (null)

                                                            }
                                                            </>
                                                       )
                                                       :
                                                       (null)


                                             }

                                        </>
                                   ) : (null)

                              }
                         </div>
                    </div>*/}
                    <div>
                    </div>

               </div> 
          </div>
     )
}

export default ProductCard
