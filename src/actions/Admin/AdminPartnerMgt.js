import axios from 'axios';
import { baseUrl } from '../../baseurl';
import { GETADMINPARTNERDETAILS, GETADMINPARTNERMGT } from '../../constants/Admin/PartnerMgt';



export const GetAdminPartnerMgt =(role)=>async(dispatch)=>{
  let param ={
      role: `${role}`
  }

  try{
      const data = await axios.post(`${baseUrl}VitaranSDK/AdminPartnerMgmt`, param, {
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
        }})

    
        if(data.data.Code===200){
            dispatch({type:GETADMINPARTNERMGT,payload:data.data})
        }
    
  } 
  catch(error){
     console.log(error)
  }
}




export const GetAdminPartnerDetail =(Id)=>async(dispatch)=>{
    let param ={
        "partner_id":`${Id}`
    }
//   console.log(param)
    try{
        const data = await axios.post(`${baseUrl}VitaranSDK/AdminPartnerDetails`, param, {
          headers: {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*",
          }})
  
      
          if(data.data.Code===200){
              dispatch({type:GETADMINPARTNERDETAILS,payload:data.data})
          }
      
    } 
    catch(error){
       console.log(error)
    }
  }


  
export const AddAdminPartner =(param, setShowAdd)=>async(dispatch)=>{
    // let param ={
    //     "partner_id":`${Id}`
    // }
//   console.log(param)
    try{
        const data = await axios.post(`${baseUrl}VitaranSDK/AdminAddForm`, param, {
          headers: {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*",
          }})

          console.log(data)
  
      
          if(data.data.Code===200){
              let role = "Admin"
            //   dispatch({type:GETADMINPARTNERDETAILS,payload:data.data})
           dispatch(GetAdminPartnerMgt(role));
           setShowAdd(false);
          }
      
    } 
    catch(error){
       console.log(error)
    }
  }


  export const UpdateAdminPartner =(param, setShowUpdate)=>async(dispatch)=>{
    // let param ={
    //     "partner_id":`${Id}`
    // }
//   console.log(param)
    try{
        const data = await axios.put(`${baseUrl}VitaranSDK/AdminUpdatePartner`, param, {
          headers: {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*",
          }})

  
      
          if(data.data.Code===200){
              let role = "Admin"
            //   dispatch({type:GETADMINPARTNERDETAILS,payload:data.data})
           dispatch(GetAdminPartnerMgt(role));
           setShowUpdate(false);
          }
      
    } 
    catch(error){
       console.log(error)
    }
  }


  export const RemoveAdminPartner =(Id, setShowUpdate)=>async(dispatch)=>{
    let param ={
        "partner_id":`${Id}`
    }
//   console.log(param)
    try{
        const data = await axios.put(`${baseUrl}VitaranSDK/AdminRemove`, param, {
          headers: {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*",
          }})

  
      
          if(data.data.Code===200){
              let role = "Admin"
            //   dispatch({type:GETADMINPARTNERDETAILS,payload:data.data})
           dispatch(GetAdminPartnerMgt(role));
           setShowUpdate(false);
          }
      
    } 
    catch(error){
       console.log(error)
    }
  }