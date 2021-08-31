import {GETBIDDERREASON, GETERROR, GETORDERREASON, GETSUCCESS} from '../../constants/appPanel/cancellation'

const initialState={
    biderReasons: [],
    orderReasons: [],
    loading: true,
}

export default(reason=initialState,action)=>{
   switch(action.type){
       case GETBIDDERREASON: 
          return{
              ...reason,
              biderReasons: action.payload,
              loading: false,
          }
       case GETORDERREASON:
           return{
               ...reason,
               orderReasons:action.payload,
               loading: false,
           }
       case GETSUCCESS:
           return{
               ...reason,
               loading: false,
           }
       case GETERROR:
            return{
                ...reason,
                loading: true,
            }
       default: 
          return reason
   }
}