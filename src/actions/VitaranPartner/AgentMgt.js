import axios from 'axios';
import { baseUrl } from '../../baseurl'
import { GETVPAGENTDETAIL, GETVPAGENTMGT } from '../../constants/vitaranpartner/AgentMgt';

export const GetVpAgentMgt = (id) => async (dispatch) => {
    let param = {
        "partner_id": `${id}`
    }
    try {
        const { data } = await axios.post(`${baseUrl}VitaranSDK/getAgentMgmtData`, param, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })

        // console.log(data)
        if (data.Code === 200) {
            dispatch({ type: GETVPAGENTMGT, payload: data })
        }

    } catch (error) {
        console.log(error)
    }
}


export const GetVpAgentDetails = (param) => async (dispatch) => {


    try {
        const { data } = await axios.post(`${baseUrl}VitaranSDK/GetAgentDetails`, param, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })


        if (data.Code === 200) {
            dispatch({ type: GETVPAGENTDETAIL, payload: data })
        }

    } catch (error) {
        console.log(error)
    }
}

export const GetVpAgentAdd = (param, setShowAdd) => async (dispatch) => {


    try {
        const { data } = await axios.post(`${baseUrl}VitaranSDK/AddAgentData`, param, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })

        if (data.Code === 200) {

            dispatch(GetVpAgentMgt(param.partner_id));
            setShowAdd(false);
        }


    } catch (error) {
        console.log(error)
    }
}



export const GetVpAgentUpdate = (param, setShowUpdate) => async (dispatch) => {


    try {
        const { data } = await axios.put(`${baseUrl}VitaranSDK/UpdateAgentData`, param, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })

        if (data.Code === 200) {

            dispatch(GetVpAgentMgt(param.partner_id));
            setShowUpdate(false);
        }


    } catch (error) {
        console.log(error)
    }
}


export const GetVpAgentRemove = (partnerId, agentId,setShowUpdate) => async (dispatch) => {
    let param = {
        "partner_id": `${partnerId}`,
        "agent_id": `${agentId}`
    }

    try {
        const { data } = await axios.put(`${baseUrl}VitaranSDK/RemoveAgentData`, param, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })

        if (data.Code === 200) {

            dispatch(GetVpAgentMgt(partnerId));
               setShowUpdate(false)
        }


    } catch (error) {
        console.log(error)
    }
}