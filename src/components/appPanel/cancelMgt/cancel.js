import React,{useEffect} from 'react'
import Bider from './bider'
import {OrdererReasons,BiderReasons,Container,Loader} from './cancelStyles'
import Orderer from './orderer'
import {CircularProgress} from '@material-ui/core'
import {useSelector,useDispatch} from 'react-redux'
import { getSecondReasons,getFirstReasons } from '../../../actions/appPanel/cancellation';

const Cancel = () => {
   const loading = useSelector(state => state.cancelMgt.loading)
   const dispatch=useDispatch();
   const Ordertype = 'Order';
   const Bidertype = 'Bidder';

   useEffect(()=>{
      dispatch(getSecondReasons(Ordertype));
      dispatch(getFirstReasons(Bidertype));
     },[])
  

    return (
      loading? (<Loader><CircularProgress/></Loader>): (
       <Container>
           <OrdererReasons>
             <Orderer/>
           </OrdererReasons>
           <BiderReasons>
              <Bider />
           </BiderReasons>
       </Container>)
    )
}

export default Cancel
