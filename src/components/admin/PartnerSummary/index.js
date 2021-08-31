import React from 'react';
import AdminPartnerRechargeCarousel from './AdminPartnerRechargeCarousel';
import AdminPartnerRechargeDetail from './AdminPartnerRechargeDetail';
import './styles/PartnerSummaryMgt.scss';
import {useDispatch,useSelector} from 'react-redux'
import { GetAdminPartnerSummary } from '../../../actions/Admin/AdminPartnerSummaryMgt';


const PartnerSummaryMgt = () => {
    const dispatch = useDispatch();
   let role = "Admin"

    React.useEffect(()=>{
        dispatch(GetAdminPartnerSummary(role))
    },[])
      

    return (
        <div>
           <AdminPartnerRechargeCarousel/>
           <AdminPartnerRechargeDetail/>
        </div>
    )
}

export default PartnerSummaryMgt
