import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import { UPDATECOUPONADDRESS } from '../../../constants/appPanel/coupon';
import { useSelector, useDispatch } from 'react-redux';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './styles/popup.scss'
import { Button } from '@material-ui/core';
import { red, purple, white } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';




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

const AddressItemCoupon = ({ item, index, del, showUpd, list, flag }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false)
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    const [text, setText] = useState("");

    useEffect(() => {
        setText(item.address)
    }, [item])

    const [id, setId] = useState('');


    useEffect(() => {
        if (id.length !== 0) {
            del(id);
            console.log(id);
        }
        setId('');

    }, [id])



    let obj = {
        address_id: item.address_id,
        address: text

    }

    const handleClose=()=>{
        setOpen(o => !o)
     }

     const handleYes=()=>{
        setId(item.address_id)
        console.log(id)
        setOpen(o => !o)
        showUpd(true);
     }

    const handleUpdate = () => {

        if (!obj.address || /^\s*$/.test(obj.address)) {
            return
        }

        let fil = [];
        fil = list.map((upd) => upd.address_id === obj.address_id ? { ...upd, address: obj.address } : upd)
        dispatch({ type: UPDATECOUPONADDRESS, payload: fil })


        showUpd(true);
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
        showUpd(true);
        flag(true);
    }


    return (
        <div className="CouponUpdateAddressSectionAddressWrapper" key={index}>

            <div className="CouponUpdateAddressSectionAddressTiteWrapper">
                <label className="CouponUpdateAddressSectionAddressTiteOne">0{index + 1}</label>
                {
                    edit ?
                        (
                            <>
                                <input style={{ width: "100%", border: "none", marginLeft: "8px", outline: "none", maxWidth: "422px", minWidth: "422px" }}
                                    value={text} onChange={(e) => setText(e.target.value)} />
                                <label className="CouponUpdateAddressSectionAddressTiteThreeExx">

                                    <EditIcon className={classes.icon} />
                                </label>
                            </>
                        )
                        :
                        (
                            <>
                                <label className="CouponUpdateAddressSectionAddressTiteTwo">{text}</label>
                                <label className="CouponUpdateAddressSectionAddressTiteThree"
                                    onClick={handleEdit}
                                >
                                    <EditIcon className={classes.icon} /> </label>
                            </>
                        )
                }

            </div>

            {
                edit ?
                    (<div className="CouponUpdateAddressSectionAddressTiteIcon">
                        <CheckIcon className={classes.icon} onClick={handleUpdate} />
                    </div>)
                    : (
                        <div className="CouponUpdateAddressSectionAddressTiteIcon" >
                            {/* onClick={() => setId(item.address_id)} */}
                            <CloseIcon className={classes.icon} onClick={() => setOpen(o => !o)}/>
                            <Popup  position="center" modal nested open={open} closeOnDocumentClick onClose={closeModal}>
                                <div className="CouponAddressRemovePopupContainer">
                                    <div className="CouponAddressRemovePopupHeading">
                                        <h5 className="CouponAddressRemovePopupHeadingTitle">Do you want to Remove?</h5>
                                    </div>
                                    <div className="CouponAddressRemovePopupButtonContainer">
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

export default AddressItemCoupon
