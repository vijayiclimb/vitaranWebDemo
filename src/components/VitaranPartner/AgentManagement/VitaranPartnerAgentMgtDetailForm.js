import React from 'react';
import './styles/VitaranPartnerAgentMgtDetailForm.scss'
import { Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Prof from '../../../images/Rectangle 483.png';
import Firm from '../../../images/Rectangle 308.png';
import { red, purple, blue } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import CreateIcon from '@material-ui/icons/Create';
import { useSelector, useDispatch } from 'react-redux';


const BlueButtonTwo = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(purple[500]),
        fontWeight: "600",
        width: "200px",
        height: "35px",
        textTransform: "none",
        backgroundColor: '#053E5E',
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


const RedButtonTwo = withStyles((theme) => ({
    root: {
        color: red[700],
        border: "2px solid #DC1D13",
        fontWeight: "600",
        width: "100px",
        height: "35px",
        textTransform: "none",
        backgroundColor: theme.palette.getContrastText(purple[500]),
        '&:hover': {
            backgroundColor: "#DC1D13",
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



const useStyles = makeStyles({
    SubtextField: {
        width: "85%",
        borderRadius: "5px",
        backgroundColor: "#F0F0F0"
    },
    textField: {

        borderRadius: "5px",
        backgroundColor: "#F0F0F0"
    },
    edu:{
        width: "100%",  
        borderRadius: "5px",
        backgroundColor: "#F0F0F0"
    }
});

const VitaranPartnerAgentMgtDetailForm = ({ showAdd, setShowAdd, setShowUpdate, showUpdate }) => {
    const classes = useStyles();
    const state = useSelector(state => state.vpAgentMgt);

    return (
        <div className="VitaranPartnerAgentMgtDetailFormContainer">
            {
                state && state.Details !== "undefined" ? (
                    <>
  <div className="VitaranPartnerAgentMgtDetailFormContainerOne">

                <div className="VitaranPartnerAgentMgtDetailFormContainerOneTitleContainer">
                    <label className="VitaranPartnerAgentMgtDetailFormContainerOneTitle">
                        Details Of Agent</label>
                </div>

                <div className="VitaranPartnerAgentMgtDetailFormContainerOneNameContainer">
                    <div className="VitaranPartnerAgentMgtDetailFormContainerOneNameWrapperFirst">
                        <div className="VitaranPartnerAgentMgtDetailFormContainerOneNameFirst">
                            <label>First Name</label>
                        </div>

                        <TextField variant="outlined" size="small"   className={classes.SubtextField} disabled={true} value={state && state.Details.first_name}/>
                    </div>
                    <div className="VitaranPartnerAgentMgtDetailFormContainerOneNameWrapperSecond">
                        <div className="VitaranPartnerAgentMgtDetailFormContainerOneNameSecond">
                            <label>Last Name</label>

                        </div>

                        <TextField variant="outlined" size="small"  className={classes.SubtextField} disabled={true} value={state && state.Details.last_name}/>
                    </div>
                </div>

                <div className="VitaranPartnerAgentMgtDetailFormContainerOneMobileContainer">
                    <div className="VitaranPartnerAgentMgtDetailFormContainerOneMobileWrapperFirst">
                        <label>Mobile</label>
                        <TextField variant="outlined" size="small"  className={classes.SubtextField} disabled={true} value={state && state.Details.mobile}/>
                    </div>
                    <div className="VitaranPartnerAgentMgtDetailFormContainerOneZoneWrapperSecond">
                        <div className="VitaranPartnerAgentMgtDetailFormContainerOneZoneSecond">
                            <label>Zone</label>
                        </div>

                        <TextField variant="outlined" size="small" className={classes.SubtextField}  disabled={true} value={state && state.Details.zone_name}/>
                    </div>
                </div>

                <div className="VitaranPartnerAgentMgtDetailFormContainerOneMailContainer">
                    <label>Mail ID</label>
                    <TextField variant="outlined" size="small"  className={classes.textField}  disabled={true} value={state && state.Details.email_id}/>
                </div>


                
                <div className="VitaranPartnerAgentMgtDetailFormContainerOneDetailressContainer">
                    <label>Address</label>
                    <TextField variant="outlined" multiline row={3}  className={classes.textField}  disabled={true} value={state && state.Details.address}/>
                </div>

                <div className="VitaranPartnerAgentMgtDetailFormContainerOneCityContainer">
                    <div className="VitaranPartnerAgentMgtDetailFormContainerOneCityWrapperFirst">
                        <div className="VitaranPartnerAgentMgtDetailFormContainerOneCityFirst">
                            <label>City</label>
                        </div>

                        <TextField variant="outlined" size="small" value="Bangalore" disabled={true} className={classes.SubtextField}  disabled={true} value={state && state.Details.city}/>
                    </div>
                    <div className="VitaranPartnerAgentMgtDetailFormContainerOneCityWrapperSecond">
                        <div className="VitaranPartnerAgentMgtDetailFormContainerOneCitySecond">
                            <label>State</label>

                        </div>

                        <TextField variant="outlined" size="small"  disabled={true} value={state && state.Details.state} className={classes.SubtextField} />
                    </div>
                </div>


                <div className="VitaranPartnerAgentMgtDetailFormContainerOneCountryContainer">
                    <div className="VitaranPartnerAgentMgtDetailFormContainerOneCountryWrapperFirst">
                        <div className="VitaranPartnerAgentMgtDetailFormContainerOneCountryFirst">
                            <label>Country</label>
                        </div>

                        <TextField variant="outlined" size="small" value="India"  className={classes.SubtextField} disabled={true} value={state && state.Details.country}/>
                    </div>
                    <div className="VitaranPartnerAgentMgtDetailFormContainerOneCountryWrapperSecond">
                        <div className="VitaranPartnerAgentMgtDetailFormContainerOneCountrySecond">
                            <label>Postal Code</label>

                        </div>

                        <TextField variant="outlined" size="small" className={classes.SubtextField} disabled={true} value={state && state.Details.pincode}/>
                    </div>
                </div>


                <div className="VitaranPartnerAgentMgtDetailFormContainerOneEduContainer">
                    <div className="VitaranPartnerAgentMgtDetailFormContainerOneEduWrapperFirst">
                        <div className="VitaranPartnerAgentMgtDetailFormContainerOneEduFirst">
                            <label>Education</label>
                        </div>

                        <TextField variant="outlined" size="small" disabled={true} value={state && state.Details.education} className={classes.edu} />
                    </div>
                    {/* <div className="VitaranPartnerAgentMgtDetailFormContainerOneEduWrapperSecond">
                        <div className="VitaranPartnerAgentMgtDetailFormContainerOneEduSecond">
                            <label>Experience</label>

                        </div>

                        <TextField variant="outlined" size="small" disabled={true} className={classes.SubtextField} />
                    </div> */}
                </div>


                <div className="VitaranPartnerAgentMgtDetailFormContainerOneButtonContainer">
                    {/* <BlueButtonTwo variant="contained" color="primary">Detail</BlueButtonTwo>
                    <Button variant="contained" style={{
                        width: "200px",
                        height: "35px",
                    }}>Cancel</Button> */}

                </div>
            </div>
            <div className="VitaranPartnerAgentMgtDetailFormContainerTwo">

                <div className="VitaranPartnerAgentMgtDetailFormContainerTwoButtonContainer">
                    <div className="VitaranPartnerAgentMgtDetailFormContainerTwoButtonWrapper" onClick={()=>setShowUpdate(true)}>
                        <CreateIcon />
                    </div>


                </div>
                <div className="VitaranPartnerAgentMgtDetailFormContainerTwoImageContainerOne">
                    <div className="VitaranPartnerAgentMgtDetailFormContainerTwoImageContainer">
                        <img src={state && state.Details.agent_img} alt="img" />
                    </div>
                </div>

                {/* <div className="VitaranPartnerAgentMgtDetailFormContainerTwoImageContainerTwo">
                    <div className="VitaranPartnerAgentMgtDetailFormContainerTwoImageContainer">
                        <img src={Firm} alt="img" />
                    </div>
                </div> */}




            </div>
            </>
                )
                    :
                    (
                        <label>No Data..  Please Add a Member</label>
                    )
            }

        </div>
    )
}

export default VitaranPartnerAgentMgtDetailForm
