import { ADDCOUPON, ADDCOUPONADDRESS, ADDTOBASKET, BASKETDETAIL, COUPONDETAIL, DELETECOUPONADDRESS, GETCOUPONDETAILS, GETCOUPONSUCCESS, GETSEARCHSKUSUCCESS, REMOVESKUBASKET, UPDATEBASKET, UPDATECOUPONADDRESS, UPDATECOUPONRULES } from '../../constants/appPanel/coupon';

let initialState = {
    pageLoading:false,
    couponList: [],
   
    couponId: '',
    couponBasketList: [],
    skuNameList: [],
    skuList: [],
    Address:[],
    Rules: [],
    Terms:[],


    couponBasketId: '',
    couponBasketDetail: {},

    CouponTypes:[],
    orderList:[],
    orderDetail:{},

    CouponDetail:{},
}


export default (coupon = initialState, action) => {

    switch (action.type) {
        case GETCOUPONSUCCESS:
            return {
                ...coupon,
                pageLoading:false,
                couponBasketList: action.payload.couponBasketList,
                skuNameList: action.payload.sku_list,
                couponList:action.payload.coupon_carousel,
                couponId:action.payload.coupon_carousel[0].coupon_id,
                CouponDetail:action.payload.coupon_carousel[0],
           
                couponBasketDetail: action.payload.couponBasketList[0],
                couponBasketId:action.payload.couponBasketList[0].basket_id,
                Terms:action.payload.terms_list,
                CouponTypes:action.payload.coupon_type
            }

        case GETSEARCHSKUSUCCESS:
            return {
                ...coupon,
                skuList: action.payload.searchSKU,

            }

        case ADDTOBASKET:
            return {
                ...coupon,
                couponBasketList: action.payload.basketList,
                couponBasketDetail: action.payload.basketList[0],
                couponBasketId: action.payload.basketList[0].basket_id
            }

        case UPDATEBASKET:
            return {
                ...coupon,
                skuBasketList: action.payload.basketList,
                couponBasketDetail: action.payload.basketList[0],
                couponBasketId: action.payload.basketList[0].skuname
            }

        case REMOVESKUBASKET:
            return {
                ...coupon,
                skuBasketList: action.payload.basketList,
                couponBasketDetail: action.payload.basketList[0],
                couponBasketId: action.payload.basketList[0].basket_id
            }

        case BASKETDETAIL:
            return {
                ...coupon,
                couponBasketDetail: action.payload,
                couponBasketId: action.payload.basket_id


            }
        case UPDATECOUPONADDRESS:
            return {
                ...coupon,
                Address: action.payload
            }

        case DELETECOUPONADDRESS:
            return {
                ...coupon,
                Address: action.payload
            }

        case ADDCOUPONADDRESS:
            return {
                ...coupon,
                Address: action.payload
            }

        case UPDATECOUPONRULES:
            return{
                ...coupon,
                Rules:action.payload
            }
        case ADDCOUPON:
            return{
                ...coupon,
                couponList: action.payload.clist
            }


       case GETCOUPONDETAILS:
           return{
               ...coupon,
               CouponDetail:action.payload,
               couponId:action.payload.coupon_id
           }
        
        case COUPONDETAIL:
            return{
                ...coupon,
                CouponDetail: action.payload
            }

        default:
            return coupon
    }
}