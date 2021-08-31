import React,{useState,useEffect} from 'react'
import AdminPartnerAddForm from './AdminPartnerAddForm';
import AdminPartnerDetailForm from './AdminPartnerDetailForm';
import AdminPartnerUpdateForm from './AdminPartnerUpdateForm';
import AdminPartnerMgtCarousel from './PartnerMgtCarousel';
import './styles/index.scss';
import { GetAdminPartnerMgt } from '../../../actions/Admin/AdminPartnerMgt';
import { useDispatch,useSelector } from 'react-redux';

const PartnerMgt = ({job}) => {
    const [showAdd,setShowAdd]=useState(false);
    const[showUpdate,setShowUpdate]=useState(false);
  
    const dispatch = useDispatch()

    // let job = "Admin"
// console.log(job)

const state = useSelector(state => state.partner);
console.log(state)

    useEffect(()=>{
         dispatch(GetAdminPartnerMgt(job))
    },[])

    

    return (
        <div className="AdminPartnerMgtContainer">
            <AdminPartnerMgtCarousel showAdd={showAdd} setShowAdd={setShowAdd}/>
            {
                showAdd? (<AdminPartnerAddForm showAdd={showAdd} setShowAdd={setShowAdd}/>):( 
                    <>
                    {
                        showUpdate? ( <AdminPartnerUpdateForm showUpdate={showUpdate} setShowUpdate={setShowUpdate}/>):( <AdminPartnerDetailForm showUpdate={showUpdate} setShowUpdate={setShowUpdate}/>)
                    }
                    </>
                   
            )
            }
           
           
        </div>
    )
}

export default PartnerMgt
