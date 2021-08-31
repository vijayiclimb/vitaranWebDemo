import axios from 'axios'
import { baseUrl } from '../../baseurl'
import { GETDEALS, GETDEALSLIST, SEARCHSKUDEALMGT, UPDATEDEAL, ADDDEAL,ADDDEALWARNING,ADDDEALFAILED,ADDDEALSUCCESS, REMOVEDEAL, GETORDERDETAILS,GETORDERLIST,CANCELORDERSUCCESS, UPDATEDEALSUCCESS, UPDATEDEALFAILED, UPDATEDEALWARNING, REMOVEDEALSUCCESS, REMOVEDEALFAILED } from '../../constants/appPanel/Deals'
import React from 'react'



export const getDeal = (zone) => async (dispatch) => {

   let dealData={
        dealList: [],
        orderDealList: [],
        orderDetails: [],
        Pageloading: true,
        dealsDetails: {},
        skuNameList: [],
        DealId: '',
        skuList: [],
    }

    try {

        const param = {
            'zone_name': `${zone}`
        }

        const { data } = await axios.post(`${baseUrl}VitaranSDK/webGetDeals`, param,{
            headers : {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*",
              }})


        if (data.Code === 200) {

         
       console.log(data)
            dispatch({ type: GETDEALS, payload: data });
        }

    }
    catch (error) {
        console.log(error)
    }
}

export const SearchSkuDeal = (sku, zone) => async (dispatch) => {
    try {

        const param = {
            "skuname": `${sku}`,
            'zone_name': `${zone}`
        }

        const { data } = await axios.post(`${baseUrl}VitaranSDK/webSearchSKU`, param,{
            headers : {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*",
              }})
              console.log(data)
        if (data.Code === 200) {
            dispatch({ type: SEARCHSKUDEALMGT, payload: data });
        }

    } catch (error) {
        console.log(error);
    }
}


export const getDealList = (zone, Id) => async (dispatch) => {
    try {

        const param = {
            'zone_name': `${zone}`,
            'dealid': `${Id}`
        }

        const { data } = await axios.post(`${baseUrl}VitaranSDK/webGetDealList`, param,{
            headers : {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*",
              }})

        if (data.Code === 200) {
            dispatch({ type: GETDEALSLIST, payload: data });
        }

        console.log(data)
    } catch (error) {
        console.log(error.message);
    }
}


export const UpdateDeal = (param) => async (dispatch) => {

    try {


        const { data } = await axios.post(`${baseUrl}VitaranSDK/webUpdateDeal`, param,{
            headers : {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*",
              }})

        if (data.code === "200") {
            dispatch(getDeal(param.zone));
            dispatch({type:UPDATEDEAL,payload:data.dealList});
            dispatch({type:UPDATEDEALSUCCESS,payload:'Success'});
        }
        else if(data.Code === "401"){
            dispatch({type:UPDATEDEALWARNING,payload:'Warning'});
        }
        else{
            dispatch({type:UPDATEDEALFAILED,payload:'Failed'});
        }

        
    } catch (error) {
        console.log(error.message);
        dispatch({type:UPDATEDEALFAILED,payload:'Failed'});
    }
}


export const AddDeal = (param,handleCancel) => async (dispatch) => {

    try {


        const { data } = await axios.post(`${baseUrl}VitaranSDK/webAddDeal`, param,{
            headers : {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*",
              }})

        console.log(data);

        if (data.Code === "200") {
            dispatch({ type: ADDDEAL, payload: data });
            dispatch({type:ADDDEALSUCCESS,payload:'ADDED SUCCESSFULLY'});
            // handleCancel();  
        }
        else if(data.Code==='401'){
            dispatch({type: ADDDEALWARNING,payload:'ADD Deal warning'});
        }


    } catch (error) {
        console.log(error.message);
        dispatch({type: ADDDEALFAILED,payload:'ADD Deal Failed'});
    }
}

export const RemoveDeal = (zone, id) => async (dispatch) => {
    try {
        const param = {
            "zone_name": `${zone}`,
            "dealid": `${id}`
        }
        const { data } = await axios.post(`${baseUrl}VitaranSDK/webDealRemove`, param,{
            headers : {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*",
              }})

        if (data.Code === 200) {
            dispatch({type:REMOVEDEALSUCCESS,payload:'Successs'});
            dispatch(getDeal(zone));
        }
        else{
            dispatch({type:REMOVEDEALFAILED,payload:'failed'});
        }

    } catch (error) {
        console.log(error.message);
        dispatch({type:REMOVEDEALFAILED,payload:'failed'});
    }
}



export const getOrderDetails=(dealId,orderId)=>async(dispatch)=>{

    const param = {
        
            "dealid":`${dealId}`,
            "orderid":`${orderId}`
   
    }
    try {


        const { data } = await axios.post(`${baseUrl}VitaranSDK/webGetDealOrderDetails`, param,{
            headers : {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*",
              }})

        if (data.Code === 200) {

            // dispatch(getDeal(zone));
            // console.log(data);
            dispatch({type: GETORDERDETAILS,payload: data.orderDetails});
        }
        
    } catch (error) {
        console.log(error.message);
    }
}

export const getOrderlist=(dealId)=>async(dispatch)=>{
    const param={
        "dealid":`${dealId}`
    }

    
    try {


        const { data } = await axios.post(`${baseUrl}VitaranSDK/webDealOrderList`, param,{
            headers : {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*",
              }})

        if (data.Code === 200) {

           
            dispatch({type:GETORDERLIST,payload:data})
           
        }
        
    } catch (error) {
        console.log(error.message);
    }

}




export const CancelOrder=(userId,dealId,reason,orderId)=>async(dispatch)=>{
    const param = {
        
        "user_id":`${userId}`,
        "dealid":`${dealId}`,
        "canceledBy":"Bider",
        "reason":`${reason}`,
        "orderid":`${orderId}`
    }


    try {

        console.log(param)


        const { data } = await axios.post(`${baseUrl}VitaranSDK/webCancelDeal`, param,{
            headers : {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*",
              }})

        if (data.Result ===  "Success") {
            dispatch(getOrderlist(dealId));
            dispatch({type:CANCELORDERSUCCESS,payload: 'Cancelled SuccessFully'});
            console.log(data)
           
        }
        
    } catch (error) {
        console.log(error.message);
    }
}