import { GETVPAGENTDETAIL, GETVPAGENTMGT } from "../../../constants/vitaranpartner/AgentMgt"

const initialState={
   Details:{},
   List:[],
   Id:"",
   PartnerId:""
}

export default (state=initialState,action)=>{
    switch(action.type){
        case GETVPAGENTMGT:
            return{
                ...state,
                Details:action.payload.first_agent_details,
                List:action.payload.agent_list,
                Id:action.payload.agent_list[0].agent_id,
                PartnerId:action.payload.agent_list[0].partner_id,

            }
        case  GETVPAGENTDETAIL:
            return{
                ...state,
                Details:action.payload.agentDetails,
                Id:action.payload.agentDetails.agent_id
            }
        default:
            return state
    }
}
