import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import { UPDATEDEALADDRESS } from '../../../constants/appPanel/Deals';
import { useSelector, useDispatch } from 'react-redux';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './styles/popup.scss'
import { Button } from '@material-ui/core';
import { red, purple, white } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { ADDRESS } from '../../../constants/vitaranpartner/pickupcenter/PickUpCenter';
import { AddressMgtRemove, AddressMgtUpdate } from '../../../actions/VitaranPartner/AddressMgt';




const RedReverseButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(purple[500]),
        border: "2px solid #DC1D13",
        width: "80px",
        height: "35px",

        backgroundColor: red[700],
        '&:hover': {
            color: theme.palette.getContrastText(purple[500]),
            border: "2px solid #DC1D13",
            width: "80px",
            height: "35px",

            backgroundColor: red[700],
        },
        '&:active': {
            backgroundColor: red[800],
            color: theme.palette.getContrastText(purple[500]),
        },
        '&:focused': {
            backgroundColor: red[800],
            color: theme.palette.getContrastText(purple[500]),
        }
    },
}))(Button);


const useStyles = makeStyles((theme) => ({
    textField: {
        width: "60%",
        color: "black",
    },

    time: {
        width: "50%",
        color: "black",
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    icon: {
        color: "#C4C4C4",
    }

}));



const RedButton = withStyles((theme) => ({
    root: {
        color: red[700],
        border: "2px solid #DC1D13",
        width: "80px",
        height: "35px",
        fontWeight:"600",

        backgroundColor: theme.palette.getContrastText(purple[500]),
        '&:hover': {
            color: red[700],
            border: "2px solid #DC1D13",
            width: "80px",
            height: "35px",

            backgroundColor: theme.palette.getContrastText(purple[500]),
        },
        '&:active': {
            backgroundColor: red[800],
            color: theme.palette.getContrastText(purple[500]),
        },
        '&:focused': {
            backgroundColor: red[800],
            color: theme.palette.getContrastText(purple[500]),
        }
    },
}))(Button);

const AddressItemDeal = ({ item, index, list, flag }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false)
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    const [address,setAddress]=useState({
        address:"",
        address_id:"",
        "zone":""
    })

    useEffect(() => {
        setAddress({
            ...address,
            address:item.address,
            address_id:item.address_id,
            zone:item.zone
        })
    }, [item])

  


    



    let obj = {
        "address_id": `${address.address_id}`,
       "address": `${address.address}`,
        "zone":`${address.zone}`

    }

    const handleClose=()=>{
        setOpen(o => !o)
     }

     const handleYes=()=>{
         let RemObj={
            "address_id":`${address.address_id}`,
            "zone":`${address.zone}`
         }


         dispatch(AddressMgtRemove(RemObj,setOpen))


     }

    const handleUpdate = () => {

        console.log(obj)
        dispatch(AddressMgtUpdate(obj))

        // if (!obj.text || /^\s*$/.test(obj.text)) {
        //     return
        // }

        // let fil = [];
        // fil = list.map((upd) => upd.id === obj.id ? { ...upd, text: obj.text} : upd)
        // dispatch({ type: ADDRESS, payload: fil })
        
        setEdit(false);
    }

    // const handleUpdate=(obj)=>{
    //     if(!obj.address || /^\s*$/.test(obj.address) ){
    //         return
    //     }
    //     let fil=[];
    //     fil = Deal.map((upd)=>upd.address_id===obj.address_id? {...upd,address:obj.address}:upd)

    //     dispatch({ type: UPDATEDEALADDRESS, payload: fil })
    // }


    const handleEdit = () => {
        setEdit(true);
        
        flag(true);
    }


    // console.log(text,obj)


    return (
        <div className="DealUpdateAddressSectionAddressWrapper" key={index}>

            <div className="DealUpdateAddressSectionAddressTiteWrapper">
                <label className="DealUpdateAddressSectionAddressTiteOne">0{index + 1}</label>
                {
                    edit ?
                        (
                            <>
                                <input style={{ width: "100%", border: "none", marginLeft: "8px", outline: "none", maxWidth: "422px", minWidth: "422px" }}
                                    value={address.address} name="address" onChange={(e) => setAddress({...address,[e.target.name]:e.target.value})} />
                                <label className="DealUpdateAddressSectionAddressTiteThreeExx">

                                    <EditIcon className={classes.icon} />
                                </label>
                            </>
                        )
                        :
                        (
                            <>
                                <label className="DealUpdateAddressSectionAddressTiteTwo">{address.address}</label>
                                <label className="DealUpdateAddressSectionAddressTiteThree"
                                    onClick={handleEdit}
                                >
                                    <EditIcon className={classes.icon} /> </label>
                            </>
                        )
                }

            </div>

            {
                edit ?
                    (<div className="DealUpdateAddressSectionAddressTiteIcon">
                        <CheckIcon className={classes.icon} onClick={handleUpdate} />
                    </div>)
                    : (
                        <div className="DealUpdateAddressSectionAddressTiteIcon" >
                            {/* onClick={() => setId(item.address_id)} */}
                            <CloseIcon className={classes.icon} onClick={() => setOpen(o => !o)}/>
                            <Popup  position="center" modal nested open={open} closeOnDocumentClick onClose={closeModal}>
                                <div className="DealAddressRemovePopupContainer">
                                    <div className="DealAddressRemovePopupHeading">
                                        <h5 className="DealAddressRemovePopupHeadingTitle">Do you want to Remove?</h5>
                                    </div>
                                    <div className="DealAddressRemovePopupButtonContainer">
                                        <RedReverseButton variant="contained"  onClick={handleYes}>Yes</RedReverseButton>
                                        <RedButton variant="contained" onClick={handleClose}>No</RedButton>
                                    </div>

                                </div>
                            </Popup>

                        </div>
                    )
            }

        </div>
    )
}

export default AddressItemDeal
