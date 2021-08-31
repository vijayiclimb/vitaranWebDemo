import axios from 'axios';
import {baseUrl} from '../../baseurl'
import { ADMINPARTNERRECHARGEFAIL, ADMINPARTNERRECHARGEMGT } from '../../constants/Admin/PartnerRechargeMgt';

export const AdminPartnerRecharge=(param,setAmount)=>async(dispatch)=>{
    console.log(param)
    try{
        const data = await axios.post(`${baseUrl}VitaranSDK/AddAmountToPartner`, param, {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            }})

            console.log(data)

            if(data.data.Code===200){
                dispatch({type:ADMINPARTNERRECHARGEMGT,payload:"Success"});
                setAmount(0);
            }
            else{
                dispatch({type:ADMINPARTNERRECHARGEFAIL,payload:"Failed"});
            }
    }
    catch(error){
        console.log(error)
    }
}