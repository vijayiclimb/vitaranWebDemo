import React from 'react';
import AdminPartnerRechargeDetailCard from './AdminPartnerRechargeDetailCard';
import AdminPartnerRechargeDetailTable from './AdminPartnerRechargeDetailTable';
import './styles/AdminPartnerRechargeDetail.scss'

const AdminPartnerRechargeDetail = () => {
    return (
        <div className="AdminPartnerRechargeDetailContainer">
           <AdminPartnerRechargeDetailCard/>
           <AdminPartnerRechargeDetailTable/>
        </div>
    )
}

export default AdminPartnerRechargeDetail
