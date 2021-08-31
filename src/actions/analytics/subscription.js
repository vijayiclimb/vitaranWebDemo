import axios from "axios"
import { GETANALYTICS, GETSUBS,ERROR, SUCCESS, PROFILEDETAILS, PROFERROR, PROFSUCCESS, GETSUBSAVG } from "../../constants/analytics/subscription"
import {baseUrl} from '../../baseurl'


export const getData = (place,job) => async(dispatch)=>{

    const param={
      "zone":`${place}`,
      "role":`${job}`
  }
    try{
        const {data} = await axios.post(`${baseUrl}/VitaranSDK/getSubscriberAnalytics`,param,{
          headers : {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            }}) 

              if(data.Result==='Success'){
                dispatch({type: GETANALYTICS, payload: data});
              }

              // console.log(data)

              // if(data.Result==='Error'){

              //   dispatch({type: ERROR});
                   
              // }
              // else{
                
              //   dispatch({type: GETANALYTICS, payload: data});
              //   dispatch({type: SUCCESS});
              // }


      
            }
    catch (error){
        console.log(error);
        // dispatch({type: ERROR});
    }
}




export const getProfile = (place,job,id) => async(dispatch)=>{

    const param={
      "zone":`${place}`,
      "role":`${job}`,
      "user_id":`${id}`
  }


    try{
        const {data} = await axios.post(`${baseUrl}/VitaranSDK/getIndividualSubscriberDetails`,param,{
          headers : {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            }})
        
              console.log(data);

              if(data.Code==="200"){
                dispatch({type:PROFILEDETAILS,payload:data})
              }

    // console.log(param)

              // if(data.Result==='Error'){

              //   // dispatch({type: PROFERROR});
                   
              // }
              // else{
              //   console.log(data);
              //   dispatch({type: PROFSUCCESS});
              //   dispatch({type: PROFILEDETAILS, payload: data}); 
              // }
            }
    catch (error){
        console.log(error);
        // dispatch({type: ERROR});
    }
}



export const GetSubscriberUsageList = (param) => async(dispatch)=>{


  try{
      const {data} = await axios.post(`${baseUrl}/VitaranSDK/getSubscriberDetailsList`,param,{
        headers : {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          }}) 

            if(data.Code==='200'){
               dispatch({type:GETSUBS,payload:data})
            }

            // console.log(data)

// console.log(param)
    
          }
  catch (error){
      console.log(error);
    
  }
}


export const GetSubscriberAvgTransactionList=(param)=>async(dispatch)=>{

  try{

    const {data} = await axios.post(`${baseUrl}/VitaranSDK/webGetSubscriberAvgTransactionList`,param,{
      headers : {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        }}) 
      
        if(data.Code==='200'){
          dispatch({type:GETSUBSAVG,payload:data})
       }

      // console.log(data)
      // console.log(param)
  }
  catch(error){
    console.log(error);
  }
}
