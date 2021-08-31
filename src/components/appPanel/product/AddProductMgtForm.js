import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';
import './styles/AddProductMgtForm.scss';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { red, purple } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Button } from '@material-ui/core'
import { AddProductSku } from '../../../actions/appPanel/ProductMgt';



const RedCheckbox = withStyles({
    root: {
        color: "#bdbdbd",
        '&$checked': {
            color: red[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const RedButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: red[700],
        '&:hover': {
            backgroundColor: red[800],
        },
        paddingLeft: "30px",
        paddingRight: "30px"
    },
}))(Button);

const useStyles = makeStyles({
    button: {
        marginLeft: "10px"
    },
    buttonContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        padding: "15px"
    }
})

const AddProductMgtForm = ({ zone, showAdd, setShowAdd }) => {
    const classes = useStyles();
    const [q, setQ] = useState('');
    const [value, setValue] = useState(0);
    const [formdata, setFormdata] = useState({
        skuname: "",
        unitprice: "",
        skuimage: "",
        incentive: "",
        producttext: "",
        categories: "",
        company: "",
        productname: ``,
        retailerprice: "",
        wholesellerprice: "",
        distributorprice: "",

        type: "Add"
    })
const ProductMgt = useSelector(state => state.productMgt);
    const dispatch = useDispatch();
    const [productImg, setProductImg] = useState(`http://3.7.71.29:6001/imgs/Noproductimageavailable.png`);
    const [state, setState] = useState({
        other_product: false,
        new_launch: false,
        popular_product: false
    });

    const [cat, setCat] = useState({
        popular_company: false,
        popular_category:false
    })

    const [file, setFile] = useState('');
    

    const initialState = { skuname: "", skuimage: "", skurating: "", unitprice: "", producttext: "", categories: "", company: "", productname: ``, retailerprice: "", riderprice: "", wholesellerprice: "", distributorprice: "", incentive: "" }

    useEffect(() => {
        if (ProductMgt.Product) {

            setFormdata({
                ...formdata,
                productname: ProductMgt.SkuDetail && ProductMgt.SkuDetail.productname,
                categories: ProductMgt.SkuDetail && ProductMgt.SkuDetail.categories,
                company: ProductMgt.SkuDetail && ProductMgt.SkuDetail.company,

            })

        }
    }, [ProductMgt.Product])


    const handleCat = (event) => {
        setCat({ ...cat, [event.target.name]: event.target.checked });
    }


    const handleChange = (event) => {
        if (event.target.name === 'new_launch') {
            setState({
                ...state,
                new_launch: true,
                popular_product: false,
                other_product: false
            })
            setQ('new_launch')
        }
        else if (event.target.name === 'other_product') {
            setState({
                ...state,
                new_launch: false,
                popular_product: false,
                other_product: true
            })
            setQ('other_product')
        }
        else if (event.target.name === 'popular_product') {
            setState({
                ...state,
                new_launch: false,
                popular_product: true,
                other_product: false
            })
            setQ('popular_product')
        }
        else {
            console.log('ss')
        }
    };

    const imgUpload = async (formData) => {
        await axios.post(`http://3.7.71.29:8002/VitaranSDK/uploadImage`, formData)
            .then(res => {
                setFormdata({ ...formdata, skuimage: res.data });

                console.log('success');
                setProductImg(`http://3.7.71.29:6001/imgs/${res.data}`);
            })
            .catch(err => console.log(err.message))
    }




    const imgSelect = (event) => {
        setFile(event.target.files[0]);
    }

    React.useEffect(() => {
        const formData = new FormData();
        formData.append('file', file);
        console.log({formData})
        imgUpload(formData)
    }, [file])



    const param = {
        "skuname": `${formdata.skuname}`,
        "productname": `${formdata.productname}`,
        "skuimage": `${formdata.skuimage}`,
        "producttext": `${formdata.producttext}`,
        "categories": `${formdata.categories}`,
        "unitprice": `${formdata.unitprice}`,
        "company": `${formdata.company}`,
        "zone": `${zone}`,
        "retailerprice": `${formdata.retailerprice}`,
        "wholesellerprice": `${formdata.wholesellerprice}`,
        "distributorprice": `${formdata.distributorprice}`,
        "scheme": `${formdata.incentive}`,
        "popular_company": `${cat.popular_company}`,
        "popular_category": `${cat.popular_category}`,
        "producttype": `${q}`,
        "type": "Add"
    }


    // console.log(state);
    // console.log(formdata);
    // console.log(param)


    const handleSubmit = () => {
        dispatch(AddProductSku(param, setShowAdd));
    }

    useEffect(() => {
        if (ProductMgt.AddSuccess) {

            setFormdata(
                initialState
            )
        }

        console.log(formdata)
    }, [ProductMgt.AddSuccess])
    // console.log(param)

    return (
        <div className="ProductMgtdisplayContainerAdd">
            <div className="ProductMgtfirstAdd">

                <div className="ProductMgtimageContainerAdd">
                    <div className="ProductMgtimageWrapperAdd">
                        <img src={productImg} alt="product img" />
                        <div className="image-upload">
                            <label htmlFor="AddImgProductMgt"><EditIcon /></label>
                            <input accept="image/*" name="image-upload" id="AddImgProductMgt" onChange={imgSelect} type="file" />
                        </div>
                    </div>
                </div>


                <div className="ProductMgtdetailAdd">
                    <div className="ProductMgtSkuNameContainerAdd">
                        <div className="ProductMgtskuNameAddWrapper">
                            <label className="ProductMgtskuNameAdd">Sku Name:</label>
                        </div>

                        <div className="TextAddSkuNameProductMgt"><TextField size="small" variant="outlined" name="skuname" value={formdata.skuname} onChange={(e) => setFormdata({ ...formdata,skuname: e.target.value })} /></div>

                    </div>






                    <div className="ProductMgtpriceContainerAdd" style={{ marginTop: "10px" }}>
                        <div className="ProductMgtskuPriceTitleAddWrapper">
                            <label className="ProductMgtskuPriceTitleAdd">Price :</label>
                        </div>

                        <div className="TextAddPriceProductMgt"><TextField size="small" variant="outlined" name="unitprice" value={formdata.unitprice} onChange={(e) => setFormdata({ ...formdata,unitprice: e.target.value })} /></div>
                    </div>

                    <div className="ProductMgtDescriptionContainerAdd">
                        <div className="ProductMgtskuDescriptionTitleAddWrapper">
                            <label className="ProductMgtskuDescriptionTitleAdd">Description :</label>
                        </div>

                        <div className="TextAddDescriptionProductMgt"><TextField size="small" variant="outlined" multiline rows={3} style={{ width: "80%", marginLeft: "-2px" }} name="producttext" value={formdata.producttext} onChange={(e) => setFormdata({ ...formdata, producttext: e.target.value })} /></div>
                    </div>

                    <div className="ProductMgtIncentiveContainerAdd">
                        <div className="ProductMgtskuIncentiveTitleAddWrapper">
                            <label className="ProductMgtskuIncentiveTitleAdd">Incentive :</label>
                        </div>

                        <div className="TextAddIncentiveProductMgt"><TextField size="small" variant="outlined" name="incentive" multiline rows={3} style={{ width: "80%", marginLeft: "-2px" }} value={formdata.incentive} onChange={(e) => setFormdata({ ...formdata, [e.target.name]: e.target.value })} /></div>
                    </div>


                </div>




            </div>
            <div className="ProductMgtsecondAdd">

                <div className="ProductMgtpopularContainerAdd">

                    <FormGroup row>
                        <FormControlLabel
                            control={<RedCheckbox
                                checked={cat.popular_company}
                                onChange={handleCat} name="popular_company" />}
                            label="popular_company"
                        />

                        <FormControlLabel
                            control={
                                <RedCheckbox
                                    checked={cat.popular_category}
                                    onChange={handleCat}
                                    name="popular_category"

                                />
                            }
                            label="Popular Category"
                        />

                    </FormGroup>


                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <RedCheckbox
                                    checked={state.other_product}
                                    onChange={handleChange}
                                    name="other_product"
                                    color="primary"
                                />
                            }
                            label="Other Product"
                        />

                        <FormControlLabel
                            control={<RedCheckbox checked={state.new_launch} onChange={handleChange} name="new_launch" />}
                            label="New Launch"
                        />
                        <FormControlLabel
                            control={<RedCheckbox checked={state.popular_product} onChange={handleChange} name="popular_product" />}
                            label="Popular Product"
                        />

                    </FormGroup>

                </div>


                <div className="ProductMgtbottomContainerAdd">
                    <div className="ProductMgtpropDetailsAdd">
                        <div className="ProductMgtpropDetailsListAdd">
                            <div className="ProductMgtpropDetailsTitleAddWrapper">
                                <label className="ProductMgtpropDetailsTitleAdd">Category :</label>
                            </div>

                            <div className="TextAddCategoryProductMgt"><TextField size="small" variant="outlined" name="categories" value={formdata.categories} onChange={(e) => setFormdata({ ...formdata, [e.target.name]: e.target.value })} /></div>

                        </div>
                        <div className="ProductMgtpropDetailsListAdd">
                            <div className="ProductMgtpropDetailsTitleAddWrapper">
                                <label className="ProductMgtpropDetailsTitleAdd">Product :</label>
                            </div>

                            <div className="ProductMgtpropDetailsValueAddWrapper">
                                <label className="ProductMgtpropDetailsValueAdd">{formdata.productname}</label>
                            </div>


                        </div>
                        <div className="ProductMgtpropDetailsListAdd">
                            <div className="ProductMgtpropDetailsTitleAddWrapper">
                                <label className="ProductMgtpropDetailsTitleAdd">Company :</label>
                            </div>

                            <div className="TextAddCompanyProductMgt"><TextField size="small" variant="outlined" name="company" value={formdata.company} onChange={(e) => setFormdata({ ...formdata, [e.target.name]: e.target.value })} /></div>

                        </div>
                        <div className="ProductMgtpropDetailsListAdd">
                            <div className="ProductMgtpropDetailsTitleAddWrapper">
                                <label className="ProductMgtpropDetailsTitleAdd">Brand SkuName :</label>
                            </div>

                            <div className="TextAddBrandSkuProductMgt"><TextField size="small" variant="outlined" value={formdata.skuname} /></div>

                        </div>
                    </div>
                    <div className="ProductMgtpriceDetailsAdd">
                        <div className="ProductMgtpriceDetailsListAdd">
                            <div className="ProductMgtpriceDetailsTitleAddWrapper">
                                <label className="ProductMgtpriceDetailsTitleAdd">Retailer:</label>
                            </div>

                            <div className="TextAddRetailerProductMgt"><TextField size="small" variant="outlined" name="retailerprice" value={formdata.retailerprice} onChange={(e) => setFormdata({ ...formdata, [e.target.name]: e.target.value })} /></div>

                        </div>
                      
                        <div className="ProductMgtpriceDetailsListAdd">
                            <div className="ProductMgtpriceDetailsTitleAddWrapper">
                                <label className="ProductMgtpriceDetailsTitleAdd">Wholeseller:</label>
                            </div>
                            <div className="TextAddWholesellerProductMgt"><TextField size="small" variant="outlined" name="wholesellerprice" value={formdata.wholesellerprice} onChange={(e) => setFormdata({ ...formdata, [e.target.name]: e.target.value })} /></div>

                        </div>
                        <div className="ProductMgtpriceDetailsListAdd">
                            <div className="ProductMgtpriceDetailsTitleAddWrapper">
                                <label className="ProductMgtpriceDetailsTitleAdd">Distributor:</label>
                            </div>
                            <div className="TextAddDistributorProductMgt"><TextField size="small" variant="outlined" name="distributorprice" value={formdata.distributorprice} onChange={(e) => setFormdata({ ...formdata, [e.target.name]: e.target.value })} /></div>

                        </div>
                    </div>
                </div>
                <div className={classes.buttonContainer}><RedButton id="ProductMgtAddButton" className={classes.button} onClick={handleSubmit} variant="contained" color="primary">ADD</RedButton><Button className={classes.button} variant="contained" onClick={() => setShowAdd(false)} >Cancel</Button></div>
            </div>
        </div>
    )
}

export default AddProductMgtForm
