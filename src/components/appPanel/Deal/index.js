import React, { useState, useEffect } from 'react'
import Add from './Add'
import Carousels from './carousel'
import Details from './DetailsDealsMgt'
import './styles/index.scss'
import Update from './Update'
import { useDispatch, useSelector } from 'react-redux';
import { getDeal } from '../../../actions/appPanel/Deals'
import {CircularProgress} from '@material-ui/core';
import { ToastProvider } from 'react-toast-notifications';




const DealMgt = ({ place }) => {
    const dispatch = useDispatch();

    const deals = useSelector(state => state.dealMgt);

    

    useEffect(() => {
        dispatch(getDeal(place))
    }, [place])


    return (
        
            deals.Pageloading===true?
                (<div className="loading"><CircularProgress/></div>) :
                (
                    <div className="DealContainer">
                       <ToastProvider>
                        <Carousels place={place}/>
                        <Update place={place}/>
                        {/* <DealMgtAddress place={place}/> */}
                        {/* <Details /> */}
                        <Add place={place}/>
                        </ToastProvider>
                    </div>
                )
        

    )
}

export default DealMgt
