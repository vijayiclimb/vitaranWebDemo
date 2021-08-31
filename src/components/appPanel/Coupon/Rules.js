import React from 'react';
import './styles/rules.scss'
import { TextField, MenuItem } from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { red,purple, white} from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { Checkbox, Button } from '@material-ui/core';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { useSelector } from 'react-redux';
import RulesItem from './RulesItem';

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
    select:{
        fontSize:"12px",
        minHeight:20,
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
      
      backgroundColor:  red[700],
      '&:hover': {
        color: theme.palette.getContrastText(purple[500]),
        border: "2px solid #DC1D13",
        width: "80px",
        height: "35px",
        
        backgroundColor:  red[700],
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
        color: red[400],
        '&$checked': {
            color: red[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);



const Rules = ({place}) => {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
 
    let couponTerms = useSelector(state => state.couponMgt.Terms);
    let coupon = useSelector(state => state.couponMgt);
    console.log(couponTerms);
    
     
  
    return (
        <div className="CouponRulesContainer">
            <label className="CouponRulesContainerTitle">Rules</label>

            <div className="CouponRulesSection">
                <div className="CouponRulesSectionOne">
                {
                   couponTerms.length!==0?(
                     <>
                       {
                           couponTerms.map((item,index)=>(
                       <RulesItem item={item} index={index} couponTerms={couponTerms} place={place}/>
                    ))
                       }
                     </>
                   )
                   :
                   (
                     <lable>No Rules</lable>
                   )
                  
                }

                   


                

                  

                </div>
               
            </div>

            

        </div>
    )
}

export default Rules
