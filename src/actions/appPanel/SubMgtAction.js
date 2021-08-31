import axios from 'axios';
import { baseUrl } from '../../baseurl';
import { APPROVESUCCESS, GETSUB, SUBMGTPAGEERROR, SUBMGTPAGELOADING } from '../../constants/appPanel/subscription';



export const GetSubMgtList = (place,job) => async (dispatch) => {

    try {
        
        let paramPlace ={   
        "zone":`${place}`,
        "role":`${job}`                                                                                                                                                                                                                                        
       }

       
       
        const {data} = await axios.post(`${baseUrl}VitaranSDK/vtrnGetSubscriberList`,paramPlace,{
            headers : {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*",
              }})


              if(data.Result==="Success"){
                  console.log(data);
                  dispatch({type:GETSUB,payload:data})
                //   dispatch({ type: SUBMGTPAGELOADING });

              }
             

             
        
  
    }
    catch (error) {
        // throw(error);
        dispatch({type:SUBMGTPAGEERROR})
    }
}


export const ApproveSubscription = (userId,date,UUID,zone,setEdit,role) => async (dispatch) => {

    try {
        
        let param = {

            
                // "mobile":`${number}`,
                "user_id":`${userId}`,
                "UUID":`${UUID}`,
                "extendTill":`${date}`,
                "zone_name":`${zone}`,
                
              
            
    
        }

        console.log(param);
 
       
        const {data} = await axios.post(`${baseUrl}VitaranSDK/vtrnApproveSubscription`,param,{
            headers : {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*",
              }})


              console.log(data);

              if(data.Code==="200"){
                  dispatch({type:APPROVESUCCESS});
                  dispatch(GetSubMgtList(zone,role))
                  console.log("success")
                  setEdit(false);
              }
            
             
        
  
    }
    catch (error) {
        console.log(error)
    }
}