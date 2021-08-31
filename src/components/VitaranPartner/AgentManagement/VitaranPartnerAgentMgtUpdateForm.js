import React, { useEffect, useState } from 'react';
import './styles/VitaranPartnerAgentMgtUpdateForm.scss'
import { Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Prof from '../../../images/Rectangle 483.png';
import { red, purple, blue } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import Firm from '../../../images/Rectangle 308.png';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'
import { GetVpAgentRemove, GetVpAgentUpdate } from '../../../actions/VitaranPartner/AgentMgt';


const BlueButtonTwo = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(purple[500]),
        fontSize: "14px",
        width: "100px",
        height: "35px",
        textTransform: "none",
        backgroundColor: '#053E5E',

    },
}))(Button);



const BlueButtonOne = withStyles((theme) => ({
    root: {
        color: "#716F6F",
        border: "2px solid #716F6F",
        width: "100px",
        height: "35px",
        textTransform: "none",
        fontSize: "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        backgroundColor: theme.palette.getContrastText(purple[500]),
        '&:hover': {
            backgroundColor: '#053E5E',
            color: theme.palette.getContrastText(purple[500]),
        },
        // '&:hover': {
        //     backgroundColor: red[800],
        //     color: theme.palette.getContrastText(purple[500]),
        // },
        // '&:active': {
        //     backgroundColor: red[800],
        //     color: theme.palette.getContrastText(purple[500]),
        // },
        // '&:focused': {
        //     backgroundColor: red[800],
        //     color: theme.palette.getContrastText(purple[500]),
        // }
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
    edu: {
        width: "100%",
        borderRadius: "5px",
        backgroundColor: "#F0F0F0"
    },
});

const VitaranPartnerAgentMgtUpdateForm = ({ setShowUpdate, showUpdate }) => {
    const classes = useStyles();
    const state = useSelector(state => state.vpAgentMgt);
    const dispatch = useDispatch();
    const [profileImg, setProfileImg] = useState("https://vitaran.s3.ap-south-1.amazonaws.com/user_image/default.png");
    const [file, setFile] = useState('');
    const [form, setForm] = useState({
        "address": "",
        "agent_id": "",
        "agent_img": "",
        "city": "",
        "country": "",
        "education": "",
        "email_id": "",
        "first_name": "",
        "last_name": "",
        "mobile": "",
        "partner_id": "",
        "pincode": "",
        "regn_date": "",
        "state": "",
        "zone_name": ""
    })

    //match(/[^\/]+$/)[0]
    useEffect(() => {
        if (state && state.Details !== 'undefined') {
            setForm({
                ...form,
                "address": `${state.Details.address}`,
                "agent_id": `${state.Details.agent_id}`,
                "agent_img": `${state.Details.agent_img.match(/[^\/]+$/)[0]}`,
                "city": `${state.Details.city}`,
                "country": `${state.Details.country}`,
                "education": `${state.Details.education}`,
                "email_id": `${state.Details.email_id}`,
                "first_name": `${state.Details.first_name}`,
                "last_name": `${state.Details.last_name}`,
                "mobile": `${state.Details.mobile}`,
                "partner_id": `${state.Details.partner_id}`,
                "pincode": `${state.Details.pincode}`,
                "regn_date": `${state.Details.regn_date}`,
                "state": `${state.Details.state}`,
                "zone_name": `${state.Details.zone_name}`
            });
            setProfileImg(state.Details.agent_img)
        }
    }, [state])


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const ProfimgUpload = async (formData) => {
        await axios.post(`https://vcyyubbbt6.execute-api.ap-south-1.amazonaws.com/vitaran/upload-image`, formData)
            .then(res => {
                if (res.data.response_code === 200) {
                    setProfileImg(res.data.body.full_path)
                    let result = res.data.body.full_path.match(/[^\/]+$/)[0]
                    setForm({ ...form, agent_img: result.replace(/\s/g, "") });
                }
                // console.log(res.data)
            })
            .catch(err => console.log(err.message))
    }


    const ProfUpload = (event) => {
        setFile(event.target.files[0]);
    }

    React.useEffect(() => {
        const formData = new FormData();
        formData.append('file', file);
        if (file && file.length !== 0) {
            ProfimgUpload(formData)
        }

        console.log(formData)
    }, [file]);

    let param = {
        "agent_id": `${form.agent_id}`,
        "first_name": `${form.first_name}`,
        "last_name": `${form.last_name}`,
        "mobile": `${form.mobile}`,
        "zone": `${form.zone_name}`,
        "email_id":`${form.email_id}`,
        "address": `${form.address}`,
        "city": `${form.city}`,
        "state": `${form.state}`,
        "country": `${form.country}`,
        "pincode":`${form.pincode}`,
        "education": `${form.education}`,
        "agent_img": `${form.agent_img}`,
        "partner_id": `${form.partner_id}`
    }

    // console.log(form);
    // console.log(profileImg);

    const handleUpdate=()=>{
        dispatch(GetVpAgentUpdate(param,setShowUpdate))
    }

    const handleRemove=()=>{
        dispatch(GetVpAgentRemove(form.partner_id,form.agent_id,setShowUpdate))
    }

   

    return (
        <div className="VitaranPartnerAgentMgtUpdateFormContainer">
            <div className="VitaranPartnerAgentMgtUpdateFormContainerOne">

                <div className="VitaranPartnerAgentMgtUpdateFormContainerOneTitleContainer">
                    <label className="VitaranPartnerAgentMgtUpdateFormContainerOneTitle">Update Details Of Partner</label>
                </div>

                <div className="VitaranPartnerAgentMgtUpdateFormContainerOneNameContainer">
                    <div className="VitaranPartnerAgentMgtUpdateFormContainerOneNameWrapperFirst">
                        <div className="VitaranPartnerAgentMgtUpdateFormContainerOneNameFirst">
                            <label>First Name</label>
                        </div>

                        <TextField variant="outlined" size="small" className={classes.SubtextField} value={form.first_name} name="first_name" onChange={handleChange} />
                    </div>
                    <div className="VitaranPartnerAgentMgtUpdateFormContainerOneNameWrapperSecond">
                        <div className="VitaranPartnerAgentMgtUpdateFormContainerOneNameSecond">
                            <label>Last Name</label>

                        </div>

                        <TextField variant="outlined" size="small" className={classes.SubtextField} value={form.last_name} name="last_name" onChange={handleChange} />
                    </div>
                </div>

                <div className="VitaranPartnerAgentMgtUpdateFormContainerOneMobileContainer">
                    <div className="VitaranPartnerAgentMgtUpdateFormContainerOneMobileWrapperFirst">
                        <label>Mobile</label>
                        <TextField variant="outlined" size="small" className={classes.SubtextField} value={form.mobile} name="mobile" onChange={handleChange} />
                    </div>
                    <div className="VitaranPartnerAgentMgtUpdateFormContainerOneZoneWrapperSecond">
                        <div className="VitaranPartnerAgentMgtUpdateFormContainerOneZoneSecond">
                            <label>Zone</label>
                        </div>

                        <TextField variant="outlined" size="small" className={classes.SubtextField} value={form.zone_name} name="zone_name" onChange={handleChange} />
                    </div>
                </div>

                <div className="VitaranPartnerAgentMgtUpdateFormContainerOneMailContainer">
                    <label>Mail ID</label>
                    <TextField variant="outlined" size="small" className={classes.textField} value={form.email_id} name="email_id" onChange={handleChange} />
                </div>




                <div className="VitaranPartnerAgentMgtUpdateFormContainerOneUpdateressContainer">
                    <label>Address</label>
                    <TextField variant="outlined" multiline row={3} className={classes.textField} value={form.address} name="address" onChange={handleChange} />
                </div>

                <div className="VitaranPartnerAgentMgtUpdateFormContainerOneCityContainer">
                    <div className="VitaranPartnerAgentMgtUpdateFormContainerOneCityWrapperFirst">
                        <div className="VitaranPartnerAgentMgtUpdateFormContainerOneCityFirst">
                            <label>City</label>
                        </div>

                        <TextField variant="outlined" size="small" value="Bangalooore" className={classes.SubtextField} value={form.city} name="city" onChange={handleChange} />
                    </div>
                    <div className="VitaranPartnerAgentMgtUpdateFormContainerOneCityWrapperSecond">
                        <div className="VitaranPartnerAgentMgtUpdateFormContainerOneCitySecond">
                            <label>State</label>

                        </div>

                        <TextField variant="outlined" size="small" className={classes.SubtextField} value={form.state} name="state" onChange={handleChange} />
                    </div>
                </div>

                <div className="VitaranPartnerAgentMgtUpdateFormContainerOneCountryContainer">
                    <div className="VitaranPartnerAgentMgtUpdateFormContainerOneCountryWrapperFirst">
                        <div className="VitaranPartnerAgentMgtUpdateFormContainerOneCountryFirst">
                            <label>Country</label>
                        </div>

                        <TextField variant="outlined" size="small" value="India" className={classes.SubtextField} value={form.country} name="country" onChange={handleChange} />
                    </div>
                    <div className="VitaranPartnerAgentMgtUpdateFormContainerOneCountryWrapperSecond">
                        <div className="VitaranPartnerAgentMgtUpdateFormContainerOneCountrySecond">
                            <label>Postal Code</label>

                        </div>

                        <TextField variant="outlined" size="small" className={classes.SubtextField} value={form.pincode} name="pincode" onChange={handleChange} />
                    </div>
                </div>

                <div className="VitaranPartnerAgentMgtUpdateFormContainerOneEducationContainer">
                    <div className="VitaranPartnerAgentMgtUpdateFormContainerOneEducationWrapperFirst">
                        <div className="VitaranPartnerAgentMgtUpdateFormContainerOneEducationFirst">
                            <label>Education</label>
                        </div>

                        <TextField variant="outlined" size="small" value="LKG" className={classes.edu} value={form.education} name="education" onChange={handleChange} />
                    </div>

                </div>

                <div className="VitaranPartnerAgentMgtUpdateFormContainerOneButtonContainer">
                    <BlueButtonTwo variant="contained" color="primary" onClick={handleUpdate}>Update</BlueButtonTwo>
                    <Button variant="contained" style={{ textTransform: "none", fontSize: "14px" }} onClick={handleRemove}>Remove</Button>
                    <BlueButtonOne variant="contained" onClick={() => setShowUpdate(false)}>Cancel</BlueButtonOne>
                </div>
            </div>
            <div className="VitaranPartnerAgentMgtUpdateFormContainerTwo">
                <div className="VitaranPartnerAgentMgtUpdateFormContainerTwoImageContainer">
                    <img src={profileImg} alt="img" onChange={ProfUpload} />
                </div>
                <input type="file" accept="image/*" name="image-upload" id="VitaranPartnerAgentProfUpdateImg" onChange={ProfUpload} />
                <div className="VitaranPartnerAgentUpdateFormProfImageContainer">
                    <label className="VitaranPartnerAgentUpdateFormProfImage" htmlFor="VitaranPartnerAgentProfUpdateImg">
                        Upload
                    </label>
                </div>



            </div>
        </div>
    )
}

export default VitaranPartnerAgentMgtUpdateForm
