import React from 'react';
import './styles/card.scss';
import { useSelector } from 'react-redux';

const Card = ({role}) => {
    const Product =useSelector(state => state.productAnalytics)

    
    
    return (
        <div className="first_sectionProductanalytics">

        {
         Product.HighOrder.map((item,index)=>{
        if(index%2===0){
            return <div className="card__productProductanalytics">
                    <label className="card_titleProductanalytics">{item.sku_name}</label>
                    <div className="card_detailsProductanalytics">
                        <div className="card_detailProductanalytics">
                            <label className="card_detail_valueProductanalytics">{item.allUsers}</label>
                            <label className="card_detail_titleProductanalytics">No.of {role}</label>
                        </div>
                        <div className="card_detailProductanalytics">
                            <label className="card_detail_value_middleProductanalytics">{item.avgTransaction}</label>
                            <label className="card_detail_title_middleProductanalytics">Average Value Per Transaction</label>
                        </div>
                        <div className="card_detailProductanalytics">
                            <label className="card_detail_valueProductanalytics">{item.activeusers}</label>
                            <label className="card_detail_titleProductanalytics">Active Users</label>
                        </div>
                    </div>
                </div>
        }
        else{
          return  <div className="card_middleProductanalytics">
                    <label className="card_middle_titleProductanalytics">{item.sku_name}</label>
                    <div className="card_middle_detailsProductanalytics">
                        <div className="card_middle_detailProductanalytics">
                            <label className="card_middle_detail_valueProductanalytics">{item.allUsers}</label>
                            <label className="card_middle_detail_titleProductanalytics">No.of {role}</label>
                        </div>
                        <div className="card_middle_detailProductanalytics">
                            <label className="card_middle_detail_value_middleProductanalytics">{item.avgTransaction}</label>
                            <label className="card_middle_detail_title_middleProductanalytics">Average Value Per Transaction</label>
                        </div>
                        <div className="card_middle_detailProductanalytics">
                            <label className="card_middle_detail_valueProductanalytics">{item.activeusers}</label>
                            <label className="card_middle_detail_titleProductanalytics">Active Users</label>
                        </div>
                    </div>
                </div>
        }
    })   
        }
    

      
                  {/* <div className="card__product">
                    <label className="card_title">{list && list.length!==0? list[0].skuname : null}</label>
                    <div className="card_details">
                        <div className="card_detail">
                            <label className="card_detail_value">{list && list.length!==0? list[0].no_of_usersByRole : null}</label>
                            <label className="card_detail_title">No.of {role}</label>
                        </div>
                        <div className="card_detail">
                            <label className="card_detail_value_middle">{list && list.length!==0? list[0].avgValuePerTransaction : null}</label>
                            <label className="card_detail_title_middle">Average Value Per Transaction</label>
                        </div>
                        <div className="card_detail">
                            <label className="card_detail_value">{list && list.length!==0? list[0].activeUsersPercent : null}</label>
                            <label className="card_detail_title">Active Users</label>
                        </div>
                    </div>
                </div>
                
                <div className="card_middle">
                    <label className="card_middle_title">{list && list.length!==0? list[1].skuname : null}</label>
                    <div className="card_middle_details">
                        <div className="card_middle_detail">
                            <label className="card_middle_detail_value">{list && list.length!==0? list[1].no_of_usersByRole : null}</label>
                            <label className="card_middle_detail_title">No.of {role}</label>
                        </div>
                        <div className="card_middle_detail">
                            <label className="card_middle_detail_value_middle">{list && list.length!==0? list[1].avgValuePerTransaction : null}</label>
                            <label className="card_middle_detail_title_middle">Average Value Per Transaction</label>
                        </div>
                        <div className="card_middle_detail">
                            <label className="card_middle_detail_value">{list && list.length!==0? list[1].activeUsersPercent : null}</label>
                            <label className="card_middle_detail_title">Active Users</label>
                        </div>
                    </div>
                </div>

                <div className="card__product">
                    <label className="card_title">{list && list.length!==0? list[2].skuname : null}</label>
                    <div className="card_details">
                        <div className="card_detail">
                        <label className="card_detail_value">{list && list.length!==0? list[2].no_of_usersByRole : null}</label>
                            <label className="card_detail_title">No.of {role}</label>
                        </div>
                        <div className="card_detail">
                        <label className="card_detail_value_middle">{list && list.length!==0? list[2].avgValuePerTransaction : null}</label>
                            <label className="card_detail_title_middle">Average Value Per Transaction</label>
                        </div>
                        <div className="card_detail">
                        <label className="card_detail_value">{list && list.length!==0? list[2].activeUsersPercent : null}</label>
                            <label className="card_detail_title">Active Users</label>
                        </div>
                    </div>
                </div> */}
        </div>
    )
}

export default Card
