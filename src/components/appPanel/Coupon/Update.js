import React, { useState, useEffect } from 'react'
import './styles/updateCoupon.scss';
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker, MuiPickersUtilsProvider, KeyboardDateTimePicker } from "@material-ui/pickers";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { convertFormFormat, convertDate } from '../../../function';
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { red, purple, white } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { Checkbox, MenuItem } from '@material-ui/core';
import { Button } from '@material-ui/core';
import axios from 'axios';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { useSelector, useDispatch } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { RemoveCoupon, UpdateCouponMgt} from '../../../actions/appPanel/coupon';
import { RedButton } from '../Deal/styles/userStyle';


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
        minWidth: 80,
    },
    formControll: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        width: "100%"
    },

}));

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

const RedRadio = withStyles({
    root: {
        color: red[400],
        '&$checked': {
            color: red[600],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

const RedCheckbox = withStyles({
    root: {
        color: red[400],
        '&$checked': {
            color: red[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);


const UpdateCoupon = ({place}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [coin, setCoin] = useState(0);
    const [value, setValue] = React.useState('Red');
    const [Types, setTypes] = useState('');
    let coupon = useSelector(state => state.couponMgt);
    const [selectedStartDate, handleStartDateChange] = useState(new Date());
    const [selectedEndDate, handleEndDateChange] = useState(new Date());
    const[q,setQ]=useState('');
    const[termsId,setTermsId]=useState('');
    const[Id,setId]=useState('');
    const [stakeCheck, setStakeCheck] = React.useState({
        retailer: true,
        rider: false,
        wholesaler: false,
        distributor: false,

    });

    const [CategoryCheck, setCategoryCheck] = React.useState({
        red: true,
        blue: true,
        green: false,
        orange: false,

    })
    const [selectedTerm, setSelectedTerm] = useState('');
    const terms = [
        "first come first serve",
        "second come last sirver"
    ]
    const [order, setOrder] = React.useState(0);
    let coinArray = [];
    let orderArray = [];
    let i = 0;
    let j = 500;



    for (i = 0; i <= j; i++) {
        coinArray.push(i);
        orderArray.push(i);
    }

    

    const handleRules = (e) => {
        setSelectedTerm(e.target.value)
    }


    const handleCatChange = (event) => {
        if (event.target.name === 'red') {
            setCategoryCheck({
                ...CategoryCheck,
                red: true,
                blue: false,
                green: false,
                orange: false,
            })
            setQ('red')
        }
        else if (event.target.name === 'blue') {
            setCategoryCheck({
                ...CategoryCheck,
                red: false,
                blue: true,
                green: false,
                orange: false,
            })
            setQ('blue')
        }
        else if (event.target.name === 'green') {
            setCategoryCheck({
                ...CategoryCheck,
                red: false,
                blue: false,
                green: true,
                orange: false,
            })
            setQ('green')
        }
        else if (event.target.name === 'orange') {
            setCategoryCheck({
                ...CategoryCheck,
                red: false,
                blue: false,
                green: false,
                orange: true,
            })
            setQ('orange')
        }
        else {
            console.log('ss')
        }
    };

    const handleDropType = (event) => {
        setTypes(event.target.value)
    }
    const handleChange = (event) => {
        setStakeCheck({ ...stakeCheck, [event.target.name]: event.target.checked });
    };


    // console.log(coupon.CouponDetail);

    React.useEffect(()=>{
        if(coupon && coupon.CouponDetail && typeof(coupon.CouponDetail)!=="undefined"){
            setId(coupon.CouponDetail.coupon_id);
            setTermsId(coupon.CouponDetail.term_id);
             setStakeCheck({
                 ...stakeCheck,
                 retailer: coupon.CouponDetail.for_ret===true? true : false,
                 rider: coupon.CouponDetail.for_rid===true? true : false,
                 wholesaler: coupon.CouponDetail.for_who===true? true : false,
                 distributor: coupon.CouponDetail.for_dis===true? true : false,
             })


             if(coupon.CouponDetail.color_category){
             if (coupon.CouponDetail.color_category === 'red') {
                setCategoryCheck({
                    ...CategoryCheck,
                    red: true,
                    blue: false,
                    green: false,
                    orange: false,
                })
                setQ('red')
            }
            else if (coupon.CouponDetail.color_category === 'blue') {
                setCategoryCheck({
                    ...CategoryCheck,
                    red: false,
                    blue: true,
                    green: false,
                    orange: false,
                })
                setQ('blue')
            }
            else if (coupon.CouponDetail.color_category === 'green') {
                setCategoryCheck({
                    ...CategoryCheck,
                    red: false,
                    blue: false,
                    green: true,
                    orange: false,
                })
                setQ('green')
            }
            else if (coupon.CouponDetail.color_category === 'orange') {
                setCategoryCheck({
                    ...CategoryCheck,
                    red: false,
                    blue: false,
                    green: false,
                    orange: true,
                })
                setQ('orange')
            }
            else {
                console.log('ss')
            }
        }

    if(coupon.CouponDetail.coupon_type){
        setTypes(coupon.CouponDetail.coupon_type)
    }

    
    if(coupon.CouponDetail.start_date){
        handleStartDateChange(new Date(coupon.CouponDetail.start_date))
    }
    else{
        handleStartDateChange(new Date())
    }


    if(coupon.CouponDetail.end_date){
        handleEndDateChange(new Date(coupon.CouponDetail.end_date))
    }
    else{
        handleEndDateChange(new Date())
    }

     if(parseInt(coupon.CouponDetail.no_coins)!==0){
         setCoin(parseInt(coupon.CouponDetail.no_coins))
     }
     else if(parseInt(coupon.CouponDetail.no_coins)===0){
        setCoin(parseInt(0))
     }

     if(parseInt(coupon.CouponDetail.term_count)!==0){
        setOrder(parseInt(coupon.CouponDetail.term_count))
    }
    else if(parseInt(coupon.CouponDetail.term_count)===0){
       setOrder(parseInt(0))
    }


    if(coupon.CouponDetail.term_desc && coupon.CouponDetail.term_desc.length!==0){
          setSelectedTerm(coupon.CouponDetail.term_desc);
    }
     



        }

    },[coupon.CouponDetail])



    React.useEffect(()=>{
        let i=0;
        if(coupon.Terms && coupon.Terms.length!==0){
           for(i=0;i<coupon.Terms.length;i++){
            if(selectedTerm===coupon.Terms[i].term_desc){
                setOrder(parseInt(coupon.Terms[i].no_coins));
                setCoin(parseInt(coupon.Terms[i].term_count));
                setTermsId(parseInt(coupon.Terms[i].term_id));
            }
        } 
        }
        
      },[selectedTerm])

let param={
    "coupon_id":`${Id}`,
    "coupon_type":`${Types}`,
    "color_category":`${q}`,
    "terms_id":`${termsId}`,
    "distributor":`${stakeCheck.distributor}`,
    "retailer":`${stakeCheck.retailer}`,
    "rider":`${stakeCheck.rider}`,
    "wholesaler":`${stakeCheck.wholesaler}`,
    "zone":`${place}`,
    "startdate":`${convertDate(selectedStartDate)}`,
    "enddate":`${convertDate(selectedEndDate)}`
}

// console.log(param)


const handleCouponMgtUpdate =()=>{
    dispatch(UpdateCouponMgt(param,place));
}

const handleCouponMgtRemove=()=>{
    dispatch(RemoveCoupon(place,Id))
}
    return (
        <div className="CouponMgtUpdateFormContainer">
            <div className="CouponMgtUpdateFormCouponType">
               <div className="CouponMgtUpdateFormCouponTypeTitleId">
                  <label>Coupon ID: {coupon.CouponDetail.coupon_id}</label>
               </div>
               <div>
               <FormControl className={classes.formControll}>
                    <InputLabel>Coupon Type</InputLabel>
                    <Select
                        value={Types}
                        onChange={handleDropType}
                    >
                    {
                        coupon.CouponTypes && coupon.CouponTypes.map((item,index)=>(
                          <MenuItem value={item.coupon_type}>{item.coupon_type}</MenuItem>  
                        ))
                    }
                        
                      
                    </Select>
                </FormControl>
               </div>
            </div>

            <div className="CouponMgtUpdateFormCheckboxContainer">
                <div>
                    <label style={{fontWeight:"600"}}>StakeHolder</label>
                    <div className="checkboxContainer">
                        <FormGroup row style={{ fontSize: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <FormControlLabel
                                control={
                                    <RedCheckbox
                                        checked={stakeCheck.retailer}
                                        name="retailer"
                                        onChange={handleChange} />}


                                label="Retailer"
                            />

                            <FormControlLabel
                                control={
                                    <RedCheckbox
                                        checked={stakeCheck.rider}
                                        name="rider"
                                        onChange={handleChange} />}
                                label="Rider"
                            />

                            <FormControlLabel
                                control={
                                    <RedCheckbox
                                        checked={stakeCheck.wholesaler}
                                        onChange={handleChange}
                                        name="wholesaler"
                                        color="primary"
                                    />
                                }
                                label="Wholesaler"
                            />

                            <FormControlLabel
                                control={
                                    <RedCheckbox
                                        checked={stakeCheck.distributor}
                                        onChange={handleChange}
                                        name="distributor"
                                        color="primary"
                                    />
                                }
                                label="Distributor"
                            />

                        </FormGroup>
                    </div>


                </div>


                <div>
                    <label style={{fontWeight:"600"}}>Category</label>
                    <div className="checkboxContainer">
                        <FormGroup row style={{ fontSize: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <FormControlLabel
                                control={
                                    <RedCheckbox
                                        checked={CategoryCheck.red}
                                        name="red"
                                        onChange={handleCatChange} />}


                                label="Red"
                            />

                            <FormControlLabel
                                control={
                                    <RedCheckbox
                                        checked={CategoryCheck.blue}
                                        name="blue"
                                        onChange={handleCatChange} />}
                                label="Blue"
                            />

                            <FormControlLabel
                                control={
                                    <RedCheckbox
                                        checked={CategoryCheck.green}
                                        onChange={handleCatChange}
                                        name="green"
                                        color="primary"
                                    />
                                }
                                label="Green"
                            />

                            <FormControlLabel
                                control={
                                    <RedCheckbox
                                        checked={CategoryCheck.orange}
                                        onChange={handleCatChange}
                                        name="orange"
                                        color="primary"
                                    />
                                }
                                label="Orange"
                            />

                        </FormGroup>
                    </div>


                </div>

            </div>

            <div className="CouponMgtUpdateFormBottomSection">
                <div className="CouponMgtUpdateFormRules">
                    <div className="CouponMgtUpdateFormRulesOne">
                        <label className="CouponMgtUpdateFormRulesOneTitle">Rules:</label>
                    </div>

                    <div className="CouponMgtUpdateFormRulesTwo">
                        <FormControl variant="outlined" size="small" style={{ width: "100%" }} className={classes.selectEmpty}>

                            <Select
                                value={selectedTerm}
                                onChange={handleRules}
                                size="small"
                            >
                                {
                                    coupon.Terms.map((item, index) => (
                                        <MenuItem value={item.term_desc}>{item.term_desc}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </div>

                    <div className="CouponMgtUpdateFormRulesThree">
                        <FormControl className={classes.formControl}>
                            <InputLabel >Orders</InputLabel>
                            <Select


                                value={order}
                               
                            >
                                {
                                    orderArray.map((item) =>
                                    (
                                        <MenuItem className={classes.select} value={item}>{item}</MenuItem>
                                    ))

                                }
                            </Select>
                        </FormControl>
                    </div>

                    <div className="CouponMgtUpdateFormRulesFour">
                        <FormControl className={classes.formControl}>
                            <InputLabel>coins</InputLabel>
                            <Select


                                value={coin}
                                
                            >
                                {
                                    coinArray.map((item) =>
                                    (
                                        <MenuItem className={classes.select} value={item}>{item}   Coins</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </div>

                </div>
                <div className="CouponMgtUpdateFormStartDateContainer">

                    <div className="CouponMgtUpdateFormStartDateTitleWrapper">
                        <label className="CouponMgtUpdateFormStartDateTitle">Offer Start Date:</label>
                    </div>
                    <div className="CouponMgtUpdateFormStartDateChooseContainer">
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

                <div className="CouponMgtUpdateFormEndDateContainer">

                    <div className="CouponMgtUpdateFormEndDateTitleWrapper">
                        <label className="CouponMgtUpdateFormEndDateTitle">Offer End Date:</label>
                    </div>
                    <div className="CouponMgtUpdateFormEndDateChooseContainer">
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

                <div className="CouponMgtUpdateFormButtonContainer">
                    <div className="CouponMgtUpdateFormButtonContainerOne">
                        <RedReverseButton onClick={handleCouponMgtUpdate}>Update</RedReverseButton>
                    </div>
                    <div className="CouponMgtUpdateFormButtonContainerTwo">
                      <Button onClick={handleCouponMgtRemove} variant="contained">Remove</Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UpdateCoupon
