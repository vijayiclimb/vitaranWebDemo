import React, { useState } from 'react';
import './styles/productMgtDetail.scss';
import Rating from '@material-ui/lab/Rating';
import CreateIcon from '@material-ui/icons/Create';
import { useSelector } from 'react-redux';



const ProductMgtDetail = ({ edit, setEdit }) => {

    const state = useSelector(state => state.productMgt);



   console.log(state.SkuDetail)

    const [detail, setDetail] = useState({});


    React.useEffect(() => {
        if (state.SkuList && state.SkuList.length !== 0 && state.SkuDetail) {
            setDetail(state.SkuDetail);
        }
    }, [state.SkuDetail])



    let popularCategory = detail.popular_category;
    let popularCompany = detail.popular_company;
    let popularProduct = detail.producttype==='popular_product'? true : false;
    let newLaunch = detail.producttype==='new_launch'? true : false;
    let otherProduct = detail.producttype==='other_product'? true : false;



    let dd = false;
    let df = true;

    const popular = {
        flex: "1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "10px",
        marginRight: "20px",
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingLeft: "10px",
        paddingRight: "10px",
        marginTop: "15px",
        borderRadius: "10px",
        border: "3px solid #DC1D13",
    }

    if (state.SkuList && state.SkuList.length !== 0) {

        console.log(parseInt(state.SkuDetail && state.SkuDetail.skurating))
    }

    console.log(state.SkuDetail);
    return (
        state.SkuList && state.SkuList.length !== 0 ? (
            <div className="ProductMgtdisplayContainerDetail">
                <div className="ProductMgtfirstDetail">

                    <div className="ProductMgtimageContainerDetail">
                        <div className="ProductMgtimageWrapperDetail">
                            <img src={state.SkuDetail && state.SkuDetail.skuimage===("nan" || null)? (`http://3.7.71.29:6001/imgs/Noproductimageavailable.png`):(`http://3.7.71.29:6001/imgs/${state.SkuDetail && state.SkuDetail.skuimage}`)} alt="product img" />
                        </div>
                    </div>


                    <div className="ProductMgtdetailDetail">
                        <label className="ProductMgtskuNameDetail">{state.SkuDetail && state.SkuDetail.skuname}</label>
                       


                        <div className="ProductMgtpriceContainerDetail">
                            <div className="ProductMgtskuPriceTitleDetailWraper">
                                <label className="ProductMgtskuPriceTitleDetail">Price :</label>
                            </div>

                            <div className="ProductMgtskuPriceDetailWraper">
                                <label className="ProductMgtskuPriceDetail">{state.SkuDetail && state.SkuDetail.unitprice && state.SkuDetail.unitprice===null? 'N/A' : state.SkuDetail && state.SkuDetail.unitprice}</label>
                            </div>


                        </div>

                        <div className="ProductMgtDescriptionDetailDetail">
                            <div className="ProductMgtdescriptionTitleDetailWrapperDetail">
                                <label className="ProductMgtdescriptionTitleDetailDetail">Description :</label>
                            </div>
                            <div className="ProductMgtdescriptionvalueDetailWrapperDetail">
                                {/* {state.SkuDetail && state.SkuDetail.producttext} */}
                                <label className="ProductMgtdescriptionvalueDetailDetail">{state.SkuDetail && state.SkuDetail.producttext && state.SkuDetail.producttext===null? 'N/A': (state.SkuDetail && state.SkuDetail.producttext)}</label>
                            </div>

                        </div>

                        <div className="ProductMgtincentiveDetail">
                            <div className="ProductMgtincentiveTitleDetailWrapper">
                                <label className="ProductMgtincentiveTitleDetail">Incentive :</label>
                            </div>
                            <div className="ProductMgtincentiveValueDetailWrapper">
                                {/* {state.SkuDetail && state.SkuDetail.incentive} */}
                                <label className="ProductMgtincentiveValueDetail">{state.SkuDetail && state.SkuDetail.scheme && state.SkuDetail.scheme===null? 'N/A': (state.SkuDetail && state.SkuDetail.scheme)}</label>
                            </div>

                        </div>
                    </div>



                    <div className="ProductMgteditContainerDetail">
                        <button type="button" onClick={() => setEdit(!edit)} className="ProductMgteditDetail">
                            <CreateIcon />
                        </button>
                    </div>
                </div>
                <div className="ProductMgtsecondDetail">

                    <div className="ProductMgtpopularContainerDetail">
                        <div className={`${popularCategory ? "ProductMgtPopularOneDetail" : "ProductMgtNotPopularTwoDetail"}`}>
                            <label>Popular Category</label>
                        </div>
                        <div className={`${popularCompany ? "ProductMgtPopularOneDetail" : "ProductMgtNotPopularTwoDetail"}`}>
                            <label>Popular Company</label>
                        </div>
                        <div className={`${popularProduct ? "ProductMgtPopularOneDetail" : "ProductMgtNotPopularTwoDetail"}`}>
                            <label>Popular Product</label>
                        </div>
                        <div className={`${newLaunch ? "ProductMgtPopularOneDetail" : "ProductMgtNotPopularTwoDetail"}`}>
                            <label>New Launch</label>
                        </div>
                        <div className={`${otherProduct ? "ProductMgtPopularOneDetail" : "ProductMgtNotPopularTwoDetail"}`}>
                            <label>Other Products</label>
                        </div>
                    </div>


                    <div className="ProductMgtbottomContainerDetail">
                        <div className="ProductMgtpropDetailsDetail">

                            <div className="ProductMgtpropDetailsListDetail">

                                <div className="ProductMgtpropDetailsTitleDetailWrapper">
                                    <label className="ProductMgtpropDetailsTitleDetail">Category :</label>
                                </div>
                                <div className="ProductMgtpropDetailsValueDetailWrapper">
                                    <label className="ProductMgtpropDetailsValueDetail">{state.SkuDetail && state.SkuDetail.categories && state.SkuDetail.categories}</label>
                                </div>

                            </div>

                            <div className="ProductMgtpropDetailsListDetail">
                                <div className="ProductMgtpropDetailsTitleDetailWrapper">
                                    <label className="ProductMgtpropDetailsTitleDetail">Product :</label>
                                </div>

                                <div className="ProductMgtpropDetailsValueDetailWrapper">
                                    <label className="ProductMgtpropDetailsValueDetail">{state.SkuDetail && state.SkuDetail.productname && state.SkuDetail.productname}</label>
                                </div>


                            </div>
                            <div className="ProductMgtpropDetailsListDetail">
                                <div className="ProductMgtpropDetailsTitleDetailWrapper">
                                    <label className="ProductMgtpropDetailsTitleDetail">Company :</label>
                                </div>
                                <div className="ProductMgtpropDetailsValueDetailWrapper">
                                    <label className="ProductMgtpropDetailsValueDetail">{state.SkuDetail && state.SkuDetail.company && state.SkuDetail.company}</label>
                                </div>


                            </div>
                            <div className="ProductMgtpropDetailsListDetail">
                                <div className="ProductMgtpropDetailsTitleDetailWrapper">
                                    <label className="ProductMgtpropDetailsTitleDetail">Brand SkuName :</label>
                                </div>
                                <div className="ProductMgtpropDetailsValueDetailWrapper">
                                    <label className="ProductMgtpropDetailsValueDetail">{state.SkuDetail && state.SkuDetail.skuname && state.SkuDetail.skuname}</label>
                                </div>


                            </div>
                        </div>
                        <div className="ProductMgtpriceDetailsDetail">
                            <div className="ProductMgtpriceDetailsListDetail">
                                <div className="ProductMgtpriceDetailsTitleDetailWrapper">
                                    <label className="ProductMgtpriceDetailsTitleDetail">Retailer:</label>
                                </div>
                                <div className="ProductMgtpriceDetailsValueDetailWrapper">
                                    <label className="ProductMgtpriceDetailsValueDetail">{state.SkuDetail && state.SkuDetail.retailerprice  && state.SkuDetail.retailerprice===null? 'N/A' : state.SkuDetail && state.SkuDetail.retailerprice}</label>

                                </div>

                            </div>
                          
                            <div className="ProductMgtpriceDetailsListDetail">
                                <div className="ProductMgtpriceDetailsTitleDetailWrapper">
                                    <label className="ProductMgtpriceDetailsTitleDetail">Wholeseller:</label>
                                </div>
                                <div className="ProductMgtpriceDetailsValueDetailWrapper">
                                    <label className="ProductMgtpriceDetailsValueDetail">{state.SkuDetail && state.SkuDetail.wholesellerprice && state.SkuDetail.wholesellerprice===null? 'N/A' : state.SkuDetail && state.SkuDetail.wholesellerprice}</label>
                                </div>


                            </div>
                            <div className="ProductMgtpriceDetailsListDetail">
                                <div className="ProductMgtpriceDetailsTitleDetailWrapper">
                                    <label className="ProductMgtpriceDetailsTitleDetail">Distributor:</label>
                                </div>
                                <div className="ProductMgtpriceDetailsValueDetailWrapper">

                                    <label className="ProductMgtpriceDetailsValueDetail">{state.SkuDetail && state.SkuDetail.distributorprice && state.SkuDetail.distributorprice===null? 'N/A' : state.SkuDetail && state.SkuDetail.distributorprice}</label>
                                </div>



                            </div>
                        </div>
                    </div>

                </div>
              
            </div>

        ) : (<h1>no Data</h1>)


    )
}

export default ProductMgtDetail
