import React, { useState } from 'react'
import './styles/CouponUpdateAddress.scss';
import { red, purple, white } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { Checkbox, MenuItem } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import { useSelector, useDispatch } from 'react-redux';
import { text } from 'body-parser';
import AddressItemCoupon from './AddressItemCoupon';
import { ADDCOUPONADDRESS, DELETECOUPONADDRESS, UPDATECOUPONADDRESS } from '../../../constants/appPanel/coupon';

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

const CouponUpdateAddress = ({ place }) => {
    const classes = useStyles();
    let couponAddress = useSelector(state => state.couponMgt.Address);
    
    
    // console.log(Deal.length)


    // React.useEffect(()=>{
    //     if(Deal.length!==0){
    //         Deal=Deal
    //     }
    // },[Deal])

    const dispatch = useDispatch();

    const [address, setAddress] = useState(
        [
            { id: 1, text: "kamnahalli,bangalore,karnataka", edit: false },
            { id: 2, text: "kasturi Nagar,bangalore,karnataka", edit: false },
            { id: 3, text: "Ramurthy nagar,bangalore,karnataka", edit: false },
            { id: 4, text: "Horamavu,bangalore,karnataka", edit: false }
        ]
    )

    const [newText, setNewText] = useState("");

    const[show,setShow]=useState(false);
    const[updateFlag,setUpdateFlag]=useState(false);
    const[token,setToken]=useState(false);

    const [edit, setEdit] = useState(false);

    const handleChange = (e) => {
        setNewText(e.target.value)
    }

     let newAddress={
         address_id:couponAddress && couponAddress.length+1,
         address: newText
     }
    


    const handleDelete = (id) => {
        let fil = [];

        fil = couponAddress.filter((add) => add.address_id !== id);

        //  Deal =fil
        //  console.log(Deal)
        dispatch({ type: DELETECOUPONADDRESS, payload: fil })

    }

 

    const handleAdd=()=>{

        if(!newAddress.address || /^\s*$/.test(newAddress.address) ){
            return
        }
        let fil=[];
        fil = couponAddress.concat([newAddress])

        dispatch({ type: ADDCOUPONADDRESS, payload: fil })
        setNewText('');

    }

    const handleUpdate=()=>{
        //  if(updateFlag){
        //      setShow(true)
        //  }
        //  else{
        //      setShow(false)
        //  }
        setShow(false)
    }


    return (
        <div className="CouponUpdateAddressContainer">

            <div className="CouponUpdateAddressZoneContainer">
                <div className="CouponUpdateAddressZoneWrapper">
                    <label className="CouponUpdateAddressZoneTitle">Zone:</label>
                    <label className="CouponUpdateAddressZoneValue">{place}</label></div>
            </div>

            <div className="CouponUpdateAddressSectionContainer">
                <div className="CouponUpdateAddressSectionTitleContainer">
                    <label className="CouponUpdateAddressSectionTitle">Selected PickUp Address</label>
                </div>

                <div className="CouponUpdateAddressSectionAddressContainer">
                    {
                        couponAddress &&  couponAddress.length !== 0 ? (
                            <>
                                {
                                    couponAddress && couponAddress.map((item, index) => (
                                        <AddressItemCoupon list={couponAddress} item={item} index={index} del={handleDelete}  showUpd={setShow} flag={setUpdateFlag}/>
                                    ))
                                }
                            </>


                        )
                            :
                            (
                                <div className="CouponUpdateAddressSectionAddressWrapper">
                                    <label className="CouponUpdateAddressSectionAddressNoAddress">No Address</label>
                                </div>

                            )
                    }












                </div>
                <div className="CouponUpdateAddressSectionContainerTwo">
                    <div className="CouponUpdateAddressSectionTitleContainerTwo">
                        <label className="CouponUpdateAddressSectionTitleTwo">New Address</label>
                    </div>

                    <div className="CouponUpdateAddressSectionAddressContainerTwoSec">

                        <div className="CouponUpdateAddressSectionAddressWrapperTwo">
                            <div className="CouponUpdateAddressSectionAddressTiteWrapperTwo">
                                <label className="CouponUpdateAddressSectionAddressTiteOneTwo">0{couponAddress && couponAddress.length+1}</label>
                                <label className="CouponUpdateAddressSectionAddressTiteTwoTwo">
                                    <input style={{ width: "100%", border: "none", outline: "none" }}
                                        value={newText} onChange={handleChange} />
                                </label>

                            </div>


                        </div>
                       



                    </div>
                </div>
            </div>
            <div className="CouponUpdateAddressButtonContainer">
                {show? (<RedReverseButton style={{ marginRight: "10px" }} variant="contained" onClick={handleUpdate}>Update</RedReverseButton>) : (<RedReverseButton style={{ marginRight: "10px" }} variant="contained" onClick={handleAdd}>Add</RedReverseButton>)}

            </div>
        </div>
    )
}

export default CouponUpdateAddress
