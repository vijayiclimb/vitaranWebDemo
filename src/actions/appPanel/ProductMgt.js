import axios from 'axios';
import { baseUrl } from '../../baseurl';
import { ADDSUCCESS, GETPRODUCTLIST, GETPRODUCTMGT, GETSKUDETAILS, GETSKULIST, SEARCHSKUPRODUCTMGT, UPDATESUCCESS } from '../../constants/appPanel/ProductMgt';




export const GetProductMgtList = (place) => async (dispatch) => {

    try {
        
        let param ={   
        "zone":`${place}`,
                                                                                                                                                                                                                                           
       }

      
       
        const {data} = await axios.post(`${baseUrl}VitaranSDK/getProductMgmtDetails`,param,{
            headers : {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*",
              }})

           dispatch({type:GETPRODUCTMGT,payload:data});

        console.log(data)

   
    }
    catch (error) {
        console.log(error)
    }
}


export const GetProductSkuList = (place,product)=>async(dispatch)=>{

    try {
       let param= {
            "zone":`${place}`,
            "productname":`${product}`
        }
           
           
            const {data} = await axios.post(`${baseUrl}VitaranSDK/getAllSkus`,param,{
                headers : {
                  'Content-Type': 'application/json',
                  "Access-Control-Allow-Origin": "*",
                  }})
    
            //    console.log(data);
               dispatch({type:GETSKULIST,payload:data})
        
    } catch (error) {
        console.log(error)
    }
}

export const GetProductSkuDetails = (place,sku)=>async(dispatch)=>{

    try {
       let param= {
        "skuname":`${sku}`,
        "zone":`${place}`
    }
           
           
            const {data} = await axios.post(`${baseUrl}VitaranSDK/getSkuDetails`,param,{
                headers : {
                  'Content-Type': 'application/json',
                  "Access-Control-Allow-Origin": "*",
                  }})
    
               dispatch({type:GETSKUDETAILS,payload:data});
            //  
        
    } catch (error) {
        console.log(error)
    }
}


export const AddProductSku=(param,setShowAdd)=>async(dispatch)=>{

    try {

        //   console.log(param);
                
                
                 const {data} = await axios.post(`${baseUrl}VitaranSDK/setProductDetails`,param,{
                     headers : {
                       'Content-Type': 'application/json',
                       "Access-Control-Allow-Origin": "*",
                       }})

                       
                       if(data.Result==="Success"){
                        // dispatch({type:ADDSUCCESS});
                        dispatch(GetProductSkuDetails(param.zone,param.skuname))
                        setShowAdd(false);
                    }
        
    } catch (error) {
        console.log(error)
    }

}



export const UpdateProductSku=(param,setEdit)=>async(dispatch)=>{
 let result=""
    try {

                
                
                 const {data} = await axios.post(`${baseUrl}VitaranSDK/setProductDetails`,param,{
                     headers : {
                       'Content-Type': 'application/json',
                       "Access-Control-Allow-Origin": "*",
                       }})

                       if(data.Code===200){
                        //    dispatch({type:UPDATESUCCESS})
                           console.log('success');
                           dispatch(GetProductSkuDetails(param.zone,param.skuname))
                           setEdit(false);
                       }

                      console.log(data)
                      
        
    } catch (error) {
        console.log(error)
    }



}




export const GetAllBrand=(place,category)=>async(dispatch)=>{
 
       try {
   
        let param= {
            "zone":`${place}`,
            "category":`${category}`
        }
                   
                   
                    const {data} = await axios.post(`${baseUrl}VitaranSDK/getCategory`,param,{
                        headers : {
                          'Content-Type': 'application/json',
                          "Access-Control-Allow-Origin": "*",
                          }})
   
                        
   
                        if(data.Code===200){
                            dispatch({type:GETPRODUCTLIST,payload:data})
                        }
                         
           
       } catch (error) {
           console.log(error)
       }
   
   
   
   }



   export const SearchProductMgt=(place,q)=>async(dispatch)=>{

    try {
   
        let param= {
            "zone":`${place}`,
            "skuname":`${q}`,
        }
                   
                   
                    const {data} = await axios.post(`${baseUrl}VitaranSDK/webProductMgmtSearchSKU`,param,{
                        headers : {
                          'Content-Type': 'application/json',
                          "Access-Control-Allow-Origin": "*",
                          }})
   
                        
   
                        if(data.Code===200){
                        console.log(data)
                        dispatch({type:SEARCHSKUPRODUCTMGT,payload:data})
                        }
                         
           
       } catch (error) {
           console.log(error)
       }
   
   }

