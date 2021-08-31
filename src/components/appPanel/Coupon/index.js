import React,{useEffect} from 'react'

import Carousels from './carousel'
import './styles/index.scss'
import UpdateCoupon from './Update'
import Rules from './Rules'
import Basket from './Basket'
import CouponBastketForm from './CouponBastketForm'
import { getCouponByzone } from '../../../actions/appPanel/coupon';
import {useDispatch,useSelector} from 'react-redux'



import { ToastProvider } from 'react-toast-notifications';
import { CircularProgress } from '@material-ui/core'
import CouponManagementForm from './CouponManagementForm'

const CouponMgt = ({place}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCouponByzone(place))
    }, [place])

    const state = useSelector(state => state.couponMgt)


    return (
        state.pageLoading? (  <div className="loading"><CircularProgress/></div>) : (
 <div className="couponContainer">
            <ToastProvider>
            <Carousels place={place}/>
            <Rules place={place}/>
           
            {/* <CouponUpdateAddress/> */}
            
        

          


            <CouponManagementForm place={place}/>
                
            
            <Basket />
            <CouponBastketForm place={place}/>
            </ToastProvider>
        </div>

        )
      
       
    )
}

export default CouponMgt
