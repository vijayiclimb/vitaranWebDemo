import React, { useState } from 'react'
import './styles/add.scss'
import { Checkbox, TextField, Button, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { DealFormTitlepro } from './styles/userStyle';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { withStyles } from '@material-ui/core/styles';
import { red, purple } from '@material-ui/core/colors';
import { AddDeal, SearchSkuDeal } from '../../../actions/appPanel/Deals'
import { useToasts } from 'react-toast-notifications'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { convertDate, convertFormFormat } from '../../../function';
import axios from 'axios';
import { ADDDEALFAILED, ADDDEALSUCCESS, ADDDEALWARNING } from '../../../constants/appPanel/Deals';
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker, MuiPickersUtilsProvider, KeyboardDateTimePicker } from "@material-ui/pickers";


const RedButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(purple[500]),
        marginRight: "10px",
        paddingLeft: "30px",
        paddingRight: "30px",
        backgroundColor: red[700],
        '&:hover': {
            backgroundColor: red[800],
        },
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

const useStyles = makeStyles((themes) => ({
    search: {
        width: "100%",
        color: "black",
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


const Add = ({ place }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const { addToast } = useToasts();
    const [state, setState] = useState({
        retailer: false,
        rider: false,
        wholesaler: false,

    });
    const [selectedStartDate, handleStartDateChange] = useState(new Date());
    const [selectedEndDate, handleEndDateChange] = useState(new Date());

    const [file, setFile] = useState('');

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const deals = useSelector(state => state.dealMgt);
   

    const [skuName, setSkuName] = useState([]);
    const [skuNameSearch, setSkuNameSearch] = useState("");


    const [AddForm, setAddForm] = useState({
        DealEndDateTime: '',
        DealId: '',
        DealImage: '',
        DealPrice: '',
        DealStartDateTime: '',
        DealStatus: '',
        DealTitle: '',
        
        MRP: '',
        PromotionalOfferDescription: '',
        QuantumOfDeal: '',
        SKUDescription: '',
        SKUImage: '',
        SKUName: '',
        role: '',
        zone:`${place}`,
        retailer:false,
        rider:false,
        wholesaler:false,
       
        Discount:''
    })
    const [productImg, setProductImg] = useState(`http://3.7.71.29:6001/imgs/Noproductimageavailable.png`);


    ///////date
  


    //////////////


    ////img Upload/////

    const imgUpload = async (formData) => {
        await axios.post(`http://3.7.71.29:6001/VitaranSDK/uploadImage`, formData)
            .then(res => {
                setAddForm({ ...AddForm, DealImage: res.data });

                console.log(res.data);
                setProductImg(`http://3.7.71.29:6001/imgs/${res.data}`);
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
    //////



    React.useEffect(() => {


        if (deals.skuNameList) {
            setSkuName(deals.skuNameList);


        }
    }, [deals.skuNameList])


    // React.useEffect(() => {
    //     console.log(deals.skuDetail)
    // }, [deals.skuDetail]);


    React.useEffect(() => {
        if (deals.skuDetail) {
            setAddForm({
                ...AddForm,
              
                MRP: `${deals.skuDetail.MRP}`,
                SKUDescription: `${deals.skuDetail.SKUDescription===null? "N/A":deals.skuDetail.SKUDescription}`,
                SKUName: `${deals.skuDetail.SKUName}`,
                zone: `${deals.skuDetail.Zone}`,

            })
            
        }
    }, [deals.skuDetail])

    
    const param = {
        "dealimage":`${AddForm.DealImage}`,
        "skuname":`${AddForm.SKUName}`,
    
        "dealtitle":`${AddForm.DealTitle}`,
        "PromotionalOfferDescription":`${AddForm.PromotionalOfferDescription}`,
        "mrp":`${AddForm.MRP}`,
        "dealprice":`${AddForm.DealPrice}`,
        "dealStartDate":`${convertDate(selectedStartDate)}`,
        "dealEndDate":`${convertDate(selectedEndDate)}`,
        "QuantumOfDeal":`${AddForm.QuantumOfDeal}`,
        "zone":`${place}`,
        "dealStatus":"true",
        
        "skuimage":`${AddForm.DealImage.replace(/\s/g, "")}`,
        "retailer": `${AddForm.retailer}`,
        "rider": `${AddForm.rider}`,
        "wholesaler": `${AddForm.wholesaler}`,
      
        "discount":`${AddForm.Discount}`
    }


    React.useEffect(() => {

        dispatch(SearchSkuDeal(skuNameSearch, place));

    }, [skuNameSearch])


    // console.log(AddForm);
    // console.log(state);
    // console.log(param);
    // console.log(startDate, EndDate);

    const handleSubmit = (e) => {

        dispatch(AddDeal(param,handleCancel));
    }

    const handleCancel = (e) => {
        setAddForm({
            ...AddForm,
            DealEndDateTime: '',
            DealId: '',
            DealImage: '',
            DealPrice: '',
            DealStartDateTime: '',
            DealStatus: '',
            DealTitle: '',
            DeliveryDate: '',
            MRP: ``,
            PromotionalOfferDescription: '',
            QuantumOfDeal: '',
            SKUDescription: ``,
            SKUImage: '',
            SKUName: ``,
            role: '',
            zone: ``,
            Discount: '',
        });

        setSkuNameSearch('');
    }

    React.useEffect(() => {
        if (deals.AddDealSuccess.length !== 0) {
            addToast('ADDED Deal Succesully', { appearance: 'success', autoDismiss: true, });
            dispatch({ type: ADDDEALSUCCESS, payload: '' });
        }
    }, [deals.AddDealSuccess])



    React.useEffect(() => {
        if (deals.AddDealWarning.length !== 0) {
            addToast('Parameters Missing', { appearance: 'warning', autoDismiss: true, });
            dispatch({ type: ADDDEALWARNING, payload: '' });
        }
    }, [deals.AddDealWarning])

    React.useEffect(() => {
        if (deals.AddDealFailed.length !== 0) {
            addToast('ADD DEAL FAILED', { appearance: 'error', autoDismiss: true, });
            dispatch({ type: ADDDEALFAILED, payload: '' });
        }
    }, [deals.AddDealFailed])

   
    // console.log(AddForm)
    // console.log(param)
    // console.log(deals.skuDetail)


    return (
        <form onSubmit={handleSubmit}>
            <div className="UpdateContainerAddDeal">

                <div className="oneAddDeal">
                    <div className="compuAddDeal">
                        <div className="CheckboxContainerAddDeal">
                            <FormGroup row>
                                <FormControlLabel
                                    control={<RedCheckbox checked={AddForm.retailer} onChange={(e) => setAddForm({ ...AddForm, [e.target.name]: e.target.checked })} name="retailer" />}
                                    label="Retailer"
                                />
                                <FormControlLabel
                                    control={
                                        <RedCheckbox
                                            checked={AddForm.rider}
                                            onChange={(e) => setAddForm({ ...AddForm, [e.target.name]: e.target.checked })}
                                            name="rider"
                                            color="primary"
                                        />
                                    }
                                    label="Rider"
                                />

                                <FormControlLabel
                                    control={
                                        <RedCheckbox
                                            checked={AddForm.wholesaler}
                                            onChange={(e) => setAddForm({ ...AddForm, [e.target.name]: e.target.checked })}
                                            name="wholesaler"
                                            color="primary"
                                        />
                                    }
                                    label="Wholesaler"
                                />

                            </FormGroup>
                        </div>
                    </div>
                    <div className="compuAddDeal">
                        <div className="search">
                            <Autocomplete

                                options={skuName}
                                getOptionLabel={(option) => option}

                                renderInput={(params) => <TextField {...params} margin="normal" value={skuNameSearch} label="Search Sku Name" variant="outlined" onSelect={(e) => setSkuNameSearch(e.target.value)} />}
                            />
                        </div>
                    </div>

                    <div className="compuAddDeal">

                        <div className="DealFormList">
                            <div className="DealFormTitleContainer">
                                <label className="DealFormTitle">Sku Name:</label>
                            </div>
                            <div className="textFieldContainer">
                                <TextField size="small" variant="outlined" className={classes.search} name="SKUName" value={AddForm.SKUName} onChange={(e) => setAddForm({ ...AddForm, [e.target.name]: e.target.value })} />
                            </div>
                        </div>

                        <div className="DealFormList">
                            <div className="DealFormTitleContainer">
                                <label className="DealFormTitle">Sku Description:</label>
                            </div>
                            <div className="textFieldContainer">
                                <TextField size="small" variant="outlined" className={classes.search} multiline rows={3} name="SKUDescription" value={AddForm.SKUDescription} />
                            </div>
                        </div>

                        <div className="DealFormList">
                            <div className="DealFormTitleContainer">
                                <label className="DealFormTitle">Offer Title:</label>
                            </div>
                            <div className="textFieldContainer">
                                <TextField size="small" variant="outlined" className={classes.search} name="DealTitle" value={AddForm.DealTitle} onChange={(e) => setAddForm({ ...AddForm, [e.target.name]: e.target.value })} />
                            </div>
                        </div>


                        <div className="DealFormList">
                            <div className="DealFormTitleContainer">
                                <DealFormTitlepro>Promotional Offer Description:</DealFormTitlepro>
                            </div>
                            <div className="textFieldContainer">
                                <TextField size="small" variant="outlined" className={classes.search} name="PromotionalOfferDescription" value={AddForm.PromotionalOfferDescription} variant="outlined" onChange={(e) => setAddForm({ ...AddForm, [e.target.name]: e.target.value })} />
                            </div>
                        </div>


                        <div className="DealFormListSubAdd">
                            <div className="AddDealLeft">

                                <div className="DealFormSubList">
                                    <div className="DealFormSubTitleContainer">
                                        <label className="DealFormSubTitle">MRP:</label>
                                    </div>
                                    <div className="SubtextFieldContainer">
                                        <TextField size="small" variant="outlined" className={classes.search} name="MRP" value={AddForm.MRP} variant="outlined" onChange={(e) => setAddForm({ ...AddForm, [e.target.name]: e.target.value })} />
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
                                                ampm={true}
                                                inputVariant="outlined"
                                                value={selectedStartDate}
                                                onChange={handleStartDateChange}
                                                onError={console.log}
                                                disablePast
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
                                                onError={console.log}
                                                disablePast
                                                format="dd/MM/yyyy HH:mm"
                                            />
                                        </MuiPickersUtilsProvider>
                                    </div>
                                </div>



                            </div>
                            <div className="AddDealRight">
                                <div className="DealFormSubList">
                                    <div className="DealFormSubTitleContainer">
                                        <label className="DealFormSubTitle">Quantum Of Deal:</label>
                                    </div>
                                    <div className="SubtextFieldContainer">
                                        <TextField size="small" className={classes.search} name="QuantumOfDeal" value={AddForm.QuantumOfDeal} variant="outlined" onChange={(e) => setAddForm({ ...AddForm, [e.target.name]: e.target.value })} />
                                    </div>
                                </div>

                                <div className="DealFormSubList">
                                    <div className="DealFormSubTitleContainer">
                                        <label className="DealFormSubTitle">Offer Price:</label>
                                    </div>
                                    <div className="SubtextFieldContainer">
                                        <TextField size="small" variant="outlined" className={classes.search} name="DealPrice" value={AddForm.DealPrice} variant="outlined" onChange={(e) => setAddForm({ ...AddForm, [e.target.name]: e.target.value })} />
                                    </div>
                                </div>

                                <div className="DealFormSubList">
                                    <div className="DealFormSubTitleContainer">
                                        <label className="DealFormSubTitle">Discount%:</label>
                                    </div>
                                    <div className="SubtextFieldContainer">
                                        <TextField size="small" variant="outlined" className={classes.search} name="Discount" value={AddForm.Discount} onChange={(e) => setAddForm({ ...AddForm, [e.target.name]: e.target.value })} />
                                    </div>
                                </div>

                                <div className="DealFormSubList">
                                    <div className="DealFormSubTitleContainer">
                                        <label className="DealFormSubTitle">Zone:</label>
                                    </div>
                                    <div className="SubtextFieldContainer">
                                        <TextField variant="outlined" name="zone" size="small" value={AddForm.zone} variant="outlined" />
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>



                    <div className="compuAddDeal">
                        <div className="buttonContainerAddDeal">
                            <RedButton variant="contained" type="button" onClick={handleSubmit}>Add</RedButton>
                            <Button variant="contained" type="button" onClick={handleCancel}>Cancel</Button></div>
                    </div>

                </div>

                <div className="twoAddDeal">

                    <div className="DealMgtimageContainerUpdate">
                        <div className="DealMgtimageWrapperUpdate">
                            <img src={productImg} alt="product img" />

                        </div>
                        <input type="file" accept="image/*" name="image-upload" id="DealMgtAddImg" onChange={imgSelect} />
                        <div className="labelAddDeal">
                            <label className="image-uploadAddDealMgt" htmlFor="DealMgtAddImg">
                                UPLOAD
                            </label>
                        </div>
                    </div>
                </div>

            </div>
        </form>
    )
}

export default Add
