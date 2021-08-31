import { ADDSUCCESS, GETPRODUCTLIST, GETPRODUCTMGT, GETSKUDETAILS, GETSKULIST, SEARCHSKU, SEARCHSKUPRODUCTMGT, SETCATEGORY, SETPRODUCT, SETSKU, UPDATESUCCESS } from "../../constants/appPanel/ProductMgt"


const initialState = {
    ProductMgtCount : {},
    CategoryList:[],
    ProductList:[],
    SkuList:[],
    SearchList:[],
    SkuDetail:{},
    Category:'',
    Product:"",
    Sku:"",
     updatesuccess: false,
    AddSuccess:false
}


export default (ProductMgt=initialState,action)=>{
      
      switch(action.type){

        case GETPRODUCTMGT:
            return {
                ...ProductMgt,
                ProductMgtCount: action.payload.productStateCount,
                ProductList:action.payload.product,
                SearchList: action.payload.skuList,
                SkuDetail:action.payload.skuDetails,
                Product: action.payload.skuDetails.productname,
                Sku:action.payload.skuDetails.skuname,
                CategoryList: action.payload.category,
                Category:  action.payload.skuDetails.categories,
                SkuList:action.payload.skuListByProduct



            }
        case SETPRODUCT:
            return{
                ...ProductMgt,
                Product: action.payload,
            }
        case GETSKULIST:
            return{
                ...ProductMgt,
                SkuList: action.payload.skuList,
                Product: action.payload.productName,
                SkuDetail:action.payload.skuDetails,
                Sku:action.payload.skuDetails.skuname

            }

        case SETSKU:
            return{
                ...ProductMgt,
                Sku:action.payload,
            }
        
        case GETSKUDETAILS:
            return{
              ...ProductMgt,
              SkuDetail: action.payload.skuDetails,
              
            }
        case UPDATESUCCESS:
            return{
                ...ProductMgt,
                updatesuccess:true,
            }
        case ADDSUCCESS:
                return{
                    ...ProductMgt,
                    AddSuccess:true,
                }

        case SETCATEGORY:
            return{
                ...ProductMgt,
                Category:action.payload
            }

        case GETPRODUCTLIST:
            return{
                ...ProductMgt,
                ProductList:action.payload.cat_list,
                SkuList:action.payload.skuList,
                SkuDetail:action.payload.skuDetails,
                Product: action.payload.skuDetails.productname,
                Sku:action.payload.skuDetails.skuname,


            }
        case SEARCHSKUPRODUCTMGT:
            return{
                ...ProductMgt,
                ProductList:action.payload.prodList,
                SkuDetail:action.payload.searchDetails,
                SkuList:action.payload.skuList,
                Product: action.payload.searchDetails.productname,
                Category: action.payload.searchDetails.categories,
                Sku: action.payload.searchDetails.skuname

            }
    

        default:
            return ProductMgt
        
      }
}