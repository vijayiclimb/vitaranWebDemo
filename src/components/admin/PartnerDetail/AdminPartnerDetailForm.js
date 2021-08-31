import React from 'react';
import './styles/AdminPartnerDetailForm.scss'
import { Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Prof from '../../../images/Rectangle 485.png';
import Firm from '../../../images/Rectangle 308.png';
import { red, purple, blue } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import CreateIcon from '@material-ui/icons/Create';
import { useSelector } from 'react-redux';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';


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
    formControl: {
 
        width: "85%",
        borderRadius: "5px",
        backgroundColor: "#F0F0F0"
      },
      selectEmpty: {
     
      },
});

const AdminPartnerDetailForm = ({ showAdd, setShowAdd,setShowUpdate,showUpdate }) => {
    const classes = useStyles();
    const state = useSelector(state => state.partner);
    

    const [form,setForm]=React.useState({})


    React.useEffect(()=>{
         if(state && state.Details!=='undefined'){
                setForm(state.Details)
         }
    },[state.Details])

    console.log(form)

    return (
         state && state.Details ? (
            <div className="AdminPartnerDetailFormContainer">
            <div className="AdminPartnerDetailFormContainerOne">

                <div className="AdminPartnerDetailFormContainerOneTitleContainer">
                    <label className="AdminPartnerDetailFormContainerOneTitle">
                        Details Of Partner</label>
                </div>

                <div className="AdminPartnerDetailFormContainerOneNameContainer">
                    <div className="AdminPartnerDetailFormContainerOneNameWrapperFirst">
                        <div className="AdminPartnerDetailFormContainerOneNameFirst">
                            <label>First Name</label>
                        </div>

                        <TextField variant="outlined" size="small" value="satish" disabled={true} className={classes.SubtextField} value={form && form.first_name} disabled={true}/>
                    </div>
                    <div className="AdminPartnerDetailFormContainerOneNameWrapperSecond">
                        <div className="AdminPartnerDetailFormContainerOneNameSecond">
                            <label>Last Name</label>

                        </div>

                        <TextField variant="outlined" size="small" className={classes.SubtextField} value={form && form.last_name} disabled={true}/>
                    </div>
                </div>

                <div className="AdminPartnerDetailFormContainerOneMobileContainer">
                    <div className="AdminPartnerDetailFormContainerOneMobileWrapperFirst">
                        <label>Mobile</label>
                        <TextField variant="outlined" size="small" className={classes.SubtextField} value={form && form.Mobile} disabled={true}/>
                    </div>
                    <div className="AdminPartnerDetailFormContainerOneZoneWrapperSecond">
                        <div className="AdminPartnerDetailFormContainerOneZoneSecond">
                            <label>Zone</label>
                        </div>

                        <TextField variant="outlined" size="small" className={classes.SubtextField} value={form && form.zone} disabled={true}/>
                    </div>
                </div>

                <div className="AdminPartnerDetailFormContainerOneMailContainer">
                    <label>Mail ID</label>
                    <TextField variant="outlined" size="small" value={form && form.email} disabled={true} className={classes.textField} />
                </div>


                <div className="AdminPartnerDetailFormContainerOneFirmContainer">
                    <label>Firm Name</label>
                    <TextField variant="outlined" value={form && form.Firm_name} disabled={true} size="small" className={classes.textField} />
                </div>

                <div className="AdminPartnerDetailFormContainerOneDetailressContainer">
                    <label>Address</label>
                    <TextField variant="outlined" multiline row={3} className={classes.textField} value={form && form.address} disabled={true}/>
                </div>


                <div className="AdminPartnerDetailFormContainerOneButtonContainer">
                    {/* <BlueButtonTwo variant="contained" color="primary">Detail</BlueButtonTwo>
                    <Button variant="contained" style={{
                        width: "200px",
                        height: "35px",
                    }}>Cancel</Button> */}

                </div>
            </div>
            <div className="AdminPartnerDetailFormContainerTwo">

                <div className="AdminPartnerDetailFormContainerTwoButtonContainer">
                    <div className="AdminPartnerDetailFormContainerTwoButtonWrapper" onClick={()=>setShowUpdate(true)}>
                        <CreateIcon />
                    </div>


                </div>
                <div className="AdminPartnerDetailFormContainerTwoImageContainerOne">
                    <div className="AdminPartnerDetailFormContainerTwoImageContainer">
                        <img src={form && form.profile_img} alt="img" />
                    </div>
                </div>

                <div className="AdminPartnerDetailFormContainerTwoImageContainerTwo">
                    <div className="AdminPartnerDetailFormContainerTwoImageContainer">
                        <img src={form && form.Firm_image} alt="img" />
                    </div>
                </div>




            </div>
        </div>
        ):(<label>no data</label>)
        
    )
}

export default AdminPartnerDetailForm
