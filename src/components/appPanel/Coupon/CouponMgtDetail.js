import React from 'react'
import './styles/CouponMgtDetail.scss';
import CouponMgtTable from './CouponMgtTable'
import CouponMgtUser from './CouponMgtUser'
import { red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    radioGroup: {
        display: 'flex',
        flexDirection: 'row',
    }
})

const RedRadio = withStyles({
    root: {
        color: "#bdbdbd",
        '&$checked': {
            color: red[600],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

const CouponMgtDetail = () => {
    const [selectedValue, setSelectedValue] = React.useState('ORDER_RAISED');
    const classes = useStyles();

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    console.log(selectedValue);


    return (
        <div className="CouponMgtDetailContainer">
        <div className="CouponMgtone">

             <div className="checkbox">
                <FormControl component="fieldset">
                    <FormLabel component="legend">Order Status</FormLabel>
                    <RadioGroup name="Order Status" value={selectedValue} onChange={handleChange} className={classes.radioGroup}>
                        <FormControlLabel value="ORDER_RAISED" control={<RedRadio />} label="Pending" />
                        <FormControlLabel value="Canceled" control={<RedRadio />} label="Cancelled" />
                        <FormControlLabel value="ORDER_COMPLETED" control={<RedRadio />} label="Completed" />

                    </RadioGroup>
                </FormControl>
            </div>


            <div table="table">
                <CouponMgtTable  />
            </div> 

        </div>

        <div className="CouponMgttwo">

            <CouponMgtUser status={selectedValue}/>

        </div>

    </div>
    )
}

export default CouponMgtDetail
