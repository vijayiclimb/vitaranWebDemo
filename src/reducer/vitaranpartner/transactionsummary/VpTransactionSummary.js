import { GETVPTRANSACTIONSUMMARY } from "../../../constants/vitaranpartner/transaction/VpTransactionSummary"

const initialState={
    List:[]
}

export default (state=initialState.List,action)=>{
    switch(action.type){
        case GETVPTRANSACTIONSUMMARY:
            return{
                ...state,
                List: action.payload.transaction_summary
            }

        default:
            return state
    }
}