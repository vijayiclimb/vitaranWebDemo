import React from 'react'
import './styles/userCard.scss';
import { FirmContainer, Firm, ProfileContainer, ProfileImg } from './styles/userStyle';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';





const useStyles = makeStyles((theme) => ({
    icon: {
        width: "30px",
        height: "30px",
    },
    formControl: {
        margin: theme.spacing(1),
        width:"85%",
      
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
}));

const UserCard = () => {
    const classes = useStyles();
    const [role, setRole] = React.useState('Retailer');

    const handleChange = (event) => {
      setRole(event.target.value);
    };
    return (
        <div className="userCardWrapper">
            <div className="one">
                <FirmContainer>
                    <Firm src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYFV-bwRLTx5vbXeIRyRZDH86KNG-4ktGcg&usqp=CAU"></Firm>
                    <ProfileContainer>
                        <ProfileImg src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80">
                        </ProfileImg>
                    </ProfileContainer>
                </FirmContainer>
            </div>
            <div className="two">
                <div className="user">
                    <label className="title"><AccountCircleRoundedIcon className={classes.icon} /> <label className="titleUser">Name</label></label > <label className="value">Wade Warren</label>
                </div>
                <div className="userUsageWrapper">
                    <div className="UsageOne">
                        <label className="usageTitle">Coins Earned</label>
                        <div className="WeekWrapper">
                            <div className="Weeklist"><label className="weekLatestTitle">W7</label><label className="weekLatestValue">20</label></div>
                            <div className="Weeklist"><label className="weekTitle">W6</label><label className="weekValue">20</label></div>
                            <div className="Weeklist"><label className="weekTitle">W5</label><label className="weekValue">20</label></div>
                            <div className="Weeklist"><label className="weekTitle">W4</label><label className="weekValue">20</label></div>
                            <div className="Weeklist"><label className="weekTitle">W3</label><label className="weekValue">20</label></div>
                            <div className="Weeklist"><label className="weekTitle">W2</label><label className="weekValue">20</label></div>
                        </div>
                    </div>
                    <div className="UsageTwo">
                        <div className="dropDown">
                            <label className="dropTitle">Transaction</label>
                            <div className="dropValue">
                                  <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel >Week</InputLabel>
                                <Select

                                    value={role}
                                    onChange={handleChange}
                                    label="Week"
                                >

                                    <MenuItem value={"Retailer"}>Retailer</MenuItem>
                                    <MenuItem value={"Rider"}>Rider</MenuItem>
                                    <MenuItem value={"Wholesaler"}>Wholesaler</MenuItem>
                                    <MenuItem value={"Distributor"}>Distributor</MenuItem>
                                </Select>
                            </FormControl> 
                            </div>
                         
                        </div>
                        <div className="dropDetails">
                        <div className="dropWrapper">
                         
                            <div className="droplist">
                            <label className="dropTitle">Coupon Id</label>
                            <label className="dropValue">VIT56</label>
                            <label className="dropValue">VIT56</label>
                            <label className="dropValue">VIT56</label>
                            <label className="dropValue">VIT56</label>
                            </div>
                            <div className="droplist">
                            <label className="dropTitle">Usage Date</label>
                            <label className="dropValue">10 May 2021</label>
                            <label className="dropValue">10 May 2021</label>
                            <label className="dropValue">10 May 2021</label>
                            <label className="dropValue">10 May 2021</label>
                            </div>
                            <div className="droplist">
                            <label className="dropTitle">Order Id</label>
                            <label className="dropValue">RE1010203211745-A105</label>
                            <label className="dropValue">RE1010203211745-A105</label>
                            <label className="dropValue">RE1010203211745-A105</label>
                            <label className="dropValue">RE1010203211745-A105</label>
                            </div>
                            <div className="droplist">
                            <label className="dropTitleV">Redeemed Amount</label>
                            <label className="dropValueV">1125.00</label>
                            <label className="dropValueV">1125.00</label>
                            <label className="dropValueV">1125.00</label>
                            <label className="dropValueV">1125.00</label>
                            </div>
                           
                           
                        </div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>





        </div>
    )
}

export default UserCard
