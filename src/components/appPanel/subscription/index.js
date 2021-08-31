import React, { useEffect } from 'react'
import Card from './card'
import SubMgtDetail from './details'
import './styles/index.scss'
import { GetSubMgtList } from '../../../actions/appPanel/SubMgtAction';
import axios from 'axios';
import { baseUrl } from '../../../baseurl';
import { useDispatch } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core'
import { SUBMGTPAGELOADING } from '../../../constants/appPanel/subscription';
import { Redirect } from 'react-router';
import ErrorPage from '../../../App/error';






const SubMgt = ({ place, job }) => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.subMgt);




    useEffect(() => {
        
        dispatch(GetSubMgtList(place, job));
        // console.log("success")

    }, [place, job, users.ApproveSuccess])

    useEffect(()=>{
     dispatch({ type: SUBMGTPAGELOADING, payload:true });
    },[place,job])





    return (
        users.PageError ?
            (<ErrorPage/>)
            :
            (
                <>
                    { users.PageLoading===true?
                        (<div className="loading"><CircularProgress /></div>) :
                    (
                    <div className="sub_container">
                        <ToastProvider>
                            <Card />
                            <SubMgtDetail place={place} job={job} />
                        </ToastProvider>
                    </div>)
            }
                </>

            )
    
    )
}

export default SubMgt
