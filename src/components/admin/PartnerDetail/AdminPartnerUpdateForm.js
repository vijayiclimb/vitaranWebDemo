import React, { useState } from 'react';
import './styles/AdminPartnerUpdateForm.scss'
import { Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Prof from '../../../images/Rectangle 485.png';
import { red, purple, blue } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import Firm from '../../../images/Rectangle 308.png';
import { useSelector, useDispatch } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios'
import { RemoveAdminPartner, UpdateAdminPartner } from '../../../actions/Admin/AdminPartnerMgt';


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
    formControl: {
        width: "85%",
        borderRadius: "5px",
        backgroundColor: "#F0F0F0"

    },
    selectEmpty: {

    },
});

const AdminPartnerUpdateForm = ({ setShowUpdate, showUpdate }) => {
    const classes = useStyles();
    const state = useSelector(state => state.partner);
    const [zone, setZone] = useState('');

    const dispatch = useDispatch();
    const [form, setForm] = React.useState({})
    const [profileImg, setProfileImg] = useState("");
    const [firmImg, setFirmImg] = useState("");

    // res = deals.dealsDetails && deals.dealsDetails.DealImage && deals.dealsDetails.DealImage.match(/[^\/]+$/)[0];
    // fin = res.replace(/\s/g, "");

    React.useEffect(() => {
        if (state && state.Details !== 'undefined') {
            setForm(state.Details)
            setForm({
                ...form,
               
                Firm_name: `${state.Details.Firm_name}`,
                Mobile: `${state.Details.Mobile}`,
                address: `${state.Details.address}`,
                email: `${state.Details.email}`,
                first_name: `${state.Details.first_name}`,
                last_name: `${state.Details.last_name}`,
                partner_id: `${state.Details.partner_id}`,
                 Firm_image: `${state.Details.Firm_image.match(/[^\/]+$/)[0]}`,
            profile_img: `${state.Details.profile_img.match(/[^\/]+$/)[0]}`,
                zone: `${state.Details.zone}`,
            })
         

        //       if(state.Details.Firm_image && state.Details.Firm_image.length!==0){
        //            let res = state.Details.Firm_image.match(/[^\/]+$/)[0];
        //            let finalres = res.replace(/\s/g, "");
        //            setForm({
        //                ...form,
        //                Firm_image:finalres
        //            })
                  
        //       }

        //       if(state.Details.profile_img && state.Details.profile_img.length!==0){
        //         let res = state.Details.profile_img.match(/[^\/]+$/)[0];
        //         let finalres = res.replace(/\s/g, "");
        //         setForm({
        //             ...form,
        //             profile_img:finalres
        //         })
               
        //    }


            setProfileImg(state.Details.profile_img);
            setFirmImg(state.Details.Firm_image);
            setZone(state.Details.zone.toString());
        }
    }, [state.Details])

    // console.log(form);

    const [file, setFile] = useState('');
    const [Firmfile, setFirmfile] = useState('');


    const ProfimgUpload = async (formData) => {
        await axios.post(`https://vcyyubbbt6.execute-api.ap-south-1.amazonaws.com/vitaran/upload-image`, formData)
            .then(res => {
                if (res.data.response_code === 200) {
                    setProfileImg(res.data.body.full_path)
                    let result = res.data.body.full_path.match(/[^\/]+$/)[0]
                    setForm({ ...form, profile_img: result.replace(/\s/g, "") });
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
                if (res.data.response_code === 200) {
                    setFirmImg(res.data.body.full_path)
                    let result = res.data.body.full_path.match(/[^\/]+$/)[0]
                    setForm({ ...form, Firm_image: result.replace(/\s/g, "") });
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
        "partner_id": `${form.partner_id}`,
        "first_name": `${form.first_name}`,
        "last_name": `${form.last_name}`,
        "mobile": `${form.Mobile}`,
        "zone": `${zone}`,
        "email": `${form.email}`,
        "firm_name": `${form.Firm_name}`,
        "address": `${form.address}`,
        "user_img": `${form.profile_img}`,
        "firm_img": `${form.Firm_image}`
    }


    


    const UpdatePartner = () => {
        dispatch(UpdateAdminPartner(param, setShowUpdate))
    }

    const RemovePartner =()=>{
        dispatch(RemoveAdminPartner(form.partner_id,setShowUpdate))
    }

 

    return (
        <div className="AdminPartnerUpdateFormContainer">
            <div className="AdminPartnerUpdateFormContainerOne">

                <div className="AdminPartnerUpdateFormContainerOneTitleContainer">
                    <label className="AdminPartnerUpdateFormContainerOneTitle">Update Details Of Partner</label>
                </div>

                <div className="AdminPartnerUpdateFormContainerOneNameContainer">
                    <div className="AdminPartnerUpdateFormContainerOneNameWrapperFirst">
                        <div className="AdminPartnerUpdateFormContainerOneNameFirst">
                            <label>First Name</label>
                        </div>

                        <TextField variant="outlined" size="small" value="satish" className={classes.SubtextField} name="first_name" value={form && form.first_name} onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} />
                    </div>
                    <div className="AdminPartnerUpdateFormContainerOneNameWrapperSecond">
                        <div className="AdminPartnerUpdateFormContainerOneNameSecond">
                            <label>Last Name</label>

                        </div>

                        <TextField variant="outlined" size="small" className={classes.SubtextField} name="last_name" value={form && form.last_name} onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} />
                    </div>
                </div>

                <div className="AdminPartnerUpdateFormContainerOneMobileContainer">
                    <div className="AdminPartnerUpdateFormContainerOneMobileWrapperFirst">
                        <label>Mobile</label>
                        <TextField variant="outlined" size="small" className={classes.SubtextField} name="Mobile" value={form && form.Mobile} onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} />
                    </div>
                    <div className="AdminPartnerUpdateFormContainerOneZoneWrapperSecond">
                        <div className="AdminPartnerUpdateFormContainerOneZoneSecond">
                            <label>Zone</label>
                        </div>

                        <FormControl variant="outlined" className={classes.formControl} size="small">

                            <Select
                                name="zone"
                                value={zone}
                                onChange={(e) => {
                                    setForm({ ...form, [e.target.name]: e.target.value });

                                    setZone(e.target.value)
                                }}

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

                <div className="AdminPartnerUpdateFormContainerOneMailContainer">
                    <label>Mail ID</label>
                    <TextField variant="outlined" size="small" className={classes.textField} name="email" value={form && form.email} onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} />
                </div>


                <div className="AdminPartnerUpdateFormContainerOneFirmContainer">
                    <label>Firm Name</label>
                    <TextField variant="outlined" size="small" className={classes.textField} name="Firm_name" value={form && form.Firm_name} onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} />
                </div>

                <div className="AdminPartnerUpdateFormContainerOneUpdateressContainer">
                    <label>Address</label>
                    <TextField variant="outlined" multiline row={3} className={classes.textField} name="address" value={form && form.address} onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} />
                </div>


                <div className="AdminPartnerUpdateFormContainerOneButtonContainer">
                    <BlueButtonTwo variant="contained" color="primary" onClick={UpdatePartner}>Update</BlueButtonTwo>
                    <Button variant="contained" style={{ textTransform: "none", fontSize: "14px" }} onClick={RemovePartner}>Remove</Button>
                    <BlueButtonOne variant="contained" onClick={() => setShowUpdate(false)}>Cancel</BlueButtonOne>
                </div>
            </div>
            <div className="AdminPartnerUpdateFormContainerTwo">
                <div className="AdminPartnerUpdateFormContainerTwoImageContainer">
                    <img src={profileImg} alt="img" />
                </div>
                <input type="file" accept="image/*" name="image-upload" id="AdminPartnerProfUpdateImg" onChange={ProfUpload} />
                <div className="AdminPartnerUpdateFormProfImageContainer">
                    <label className="AdminPartnerUpdateFormProfImage" htmlFor="AdminPartnerProfUpdateImg">
                        Upload
                    </label>
                </div>

                <div className="AdminPartnerUpdateFormContainerTwoImageContainerTwo">
                    <img src={firmImg} alt="img" />
                </div>
                <input type="file" accept="image/*" name="image-upload" id="AdminPartnerFirmUpdateImg" onChange={FirmUpload} />
                <div className="AdminPartnerUpdateFormProfImageContainer">
                    <label className="AdminPartnerUpdateFormProfImage" htmlFor="AdminPartnerFirmUpdateImg">
                        Upload
                    </label>
                </div>
            </div>
        </div>
    )
}

export default AdminPartnerUpdateForm
