import axios from 'axios';
import {baseUrl} from '../../baseurl'
import { ADDRESSMGT } from '../../constants/vitaranpartner/pickupcenter/PickUpCenter';

export const GetAddressMgt=(zone)=>async(dispatch)=>{
    let param={
        "zone":`${zone}`
    }
    try {
          const {data}=await axios.post(`${baseUrl}VitaranSDK/PickupCentreAddressMgmt`,param,{
              headers:{
                  "Content-Type":"application/json",
                  "Access-Control-Allow-Origin":"*"
              }
          })

         

          if(data.Code===200){
              dispatch({type:ADDRESSMGT,payload:data})
          }
        
    } catch (error) {
        console.log(error);
    }
}


export const AddressMgtUpdate=(param)=>async(dispatch)=>{
   
    try {
          const {data}=await axios.put(`${baseUrl}VitaranSDK/PickupCentreUpdateAddress`,param,{
              headers:{
                  "Content-Type":"application/json",
                  "Access-Control-Allow-Origin":"*"
              }
          })

          
          if(data.Code===200){
            dispatch({type:ADDRESSMGT,payload:data})
        }
      
         
        
    } catch (error) {
        console.log(error);
    }
}


export const AddressMgtRemove=(param,setOpen)=>async(dispatch)=>{
   
    try {
          const {data}=await axios.put(`${baseUrl}VitaranSDK/PickupCentreRemoveAddresses`,param,{
              headers:{
                  "Content-Type":"application/json",
                  "Access-Control-Allow-Origin":"*"
              }
          })

          
          
          if(data.Code===200){
            dispatch({type:ADDRESSMGT,payload:data});
            setOpen(false);
        }
      
         
        
    } catch (error) {
        console.log(error);
    }
}


export const AddressMgtAdd=(param)=>async(dispatch)=>{
   
    try {
          const {data}=await axios.put(`${baseUrl}VitaranSDK/PickupCentreAddAddress`,param,{
              headers:{
                  "Content-Type":"application/json",
                  "Access-Control-Allow-Origin":"*"
              }
          })

          
          
          if(data.Code===200){
            dispatch({type:ADDRESSMGT,payload:data});
 
        }
      
         
        
    } catch (error) {
        console.log(error);
    }
}