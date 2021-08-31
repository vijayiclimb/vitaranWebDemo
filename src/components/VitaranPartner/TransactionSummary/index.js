import React from 'react';
import './styles/index.scss';
import { useDispatch } from 'react-redux';

import VitaranPartnerRechargeSummaryDetail from './VitaranPartnerRechargeSummaryDetail';
import VitaranPartnerTransactionSummaryDetailTable from './VitaranPartnerTransactionSummaryDetailTable';
import { GetVpTransactionSummaryMgt } from '../../../actions/VitaranPartner/TransactionSummary';

const VitaranPartnerRechargeSummaryMgt = () => {
    const dispatch = useDispatch();
    let Id = 150;

    React.useEffect(()=>{
      dispatch(GetVpTransactionSummaryMgt(Id))
    },[])
    return (
        <div className="VitaranPartnerRechargeSummaryMgtContainer">
         {/* <VitaranPartnerRechargeSummaryDetail/> */}
         <VitaranPartnerTransactionSummaryDetailTable/>
        </div>
    )
}

export default VitaranPartnerRechargeSummaryMgt
