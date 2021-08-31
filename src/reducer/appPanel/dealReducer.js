import {GETDEALS, GETORDERDETAILS, SEARCHSKUDEALMGT,GETDEALSLIST,ADDDEAL, UPDATEDEAL, REMOVEDEAL,GETORDERLIST, CANCELORDERSUCCESS, ADDDEALSUCCESS, ADDDEALFAILED, ADDDEALWARNING, GETORDERSUCCESS, UPDATEDEALSUCCESS, UPDATEDEALFAILED, UPDATEDEALWARNING, REMOVEDEALSUCCESS, REMOVEDEALFAILED, UPDATEDEALADDRESS, DELETEDEALADDRESS, ADDDEALADDRESS} from '../../constants/appPanel/Deals';

const initialState={
 dealList:[],
 orderDealList: [],
 orderDetails:{},
 Pageloading:false,
 dealsDetails:{},
 skuNameList:[],
 DealId:'',
 skuDetail:{},
 CancellationToastMessageSuccess:'',

 AddDealSuccess:'',
 AddDealFailed:'',
 AddDealWarning:'',

 UpdateDealSuccess:'',
 UpdateDealFailed:'',
 UpdateDealWarning:'',


 RemoveDealSuccess:'',
 RemoveDealFailed:'',

 OrderDetailLoading:false,

}


export default (deal=initialState,action)=>{
 switch(action.type){
     case GETDEALS:
         return {
             ...deal,
             dealList: action.payload.dealList,
             orderDealList:action.payload.OrderDealList,
             orderDetails: action.payload.OrderDetails, 
             Pageloading: false,
             dealsDetails: action.payload.dealList[0],
             DealId: action.payload.dealList[0].DealId,
             skuNameList:action.payload.skulist,
            
         }

////////ORDERDETAILS
     case GETORDERDETAILS:
         return{
             ...deal,
             orderDetails: action.payload,
             OrderDetailLoading:false,
           
         }

    case GETORDERSUCCESS:
        return{
            ...deal,
            OrderDetailLoading:true,
        }
///////////////////////////////    
     case SEARCHSKUDEALMGT:
         return{
             ...deal,
             skuDetail:action.payload.skuList[0],
         }

     case GETDEALSLIST:
         return{
             ...deal,
             dealsDetails: action.payload.dealList,
             DealId: action.payload.dealList.DealId,
             orderDealList:action.payload.orderDealList,
             orderDetails: action.payload.orderDetails,
         }
//////////////////////add Deal
     case ADDDEAL:
         return{
             ...deal,
             dealList: action.payload.dealList,
      

         }

    case ADDDEALSUCCESS:
        return{
              ...deal,
              AddDealSuccess: action.payload
              
        }
    case ADDDEALFAILED:
        return{
            ...deal,
            AddDealFailed:action.payload
        }

    case ADDDEALWARNING:
        return{
            ...deal,
            AddDealWarning:action.payload
        }
/////////////add

/////////////////update
     case UPDATEDEAL:
         return{
             ...deal,
             dealList:action.payload,
         }

    
         case UPDATEDEALSUCCESS:
            return{
                  ...deal,
                  UpdateDealSuccess: action.payload
                  
            }
        case UPDATEDEALFAILED:
            return{
                ...deal,
                UpdateDealFailed:action.payload
            }
    
        case UPDATEDEALWARNING:
            return{
                ...deal,
                UpdateDealWarning:action.payload
            }


         ///////////////////////////
    case GETORDERLIST:
        return{
            ...deal,
            orderDealList: action.payload.orderList,
            orderDetails: action.payload.orderDetails
        }


    case REMOVEDEALSUCCESS:
        return {
            ...deal,
            RemoveDealSuccess: action.payload,
        }

    case REMOVEDEALFAILED:
            return {
                ...deal,
                RemoveDealFailed: action.payload,
            }
    


    case CANCELORDERSUCCESS:
          return {
              ...deal,
              CancellationToastMessageSuccess:action.payload,
          }

    case UPDATEDEALADDRESS:
        return {
            ...deal,
             Address: action.payload
        }

    case DELETEDEALADDRESS:
        return {
            ...deal,
             Address: action.payload
        }

    case ADDDEALADDRESS:
        return{
            ...deal,
            Address: action.payload
        }
     
    default: 
       return deal
 }
}