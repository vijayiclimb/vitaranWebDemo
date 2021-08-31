import React from 'react';
import ProductWiseRatesGraphSection from './ProductWiseRatesGraphSection';
import ProductWiseRatesTable from './ProductWiseRatesTable';
import './styles/ProductWiseRates.scss';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ProductWiseCompare from './ProductWiseCompare';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        maxWidth: 220,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


const ProductWiseRates = () => {

    const classes = useStyles();
    const [role, setRole] = React.useState('');

    const handleChange = (event) => {
        setRole(event.target.value);
    };

    return (
        <div className="ProductWiseRatesWrapper">
            <div className="One">
                <label className="OneTitle">Product Wise Rates</label>
            
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
                  <ProductWiseCompare/>
                </div>


            </div>

            <div className="ProductWiseRatesContainer">
                <div className="ProductWiseRatesContainerOne">
                    <ProductWiseRatesTable />
                </div>
                <div className="ProductWiseRatesContainerTwo">
                    <ProductWiseRatesGraphSection />
                </div>
            </div>

        </div>

    )
}

export default ProductWiseRates
