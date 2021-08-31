import React from 'react';
import CompanyWiseRatesGraphSection from './CompanyWiseRatesGraphSection';
import CompanyWiseRatesTable from './CompanyWiseRatesTable';
import './styles/CompanyWiseRates.scss';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CompanyWiseCompare from './CompanyWiseCompare';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        maxWidth: 220,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


const CompanyWiseRates = () => {

    const classes = useStyles();
    const [role, setRole] = React.useState('');

    const handleChange = (event) => {
        setRole(event.target.value);
    };

    return (
        <div className="CompanyWiseRatesWrapper">
            <div className="One">
                <label className="OneTitle">Company Wise Rates</label>
            
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel>Role</InputLabel>
                        <Select

                            value={role}
                            onChange={handleChange}
                            label="Role"
                        >
                            <MenuItem value={"Retailer"}>Retailer</MenuItem>
                            <MenuItem value={"Rider"}>Rider</MenuItem>
                            <MenuItem value={"Wholesaler"}>Wholesaler</MenuItem>
                        </Select>
                    </FormControl>
             

                <div>
                  <CompanyWiseCompare/>
                </div>


            </div>

            <div className="CompanyWiseRatesContainer">
                <div className="CompanyWiseRatesContainerOne">
                    <CompanyWiseRatesTable />
                </div>
                <div className="CompanyWiseRatesContainerTwo">
                    <CompanyWiseRatesGraphSection />
                </div>
            </div>

        </div>

    )
}

export default CompanyWiseRates
