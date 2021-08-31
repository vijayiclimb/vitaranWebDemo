import React from 'react';
import CategoryWiseRatesGraphSection from './CategoryWiseRatesGraphSection';
import CategoryWiseRatesTable from './CategoryWiseRatesTable';
import './styles/CategoryWiseRates.scss';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CategoryWiseCompare from './CategoryWiseCompare';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        maxWidth: 220,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


const CategoryWiseRates = () => {

    const classes = useStyles();
    const [role, setRole] = React.useState('');

    const handleChange = (event) => {
        setRole(event.target.value);
    };

    return (
        <div className="CategoryWiseRatesWrapper">
            <div className="One">
                <label className="OneTitle">Category Wise Rates</label>
            
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
                  <CategoryWiseCompare/>
                </div>


            </div>

            <div className="CategoryWiseRatesContainer">
                <div className="CategoryWiseRatesContainerOne">
                    <CategoryWiseRatesTable />
                </div>
                <div className="CategoryWiseRatesContainerTwo">
                    <CategoryWiseRatesGraphSection />
                </div>
            </div>

        </div>

    )
}

export default CategoryWiseRates
