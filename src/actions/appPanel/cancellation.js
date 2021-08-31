import axios from 'axios'
import { GETBIDDERREASON, GETORDERREASON, GETERROR, GETSUCCESS } from '../../constants/appPanel/cancellation';
import { baseUrl } from '../../baseurl'

export const getFirstReasons = (type) => async (dispatch) => {
    console.log(type);

    const param = {
        "type": `${type}`
    };
    try {

        const { data } = await axios.post(`${baseUrl}VitaranSDK/getCancellationReasons`, param, {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            }
        })

        if (data.Code === 200) {
            dispatch({ type: GETBIDDERREASON, payload: data.CancellationReasons });
            dispatch({ type: GETSUCCESS });
        }
        //   else{
        //       dispatch({type: GETERROR});
        //   }


    }
    catch (error) {
        console.log(error)
    }
}


export const getSecondReasons = (type) => async (dispatch) => {
    console.log(type);

    const param = {
        "type": `${type}`
    };
    try {

        const { data } = await axios.post(`${baseUrl}VitaranSDK/getCancellationReasons`, param, {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            }
        })

        if (data.Code === 200) {
            dispatch({ type: GETORDERREASON, payload: data.CancellationReasons });
            dispatch({ type: GETSUCCESS });
        }
        //   else{
        //       dispatch({type: GETERROR});
        //   }


    }
    catch (error) {
        console.log(error)
    }
}


export const AddReason = (param, type,setInp) => async (dispatch) => {

    try {
        const { data } = await axios.post(`${baseUrl}VitaranSDK/cancellationReasons`, param, {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            }
        })

        if (data.Code === 200) {
            // console.log(data); 
             setInp('');
            if (type === "Order") {
                dispatch(getSecondReasons(type));
              
            }
            else {
                dispatch(getFirstReasons(type))
                // setInp('');
            }

        }

    }
    catch (error) {
        console.log(error)
    }
}


export const RemoveReason = (id, type) => async (dispatch) => {




    let param = {
        "reason_id": `${id}`
    }
    console.log(param)

    try {
        const { data } = await axios.put(`${baseUrl}VitaranSDK/vtrnRemoveCancellationReasons`, param, {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            }
        })


        if (data.Code === 200) {
            console.log(data);
            if (type === "Order") {
                dispatch(getSecondReasons(type))
            }
            else {
                dispatch(getFirstReasons(type))
            }

        }

    }
    catch (error) {
        console.log(error)
    }
}