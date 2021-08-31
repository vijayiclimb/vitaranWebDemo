import React from 'react'
import './styles/BidSection.scss'
import DailyBids from './graphs/DailyBids'
import WeeklyBids from './graphs/WeeklyBids'
import BidTable from './BidTable'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      maxWidth: 300,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const BidSection = () => {

    const classes = useStyles();
  const [Week,setWeek] = React.useState('');

  const handleChange = (event) => {
    setWeek(event.target.value);
  };

    return (
        <div className="BidsContainer">
            <div className="GraphSection">
            <div>
                <DailyBids />
            </div>
            <div>
                <WeeklyBids />
            </div>
               
            </div>
            <div className="TableSection">
              <label>Product Wise Weekly Bids</label>

              <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel >Week</InputLabel>
        <Select
     
          value={Week}
          onChange={handleChange}
          label="Week"
        >
          <MenuItem value={"Week1"}>Week 1</MenuItem>
          <MenuItem value={"Week2"}>Week 2</MenuItem>
          <MenuItem value={"Week3"}>Week 3</MenuItem>
        </Select>
      </FormControl>

                <BidTable/>
            </div>
        </div>
    )
}

export default BidSection
