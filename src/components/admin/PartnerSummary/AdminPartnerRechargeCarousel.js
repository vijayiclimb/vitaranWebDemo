import React, { useState } from 'react'
import './styles/AdminPartnerRechargeCarousel.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Prof from '../../../images/Rectangle 485.png';
import { useSelector,useDispatch } from 'react-redux';
import { GetAdminPartnerSummaryDetail } from '../../../actions/Admin/AdminPartnerSummaryMgt';


const responsive= {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};



// partnerSummary

const AdminPartnerRechargeCarousel = () => {
    const state = useSelector(state => state.partnerSummary);
    const dispatch = useDispatch();
    const[id,setId]=useState('');

    React.useEffect(()=>{
        dispatch(GetAdminPartnerSummaryDetail(id))
    },[id]
    )
    // console.log(state)
    return (
        <div  className="AdminPartnerSummaryCarouselContainer">
        {
            state && state.List && state.List.length!==0? (
                <Carousel responsive={responsive}>
                {
                   state.List.map((item,index)=>{
                    return (
                        <div className={`AdminPartnerSummaryCarouselCardContainer ${item.partner_id===state.PartnerId? `AdminPartnerSummaryCarouselCardBorder` : `AdminPartnerSummaryCarouselCardOneBorder`}`} key={index} onClick={()=>setId(item.partner_id)}>
                        <div className="AdminPartnerSummaryCarouselCardWrapper">
                               <div className="AdminPartnerSummaryCarouselImageContainer">
                                    <div style={{width:"90px",height:"90px",overflow:"hidden",borderRadius:"100%"}}>
                                          <img src={item.profile_img} alt="mm" style={{objectFit:"cover",width:"90px",height:"90px"}}/>
                                    </div>
                               </div>
                               <div className="AdminPartnerSummaryCarouselTextContainer">
                                   <label className="AdminPartnerSummaryCarouselTextOne">{item.name}</label>
                                   <label className="AdminPartnerSummaryCarouselTextTwo">{item.zone}</label>
                                   <label className="AdminPartnerSummaryCarouselTextThree">₹ {item.balance_amt}</label>
                               </div>
                        </div>
                            
                        </div>
                    )
                    })
                }
                </Carousel>
            ) :(
                <label>No Data</label>
            )
        }
         
                  
        </div>
    )
}

export default AdminPartnerRechargeCarousel
