import { GETADMINPARTNERDETAILS, GETADMINPARTNERMGT, GETPARTNERMGT } from "../../constants/Admin/PartnerMgt"

let initialState={
    Details:{},
    List:[],
    ZoneList:[],
    PartnerId:'',
}

export default (partner=initialState,action)=>{
    switch(action.type){
        case GETADMINPARTNERMGT:
            return{
                ...partner,
                Details: action.payload.partnerDetails,
                List: action.payload.partnerlist,
                ZoneList: action.payload.zone_list,
                PartnerId:action.payload.partnerlist[0].partner_id
            }
        case GETADMINPARTNERDETAILS:
            return{
                ...partner,
                Details: action.payload.partnerDetails,
                PartnerId: action.payload.partnerDetails.partner_id
            }
        default: 
           return partner
    }
}