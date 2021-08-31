import axios from "axios"

import {baseUrl} from '../../../baseurl'
import { GETCOMPARE, GETPRODUCTANALYTICS, GETPRODUCTWISE, GETSKUDETAILS } from "../../../constants/analytics/market/product"


export const getProductData = (place,job) => async(dispatch)=>{

    let param={
        "zone":`${place}`,
        "role":`${job}`
    }

    try{
        const {data} = await axios.post(`${baseUrl}VitaranSDK/GetMarketAnalyticsByProduct`,param,{
          headers : {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            }}) 
            console.log(data)
      if (data.Code === 200) {
        dispatch({ type: GETPRODUCTANALYTICS, payload: data })
        // if(data && data.main_sku_list && data.main_sku_list.length!==0){
        //    dispatch(GetSkuDetails(place,job,data.main_sku_list[0].sku_name))
        // }
       
      }

  
            }
    catch (error){
        console.log(error);
        // dispatch({type: ERROR});
    }
}




export const GetSkuDetailsProductAnalytics = (place,job,sku) => async(dispatch)=>{

  let param={
    "role":`${job}`,
    "zone":`${place}`,
    "sku_name":`${sku}`
  }

  try{
      const {data} = await axios.post(`${baseUrl}VitaranSDK/webGetIndividualskuList`,param,{
        headers : {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          }}) 
          console.log(data)
    if (data.Code === 200) {
      dispatch({ type: GETSKUDETAILS, payload: data })
    }


          }
  catch (error){
      console.log(error);
      // dispatch({type: ERROR});
  }
}




export const GetProductWiseProductAnalytics = (place,job,sku) => async(dispatch)=>{

  let param={
    "role":`${job}`,
    "zone":`${place}`,
    "sku_name":`${sku}`
  }

  console.log(param)

  try{
      const {data} = await axios.post(`${baseUrl}VitaranSDK/webGetProductWiseList`,param,{
        headers : {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          }}) 
          console.log(data)
    if (data.Code === 200) {
      dispatch({ type: GETPRODUCTWISE, payload: data })
    }


          }
  catch (error){
      console.log(error);
      // dispatch({type: ERROR});
  }
}




export const GetCompareProductAnalytics = (place,job,sku) => async(dispatch)=>{

  let param={
    "role":`${job}`,
    "zone":`${place}`,
    "types":`${sku}`
  }

  console.log(param)

  try{
      const {data} = await axios.post(`${baseUrl}VitaranSDK/webSKUCompareList`,param,{
        headers : {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          }}) 
          console.log(data)
    // if (data.Code === 200) {
    //   dispatch({ type: GETCOMPARE, payload: data })
    // }


          }
  catch (error){
      console.log(error);
      // dispatch({type: ERROR});
  }
}