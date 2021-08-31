import axios from 'axios';
import { baseUrl } from '../../baseurl'
import { COUPONORDERIDLIST, COUPONORDERLIST } from '../../constants/vitaranpartner/pickupcenter/PickUpCenter';

export const GetCouponOrderId = (zone) => async (dispatch) => {
    let param = {
        "zone": `${zone}`
    }
    try {
        const { data } = await axios.post(`${baseUrl}VitaranSDK/getAllCouponOrderId`, param, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })
        if (data.Code === 200) {
            dispatch({type:COUPONORDERIDLIST,payload:data});
        }
    } catch (error) {

    }
}

export const GetCouponOrderList = (text, zone) => async (dispatch) => {

    let param = {
        "order_id": `${text}`,
        "zone": `${zone}`
    }
    try {

        const { data } = await axios.post(`${baseUrl}VitaranSDK/SearchCouponid`, param, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })


        if (data.Code === 200) {
            dispatch({ type: COUPONORDERLIST, payload: data });
        }

    } catch (error) {
        console.log(error)
    }
}

export const GetCouponOrderCancel= (param) => async (dispatch) => {

    
    try {

        const { data } = await axios.put(`${baseUrl}VitaranSDK/CancelledCouponOrder`, param, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })

        
        if (data.Code === 200) {
            // dispatch({ type: DEALORDERLIST, payload: data });
            dispatch(GetCouponOrderList(param.order_id,param.zone))
        }

    } catch (error) {
        console.log(error)
    }
}




export const GetCouponOrderComplete= (param) => async (dispatch) => {

    
    try {

        const { data } = await axios.put(`${baseUrl}VitaranSDK/CompleteCouponOrder`, param, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })

        if (data.Code === 200) {
            // dispatch({ type: DEALORDERLIST, payload: data });
            dispatch(GetCouponOrderList(param.order_id,param.zone))
        }

    } catch (error) {
        console.log(error)
    }
}