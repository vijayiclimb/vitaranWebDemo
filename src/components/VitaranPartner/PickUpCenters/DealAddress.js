import React, { useState } from 'react'
import './styles/DealMgtAddress.scss';
import { red, purple, white } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { Checkbox, MenuItem } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import { useSelector, useDispatch } from 'react-redux';
import { text } from 'body-parser';
import AddressItemDeal from './AddressItem';
import { ADDDEALADDRESS, DELETEDEALADDRESS, UPDATEDEALADDRESS } from '../../../constants/appPanel/Deals';
import { ADDRESS } from '../../../constants/vitaranpartner/pickupcenter/PickUpCenter';
import { AddressMgtAdd } from '../../../actions/VitaranPartner/AddressMgt';
import ClearAllIcon from '@material-ui/icons/ClearAll';

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

const DealMgtAddress = ({ place }) => {
    const classes = useStyles();
    let Deal = useSelector(state => state.pickUpCenterAddress.Address);
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
   
    const[token,setToken]=useState(false);

    const [edit, setEdit] = useState(false);

    const handleChange = (e) => {
        setNewText(e.target.value)
    }

     let newAddress={
        "address":`${newText}`,
        "zone":`${place}`
    }
    


    

 

    const handleAdd=()=>{

        if(!newAddress.address || /^\s*$/.test(newAddress.address) ){
            return
        }
       
       dispatch(AddressMgtAdd(newAddress))

    }

   const handleClear=()=>{
       setNewText('');
   }


    return (
        <div className="DealUpdateAddressContainer">

            <div className="DealUpdateAddressZoneContainer">
                <div className="DealUpdateAddressZoneWrapper">
                    <label className="DealUpdateAddressZoneTitle">Zone:</label>
                    <label className="DealUpdateAddressZoneValue">{place}</label></div>
            </div>

            <div className="DealUpdateAddressSectionContainer">
                <div className="DealUpdateAddressSectionTitleContainer">
                    <label className="DealUpdateAddressSectionTitle">Selected PickUp Address</label>
                </div>

                <div className="DealUpdateAddressSectionAddressContainer">
                    {
                        Deal.length !== 0 ? (
                            <>
                                {
                                    Deal && Deal.map((item, index) => (
                                        <AddressItemDeal list={Deal} item={item} index={index}   />
                                    ))
                                }
                            </>


                        )
                            :
                            (
                                <div className="DealUpdateAddressSectionAddressWrapper">
                                    <label className="DealUpdateAddressSectionAddressNoAddress">No Address</label>
                                </div>

                            )
                    }












                </div>
                <div className="DealUpdateAddressSectionContainerTwo">
                    <div className="DealUpdateAddressSectionTitleContainerTwo">
                        <label className="DealUpdateAddressSectionTitleTwo">New Address</label>
                    </div>

                    <div className="DealUpdateAddressSectionAddressContainerTwoSec">

                        <div className="DealUpdateAddressSectionAddressWrapperTwo">
                            <div className="DealUpdateAddressSectionAddressTiteWrapperTwo">
                                <label className="DealUpdateAddressSectionAddressTiteOneTwo">0{Deal.length+1}</label>
                                <label className="DealUpdateAddressSectionAddressTiteTwoTwo">
                                    <input style={{ width: "100%", border: "none", outline: "none" }}
                                    
                                        value={newText} onChange={handleChange} />
                                </label>

                            </div>


                        </div>

                        <div className="DealUpdateAddressSectionAddressTiteIconClear">
                        <ClearAllIcon className={classes.icon}  onClick={handleClear}/>
                    </div>
                       



                    </div>
                </div>
            </div>
            <div className="DealUpdateAddressButtonContainer">
                <RedReverseButton style={{ marginRight: "10px" }} variant="contained" onClick={handleAdd}>Add</RedReverseButton>

            </div>
        </div>
    )
}

export default DealMgtAddress
