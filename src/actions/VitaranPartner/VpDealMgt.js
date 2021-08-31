import axios from 'axios';
import { baseUrl } from '../../baseurl'
import { DEALORDERIDLIST, DEALORDERLIST } from '../../constants/vitaranpartner/pickupcenter/PickUpCenter';

export const GetDealOrderId = (zone) => async (dispatch) => {
    let param = {
        "zone": `${zone}`
    }
    try {
        const { data } = await axios.post(`${baseUrl}VitaranSDK/getAllDealOrderId`, param, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })
        if (data.Code === 200) {
            dispatch({type:DEALORDERIDLIST,payload:data});
        }
    } catch (error) {

    }
}

export const GetDealOrderList = (text, zone) => async (dispatch) => {

    let param = {
        "order_id": `${text}`,
        "zone": `${zone}`
    }
    try {

        const { data } = await axios.post(`${baseUrl}VitaranSDK/SearchDealid`, param, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })


        if (data.Code === 200) {
            dispatch({ type: DEALORDERLIST, payload: data });
        }

    } catch (error) {
        console.log(error)
    }
}

export const GetDealOrderCancel= (param) => async (dispatch) => {

    
    try {

        const { data } = await axios.put(`${baseUrl}VitaranSDK/CancelledDealOrder`, param, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })

        
        if (data.Code === 200) {
            // dispatch({ type: DEALORDERLIST, payload: data });
            dispatch(GetDealOrderList(param.order_id,param.zone))
        }

    } catch (error) {
        console.log(error)
    }
}




export const GetDealOrderComplete= (param) => async (dispatch) => {

    
    try {

        const { data } = await axios.put(`${baseUrl}VitaranSDK/CompleteDealOrder`, param, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })

        if (data.Code === 200) {
            // dispatch({ type: DEALORDERLIST, payload: data });
            dispatch(GetDealOrderList(param.order_id,param.zone))
        }

    } catch (error) {
        console.log(error)
    }
}