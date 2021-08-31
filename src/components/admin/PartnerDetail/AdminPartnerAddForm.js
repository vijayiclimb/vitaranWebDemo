import React, { useState } from 'react';
import './styles/AdminPartnerAddForm.scss'
import { Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Prof from '../../../images/Rectangle 485.png';
import { red, purple, blue } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'
import { AddAdminPartner } from '../../../actions/Admin/AdminPartnerMgt';


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
    formControl: {
        width: "85%",
        borderRadius: "5px",
        backgroundColor: "#F0F0F0"

    },
    selectEmpty: {

    },
});

const AdminPartnerAddForm = ({ showAdd, setShowAdd }) => {
    const classes = useStyles();
    const [form, setForm] = useState({
        first: '',
        last: '',
        mobile: '',
        zone: '',
        mail: '',
        firm: '',
        address: '',
        Img:'',
        firmImg:''
    });
    const dispatch = useDispatch();
  
    const state = useSelector(state => state.partner);
    const[profileImg,setProfileImg]=useState("https://vitaran.s3.ap-south-1.amazonaws.com/user_image/default.png");
    const[firmImg,setFirmImg]=useState("https://vitaran.s3.ap-south-1.amazonaws.com/user_image/Noproductimageavailable.png");
      const [file, setFile] = useState('');
    const[Firmfile,setFirmfile]=useState('');


    const ProfimgUpload = async (formData) => {
        await axios.post(`https://vcyyubbbt6.execute-api.ap-south-1.amazonaws.com/vitaran/upload-image`, formData)
            .then(res => {
                if(res.data.response_code===200){
                    setProfileImg(res.data.body.full_path)
                    let result = res.data.body.full_path.match(/[^\/]+$/)[0]
                    setForm({...form,Img:result.replace(/\s/g, "")});
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
    }, [file])


    const FirmimgUpload = async (formData) => {
        await axios.post(`https://vcyyubbbt6.execute-api.ap-south-1.amazonaws.com/vitaran/upload-image`, formData)
            .then(res => {
                if(res.data.response_code===200){
                    setFirmImg(res.data.body.full_path)
                    let result = res.data.body.full_path.match(/[^\/]+$/)[0]
                    setForm({...form,firmImg:result.replace(/\s/g, "")});
                }
                // console.log(res.data)
            })
            .catch(err => console.log(err.message))
    }


    const FirmUpload = (event) => {
        setFirmfile(event.target.files[0]);
    }

    React.useEffect(() => {
        const formData = new FormData();
        formData.append('file', Firmfile);
        if (Firmfile && Firmfile.length !== 0) {
            FirmimgUpload(formData)
        }

        console.log(formData)
    }, [Firmfile])



    let param = {
        "first_name":`${form.first}`,
        "last_name":`${form.last}`,
        "mobile":`${form.mobile}`,
        "zone":`${form.zone}`,
        "email":`${form.mail}`,
        "firm_name":`${form.firm}`,
        "address":`${form.address}`,
        "user_profile_img":`${form.Img}`,
        "firm_image":`${form.firmImg}`
    }


    const AddPartner = ()=>{
        // setShowAdd(false)
        dispatch(AddAdminPartner(param,setShowAdd))
    }

    console.log(param);
    return (
        <div className="AdminPartnerAddFormContainer">
            <div className="AdminPartnerAddFormContainerOne">

                <div className="AdminPartnerAddFormContainerOneTitleContainer">
                    <label className="AdminPartnerAddFormContainerOneTitle">Add Details Of Partner</label>
                </div>

                <div className="AdminPartnerAddFormContainerOneNameContainer">
                    <div className="AdminPartnerAddFormContainerOneNameWrapperFirst">
                        <div className="AdminPartnerAddFormContainerOneNameFirst">
                            <label>First Name</label>
                        </div>

                        <TextField variant="outlined" size="small" className={classes.SubtextField} value={form.first} name="first" onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} />
                    </div>
                    <div className="AdminPartnerAddFormContainerOneNameWrapperSecond">
                        <div className="AdminPartnerAddFormContainerOneNameSecond">
                            <label>Last Name</label>

                        </div>

                        <TextField variant="outlined" size="small" className={classes.SubtextField} name="last" onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} />
                    </div>
                </div>

                <div className="AdminPartnerAddFormContainerOneMobileContainer">
                    <div className="AdminPartnerAddFormContainerOneMobileWrapperFirst">
                        <label>Mobile</label>
                        <TextField variant="outlined" size="small" className={classes.SubtextField} name="mobile" onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} />
                    </div>
                    <div className="AdminPartnerAddFormContainerOneZoneWrapperSecond">
                        <div className="AdminPartnerAddFormContainerOneZoneSecond">
                            <label>Zone</label>
                        </div>

                        <FormControl variant="outlined" className={classes.formControl} size="small">

                            <Select
                                name="zone"
                                value={form.zone}
                                onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}

                            >
                                {
                                    state && state.ZoneList.map((item, index) => (
                                        <MenuItem value={item.zone_name}>{item.zone_name}</MenuItem>
                                    ))
                                }



                            </Select>
                        </FormControl>
                    </div>
                </div>

                <div className="AdminPartnerAddFormContainerOneMailContainer">
                    <label>Mail ID</label>
                    <TextField variant="outlined" size="small" className={classes.textField} name="mail" onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} />
                </div>


                <div className="AdminPartnerAddFormContainerOneFirmContainer">
                    <label>Firm Name</label>
                    <TextField variant="outlined" size="small" className={classes.textField} name="firm" onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} />
                </div>

                <div className="AdminPartnerAddFormContainerOneAddressContainer">
                    <label>Address</label>
                    <TextField variant="outlined" multiline row={3} className={classes.textField} name="address" onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} />
                </div>


                <div className="AdminPartnerAddFormContainerOneButtonContainer">
                    <BlueButtonTwo variant="contained" color="primary" onClick={AddPartner}>Add</BlueButtonTwo>


                    <BlueButtonOne variant="contained" onClick={() => setShowAdd(false)}>Cancel</BlueButtonOne>

                </div>
            </div>
            <div className="AdminPartnerAddFormContainerTwo">
                <div className="AdminPartnerAddFormContainerTwoImageContainer">
                    <img src={profileImg} alt="img" />
                </div>
                <input type="file" accept="image/*" name="image-upload" id="AdminPartnerProfAddImg" onChange={ProfUpload} />
                <div className="AdminPartnerAddFormProfImageContainer">
                    <label className="AdminPartnerAddFormProfImage" htmlFor="AdminPartnerProfAddImg">
                        Upload
                    </label>
                </div>


                <div className="AdminPartnerAddFormContainerTwoImageContainerTwo">
                    <img src={firmImg} alt="img" />
                </div>
                <input type="file" accept="image/*" name="image-upload" id="AdminPartnerFirmAddImg" onChange={FirmUpload} />
                <div className="AdminPartnerAddFormProfImageContainer">
                    <label className="AdminPartnerAddFormProfImage" htmlFor="AdminPartnerFirmAddImg">
                        Upload
                    </label>
                </div>
            </div>
        </div>
    )
}

export default AdminPartnerAddForm
