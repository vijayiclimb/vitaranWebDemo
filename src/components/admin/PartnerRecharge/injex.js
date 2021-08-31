import React, { useState } from 'react';
import './styles/index.scss';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { red, purple, blue } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux'
import { AdminPartnerRecharge } from '../../../actions/Admin/AdminPartnerRechargeMgt';
import { useToasts } from 'react-toast-notifications'
import { ADMINPARTNERRECHARGEDEFAULTFAILED, ADMINPARTNERRECHARGEDEFAULTSUCCESS } from '../../../constants/Admin/PartnerRechargeMgt';

const useStyles = makeStyles({
    SubtextField: {
        width: "85%",
        borderRadius: "5px",
        backgroundColor: "#F0F0F0"
    },
    textField: {

        borderRadius: "5px",
        width: 200,
        backgroundColor: "#F0F0F0"
    }
});

const BlueButtonTwo = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(purple[500]),
        fontSize: "14px",
        width: "200px",
        height: "35px",
        textTransform: "none",
        backgroundColor: '#053E5E',
        '&:hover': {
            backgroundColor: '#053E5E',
            color: theme.palette.getContrastText(purple[500]),
        },

    },
}))(Button);


const PartnerRechargeMgt = () => {
    const [amount, setAmount] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch();
  const state = useSelector(state => state.partnerRecharge);
  const { addToast } = useToasts();

  

    const Add = () => {
        if(!amount || amount.length===0 || amount<=0){
               return 
        }
        let param = {
            "partner_id": `${150}`,
            "amt": `${amount}`
        }


        dispatch(AdminPartnerRecharge(param,setAmount));
    }


    React.useEffect(() => {
        if (state.Success.length !== 0) {
            addToast('ADDED Amount Succesully', { appearance: 'success', autoDismiss: true, });
            // dispatch({ type: ADMINPARTNERRECHARGEDEFAULTSUCCESS, payload: '' });
        }
    }, [state.Success])

    React.useEffect(() => {
        if (state.Failed.length !== 0) {
            addToast('ADD Amount FAILED', { appearance: 'error', autoDismiss: true, });
            // dispatch({ type: ADMINPARTNERRECHARGEDEFAULTFAILED, payload: '' });
        }
    }, [state.Failed])

    console.log(state)
    // partnerRecharge
    return (
        <div className="PartnerRechargeSmMgtContainer">
            <div className="PartnerRechargeSmMgtTitleContainer">
                <label className="PartnerRechargeSmMgtTitle">Recharge Subscription</label>
            </div>
            <div className="PartnerRechargeSmMgtInputTitleContainer">
                <label className="PartnerRechargeSmMgtInputTitle">Amount to be added</label>
                <TextField variant="outlined" value={amount} className={classes.textField} size="small" type="number" onChange={(e) => setAmount(e.target.value)} />
            </div>

            <div className="PartnerRechargeSmMgtBottomContainer">
                <div className="PartnerRechargeSmMgtSubBottomContainer">
                    <div className="PartnerRechargeSmMgtBottomContainerOne">
                        <label className="PartnerRechargeSmMgtBottomContainerOneValue">
                            ₹{amount}
                        </label>
                        <label className="PartnerRechargeSmMgtBottomContainerOneTitle">
                            Total Amount
                        </label>
                    </div>
                </div>


                <div className="PartnerRechargeSmMgtBottomContainerTwo">
                    <BlueButtonTwo variant="contained" onClick={Add}>confirm</BlueButtonTwo>
                </div>
            </div>
        </div>
    )
}

export default PartnerRechargeMgt
