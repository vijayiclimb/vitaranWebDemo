import React,{useState} from 'react'
import VitaranPartnerAgentMgtAddForm from './VitaranPartnerAgentMgtAddForm';
import VitaranPartnerAgentMgtCarousel from './VitaranPartnerAgentMgtCarousel'
import VitaranPartnerAgentMgtDetailForm from './VitaranPartnerAgentMgtDetailForm';
import VitaranPartnerAgentMgtUpdateForm from './VitaranPartnerAgentMgtUpdateForm';
import { useDispatch } from 'react-redux';
import { GetVpAgentMgt } from '../../../actions/VitaranPartner/AgentMgt';

const VitaranPartnerAgentMgt = () => {
    const [showAdd,setShowAdd]=useState(false);
    const[showUpdate,setShowUpdate]=useState(false);
    const dispatch = useDispatch();

    let id = "139"

     React.useEffect(()=>{
       dispatch(GetVpAgentMgt(id))
     },[])


    return (
        <div>
            <VitaranPartnerAgentMgtCarousel showAdd={showAdd} setShowAdd={setShowAdd}/>
            {
                showAdd? (<VitaranPartnerAgentMgtAddForm showAdd={showAdd} setShowAdd={setShowAdd}/>):( 
                    <>
                    {
                        showUpdate? ( <VitaranPartnerAgentMgtUpdateForm showUpdate={showUpdate} setShowUpdate={setShowUpdate}/>):( <VitaranPartnerAgentMgtDetailForm showUpdate={showUpdate} setShowUpdate={setShowUpdate}/>)
                    }
                    </>
                   
            )
            }
        </div>
    )
}

export default VitaranPartnerAgentMgt
