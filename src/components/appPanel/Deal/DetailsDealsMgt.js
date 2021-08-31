import React, { useState } from 'react'
import './styles/DealsMgtdetail.scss'
import { Checkbox } from '@material-ui/core'
import DealMgtTable from './table';
import User from './User';
import { red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
import { ToastProvider } from 'react-toast-notifications';

import { useSelector, useDispatch } from 'react-redux';
import { getOrderDetails } from '../../../actions/appPanel/Deals';

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

const Details = () => {
    const deals = useSelector(state => state.dealMgt);
    const dispatch = useDispatch();
    const [filteredData, setFilteredData] = useState([]);

    const [selectedValue, setSelectedValue] = React.useState('PENDING');
    const classes = useStyles();

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    React.useEffect(() => {

        if (deals.orderDealList.length !== 0) {
            if (deals.orderDealList[0].orderstatus === 'Canceled') {
                setSelectedValue('Canceled');
            }
            else if (deals.orderDealList[0].orderstatus === 'PENDING') {
                setSelectedValue('PENDING');
            }
            else {
                setSelectedValue('ORDER_COMPLETED');
            }
        }
    }, [deals.orderDealList])

    // console.log(filteredData.length)
    // console.log(filteredData)




    React.useEffect(() => {

        if (deals.orderDealList.length !== 0) {
            let ordernew = [];
            let i = 0;

            for (i = 0; i < deals.orderDealList.length; i++) {
                if (deals.orderDealList[i].orderstatus.toLowerCase() === selectedValue.toLocaleLowerCase()) {
                    ordernew.push(deals.orderDealList[i]);
                }
            }

            setFilteredData(ordernew);

            if (ordernew && ordernew.length !== 0) {
                dispatch(getOrderDetails(ordernew[0].Dealid, ordernew[0].orderid));
            }

        }
    }, [deals.orderDealList, selectedValue])

    // console.log(filteredData.length)
    // console.log(filteredData)

    return (
        <div className="DealsMgtDetailContainer">
            <div className="DealsMgtone">

                <div className="checkbox">
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Order Status</FormLabel>
                        <RadioGroup name="Order Status" value={selectedValue} onChange={handleChange} className={classes.radioGroup}>
                            <FormControlLabel value="PENDING" control={<RedRadio />} label="Pending" />
                            <FormControlLabel value="Canceled" control={<RedRadio />} label="Cancelled" />
                            <FormControlLabel value="ORDER_COMPLETED" control={<RedRadio />} label="Completed" />

                        </RadioGroup>
                    </FormControl>
                </div>


                <div table="table">
                    <DealMgtTable status={selectedValue} data={filteredData} />
                </div>

            </div>

            <div className="DealsMgttwo">

                <User status={selectedValue} data={filteredData} />

            </div>

        </div>
    )
}

export default Details
