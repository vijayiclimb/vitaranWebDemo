import { GETADMINPARTNERSUMMARYMGT, GETADMINPARTNERSUMMARYMGTDETAIL } from "../../constants/Admin/PartnerSummaryMgt"

const initialState={
   Details:"",
   List:"",
   RechargeList:"",
   PartnerId:''
}

export default (state=initialState,action)=>{
    switch(action.type){
        case GETADMINPARTNERSUMMARYMGT:
            return{
                ...state,
               Details:action.payload.partner_details,
               List:action.payload.partner_list,
               RechargeList:action.payload.rechargeSummary,
               PartnerId:action.payload.partner_list[0].partner_id
            }

        case GETADMINPARTNERSUMMARYMGTDETAIL:
            return{
                ...state,
                Details:action.payload.partner_details,
                RechargeList:action.payload.rechargeSummary,
                PartnerId:action.payload.partner_details.partner_id

            }
      
        default:
            return state
    }
}