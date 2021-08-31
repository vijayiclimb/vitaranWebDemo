import { GETCOMPARE, GETPRODUCTANALYTICS, GETPRODUCTWISE, GETSKUDETAILS } from "../../../constants/analytics/market/product";
 

const initialState={

   HighOrder:[],
   activeGraph:[],
   SkuList:[],
   SkuDetail:{},
   WeekWise:{},
   AllSkuList:[],
//    Compare:[]
   
};

export default(ProductAnalytics=initialState,action)=>{
    switch(action.type){
        case GETPRODUCTANALYTICS:
            return{
                ...ProductAnalytics,
               
                HighOrder:action.payload.high_order,
                activeGraph:action.payload.activeGraph,
                SkuList:action.payload.main_sku_list,
                SkuDetail:action.payload.first_sku_list,
                WeekWise:action.payload.weeklyData,
                AllSkuList:action.payload.sku_list

                

            }
        case GETSKUDETAILS:
            return{
                ...ProductAnalytics,
                SkuDetail:action.payload.list
                

            }
        case GETPRODUCTWISE:
            return{
                ...ProductAnalytics,
                activeGraph:action.payload.activeGraph,
                WeekWise:action.payload.productWise,
            }
        case GETCOMPARE:
            return {
               ...ProductAnalytics,
            //    Compare: action.payload.showList,
            }
        default:
            return ProductAnalytics
    }
}