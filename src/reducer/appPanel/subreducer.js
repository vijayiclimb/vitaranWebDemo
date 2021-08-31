import {APPROVEFAILURE, APPROVESTATE, APPROVESUCCESS, GETSUB, SUBMGTPAGEERROR, SUBMGTPAGELOADING, USERDETAILS, USERLIST} from '../../constants/appPanel/subscription'

const initialState={
    SubscriberCount:{},
    userList:[],
       userDetails:{},
       PrimaryList:[],
       ApproveSuccess:'',
       PageLoading:true,
       PageError:false,
    //    ApproveFailed:''
}

export default (sub=initialState,action)=>{
 switch(action.type){
     case GETSUB : 
       return {
           ...sub,
           userList: action.payload.userList,
           SubscriberCount: action.payload.SubscriberStateCount,
           userDetails: action.payload.userList[0],
           PrimaryList: action.payload.userList,
           ApproveSuccess:false,
           PageLoading:false
           
       }

     case USERLIST:
         return{
             ...sub,
             userList: action.payload,
         }

    case USERDETAILS:
        return{
            ...sub,
            userDetails:action.payload,
        }
    
    case APPROVESUCCESS:
        return{
            ...sub,
            ApproveSuccess:'Failed'
            // PrimaryList: action.payload.subscriberList

        }

    case APPROVEFAILURE:
        return{
            ...sub,
            ApproveSuccess:'Failed'

        }
    case APPROVESTATE:
        return{
            ...sub,
            ApproveSuccess:'Failed'
        }
    case SUBMGTPAGELOADING:
        return{
              PageLoading:action.payload
        }
    case SUBMGTPAGEERROR:
        return{
            PageError:true
        }

    default: 
       return sub
 }
}