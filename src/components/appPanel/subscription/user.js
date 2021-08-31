import React, { useState, useEffect } from 'react'
import './styles/SubMgtUser.scss';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import CallIcon from '@material-ui/icons/Call';
import BusinessIcon from '@material-ui/icons/Business';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import TimerOutlinedIcon from '@material-ui/icons/TimerOutlined';
import { useSelector } from 'react-redux'
import { Button } from '@material-ui/core';
import { red, purple } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import CreateIcon from '@material-ui/icons/Create';

import { SubMgtDisplay, SubMgtDateApiFormat, SubMgtDatePickerFormat, ApproveSubscriptionDate } from '../../../function';
// import TextField from '@material-ui/core/TextField';
import { ApproveSubscription } from '../../../actions/appPanel/SubMgtAction';
import { useDispatch } from 'react-redux';
import { useToasts } from 'react-toast-notifications'
import { KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { APPROVESTATE } from '../../../constants/appPanel/subscription';





const useStyles = makeStyles({
    expiry: {
        width: "20px",
        height: "20px",
        color: "red",
    },

    icon: {
        width: "20px",
        height: "20px",
        color: "white",
    },
    button: {
        fontSize: "14px",
        marginRight: "20px",
        marginTop: "10px"
    }
    ,
    textfield: {
        fontSize: "12px",
    }
})

const theme = createMuiTheme({
    palette: {
        primary: {
            main: red[800],
        }
    },
});

const RedButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: red[700],
        '&:hover': {
            backgroundColor: red[800],
        },
    },
}))(Button);


const SubMgtUser = ({ checkedItem, data, zone, role }) => {
    const { addToast } = useToasts();
    const dispatch = useDispatch();
    const classes = useStyles();
    const SubState = useSelector(state => state.subMgt)

    let userDetails = SubState.userDetails;
    const [selectedDate, handleDateChange] = useState(new Date());
    let userlist = SubState.userList;
    const [edit, setEdit] = useState(false);


    

   let ApproveSuccess = userDetails && userDetails.ApproveSuccess;
    

    // const [selectedDate, setSelectedDate] = React.useState('');


    /////////////
    let mob = userDetails && userDetails.Mobile;
    let Name = userDetails && userDetails.first_name;
    let userId = userDetails && userDetails.user_id;

 

    let UUID = `${Name && Name.slice(0, 3)}${mob && mob.slice(0, 2)}==`;
  

    let apiDate = '';


    apiDate = SubMgtDateApiFormat(selectedDate);





    const handleClick = () => {
        dispatch(ApproveSubscription(userId, apiDate, UUID, zone, setEdit));
    }

    React.useEffect(() => {

        // setSelectedDate(userDetails && SubMgtDatePickerFormat(userDetails.ExpiryDate));
        // console.log(userDetails && SubMgtDatePickerFormat(userDetails.ExpiryDate))
        setEdit(false)

        if(userDetails && userDetails.ExpiryDate && userDetails.ExpiryDate.length!==0 && userDetails.ExpiryDate!==null){
           
            handleDateChange(new Date(userDetails.ExpiryDate))
        }
        else{
           
            handleDateChange(new Date())
        }


    }, [userDetails])

   

    React.useEffect(()=>{
    
        //  checkedItem.map((item,index)=>{
        //      if(item==="applied"){
                 
        //      }
        //  })

        if(userDetails && userDetails.SubcriptionStatus && userDetails.SubcriptionStatus.length!==0 && userDetails.ExpiryDate!==null){
            if(userDetails.SubcriptionStatus==="applied"){
                setEdit(true);
            }
            {
                setEdit(false)
            }
        }

        
    },[checkedItem])


    React.useEffect(() => {
        if (ApproveSuccess==='Success') {
            addToast('Approve Subscription Success', { appearance: 'success', autoDismiss: true, });
            // dispatch({type:APPROVESTATE})
        }
        else{
             if (ApproveSuccess==='Failed') {
            addToast('Approve Subscription failed', { appearance: 'error', autoDismiss: true, });
            // dispatch({type:APPROVESTATE})
        }
        }
    }, [ApproveSuccess])

  

    return (
        userlist.length === 0 ? (<h1>No Data</h1>) : (
            <div className="SubMgtUserContainer">
                {
                    data.length !== 0 ?
                        (
                            <>
                                <div className="SubMgtUserOne">
                                    <div className="SubMgtUserImgSection" >
                                        <img className="SubMgtFirmImage" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="subFirmImg" />
                                        <div className="SubMgtProfileImageContainer">
                                            <img className="SubMgtProfileImage" src="https://www.thefamouspeople.com/profiles/thumbs/a-p-j-abdul-kalam-2.jpg" alt="profIMgSubMgt" />
                                        </div>

                                    </div>
                                </div>
                                <div className="SubMgteditContainer">
                                    
                                                    <>{
                                                        userDetails && userDetails.SubcriptionStatus.toLowerCase() === "applied" ?
                                                            (
                                                                <button type="button" onClick={() => setEdit(!edit)} className="SubMgtedit">
                                                                    <CreateIcon />
                                                                </button>
                                                            )
                                                            : (
                                                                null
                                                            )
                                                    }
                                                    </>


                                </div>

                                <div className="SubMgtUserDetailSection">
                                    <div className="SubMgtUserDetailSectionList">
                                        <div className="SubMgtUserDetailTitleSection">
                                            <div className="SubMgtUserDetailTitleIcon"><AccountCircleIcon className={classes.icon} /></div>
                                            <label className="SubMgtUserDetailTitle">Name</label>
                                        </div>
                                        <div className="SubMgtUserDetailValueSection">
                                            <label className="SubMgtUserDetailValue">{userDetails.first_name}{userDetails.last_name}</label>
                                        </div>
                                    </div>
                                    <div className="SubMgtUserDetailSectionList">
                                        <div className="SubMgtUserDetailTitleSection">
                                            <div className="SubMgtUserDetailTitleIcon"><CallIcon className={classes.icon} /></div>
                                            <label className="SubMgtUserDetailTitle">Mobile</label>
                                        </div>
                                        <div className="SubMgtUserDetailValueSection">
                                            <label className="SubMgtUserDetailValue">{userDetails.Mobile}</label>
                                        </div>
                                    </div>
                                    <div className="SubMgtUserDetailSectionList">
                                        <div className="SubMgtUserDetailTitleSection">
                                            <div className="SubMgtUserDetailTitleIcon"><BusinessIcon className={classes.icon} /></div>
                                            <label className="SubMgtUserDetailTitle">FirmName</label>
                                        </div>
                                        <div className="SubMgtUserDetailValueSection">
                                            <label className="SubMgtUserDetailValue">{userDetails.FirmName}</label>
                                        </div>
                                    </div>
                                    <div className="SubMgtUserDetailSectionList">
                                        <div className="SubMgtUserDetailTitleSection">
                                            <div className="SubMgtUserDetailTitleIcon"><LocationOnIcon className={classes.icon} /></div>
                                            <label className="SubMgtUserDetailTitle">Address</label>
                                        </div>
                                        <div className="SubMgtUserDetailValueSection">
                                            <label className="SubMgtUserDetailValue">{userDetails.Address}</label>
                                        </div>
                                    </div>
                                    <div className="SubMgtUserDetailSectionList">
                                        <div className="SubMgtUserDetailTitleSection">
                                            <div className="SubMgtUserDetailTitleIconExpiry"><TimerOutlinedIcon className={classes.icon} /></div>
                                            <label className="SubMgtUserDetailTitle">Subscription Expiry</label>
                                        </div>
                                        <div className="SubMgtUserDetailValueSection">
                                            <label className="SubMgtUserDetailValue">{userDetails.ExpiryDate === null ? 'N/A' : SubMgtDisplay(userDetails.ExpiryDate)}</label>
                                        </div>
                                    </div>

                                <>{

                                
                                edit?(
                                    <>{
                                        userDetails && userDetails.SubcriptionStatus.toLowerCase() === "applied" ?
                                            (
                                                <div className="SubMgtUserDetailSectionList">
                                                    <div className="SubMgtUserDetailTitleSection">
                                                        <div className="SubMgtUserDetailTitleIcon"><AccessTimeOutlinedIcon className={classes.icon} /></div>
                                                        <label className="SubMgtUserDetailTitle">Extended Till</label>
                                                    </div>
                                                    <div className="SubMgtUserDetailValueSection">
                                                        {
                                                            edit ? (
                                                                <>
                                                                
                                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                                    <KeyboardDatePicker
                                                                        clearable
                                                                        value={selectedDate}
                                                                        placeholder="10/10/2018"
                                                                        onChange={date => handleDateChange(date)}
                                                                        minDate={new Date()}
                                                                        format="MM/dd/yyyy"
                                                                    />
                                                                    </MuiPickersUtilsProvider>
                                                                </>
                                                            ) : null
                                                        }

                                                    </div>
                                                </div>
                                            )
                                            : (
                                                null
                                            )
                                    }
                                    </>

                                ):null

                                }</>
                                   




                                </div>

                                <div className="ButtonSection">
                                 
                                                    <>{
                                                        userDetails && userDetails.SubcriptionStatus.toLowerCase() === "applied" ?
                                                            (
                                                                <>{
                                                                    edit ?
                                                                        (
                                                                            <RedButton variant="contained" type="button" className={classes.button} onClick={handleClick} color="primary">Approve</RedButton>
                                                                        )
                                                                        :
                                                                        (
                                                                            null
                                                                        )
                                                                }
                                                                </>

                                                            )
                                                            : (
                                                                null
                                                            )
                                                    }
                                                    </>
                                             


                                </div>

                            </>
                        )
                        :
                        (
                            <label>no users Found</label>
                        )
                }


            </div>)
    )
}

export default SubMgtUser
