import { baseUrl } from '../../baseurl';
import axios from 'axios';
import { ADDCOUPON, ADDTOBASKET, COUPONDETAIL, GETCOUPONDETAILS, GETCOUPONSUCCESS, GETSEARCHSKUSUCCESS, REMOVESKUBASKET, UPDATEBASKET } from '../../constants/appPanel/coupon';

export const getCouponByzone = (place) => async (dispatch) => {



    const param = {
        "zone": `${place}`,
    }
    try {
        const { data } = await axios.post(`${baseUrl}VitaranSDK/webCouponMgmt`, param, {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            }
        })



        if (data.Code === 200) {
            console.log(data)

            dispatch({ type: GETCOUPONSUCCESS, payload: data });
            // let det = data.couponDetails;

            // let param = {
            //     "zone":`${place}`,
            //     "couponid":`${data.couponDetails.couponid}`
            // }

            // dispatch(GetCouponDetail(param))
       
            // dispatch({type: COUPONDETAIL, payload: det});

        }

    } catch (error) {
        console.log(error.message)
    }
}

export const SearchSku = (sku, zone) => async (dispatch) => {

    // console.log(sku)
    try {

        const param = {
            "skuname": `${sku}`,
            'zone': `${zone}`
        }

        // console.log(param)



        const { data } = await axios.post(`${baseUrl}VitaranSDK/webSearchCouponSKU`, param, {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            }
        })


        if (data.Code === 200) {
            dispatch({ type: GETSEARCHSKUSUCCESS, payload: data })
            console.log(data)
        }

    } catch (error) {
        console.log(error.message);
    }
}


export const addToBasket = (param) => async (dispatch) => {
    try {
        console.log(param)

        const { data } = await axios.post(`${baseUrl}VitaranSDK/webAddSKUInTheBasket`, param, {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            }
        })

        console.log(data);

        if (data.Code === 200) {
            dispatch(getCouponByzone(param.zone))
            dispatch({ type: ADDTOBASKET, payload: data });
        }

    } catch (error) {
        console.log(error.message);
    }
}

export const UpdateBasket = (param) => async (dispatch) => {

    console.log(param)
    try {

        const { data } = await axios.post(`${baseUrl}VitaranSDK/webUpdateSKUInTheBasket`, param, {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            }
        })

        console.log(data);

        if (data.Code === 200) {
            dispatch(getCouponByzone(param.zone))
            dispatch({ type: UPDATEBASKET, payload: data });
        }

    } catch (error) {
        console.log(error.message);
    }
}


export const RemoveBasket = (param) => async (dispatch) => {
    try {

        const { data } = await axios.post(`${baseUrl}VitaranSDK/webRemoveSKUFromBasket`, param, {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            }
        })

        console.log(data);

        if (data.Code === 200) {
            // dispatch({ type: REMOVESKUBASKET, payload: data });
            dispatch(getCouponByzone(param.zone))
        }

    } catch (error) {
        console.log(error.message);
    }
}


export const AddCouponMgt = (param) => async (dispatch) => {
    
    try {

        const { data } = await axios.post(`${baseUrl}VitaranSDK/webAddNewCoupons`, param, {
            headers: { 
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            }
        })

        console.log(data);

        if (data.Code === 200) {
            // dispatch({ type: ADDCOUPON, payload: data });
            dispatch(getCouponByzone(param.zone))
        }

    } catch (error) {
        console.log(error.message);
    }
}


export const RemoveCoupon = (place,id) => async (dispatch) => {


    let param = {
        "coupon_id": `${id}`,
        "zone": `${place}`,
        
    }
    try {

        const { data } = await axios.post(`${baseUrl}VitaranSDK/webCouponRemove`, param, {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            }
        })

        console.log(data);

        if (data.Code === 200) {
            dispatch(getCouponByzone(place))
        }

    } catch (error) {
        console.log(error.message);
    }
}


export const UpdateCouponMgt = (param, place) => async (dispatch) => {

    try {
        const { data } = await axios.post(`${baseUrl}VitaranSDK/webUpdateACoupon`, param, {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            }
        })

        console.log(data);

        if (data.Code === 200) {
            dispatch(getCouponByzone(place))

        }

    } catch (error) {
        console.log(error.message);
    }
}


export const GetCouponDetail = (param) => async (dispatch) => {

    try {
        const { data } = await axios.post(`${baseUrl}VitaranSDK/webCouponOrderList`, param, {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            }
        })

        console.log(data);

        if (data.Code === 200) {
      
           dispatch({type:GETCOUPONDETAILS,payload:data});
        }

    } catch (error) {
        console.log(error.message);
    }

}



export const UpdateTerms = (param,place) => async (dispatch) => {

    try {
        const { data } = await axios.post(`${baseUrl}VitaranSDK/webUpdateTerms`, param, {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            }
        })

        console.log(data);

        if (data.Code === 200) {
      
            dispatch(getCouponByzone(place))
        }

    } catch (error) {
        console.log(error.message);
    }

}