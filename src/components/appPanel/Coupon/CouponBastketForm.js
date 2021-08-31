import React, { useState } from 'react';
import './styles/form.scss';
import EditIcon from '@material-ui/icons/Edit';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useSelector, useDispatch } from 'react-redux';
import { SearchSku, addToBasket, UpdateBasket, RemoveBasket } from '../../../actions/appPanel/coupon';

import axios from 'axios'


const useStyles = makeStyles((theme) => ({
    textfield: {
        marginLeft: "15px",
        color: "black",
        width:"90%"
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 130,
    },
    Updatetextfield: {
        marginLeft: "15px",
        color: "black",
        width:300
    },
}))

const CouponBastketForm = ({ place }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [skuNameSearch, setSkuNameSearch] = useState('');
    const [skuName, setSkuName] = useState([]);
    const coupon = useSelector(state => state.couponMgt);
    const [productImg, setProductImg] = useState(`http://3.7.71.29:6001/imgs/Classic.jpg`);
    const [couponImg, setCouponImg] = useState(`http://3.7.71.29:6001/imgs/Classic.jpg`);
    const [file, setFile] = useState('');
    const [updateFile, setUpdateFile] = useState('');
    const [pickUpAdd, setPickUpAdd] = useState('');
    const [pickUpUpdate, setPickUpUpdate] = useState('');


    const [addForm, setAddForm] = useState({
        skuname: ``,
        MRP: '',
        coins:"",
        skuimage: '',

    })

    let PickUpAddDuration = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
    let PickUpUpdateDuration = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];



    const paramOne = {
        "zone": `${place}`,
        "skuname": `${addForm.skuname}`,
        "mrp": `${addForm.MRP}`,
        "pickup_duration": `${pickUpAdd}`,
        "coins":`${addForm.coins}`
    }


    const [updateForm, setUpdateForm] = useState({
        skuname: '',
        mrp: '',
        pickup_duration: "",
        basket_id: "",
        skuimage: ""
    })


    const paramTwo = {

        "skuname": `${updateForm.skuname}`,
        "mrp": `${updateForm.mrp}`,
        "zone": `${place}`,
        "basket_id": `${updateForm.basket_id}`,
        "pickup_duration": `${pickUpUpdate}`,
        coins:`${updateForm.coins}`

    }


    console.log(paramTwo)


    const paramThree = {
        "basket_id": `${updateForm.basket_id}`,
        "zone": `${place}`
    }





    React.useEffect(() => {
        if (coupon.skuNameList) {
            setSkuName(coupon.skuNameList);
            // console.log(coupon.skuNameList)
        }
    }, [coupon.skuNameList]);

    React.useEffect(() => {

        dispatch(SearchSku(skuNameSearch, place));

    }, [skuNameSearch])

    React.useEffect(() => {
        if (coupon.skuList.length !== 0) {
            setAddForm({
                ...addForm,
                skuname: `${coupon.skuList[0].sku_name}`,
                skuimage: `${coupon.skuList[0].sku_image}`,
                MRP: `${coupon.skuList[0].unit_price}`

            });
            setProductImg(coupon.skuList[0].sku_image);


        }
    }, [coupon.skuList])



    React.useEffect(() => {
        if (coupon.couponBasketList.length !== 0) {
            setUpdateForm({
                ...updateForm,
                skuname: coupon.couponBasketDetail.sku_name,
                mrp: coupon.couponBasketDetail.unit_price,
                pickup_duration: coupon.couponBasketDetail.pickup_duration,
                skuimage: coupon.couponBasketDetail.sku_image,
                basket_id: coupon.couponBasketDetail.basket_id,
                coins: coupon.couponBasketDetail.coins_used

            });
            setPickUpUpdate(coupon.couponBasketDetail.pickup_duration)

            setCouponImg(`${coupon.couponBasketDetail.sku_image}`)
        }

    }, [coupon.couponBasketDetail])


    ////////////////////Add//////////////////////////////////////////////////


    //////////////////////////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////




    const handleAdd = () => {
        dispatch(addToBasket(paramOne));
    }

    const handleUpdate = () => {
        dispatch(UpdateBasket(paramTwo));
        console.log(paramTwo)
    }

    const handleRemove = () => {
        dispatch(RemoveBasket(paramThree));
    }

    const handleAddChange = (event) => {
        setPickUpAdd(event.target.value);
    };

    const handleUpdateChange = (event) => {
        setPickUpUpdate(event.target.value);
    };

    console.log(paramTwo)

    return (
        <div className="FormWrapper">
            <div className="updateForm">
                <div className="imgContainer">
                    <div className="UpdateFormImageCouponMgt">
                        <img className="image" src={couponImg} alt="inmg" />
                    </div>

                    <div className="UpdateFormPickUpCouponMgt">
                        <FormControl required className={classes.formControl} style={{ minWidth: "220", maxWidth: "200" }}>
                            <InputLabel >PickUp Duration</InputLabel>
                            <Select

                                value={pickUpUpdate}
                                onChange={handleUpdateChange}
                                style={{ minWidth: "120" }}
                            >
                                {
                                    PickUpUpdateDuration.map((item, index) => (
                                        <MenuItem key={index} value={item}>{item} Days</MenuItem>
                                    ))
                                }



                            </Select>

                        </FormControl>
                    </div>



                </div>

                <div className="formSection">
                    <div className="sectionContainer">

                        <div className="nameSection">
                            <label>Name:</label> <div className="textfield"><TextField variant="outlined" value={updateForm.skuname} className={classes.Updatetextfield} size="small" name="skuname" /></div>
                        </div>

                        <div className="nameSection">
                            <label>Price:</label><div className="textfield"><TextField variant="outlined" value={updateForm.mrp} className={classes.Updatetextfield} size="small" name="mrp" onChange={(e) => setUpdateForm({ ...updateForm, [e.target.name]: e.target.value })} /></div>
                        </div>

                        <div className="nameSection">
                            <label>Redeemable Coins :</label>
                            <div className="textfield"><TextField variant="outlined" value={updateForm.coins} className={classes.Updatetextfield} name="coins" size="small" onChange={(e) => setUpdateForm({ ...updateForm, [e.target.name]: e.target.value })} /></div>
                        </div>
                    </div>



                </div>

                <div className="button">
                    <button className="update" type="button" onClick={handleUpdate}>Update</button>
                    <button className="remove" type="button" onClick={handleRemove}>Remove</button>

                </div>




            </div>
            <div className="addForm">
                <div className="imgContainer">
                    <div className="AddFormImageCouponMgt">
                        <img className="image" src={productImg} alt="inmg" />
                    </div>

                    <div className="AddFormPickUpCouponMgt">
                        <FormControl required className={classes.formControl} style={{ minWidth: "220", maxWidth: "200" }}>
                            <InputLabel >PickUp Duration</InputLabel>
                            <Select

                                value={pickUpAdd}
                                onChange={handleAddChange}
                                style={{ minWidth: "120" }}
                            >
                                {
                                    PickUpAddDuration.map((item, index) => (
                                        <MenuItem key={index} value={item}>{item} Days</MenuItem>
                                    ))
                                }



                            </Select>

                        </FormControl>
                    </div>


                </div>

                <div className="formSection">
                    <div className="sectionContainer">
                        <div className="nameSection">
                            <div className="nameSectionLabel"><label className="search">Search Sku:</label></div>

                            <div className="textfield">
                                <Autocomplete

                                    options={skuName}
                                    getOptionLabel={(option) => option}

                                    renderInput={(params) => <TextField  {...params} value={skuNameSearch} style={{  marginLeft: "10px" }} variant="outlined" onSelect={(e) => setSkuNameSearch(e.target.value)} />}
                                />
                            </div>
                        </div>
                        <div className="nameSection">
                            <div className="nameSectionLabel">
                                <label>Name:</label>
                            </div>
                            <div className="textfield"><TextField size="small" variant="outlined" value={addForm.skuname} className={classes.textfield} name="skuname" onChange={(e) => setAddForm({ ...addForm, [e.target.name]: e.target.value })} /></div>
                        </div>

                        <div className="nameSection">
                            <div className="nameSectionLabel">
                                <label>Price:</label>
                            </div>
                            <div className="textfield"><TextField size="small" variant="outlined" value={addForm.MRP} className={classes.textfield} name="MRP" onChange={(e) => setAddForm({ ...addForm, [e.target.name]: e.target.value })} /></div>
                        </div>


                        <div className="nameSection">
                            <div className="nameSectionLabel">
                                <label>Redeemable Coins:</label>
                            </div>
                            <div className="textfield"><TextField size="small" variant="outlined" value={addForm.coins} className={classes.textfield} name="coins" onChange={(e) => setAddForm({ ...addForm, [e.target.name]: e.target.value })} /></div>
                        </div>

                        
                    </div>



                </div>

                <div className="button">
                    <button type="button" onClick={handleAdd}>Add</button>

                </div>




            </div>
        </div>
    )
}

export default CouponBastketForm
