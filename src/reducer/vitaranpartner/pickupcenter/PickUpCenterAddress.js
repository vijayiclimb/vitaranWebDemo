import { ADDRESS, ADDRESSMGT, COUPONORDERIDLIST, COUPONORDERLIST, DEALORDERDETAILS, DEALORDERIDLIST, DEALORDERLIST } from "../../../constants/vitaranpartner/pickupcenter/PickUpCenter"

const initialState = {
    Address: [],
    DealOrderList: [],
    DealOrderIdList: [],

    CouponOrderList: [],
    CouponOrderIdList: [],

}

export default (address = initialState, action) => {
    switch (action.type) {
        case ADDRESSMGT:
            return {
                ...address,
                Address: action.payload.address_list
            }

        case DEALORDERIDLIST:
            return {
                ...address,
                DealOrderIdList: action.payload.allDealOrderid
            }

        case DEALORDERLIST:
            return {
                ...address,
                DealOrderList: action.payload.searchData
            }

        case COUPONORDERIDLIST:
            return {
                ...address,
                CouponOrderIdList: action.payload.allCouponOrderid
            }

        case COUPONORDERLIST:
            return {
                ...address,
                CouponOrderList: action.payload.searchData
            }


        default:
            return address
    }
}