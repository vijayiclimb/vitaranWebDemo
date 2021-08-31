import {combineReducers} from 'redux'
import SubMgt from './appPanel/subReducer'
import DealMgt from './appPanel/dealReducer'
import CouponMgt from './appPanel/couponReducer'
import SubscriberAnalytics from './analytics/subscription'
import CancelMgt from './appPanel/CancelReducer'
import ProductMgt from './appPanel/ProductMgtReducer';
import ProductAnalytics from './analytics/marketAnalytics/product';
import PickUpCenterAddress from './vitaranpartner/pickupcenter/PickUpCenterAddress';
import AdminPartnerMgt from './admin/AdminPartnerMgt'
import AdminPartnerRechargeMgt from './admin/AdminPartnerRechargeMgt';
import AdminPartnerSummaryMgt from './admin/AdminPartnerSummaryMgt';
import VpTransactionSummary from './vitaranpartner/transactionsummary/VpTransactionSummary'
import VpAgentMgt from './vitaranpartner/agentmgt/VpAgentMgt'


export const reducer = combineReducers({
    subMgt: SubMgt,
    dealMgt: DealMgt,
    couponMgt: CouponMgt,
    cancelMgt: CancelMgt,
    productMgt: ProductMgt,


/////////////////Analytics//////////////////
    subscriberAnalytics: SubscriberAnalytics,
    productAnalytics:ProductAnalytics,



    ////////////////Admin////////////
    partner: AdminPartnerMgt,
    partnerRecharge: AdminPartnerRechargeMgt,
    partnerSummary:  AdminPartnerSummaryMgt ,


//////////////////////////////////////////Partner////////////
   vpTransactionSummary: VpTransactionSummary,
   vpAgentMgt:VpAgentMgt,
    pickUpCenterAddress : PickUpCenterAddress,
    
    

})