import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';
import './styles/UpdateProductMgtForm.scss';
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
import { UpdateProductSku } from '../../../actions/appPanel/ProductMgt';


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



const UpdateProductMgtForm = ({ edit, setEdit, zone }) => {
    const classes = useStyles();
    
    const [value, setValue] = useState(0);
    const [formdata, setFormdata] = useState({
        skuname: "",
        skuimage: "",
        unitprice: "",
        producttext: "",
        categories: "",
        company: "",
        productname: "",
        retailerprice: "",
       
        wholesellerprice: "",
        distributorprice: "",
        scheme: "",
        type: "Update"
    })
    const dispatch = useDispatch();
    const ProductMgt = useSelector(state => state.productMgt);
    const [productImg, setProductImg] = useState(`http://3.7.71.29:6001/imgs/${ProductMgt.SkuDetail && ProductMgt.SkuDetail.skuimage}`);
    const [state, setState] = useState({
 
        other_product: false,
        new_launch: false,
        popular_product: false
    });

    const [cat,setCat]=useState({
        popular_company: ProductMgt.SkuDetail.popular_company === true ? true : false,
        popular_category: ProductMgt.SkuDetail.popular_category === true ? true : false,
    })

    const [file, setFile] = useState('');
    const [q, setQ] = useState('');





    







    useEffect(() => {
        if (ProductMgt.SkuDetail) {
            console.log(ProductMgt.SkuDetail)

            setFormdata(ProductMgt.SkuDetail);
            setProductImg(`http://3.7.71.29:6001/imgs/${ProductMgt.SkuDetail && ProductMgt.SkuDetail.skuimage}`);
            setCat({
                ...cat,
                popular_company: ProductMgt.SkuDetail.popular_company === true ? true : false,
                popular_category: ProductMgt.SkuDetail.popular_category === true ? true : false,


                // other_product: ProductMgt.SkuDetail && ProductMgt.SkuDetail.other_product === true ? true : false,
                // new_launch: ProductMgt.SkuDetail && ProductMgt.SkuDetail.new_launch === true ? true : false,
                // popular_product: ProductMgt.SkuDetail && ProductMgt.SkuDetail.popular_product === true ? true : false,

            })

            if (ProductMgt.SkuDetail.producttype === "new_launch") {
                setState({
                    ...state,
                    new_launch: true,
                    popular_product: false,
                    other_product: false
                });
                setQ('new_launch')
            }
            else if (ProductMgt.SkuDetail.producttype === "other_product") {
                setState({
                    ...state,
                    new_launch: false,
                    popular_product: false,
                    other_product: true
                });
                setQ('other_product')
            }
            else if (ProductMgt.SkuDetail.producttype === "popular_product") {
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



        }
    }, [ProductMgt.SkuDetail])

    const handleCat=(event)=>{
        setCat({ ...cat, [event.target.name]: event.target.checked });
    }


    const handleChange = (event) => {
        console.log(event.target.name)

        if (event.target.name==='new_launch') {
            setState({
                ...state,
                new_launch: true,
                popular_product: false,
                other_product: false
            })
            setQ('new_launch')
        }
        else if (event.target.name==='other_product') {
            setState({
                ...state,
                new_launch: false,
                popular_product: false,
                other_product: true
            })
            setQ('other_product')
        }
        else if (event.target.name==='popular_product') {
            setState({
                ...state,
                new_launch: false,
                popular_product: true,
                other_product: false
            })
            setQ('popular_product')
        }
      else{
          console.log('s')
      }

        
        
    };

    const imgUpload = async (formData) => {
        await axios.post(`http://3.7.71.29:6001/VitaranSDK/uploadImage`, formData)
            .then(res => {
                setFormdata({ ...formdata, skuimage: res.data });

                console.log(res.data);
                setProductImg(`http://3.7.71.29:6001/imgs/${res.data}`);
            })
            .catch(err => console.log(err.message))
    }



    console.log(ProductMgt.SkuDetail.skuimage)

    const imgSelect = (event) => {
        setFile(event.target.files[0]);
    }

    React.useEffect(() => {
        const formData = new FormData();
        formData.append('file', file);
        console.log(formData)
        imgUpload(formData)
    }, [file])





    const param = {
        "skuname": `${formdata.skuname}`,
        "productname": `${formdata.productname}`,
        "skuimage": `${formdata.skuimage}`,
        "producttext": `${formdata.producttext }`,
        "categories": `${formdata.categories}`,
        "unitprice": `${formdata.unitprice}`,
        "company": `${formdata.company}`,
        "zone": `${zone}`,
        "retailerprice": `${formdata.retailerprice}`,
        "wholesellerprice": `${formdata.wholesellerprice}`,
        "distributorprice": `${formdata.distributorprice}`,
        "scheme": `${formdata.scheme }`,
        "popular_company": `${cat.popular_company}`,
        "popular_category": `${cat.popular_category}`,
        "producttype": `${q}`,
        "type": "Update"
    }

   


    console.log(param);
    console.log(formdata);
    // console.log(state);
    // console.log(q);
    // console.log(cat)
    return (
        <div className="ProductMgtdisplayContainerUpdate">
            <div className="ProductMgtfirstUpdate">

                <div className="ProductMgtimageContainerUpdate">
                    <div className="ProductMgtimageWrapperUpdate">
                        <img src={productImg} alt="product img" />
                        <div className="image-upload">
                            <label htmlFor="UpdateImgProductMgt"><EditIcon /></label>
                            <input accept="image/*" name="image-upload" id="UpdateImgProductMgt" onChange={imgSelect} type="file" />
                        </div>
                    </div>
                </div>


                <div className="ProductMgtdetailUpdate">
                    <div className="ProductMgtSkuNameContainerUpdate">
                        <label className="ProductMgtskuNameUpdate">{formdata.skuname}</label>


                    </div>



                    <div className="ProductMgtpriceContainerUpdate">
                        <div className="ProductMgtskuPriceTitleUpdateWrapper">
                            <label className="ProductMgtskuPriceTitleUpdate">Price :</label>
                        </div>

                        <div className="TextUpdatePriceProductMgt"><TextField size="small" variant="outlined" name="unitprice" value={formdata.unitprice} onChange={(e) => setFormdata({ ...formdata, [e.target.name]: e.target.value })} /></div>
                    </div>

                    <div className="ProductMgtDescriptionContainerUpdate">
                        <div className="ProductMgtskuDescriptionTitleUpdateWrapper">
                            <label className="ProductMgtskuDescriptionTitleUpdate">Description :</label>
                        </div>

                        <div className="TextUpdateDescriptionProductMgt"><TextField size="small" variant="outlined" multiline rows={3} style={{ width: "80%", marginLeft: "-2px" }} name="producttext" value={formdata.producttext} onChange={(e) => setFormdata({ ...formdata, [e.target.name]: e.target.value })} /></div>
                    </div>

                    <div className="ProductMgtIncentiveContainerUpdate">
                        <div className="ProductMgtskuIncentiveTitleUpdateWrapper">
                            <label className="ProductMgtskuIncentiveTitleUpdate">Incentive :</label>
                        </div>

                        <div className="TextUpdateIncentiveProductMgt"><TextField size="small" variant="outlined" multiline rows={3} style={{ width: "80%", marginLeft: "-2px" }} name="scheme" value={formdata.scheme} onChange={(e) => setFormdata({ ...formdata, [e.target.name]: e.target.value })} /></div>
                    </div>


                </div>




            </div>
            <div className="ProductMgtsecondUpdate">

                <div className="ProductMgtpopularContainerUpdate">

                
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


                <div className="ProductMgtbottomContainerUpdate">
                    <div className="ProductMgtpropDetailsUpdate">
                        <div className="ProductMgtpropDetailsListUpdate">
                            <div className="ProductMgtpropDetailsTitleUpdateWrapper">
                                <label className="ProductMgtpropDetailsTitleUpdate">Category :</label>
                            </div>
                            <div className="TextUpdateCategoryProductMgt"><TextField size="small" variant="outlined" name="categories" value={formdata.categories} onChange={(e) => setFormdata({ ...formdata, [e.target.name]: e.target.value })} /></div>

                        </div>
                        <div className="ProductMgtpropDetailsListUpdate">
                            <div className="ProductMgtpropDetailsTitleUpdateWrapper">
                                <label className="ProductMgtpropDetailsTitleUpdate">Product :</label>
                            </div>
                            <div className="TextUpdateCategoryProductMgt">
                                <label className="ProductMgtpropDetailsValueUpdate">{formdata.productname}</label>
                            </div>

                        </div>
                        <div className="ProductMgtpropDetailsListUpdate">
                            <div className="ProductMgtpropDetailsTitleUpdateWrapper">
                                <label className="ProductMgtpropDetailsTitleUpdate">Company :</label>
                            </div>
                            <div className="TextUpdateCompanyProductMgt"><TextField size="small" variant="outlined" name="company" value={formdata.company} onChange={(e) => setFormdata({ ...formdata, [e.target.name]: e.target.value })} /></div>

                        </div>
                        <div className="ProductMgtpropDetailsListUpdate">
                            <div className="ProductMgtpropDetailsTitleUpdateWrapper">
                                <label className="ProductMgtpropDetailsTitleUpdate">Brand SkuName :</label>
                            </div>
                            <div className="TextUpdateBrandSkuProductMgt"> <label className="ProductMgtBrandSkuValueUpdate">{formdata.skuname}</label></div>

                        </div>
                    </div>
                    <div className="ProductMgtpriceDetailsUpdate">
                        <div className="ProductMgtpriceDetailsListUpdateUpdate">
                            <div className="ProductMgtpriceDetailsTitleUpdateWrapper">
                                <label className="ProductMgtpriceDetailsTitleUpdate">Retailer:</label>
                            </div>

                            <div className="TextUpdateRetailerProductMgt"><TextField size="small" variant="outlined" name="retailerprice" value={formdata.retailerprice} onChange={(e) => setFormdata({ ...formdata, [e.target.name]: e.target.value })} /></div>

                        </div>

                        <div className="ProductMgtpriceDetailsListUpdateUpdate">
                            <div className="ProductMgtpriceDetailsTitleUpdateWrapper">
                                <label className="ProductMgtpriceDetailsTitleUpdate">Wholeseller:</label>
                            </div>
                            <div className="TextUpdateWholesellerProductMgt"><TextField size="small" variant="outlined" name="wholesellerprice" value={formdata.wholesellerprice} onChange={(e) => setFormdata({ ...formdata, [e.target.name]: e.target.value })} /></div>

                        </div>
                        <div className="ProductMgtpriceDetailsListUpdateUpdate">
                            <div className="ProductMgtpriceDetailsTitleUpdateWrapper">
                                <label className="ProductMgtpriceDetailsTitleUpdate">Distributor:</label>
                            </div>
                            <div className="TextUpdateDistributorProductMgt"><TextField size="small" variant="outlined" name="distributorprice" value={formdata.distributorprice} onChange={(e) => setFormdata({ ...formdata, [e.target.name]: e.target.value })} /></div>

                        </div>
                    </div>
                </div>
                <div className={classes.buttonContainer}><RedButton id="ProductMgtUpdateButton" onClick={() => dispatch(UpdateProductSku(param, setEdit))} className={classes.button} variant="contained" color="primary">Update</RedButton><Button className={classes.button} variant="contained" onClick={() => setEdit(false)} >Cancel</Button></div>
            </div>
        </div>
    )
}

export default UpdateProductMgtForm
