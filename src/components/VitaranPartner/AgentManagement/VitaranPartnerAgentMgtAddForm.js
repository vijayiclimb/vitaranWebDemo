import React,{useState,useEffect} from 'react';
import './styles/VitaranPartnerAgentMgtAddForm.scss'
import { Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Prof from '../../../images/Rectangle 485.png';
import { red, purple, blue } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import {useSelector,useDispatch} from 'react-redux';
import axios from 'axios'
import { GetVpAgentAdd } from '../../../actions/VitaranPartner/AgentMgt';


const BlueButtonOne = withStyles((theme) => ({
    root: {
        color: "#053E5E",
        border: "2px solid #053E5E",
        width: "200px",
        height: "35px",
        textTransform: "none",
        fontSize: "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        backgroundColor: theme.palette.getContrastText(purple[500]),
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
        width:"100%",
        borderRadius: "5px",
        backgroundColor: "#F0F0F0"
    }
});

const VitaranPartnerAgentMgtAddForm = ({ showAdd, setShowAdd }) => {
    const classes = useStyles();
    const state = useSelector(state => state.vpAgentMgt);
    const dispatch = useDispatch();
    const[profileImg,setProfileImg]=useState("https://vitaran.s3.ap-south-1.amazonaws.com/user_image/default.png");
    const[file,setFile]=useState('');
    const[form,setForm]=useState(
        {
            "first_name": "",
            "last_name": "",
            "mobile": "",
            "zone": "",
            "email_id": "",
            "address": "",
            "city": "",
            "state": "",
            "country": "",
            "pincode": "",
            "education": "",
            "agent_img": "",
            "partner_id":""
        }
    )
 
    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
 
    React.useEffect(()=>{
        if(state && state.PartnerId && state.PartnerId.length!==0){
                  setForm({
          ...form,
          partner_id:state.PartnerId
      })

        }
    },[state])


    const ProfimgUpload = async (formData) => {
        await axios.post(`https://vcyyubbbt6.execute-api.ap-south-1.amazonaws.com/vitaran/upload-image`, formData)
            .then(res => {
                if(res.data.response_code===200){
                    setProfileImg(res.data.body.full_path)
                    let result = res.data.body.full_path.match(/[^\/]+$/)[0]
                    setForm({...form,agent_img:result.replace(/\s/g, "")});
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

    let param ={
        "first_name": `${form.first_name}`,
        "last_name": `${form.last_name}`,
        "mobile": `${form.mobile}`,
        "zone": `${form.zone}`,
        "email_id": `${form.email_id}`,
        "address": `${form.address}`, 
        "city": `${form.city}`,
        "state": `${form.state}`,
        "country": `${form.country}`,
        "pincode": `${form.pincode}`,
        "education": `${form.education}`,
        "agent_img": `${form.agent_img}`,
        "partner_id":`${form.partner_id}`
    }

    const handleAdd=()=>{
          dispatch(GetVpAgentAdd(param,setShowAdd))
    }
 

    return (
        <div className="VitaranPartnerAgentMgtAddFormContainer">
            <div className="VitaranPartnerAgentMgtAddFormContainerOne">

                <div className="VitaranPartnerAgentMgtAddFormContainerOneTitleContainer">
                    <label className="VitaranPartnerAgentMgtAddFormContainerOneTitle">Add Details Of Partner</label>
                </div>

                <div className="VitaranPartnerAgentMgtAddFormContainerOneNameContainer">
                    <div className="VitaranPartnerAgentMgtAddFormContainerOneNameWrapperFirst">
                        <div className="VitaranPartnerAgentMgtAddFormContainerOneNameFirst">
                            <label>First Name</label>
                        </div>

                        <TextField variant="outlined" size="small" className={classes.SubtextField} name="first_name" onChange={handleChange}/>
                    </div>
                    <div className="VitaranPartnerAgentMgtAddFormContainerOneNameWrapperSecond">
                        <div className="VitaranPartnerAgentMgtAddFormContainerOneNameSecond">
                            <label>Last Name</label>

                        </div>

                        <TextField variant="outlined" size="small" className={classes.SubtextField} name="last_name" onChange={handleChange}/>
                    </div>
                </div>

                <div className="VitaranPartnerAgentMgtAddFormContainerOneMobileContainer">
                    <div className="VitaranPartnerAgentMgtAddFormContainerOneMobileWrapperFirst">
                        <label>Mobile</label>
                        <TextField variant="outlined" size="small" className={classes.SubtextField} name="mobile" onChange={handleChange}/>
                    </div>
                    <div className="VitaranPartnerAgentMgtAddFormContainerOneZoneWrapperSecond">
                        <div className="VitaranPartnerAgentMgtAddFormContainerOneZoneSecond">
                            <label>Zone</label>
                        </div>

                        <TextField variant="outlined" size="small" className={classes.SubtextField} name="zone" onChange={handleChange}/>
                    </div>
                </div>

                <div className="VitaranPartnerAgentMgtAddFormContainerOneMailContainer">
                    <label>Mail ID</label>
                    <TextField variant="outlined" size="small" className={classes.textField} name="email_id" onChange={handleChange}/>
                </div>



                <div className="VitaranPartnerAgentMgtAddFormContainerOneAddressContainer">
                    <label>Address</label>
                    <TextField variant="outlined" multiline row={3} className={classes.textField} name="address" onChange={handleChange}/>
                </div>


                <div className="VitaranPartnerAgentMgtAddFormContainerOneCityContainer">
                    <div className="VitaranPartnerAgentMgtAddFormContainerOneCityWrapperFirst">
                        <div className="VitaranPartnerAgentMgtAddFormContainerOneCityFirst">
                            <label>City</label>
                        </div>

                        <TextField variant="outlined" size="small" className={classes.SubtextField} name="city" onChange={handleChange}/>
                    </div>
                    <div className="VitaranPartnerAgentMgtAddFormContainerOneCityWrapperSecond">
                        <div className="VitaranPartnerAgentMgtAddFormContainerOneCitySecond">
                            <label>State</label>

                        </div>

                        <TextField variant="outlined" size="small" className={classes.SubtextField} name="state" onChange={handleChange}/>
                    </div>
                </div>

                <div className="VitaranPartnerAgentMgtAddFormContainerOneCountryContainer">
                    <div className="VitaranPartnerAgentMgtAddFormContainerOneCountryWrapperFirst">
                        <div className="VitaranPartnerAgentMgtAddFormContainerOneCountryFirst">
                            <label>Country</label>
                        </div>

                        <TextField variant="outlined" size="small" className={classes.SubtextField} name="country" onChange={handleChange}/>
                    </div>
                    <div className="VitaranPartnerAgentMgtAddFormContainerOneCountryWrapperSecond">
                        <div className="VitaranPartnerAgentMgtAddFormContainerOneCountrySecond">
                            <label>Postal Code</label>

                        </div>

                        <TextField variant="outlined" size="small" className={classes.SubtextField} name="pincode" onChange={handleChange}/>
                    </div>
                </div>


                <div className="VitaranPartnerAgentMgtAddFormContainerOneEduContainer">
                    <div className="VitaranPartnerAgentMgtAddFormContainerOneEduWrapperFirst">
                        <div className="VitaranPartnerAgentMgtAddFormContainerOneEduFirst">
                            <label>Education</label>
                        </div>

                        <TextField variant="outlined" size="small" className={classes.edu} name="education" onChange={handleChange}/>
                    </div>
                    {/* <div className="VitaranPartnerAgentMgtAddFormContainerOneEduWrapperSecond">
                        <div className="VitaranPartnerAgentMgtAddFormContainerOneEduSecond">
                            <label>Experience</label>

                        </div>

                        <TextField variant="outlined" size="small" className={classes.SubtextField} />
                    </div> */}
                </div>
                    
               
                <div className="VitaranPartnerAgentMgtAddFormContainerOneButtonContainer">
                    <BlueButtonTwo variant="contained" color="primary" onClick={handleAdd}>Add</BlueButtonTwo>


                    <BlueButtonOne variant="contained" onClick={() => setShowAdd(false)}>Cancel</BlueButtonOne>

                </div>
            </div>
            <div className="VitaranPartnerAgentMgtAddFormContainerTwo">
                <div className="VitaranPartnerAgentMgtAddFormContainerTwoImageContainer">
                    <img src={profileImg} alt="img" onChange={ProfUpload}/>
                </div>
                <input type="file" accept="image/*" name="image-upload" id="VitaranPartnerAgentProfAddImg" onChange={ProfUpload} />
                <div className="VitaranPartnerAgentAddFormProfImageContainer">
                    <label className="VitaranPartnerAgentAddFormProfImage" htmlFor="VitaranPartnerAgentProfAddImg">
                        Upload
                    </label>
                </div>


               
               
            </div>
        </div>
    )
}

export default VitaranPartnerAgentMgtAddForm
