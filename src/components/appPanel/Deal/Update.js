import React, { useState } from 'react'
import './styles/update.scss'
import { Checkbox, TextField, Button, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useDispatch, useSelector } from 'react-redux';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { convertDate, convertFormFormat } from '../../../function';
import { RemoveDeal, UpdateDeal } from '../../../actions/appPanel/Deals';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { red, purple } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { useToasts } from 'react-toast-notifications'

import { REMOVEDEALFAILED, REMOVEDEALSUCCESS, UPDATEDEALFAILED, UPDATEDEALSUCCESS, UPDATEDEALWARNING } from '../../../constants/appPanel/Deals';
import { DealFormTitlepro } from './styles/userStyle';
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker, MuiPickersUtilsProvider, KeyboardDateTimePicker } from "@material-ui/pickers";

const RedButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(purple[500]),
        marginRight: "10px",
        backgroundColor: red[700],
        '&:hover': {
            backgroundColor: red[800],
        },
    },
}))(Button);


const RedButtonTwo = withStyles((theme) => ({
    root: {
        color: red[700],
        border: "2px solid #DC1D13",
        width: "80px",
        height: "35px",
        textTransform: "none",
        backgroundColor: theme.palette.getContrastText(purple[500]),
        '&:hover': {
            backgroundColor: red[800],
            color: theme.palette.getContrastText(purple[500]),
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

const RedCheckbox = withStyles({
    root: {
        color: "#bdbdbd",
        '&$checked': {
            color: red[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
    search: {
        width: "100%",
        color: "black",
    },
    subtext: {
        width: "90%",
        color: "black",
    },
    textField: {
        width: 240,
    },
    radiocontainer: {
        display: "flex",
    },
    root: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    icon: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#106ba3',
        },
    },
}));

const Update = ({ place }) => {
    const { addToast } = useToasts();
    const classes = useStyles();
    const dispatch = useDispatch();
    const deals = useSelector(state => state.dealMgt);

    const [file, setFile] = useState('');
    const [access, setAccess] = React.useState(true);
    const [updateForm, setUpdateForm] = useState({
        DealEndDateTime: '',
        DealId: '',
        DealImage: `${deals.dealsDetails.DealImage}`,
        DealPrice: '',
        DealStartDateTime: '',
        DealStatus: ``,
        DealTitle: '',
        DeliveryDate: '',
        MRP: '',
        PromotionalOfferDescription: '',
        QuantumOfDeal: '',
        SKUDescription: '',
        SKUImage: '',
        SKUName: '',
        role: '',
        zone: '',
        retailer: false,
        rider: false,
        wholesaler: false,
        Discount: '',
    });

    
    let result;
    let finalRes;
    if (updateForm) {
        if (updateForm.DealImage) {

            result = updateForm && updateForm.DealImage && updateForm.DealImage.match(/[^\/]+$/)[0];
            finalRes = result.replace(/\s/g, "");
        }

    }



    const [productImg, setProductImg] = useState(`http://3.7.71.29:6001/imgs/${finalRes}`);
    let dateStartpicker = `${new Date(updateForm.DealStartDateTime)}`
    let dateEndPicker = `${new Date(updateForm.DealEndDateTime)}`


    const [selectedStartDate, handleStartDateChange] = useState(dateStartpicker);
    const [selectedEndDate, handleEndDateChange] = useState(dateEndPicker);







    // console.log(finalRes)


    const param = {

        "dealid": `${updateForm.DealId}`,
        "dealimage": `${finalRes}`,
        "dealtitle": `${updateForm.DealTitle}`,
        "PromotionalOfferDescription": `${updateForm.PromotionalOfferDescription}`,
        "QuantumOfDeal": `${updateForm.QuantumOfDeal}`,
        "dealprice": `${updateForm.DealPrice}`,
        "dealStartDate": `${convertDate(selectedStartDate)}`,
        "dealEndDate": `${convertDate(selectedEndDate)}`,
        "zone": `${updateForm.zone}`,
        "dealStatus": `${updateForm.DealStatus}`,
        "retailer": `${updateForm.retailer}`,
        "rider": `${updateForm.rider}`,
        "wholesaler": `${updateForm.wholesaler}`,
        "distributor": "false"


    };



    const imgUpload = async (formData) => {
        await axios.post(`http://3.7.71.29:6001/VitaranSDK/uploadImage`, formData)
            .then(res => {
                setUpdateForm({ ...updateForm, DealImage: `${res.data.replace(/\s/g, "")}` });

                console.log(res.data);
                setProductImg(`http://3.7.71.29:6001/imgs/${res.data.replace(/\s/g, "")}`);
            })
            .catch(err => console.log(err.message))
    }

    const imgSelect = (event) => {
        setFile(event.target.files[0]);
    }


    React.useEffect(() => {
        const formData = new FormData();
        formData.append('file', file);
        console.log(formData)
        imgUpload(formData)
    }, [file])


    React.useEffect(() => {
        if (deals.dealsDetails) {
            //    console.log(deals.dealsDetails);
            setUpdateForm(deals.dealsDetails);

            let res;
            let fin;
            if (deals.dealsDetails) {
                if (deals.dealsDetails.DealImage) {
        
                    res = deals.dealsDetails && deals.dealsDetails.DealImage && deals.dealsDetails.DealImage.match(/[^\/]+$/)[0];
                    fin = res.replace(/\s/g, "");
                }
        
            }


            setProductImg(`http://3.7.71.29:6001/imgs/${fin}`);
            handleStartDateChange(convertDate(deals.dealsDetails.DealStartDateTime));
            handleEndDateChange(convertDate(deals.dealsDetails.DealEndDateTime));

            let result;
            let finalRes;
            if (updateForm) {
                if (updateForm.SKUImage) {
        
                    result = updateForm && updateForm.SKUImage && updateForm.SKUImage.match(/[^\/]+$/)[0];
                    finalRes = result.replace(/\s/g, "");
                }
        
            }

        }
    }, [deals])


    // React.useEffect(()=>{
    //     setProductImg(`http://3.7.71.29:6001/imgs/${deals && deals.dealsDetails && deals.dealsDetails.DealImage && deals.dealsDetails.DealImage.replace(/\s/g, "")}`);
    // },[])


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(UpdateDeal(param));
    }

    const Id = updateForm.DealId;


    const handleRemove = () => {
        dispatch(RemoveDeal(place, Id));


    }



    React.useEffect(() => {
        if (deals.UpdateDealSuccess.length !== 0) {
            addToast('Updated Deal Succesully', { appearance: 'success', autoDismiss: true, });
            dispatch({ type: UPDATEDEALSUCCESS, payload: '' });
        }
    }, [deals.UpdateDealSuccess])

    React.useEffect(() => {
        if (deals.UpdateDealWarning.length !== 0) {
            addToast('Parameters Missing', { appearance: 'warning', autoDismiss: true, });
            dispatch({ type: UPDATEDEALWARNING, payload: '' });
        }
    }, [deals.UpdateDealWarning]);

    React.useEffect(() => {
        if (deals.UpdateDealFailed.length !== 0) {
            addToast('Failed to Update', { appearance: 'error', autoDismiss: true, });
            dispatch({ type: UPDATEDEALFAILED, payload: '' });
        }
    }, [deals.UpdateDealFailed])



    React.useEffect(() => {
        if (deals.RemoveDealSuccess.length !== 0) {
            addToast('Removed Deal Succesully', { appearance: 'success', autoDismiss: true, });
            dispatch({ type: REMOVEDEALSUCCESS, payload: '' });
        }
    }, [deals.RemoveDealSuccess])

    React.useEffect(() => {
        if (deals.RemoveDealFailed.length !== 0) {
            addToast('Failed to Remove', { appearance: 'error', autoDismiss: true, });
            dispatch({ type: REMOVEDEALFAILED, payload: '' });
        }
    }, [deals.RemoveDealFailed])

    // let result;
    // result =  updateForm && updateForm.SKUImage && updateForm.SKUImage.match(/[^\/]+$/)[0];

    // console.log(updateForm)
    // console.log(result)
    // console.log(param)

    // console.log(new Date(updateForm.DealStartDateTime))
    // console.log(convertDate(dateStartpicker))
    // console.log(selectedStartDate,selectedEndDate);
    // console.log(productImg)
    return (
        <form onSubmit={handleSubmit}>
            <div className="UpdateContainerUpdateDeal">

                <div className="oneUpdateDeal">
                    <div className="compuUpdateDeal">
                        <div className="CheckboxContainerUpdateDeal">
                            <FormGroup row>
                                <FormControlLabel
                                    control={<RedCheckbox checked={updateForm.retailer} onChange={(e) => setUpdateForm({ ...updateForm, [e.target.name]: e.target.checked })} name="retailer" />}
                                    label="Retailer"
                                />
                                <FormControlLabel
                                    control={
                                        <RedCheckbox
                                            checked={updateForm.rider}
                                            onChange={(e) => setUpdateForm({ ...updateForm, [e.target.name]: e.target.checked })}
                                            name="rider"
                                            color="primary"
                                        />
                                    }
                                    label="Rider"
                                />

                                <FormControlLabel
                                    control={
                                        <RedCheckbox
                                            checked={updateForm.wholesaler}
                                            onChange={(e) => setUpdateForm({ ...updateForm, [e.target.name]: e.target.checked })}
                                            name="wholesaler"
                                            color="primary"
                                        />
                                    }
                                    label="Wholesaler"
                                />

                            </FormGroup>
                        </div>
                    </div>



                    <div className="compuUpdateDeal">

                        <div className="DealFormList">
                            <div className="DealFormTitleContainer">
                                <label className="DealFormTitle">Sku Name:</label>
                            </div>
                            <div className="textFieldContainer">
                                <TextField size="small" variant="outlined" className={classes.search} name="SKUName" value={updateForm.SKUName} onChange={(e) => setUpdateForm({ ...updateForm, [e.target.name]: e.target.value })} />
                            </div>
                        </div>

                        <div className="DealFormList">
                            <div className="DealFormTitleContainer">
                                <label className="DealFormTitle">Sku Description:</label>
                            </div>
                            <div className="textFieldContainer">
                                <TextField size="small" variant="outlined" className={classes.search} multiline rows={3} name="SKUDescription" value={updateForm.SKUDescription === null ? 'N/a' : updateForm.SKUDescription} onChange={(e) => setUpdateForm({ ...updateForm, [e.target.name]: e.target.value })} />
                            </div>
                        </div>

                        <div className="DealFormList">
                            <div className="DealFormTitleContainer">
                                <label className="DealFormTitle">Offer Title:</label>
                            </div>
                            <div className="textFieldContainer">
                                <TextField size="small" variant="outlined" className={classes.search} name="DealTitle" value={updateForm.DealTitle} onChange={(e) => setUpdateForm({ ...updateForm, [e.target.name]: e.target.value })} />
                            </div>
                        </div>


                        <div className="DealFormList">
                            <div className="DealFormTitleContainer">
                                <DealFormTitlepro>Promotional Offer Description:</DealFormTitlepro>
                            </div>
                            <div className="textFieldContainer">
                                <TextField size="small" variant="outlined" className={classes.search} name="PromotionalOfferDescription" value={updateForm.PromotionalOfferDescription} variant="outlined" onChange={(e) => setUpdateForm({ ...updateForm, [e.target.name]: e.target.value })} />
                            </div>
                        </div>


                        <div className="DealFormListSub">
                            <div className="UpdateDealLeft">

                                <div className="DealFormSubList">
                                    <div className="DealFormSubTitleContainer">
                                        <label className="DealFormSubTitle">MRP:</label>
                                    </div>
                                    <div className="SubtextFieldContainer">
                                        <TextField size="small" variant="outlined" className={classes.search} name="MRP" value={updateForm.MRP} variant="outlined" onChange={(e) => setUpdateForm({ ...updateForm, [e.target.name]: e.target.value })} />
                                    </div>
                                </div>





                                <div className="DealFormSubList">
                                    <div className="DealFormSubTitleContainer">
                                        <label className="DealFormSubTitle">Offer Start Date:</label>
                                    </div>
                                    <div className="SubtextFieldContainer">
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <KeyboardDateTimePicker
                                                size="small"
                                                minDate={!access ? new Date(updateForm.DealStartDateTime) : undefined}
                                                maxDate={!access ? new Date(updateForm.DealEndDateTime) : undefined}
                                                ampm={true}
                                                inputVariant="outlined"
                                                value={selectedStartDate}
                                                onChange={handleStartDateChange}
                                                


                                                format="dd/MM/yyyy HH:mm"

                                            />
                                        </MuiPickersUtilsProvider>
                                    </div>
                                </div>

                                <div className="DealFormSubList">
                                    <div className="DealFormSubTitleContainer">
                                        <label className="DealFormSubTitle">Offer End Date:</label>
                                    </div>
                                    <div className="SubtextFieldContainer">

                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <KeyboardDateTimePicker
                                                size="small"
                                                ampm={true}
                                                inputVariant="outlined"
                                                value={selectedEndDate}
                                                onChange={handleEndDateChange}

                                                disablePast
                                                format="dd/MM/yyyy HH:mm"

                                            />
                                        </MuiPickersUtilsProvider>
                                    </div>
                                </div>

                                <div className="DealFormSubList">
                                    <div className="DealFormSubTitleContainer">
                                        <label className="DealFormSubTitle">Offer Status:</label>
                                    </div>
                                    <div className="SubtextFieldContainer">
                                        <label className="valueUpdateDeal">{updateForm.DealStatus ? 'Active' : 'Not Active'}</label>
                                    </div>
                                </div>

                            </div>
                            <div className="UpdateDealRight">
                                <div className="DealFormSubList">
                                    <div className="DealFormSubTitleContainer">
                                        <label className="DealFormSubTitle">Quantum Of Deal:</label>
                                    </div>
                                    <div className="SubtextFieldContainer">
                                        <TextField size="small" className={classes.search} name="QuantumOfDeal" value={updateForm.QuantumOfDeal} variant="outlined" onChange={(e) => setUpdateForm({ ...updateForm, [e.target.name]: e.target.value })} />
                                    </div>
                                </div>

                                <div className="DealFormSubList">
                                    <div className="DealFormSubTitleContainer">
                                        <label className="DealFormSubTitle">Offer Price:</label>
                                    </div>
                                    <div className="SubtextFieldContainer">
                                        <TextField size="small" variant="outlined" className={classes.search} name="DealPrice" value={updateForm.DealPrice} variant="outlined" onChange={(e) => setUpdateForm({ ...updateForm, [e.target.name]: e.target.value })} />
                                    </div>
                                </div>

                                <div className="DealFormSubList">
                                    <div className="DealFormSubTitleContainer">
                                        <label className="DealFormSubTitle">Discount%:</label>
                                    </div>
                                    <div className="SubtextFieldContainer">
                                        <TextField size="small" variant="outlined" className={classes.search} name="Discount" value={updateForm.Discount} onChange={(e) => setUpdateForm({ ...updateForm, [e.target.name]: e.target.value })} />
                                    </div>
                                </div>

                                <div className="DealFormSubList">
                                    <div className="DealFormSubTitleContainer">
                                        <label className="DealFormSubTitle">Zone:</label>
                                    </div>
                                    <div className="SubtextFieldContainer">
                                        <TextField variant="outlined" name="zone" size="small" value={updateForm.zone} variant="outlined" />
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>



                    <div className="compuUpdateDeal">
                        <div className="buttonContainerUpdateDeal">
                            <RedButton variant="contained" type="button" onClick={handleSubmit}>Update</RedButton>
                            <Button variant="contained" type="button" onClick={handleRemove}>Remove</Button></div>
                    </div>

                </div>

                <div className="twoUpdateDeal">

                    <div className="DealMgtimageContainerUpdate">
                        <div className="DealMgtimageWrapperUpdate">
                            <img src={productImg} alt="product img" />

                        </div>
                        <input type="file" accept="image/*" name="image-upload" id="DealMgtUpdateImg" onChange={imgSelect} />
                        <div className="labelUpdateDeal">
                            <label className="image-uploadUpdateDealMgt" htmlFor="DealMgtUpdateImg">
                                UPLOAD
                            </label>

                        </div>
                    </div>
                </div>

            </div>
        </form>
    )
}

export default Update

