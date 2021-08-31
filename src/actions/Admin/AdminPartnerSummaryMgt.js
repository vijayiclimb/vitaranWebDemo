import axios from 'axios';
import {baseUrl} from '../../baseurl'
import { GETADMINPARTNERSUMMARYMGT, GETADMINPARTNERSUMMARYMGTDETAIL } from '../../constants/Admin/PartnerSummaryMgt';

export const GetAdminPartnerSummary=(role)=>async(dispatch)=>{
    let param={
        "role":`${role}`
    }
    try {
        const {data} = await axios.post(`${baseUrl}VitaranSDK/GetPartnerRechargeMgmt`,param,{
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*',
            }
        })

        // console.log(data)
        if(data.Code===200){
            dispatch({type:GETADMINPARTNERSUMMARYMGT,payload:data})
        }
    } catch (error) {
        console.log(error);
    }
}


export const GetAdminPartnerSummaryDetail=(id)=>async(dispatch)=>{
    let param={
        "partner_id":`${id}`
    }
    try {
        const {data} = await axios.post(`${baseUrl}VitaranSDK/GetPartnerRechargeDetails`,param,{
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*',
            }
        })

        console.log(data)
        if(data.Code===200){
            dispatch({type:GETADMINPARTNERSUMMARYMGTDETAIL,payload:data})
        }
    } catch (error) {
        console.log(error);
    }
}