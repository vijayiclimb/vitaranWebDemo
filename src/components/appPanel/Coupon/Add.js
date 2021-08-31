import React, { useState, useEffect } from 'react'
import './styles/addCoupon.scss';
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
import { AddCouponMgt } from '../../../actions/appPanel/coupon';
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


const AddCoupon = ({place}) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [coin, setCoin] = useState(0);
   
    const[Q,setQ]=useState('red');
    const [selectedStartDate, handleStartDateChange] = useState(new Date());
    const [selectedEndDate, handleEndDateChange] = useState(new Date());
    const [stakeCheck, setStakeCheck] = React.useState({
        retailer: true,
        rider: false,
        wholesaler: false,
        distributor: false,

    });
    let couponTerms = useSelector(state => state.couponMgt.Terms);
    let couponTypes = useSelector(state => state.couponMgt.CouponTypes);

    const [CategoryCheck, setCategoryCheck] = React.useState({
        red: true,
        blue: false,
        green: false,
        orange: false,

    })
    const [Types,setTypes]=useState('');
    const [selectedTerm, setSelectedTerm] = useState('');
    const [termsId,setTermsId]=useState('');
    const [order, setOrder] = React.useState(0);
    let coinArray = [];
    let orderArray = [];
    let i = 0;
    let j = 250;



    for (i = 0; i <= j; i++) {
        coinArray.push(i);
        orderArray.push(i);
    }

    const handleOrder = (event) => {
        setOrder(event.target.value);
    };

    const handleDropCoin = (event) => {
        setCoin(event.target.value);
    };

    const handleRules = (e) => {
        setSelectedTerm(e.target.value)
    }



    const handleDropType = (event) => {
        setTypes(event.target.value)
    }
    const handleChange = (event) => {
        setStakeCheck({ ...stakeCheck, [event.target.name]: event.target.checked });
    };


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


    React.useEffect(()=>{
      let i=0;
      for(i=0;i<couponTerms.length;i++){
          if(selectedTerm===couponTerms[i].term_desc){
              setOrder(parseInt(couponTerms[i].no_coins));
              setCoin(parseInt(couponTerms[i].term_count));
              setTermsId(parseInt(couponTerms[i].term_id));
          }
      }
    },[selectedTerm])

    

    // console.log(selectedTerm)
    // console.log(Types)
    // console.log(couponTerms)


    let param={
        "terms_id":`${termsId}`,
        "coupon_type":`${Types}`,
        "zone":`${place}`,
        "status":"true",
        "color_cat":`${Q}`,
        "distributor":`${stakeCheck.distributor}`,
        "wholesaler":`${stakeCheck.wholesaler}`,
        "retailer":`${stakeCheck.retailer}`,
        "rider":`${stakeCheck.rider}`,
        "startdate":`${convertDate(selectedStartDate)}`,
        "enddate":`${convertDate(selectedEndDate)}`
    }

    // console.log(param)



    const handleAddCoupon=()=>{
        dispatch(AddCouponMgt(param));
    }

    return (
        <div className="CouponMgtAddFormContainer">
            <div className="CouponMgtAddFormCouponType">
                <FormControl className={classes.formControll}>
                    <InputLabel>Coupon Type</InputLabel>
                    <Select


                        value={Types}
                        onChange={handleDropType}
                    >
                    {
                        couponTypes && couponTypes.map((item,index)=>(
                          <MenuItem value={item.coupon_type}>{item.coupon_type}</MenuItem>  
                        ))
                    }
                        
                      
                    </Select>
                </FormControl>
            </div>

            <div className="CouponMgtAddFormCheckboxContainer">
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

            <div className="CouponMgtAddFormBottomSection">
                <div className="CouponMgtAddFormRules">
                    <div className="CouponMgtAddFormRulesOne">
                        <label className="CouponMgtAddFormRulesOneTitle">Rules:</label>
                    </div>

                    <div className="CouponMgtAddFormRulesTwo">
                        <FormControl variant="outlined" size="small" style={{ width: "100%" }} className={classes.selectEmpty}>

                            <Select
                                value={selectedTerm}
                                onChange={handleRules}
                                size="small"
                            >
                                {
                                    couponTerms.map((item, index) => (
                                        <MenuItem value={item.term_desc}>{item.term_desc}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </div>

                    <div className="CouponMgtAddFormRulesThree">
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

                    <div className="CouponMgtAddFormRulesFour">
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
                <div className="CouponMgtAddFormStartDateContainer">

                    <div className="CouponMgtAddFormStartDateTitleWrapper">
                        <label className="CouponMgtAddFormStartDateTitle">Offer Start Date:</label>
                    </div>
                    <div className="CouponMgtAddFormStartDateChooseContainer">
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

                <div className="CouponMgtAddFormEndDateContainer">

                    <div className="CouponMgtAddFormEndDateTitleWrapper">
                        <label className="CouponMgtAddFormEndDateTitle">Offer End Date:</label>
                    </div>
                    <div className="CouponMgtAddFormEndDateChooseContainer">
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

                <div className="CouponMgtAddFormButtonContainer">
                    <div className="CouponMgtAddFormButtonContainerOne">
                        <RedReverseButton onClick={handleAddCoupon}>ADD</RedReverseButton>
                    </div>
                    <div className="CouponMgtAddFormButtonContainerTwo">
                      <Button variant="contained">Cancel</Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddCoupon
