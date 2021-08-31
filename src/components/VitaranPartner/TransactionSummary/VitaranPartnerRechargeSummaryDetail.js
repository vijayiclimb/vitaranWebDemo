import React from 'react';
import VitaranPartnerRechargeSummaryDetailCard from './VitaranPartnerRechargeSummaryDetailCard';
import VitaranPartnerRechargeSummaryDetailTable from './VitaranPartnerRechargeSummaryDetailTable';
import './styles/VitaranPartnerRechargeSummaryDetail.scss'

const VitaranPartnerRechargeSummaryDetail = () => {
    return (
        <div className="VitaranPartnerRechargeDetailContainer">
           <VitaranPartnerRechargeSummaryDetailCard/>
           <VitaranPartnerRechargeSummaryDetailTable/>
        </div>
    )
}

export default VitaranPartnerRechargeSummaryDetail
