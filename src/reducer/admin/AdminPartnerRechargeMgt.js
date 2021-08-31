import { ADMINPARTNERRECHARGEDEFAULTFAILED, ADMINPARTNERRECHARGEDEFAULTSUCCESS, ADMINPARTNERRECHARGEFAIL, ADMINPARTNERRECHARGEMGT } from "../../constants/Admin/PartnerRechargeMgt"

const initialState={
    Success:"",
    Failed:""
}

export default (state=initialState,action)=>{
    switch(action.type){
        case ADMINPARTNERRECHARGEMGT:
            return{
                ...state,
                Success:action.payload
            }
        case ADMINPARTNERRECHARGEFAIL:
            return{
                ...state,
                Failed:action.payload
            }
        case ADMINPARTNERRECHARGEDEFAULTSUCCESS:
            return{
                ...state,
                Success:''
            }
        case ADMINPARTNERRECHARGEDEFAULTFAILED:
            return{
                ...state,
                Failed:''
            }
        default:
            return state
    }
}