import React,{useState} from 'react';
import DealMgtAddress from './DealAddress';
import './styles/index.scss';
import VpCoupons from './VpCoupons';
import VpDeals from './VpDeals';
import { useDispatch } from 'react-redux';
import { GetAddressMgt } from '../../../actions/VitaranPartner/AddressMgt';

const ViataranPartnerPickUpCenters = ({place}) => {

     const[form,setForm]=useState({
         address:true,
         deal:false,
         coupon:false
     })


     const handleChange=(txt)=>{
         console.log(txt)
          if(txt==="address"){
              setForm({
                  ...form,
                  address:true,
                  deal:false,
                  coupon:false
              })
          }
          else if(txt==="deal"){
            setForm({
                ...form,
                address:false,
                deal:true,
                coupon:false
            })
          }
          else if(txt==="coupon"){
            setForm({
                ...form,
                address:false,
                deal:false,
                coupon:true
            })
          }
          else{
              console.log('hmm')
          }
     }
     const dispatch = useDispatch();

     React.useEffect(()=>{
          dispatch(GetAddressMgt(place))
     },[])

    return (
        <div className="VitaranPartnerPickUpCentersContainer">
        <div className="VitaranPartnerPickUpCentersTop">
            <div className="VitaranPartnerPickUpCentersTopOne" name="address" onClick={()=>handleChange("address")}>
                <label className={`VitaranPartnerPickUpCentersTopOneTitle  ${form.address? `VitaranPartnerPickUpCenterslabel` : null}`}>Address Management</label>
            </div>
            <div className="VitaranPartnerPickUpCentersTopTwo" name="deal" onClick={()=>handleChange("deal")}>
                <label className={`VitaranPartnerPickUpCentersTopTwoTitle  ${form.deal? `VitaranPartnerPickUpCenterslabel` : null}`}>Deals</label>
            </div>
            <div className="VitaranPartnerPickUpCentersTopThree" name="coupon" onClick={()=>handleChange("coupon")}>
                <label className={`VitaranPartnerPickUpCentersTopThreeTitle  ${form.coupon? `VitaranPartnerPickUpCenterslabel` : null}`}>Coupons</label>
            </div>
        </div>
        <div className="VitaranPartnerPickUpCentersBottom">
        {
            form.address? (<DealMgtAddress place={place}/>):(
               
                <>
                {
                    form.deal?( <VpDeals zone={place}/>): (<VpCoupons zone={place}/>)

                }
                </>
            )
        }
            
        </div>
     </div>
    )
}

export default ViataranPartnerPickUpCenters
