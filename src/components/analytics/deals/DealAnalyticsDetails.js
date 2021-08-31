import React from 'react';
import './styles/details.scss';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DetailTable from './DetailTable';
import UserCard from './UserCard';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 320,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


const DealAnalyticsDetails = () => {
  const classes = useStyles();
  const [role, setRole] = React.useState('Retailer');

  const handleChange = (event) => {
    setRole(event.target.value);
  };

    return (
        <div className="DetailContainer">
            <div className="DetailHead">
               <label className="DetailTitle">Stakeholder Analytics</label>
               <div>
               <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">role</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={role}
          onChange={handleChange}
          label="Role"
        >
         
          <MenuItem value={"Retailer"}>Retailer</MenuItem>
          <MenuItem value={"Rider"}>Rider</MenuItem>
          <MenuItem value={"Wholesaler"}>Wholesaler</MenuItem>
          <MenuItem value={"Distributor"}>Distributor</MenuItem>
        </Select>
      </FormControl>
               </div>
            </div>
            <div className="DetailRow">
                 <div className="DetailTable">
                     <DetailTable />
                 </div>
                 <div className="DetailUser">
                     <UserCard/>
                 </div>
            </div>

        </div>
    )
}

export default DealAnalyticsDetails
