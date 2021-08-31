import axios from 'axios';
import {baseUrl} from '../../baseurl';
import { GETVPTRANSACTIONSUMMARY } from '../../constants/vitaranpartner/transaction/VpTransactionSummary';

export const GetVpTransactionSummaryMgt=(id)=>async(dispatch)=>{
    let param={
        "partner_id":`${id}`
    }
    try {
        const {data} = await axios.post(`${baseUrl}VitaranSDK/IndividualTransactionSummary`,param,{
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":'*'
            }
        })



        // console.log(data)
        if(data.Code===200){
            dispatch({type:GETVPTRANSACTIONSUMMARY,payload:data})
        }
    } catch (error) {
        console.log(error)
    }
}