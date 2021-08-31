import React, { useState } from 'react'
import { TextField, MenuItem } from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { red, purple, white,green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { Checkbox, Button } from '@material-ui/core';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { UPDATECOUPONRULES } from '../../../constants/appPanel/coupon';
import { useDispatch } from 'react-redux';
import { UpdateTerms } from '../../../actions/appPanel/coupon';
import Switch from '@material-ui/core/Switch';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    button: {
        borderRadius: "100%",
        width: "50px",
        height: "60px",
    },
    select: {
        fontSize: "12px",
        minHeight: 20,
    }

}));



const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#52d869',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#52d869',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });

const RedButton = withStyles((theme) => ({
    root: {
        color: red[700],
        border: "2px solid #DC1D13",
        width: "80px",
        height: "35px",

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

const RulesItem = ({ item, index, couponTerms, place }) => {

    const dispatch = useDispatch();

    const [term, setTerm] = useState([]);
    const [form, setForm] = useState({
        "no_coins": 0,
            "status": Boolean,
            "term_count": 0,
            "term_desc": '',
            "term_id": 0,
            "term_value": 0
    });

    let coinArray = [];
    let orderArray = [];
    let i = 0;
    let j = 250;

    const [coin, setCoin] = useState(0);
    const [order, setOrder] = useState(0);

    for (i = 0; i <= j; i++) {
        coinArray.push(i);
        orderArray.push(i);
    }



    //  let coinValue=0;
    //  let orderValue=0;

    //  if(form.coin && form.coin.length!==0){
    //      coinValue = parseInt(form.coin);
    //  }

    //  if(form.orders && form.orders.length!==0){
    //      orderValue = parseInt(form.orders);
    //  }



    const handleText = (event) => {
        setForm({
            ...form,
            term_desc: event.target.value
        })
    }

    const handleCoin = (event) => {
        setCoin(event.target.value);
        setForm({
            ...form,
            no_coins: `${event.target.value}`
        })
    };

    const handleOrder = (event) => {
        setOrder(event.target.value);
        setForm({
            ...form,
            term_count: `${event.target.value}`
        })
    }

    React.useEffect(() => {
        setForm({
            ...form,
            "no_coins": item.no_coins,
            "status": item.status,
            "term_count": item.term_count,
            "term_desc": item.term_desc,
            "term_id": item.term_id,
            "term_value": item.term_value
        });
        setCoin(parseInt(item.no_coins))
        setOrder(parseInt(item.term_count))
    }, [item])

    // React.useEffect(()=>{
    //      setTerm(couponTerms);
    // },[couponTerms])


    // React.useEffect(()=>{
    //      let i=0;
    //     for(i=0;i<term.length;i++){
    //         if(term[i].id===form.id){
    //             term[i]=form
    //         }
    //     }

    // },[form])


    const handleDelete = () => {
        // let i=0;
        // for(i=0;i<term.length;i++){
        //     if(term[i].id===form.id){
        //         term.splice(i,1);
        //     }
        // }
        //  console.log(term)
        // dispatch({type:UPDATECOUPONRULES, payload:term})
        setForm({
            ...form,
            status: !form.status
        })

    }


    let param = {
        "term_id": `${form.term_id}`,
        "term_desc": `${form.term_desc}`,
        "term_count": `${order}`,
        "term_value": `${form.term_value}`,
        "no_coins": `${coin}`,
        "status": `${form.status}`
    }



    console.log(form);
    console.log(param);


    const handleUpdateTerm = () => {
        dispatch(UpdateTerms(param, place));
    }

    const classes = useStyles();


    
    return (
        <div className="CouponRulesSectionOneTitleContainer" key={index && index}>
            <div className="CouponRulesSectionOneTitle" >
                <label style={{ fontSize:"14px",marginTop:"5px" }}>CP-RUL-</label> <label className="CouponRulesSectionOneTitleSub" style={{fontSize:"14px" }}>00{index + 1}</label>
            </div>
            <div className="CouponRulesSectionOneInputContainer">
                <input style={{ width: "100%",fontSize:"16px" }} value={form && form.term_desc} onChange={handleText} />
            </div>


            <div className="CouponOrderdrop">
                <FormControl className={classes.formControl}>
                    <InputLabel id="coupon-order01-id">Orders</InputLabel>
                    <Select
                        labelId="coupon-order01-id"
                        className={classes.select}
                        value={order}
                        onChange={handleOrder}

                    >   {
                            orderArray.map((item) =>
                            (
                                <MenuItem className={classes.select} value={item}>{item}</MenuItem>
                            ))

                        }




                    </Select>
                </FormControl>
            </div>
            <div className="CouponCoindrop">
                <FormControl className={classes.formControl}>
                    <InputLabel id="coupon-coin01-id">coins</InputLabel>
                    <Select
                        labelId="coupon-coin01-id"
                        className={classes.select}
                        value={coin}
                        onChange={handleCoin}
                    >{
                            coinArray.map((item) =>
                            (
                                <MenuItem className={classes.select} value={item}>{item}   Coins</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </div>
            <div className="ButtonOneContainer">
                <RedButton variant="contained" onClick={handleUpdateTerm}>Update</RedButton>
            </div>
            <div className="ButtonTwoContainer">
                <IOSSwitch
                    checked={form && form.status}
                    onChange={handleDelete}
                    
                    
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </div>

        </div>
    )
}

export default RulesItem
