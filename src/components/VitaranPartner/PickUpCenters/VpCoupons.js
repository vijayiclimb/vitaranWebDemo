import React, { useState } from 'react';
import './styles/VpCoupons.scss';
import { TextField, Button } from '@material-ui/core';
import { red, purple } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Bidi from '../../../images/bidi.png';
import Bid from '../../../images/Appu_Bidi.png'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { GetCouponOrderCancel, GetCouponOrderComplete, GetCouponOrderId, GetCouponOrderList } from '../../../actions/VitaranPartner/VpCouponMgt';


const RedButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(purple[500]),
        marginRight: "10px",
        backgroundColor: red[700],
        '&:hover': {
            backgroundColor: red[800],
        },
    },
}))(Button);


const RedButtonTwo = withStyles((theme) => ({
    root: {
        color: "#716F6F",
        border: "2px solid #716F6F",

        textTransform: "none",
        backgroundColor: theme.palette.getContrastText(purple[500]),
        '&:hover': {
            color: "#716F6F",
            border: "2px solid #716F6F",

            textTransform: "none",
            backgroundColor: theme.palette.getContrastText(purple[500]),
        }
    },
}))(Button);



const useStyles = makeStyles((theme) => ({
    button: {
        padding: "0px 25px"
    },
}))

const VpCoupons = ({ zone }) => {
    const classes = useStyles();
    const [state, setState] = useState('Pending');
    const dispatch = useDispatch();
    const [text, setText] = useState("");
    const Coupon = useSelector(state => state.pickUpCenterAddress);
    const [list, setList] = useState([]);
    const [orderList, setOrderList] = useState([]);
    const [cancelledText, setCancelledText] = useState('');
    const [obj, setObj] = useState({});


    React.useEffect(() => {
        dispatch(GetCouponOrderId(zone))
    }, [])




    React.useEffect(() => {
        if (Coupon && Coupon.CouponOrderIdList && Coupon.CouponOrderIdList.length !== 0) {
            setList(Coupon.CouponOrderIdList);
        }
    }, [Coupon.CouponOrderIdList])

    React.useEffect(() => {
        if (Coupon && Coupon.CouponOrderList && Coupon.CouponOrderList.length !== 0) {
            setOrderList(Coupon.CouponOrderList)
        }
    }, [Coupon.CouponOrderList])



    const defaultImg = 'http://3.7.71.29:6001/imgs/Noproductimageavailable.png';

    const handleSearch = () => {
        if (text && text.length !== 0) {
            dispatch(GetCouponOrderList(text, zone))
        }
    }

    const handleCancel = () => {
        if (orderList && orderList.length !== 0) {
            let cancelObj =
            {
                "order_id": `${orderList[0].order_id}`,
                "coupon_id": `${orderList[0].coupon_id}`,
                "zone": `${zone}`,
                "canceled_by": "VitaranPartner",
                "user_id": `${orderList[0].user_id}`,
                "cancel_reason": `${cancelledText}`
            }

            dispatch(GetCouponOrderCancel(cancelObj))
        }

    }




    const handleComplete = () => {
        if (orderList && orderList.length !== 0) {
            let completeObj = {
                "user_id": `${orderList[0].user_id}`,
                "order_id": `${orderList[0].order_id}`,
                "coupon_id": `${orderList[0].coupon_id}`,
                "zone": `${zone}`
            }

            dispatch(GetCouponOrderComplete(completeObj))
        }
    }


    let reasons = [
        "Not Interested",
        "Too Costly",
        "Bad Product"
    ]


    return (
        <div className="VpCouponsContainer">
            <div className="VpCouponsContainerTop">
                <div className="VpCouponsContainerTopOne">
                    <Autocomplete

                        options={list}
                        getOptionLabel={(option) => option.order_id}
                        onChange={(e, v) => setText(v && v.order_id)}
                        renderInput={(params) => <TextField {...params} size="small" variant="outlined" />}
                    />
                </div>
                <div className="VpCouponsContainerTopTwo">
                    <RedButton className={classes.button} variant="contained" onClick={handleSearch}>Search</RedButton>
                </div>


            </div>
            {
                orderList && orderList.length !== 0 ? (
                    <div className="VpCouponsContainerBottom">
                        {orderList[0].order_status === "Pending" ? (
                            <div className="VpCouponsContainerBottomOne">
                                <div className="VpCouponsContainerBottomOneStatusContainer">
                                    <label className="VpCouponsContainerBottomOneStatusTitle">
                                        Order Status
                                    </label>
                                    <label className="VpCouponsContainerBottomOneStatusValue">
                                        Pendingg
                                    </label>
                                </div>
                                <div className="VpCouponsContainerBottomOneDateContainer">
                                    <div className="VpCouponsContainerBottomOneDateContainerOne">
                                        <label className="VpCouponsContainerBottomOneDateContainerOneTitle">
                                            Order Date:
                                        </label>
                                        <label className="VpCouponsContainerBottomOneDateContainerOneValue">
                                            {orderList[0].order_date}
                                        </label>
                                    </div>
                                    <div className="VpCouponsContainerBottomOneDateContainerTwo">
                                        <label className="VpCouponsContainerBottomOneDateContainerTwoTitle">
                                            PickUpDate:
                                        </label>
                                        <label className="VpCouponsContainerBottomOneDateContainerTwoValue">
                                            {orderList[0].pickup_date === null || "nan" || "undefined" ? "12-may-2010" : orderList[0].pickup_date}
                                        </label>
                                    </div>
                                </div>

                                <div className="VpCouponsContainerBottomOneReasonContainerTwo">
                                    <Autocomplete

                                        options={reasons}
                                        getOptionLabel={(option) => option}

                                        renderInput={(params) => <TextField {...params} size="small" variant="standard" onSelect={(e) => setCancelledText(e.target.value)} />}
                                    />
                                </div>


                                <div className="VpCouponsContainerBottomOneButtonContainer">
                                    <RedButton variant="contained" onClick={handleComplete}>Complete Order</RedButton>
                                    <RedButtonTwo variant="contained" onClick={handleCancel}>Cancel Order</RedButtonTwo>
                                </div>
                                <div>

                                </div>
                            </div>
                        ) : (
                            <>
                                {
                                    orderList[0].order_status === "Completed" ?
                                        (
                                            <div className="VpCouponsContainerBottomOneCompleted">
                                                <div className="VpCouponsContainerBottomOneStatusContainer">
                                                    <label className="VpCouponsContainerBottomOneStatusTitle">
                                                        Order Status
                                                    </label>
                                                    <label className="VpCouponsContainerBottomOneStatusValueCompleted">
                                                        Completed
                                                    </label>
                                                </div>
                                                <div className="VpCouponsContainerBottomOneDateContainer">
                                                    <div className="VpCouponsContainerBottomOneDateContainerOne">
                                                        <label className="VpCouponsContainerBottomOneDateContainerOneTitle">
                                                            Order Date:
                                                        </label>
                                                        <label className="VpCouponsContainerBottomOneDateContainerOneValue">
                                                            {orderList[0].order_date}
                                                        </label>
                                                    </div>
                                                    <div className="VpCouponsContainerBottomOneDateContainerTwo">
                                                        <label className="VpCouponsContainerBottomOneDateContainerTwoTitle">
                                                            PickUpDate:
                                                        </label>
                                                        <label className="VpCouponsContainerBottomOneDateContainerTwoValue">
                                                            {orderList[0].pickup_date === null || "nan" || "undefined" ? "12-may-2010" : orderList[0].pickup_date}
                                                        </label>
                                                    </div>
                                                </div>
                                                <div>

                                                </div>
                                            </div>
                                        ) :
                                        (
                                            <>
                                                {
                                                    orderList[0].order_status === "Cancelled" ?
                                                        (
                                                            <>
                                                                <div className="VpCouponsContainerBottomOneCancelled">
                                                                    <div className="VpCouponsContainerBottomOneStatusContainer">
                                                                        <label className="VpCouponsContainerBottomOneStatusTitle">
                                                                            Order Status
                                                                        </label>
                                                                        <label className="VpCouponsContainerBottomOneStatusValueCancelled">
                                                                            Cancelled
                                                                        </label>
                                                                    </div>
                                                                    <div className="VpCouponsContainerBottomOneReasonContainerTwoCancelled">
                                                                        <TextField variant="standard" placeholder="Reasons" value={orderList[0].cancel_reason} disabled={true} />
                                                                    </div>
                                                                    <div className="VpCouponsContainerBottomOneDateContainer">
                                                                        <div className="VpCouponsContainerBottomOneDateContainerOne">
                                                                            <label className="VpCouponsContainerBottomOneDateContainerOneTitle">
                                                                                Order Date:
                                                                            </label>
                                                                            <label className="VpCouponsContainerBottomOneDateContainerOneValue">
                                                                                {orderList[0].order_date}
                                                                            </label>
                                                                        </div>
                                                                        <div className="VpCouponsContainerBottomOneDateContainerTwo">
                                                                            <label className="VpCouponsContainerBottomOneDateContainerTwoTitle">
                                                                                PickUpDate:
                                                                            </label>
                                                                            <label className="VpCouponsContainerBottomOneDateContainerTwoValue">
                                                                                {orderList[0].pickup_date === null || "nan" || "undefined" ? "12-may-2010" : orderList[0].pickup_date}
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div>

                                                                    </div>
                                                                </div>
                                                            </>
                                                        ) :
                                                        (
                                                            <>
                                                            </>
                                                        )
                                                }
                                            </>
                                        )
                                }
                            </>

                        )}

                        <div className="VpCouponsContainerBottomTwo">
                            <div className="VpCouponsContainerBottomTwoTitleContainer">
                                <label className="VpCouponsContainerBottomTwoTitle">Order Details</label>
                            </div>

                            <div className="VpCouponsContainerBottomTwoDetailsContainer">
                                <div className="VpCouponsContainerBottomTwoDetailsListContainer">
                                    <div className="VpCouponsContainerBottomTwoDetailsListTitleContainer">
                                        <label className="VpCouponsContainerBottomTwoDetailsListTitle">Order ID: </label>
                                    </div>
                                    <div className="VpCouponsContainerBottomTwoDetailsListValueContainer">
                                        <label className="VpCouponsContainerBottomTwoDetailsListValue">{orderList[0].order_id}</label>
                                    </div>
                                </div>

                                <div className="VpCouponsContainerBottomTwoDetailsListContainer">
                                    <div className="VpCouponsContainerBottomTwoDetailsListTitleContainer">
                                        <label className="VpCouponsContainerBottomTwoDetailsListTitle">Orderer Name: </label>
                                    </div>
                                    <div className="VpCouponsContainerBottomTwoDetailsListValueContainer">
                                        <label className="VpCouponsContainerBottomTwoDetailsListValue">{orderList[0].orderer_name}</label>
                                    </div>
                                </div>

                                <div className="VpCouponsContainerBottomTwoDetailsListContainer">
                                    <div className="VpCouponsContainerBottomTwoDetailsListTitleContainer">
                                        <label className="VpCouponsContainerBottomTwoDetailsListTitle">Mobile: </label>
                                    </div>
                                    <div className="VpCouponsContainerBottomTwoDetailsListValueContainer">
                                        <label className="VpCouponsContainerBottomTwoDetailsListValue">{orderList[0].mobile_no}</label>
                                    </div>
                                </div>

                                <div className="VpCouponsContainerBottomTwoDetailsListContainer">
                                    <div className="VpCouponsContainerBottomTwoDetailsListTitleContainer">
                                        <label className="VpCouponsContainerBottomTwoDetailsListTitle">Scheme: </label>
                                    </div>
                                    <div className="VpCouponsContainerBottomTwoDetailsListValueContainer">
                                        <label className="VpCouponsContainerBottomTwoDetailsListValue">{orderList[0].scheme}</label>
                                    </div>
                                </div>

                            </div>
                            {
                                orderList[0].coupon_sku_list && orderList[0].coupon_sku_list.length !== 0 ?
                                    (
                                        <>
                                        {
                                            orderList[0].coupon_sku_list.map((item,index)=>(
                                                <>
                                                <div className="VpCouponsContainerBottomTwoSkuDetailsContainer">
                                            <div className="VpCouponsContainerBottomTwoSkuImageContainer">
                                                <img src={item.sku_image === "nan" || null || "undefined" ? `${defaultImg}` : `${item.sku_image}`} alt="bidi" />
                                            </div>
                                            <div className="VpCouponsContainerBottomTwoSkuIdContainer">
                                                <div className="VpCouponsContainerBottomTwoSkuIdContainerOne">
                                                    <label>CouponId</label>
                                                </div>
                                                <div className="VpCouponsContainerBottomTwoSkuIdContainerTwo">
                                                    <label>{orderList[0].coupon_id}</label>
                                                </div>
                                            </div>
                                            <div className="VpCouponsContainerBottomTwoSkuNameContainer">
                                                <div className="VpCouponsContainerBottomTwoSkuNameContainerOne">
                                                    <label>Sku Name</label>
                                                </div>
                                                <div className="VpCouponsContainerBottomTwoSkuNameContainerTwo">
                                                    <label>{item.sku_name}</label>
                                                </div>
                                            </div>
                                            <div className="VpCouponsContainerBottomTwoSkuQuantityContainer">
                                                <div className="VpCouponsContainerBottomTwoSkuQuantityContainerOne">
                                                    <label>Quantity</label>
                                                </div>
                                                <div className="VpCouponsContainerBottomTwoSkuQuantityContainerTwo">
                                                    <label>{item.quantity}</label>
                                                </div>
                                            </div>
                                            <div className="VpCouponsContainerBottomTwoSkuMrpContainer">
                                                <div className="VpCouponsContainerBottomTwoSkuMrpContainerOne">
                                                    <label>Mrp</label>
                                                </div>
                                                <div className="VpCouponsContainerBottomTwoSkuMrpContainerTwo">
                                                    <label>{item.mrp}</label>
                                                </div>
                                            </div>
                                            <div className="VpCouponsContainerBottomTwoSkuTotalPriceContainer">
                                                <div className="VpCouponsContainerBottomTwoSkuTotalPriceContainerOne">
                                                    <label>Total Price</label>
                                                </div>
                                                <div className="VpCouponsContainerBottomTwoSkuTotalPriceContainerTwo">
                                                    <label>{item.total_price} Rs</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="VpCouponsContainerLastContainer">
                                <div className="VpCouponsContainerLastTitleContainer">
                                    <label className="VpCouponsContainerLastTitle">Total Price:</label>
                                </div>
                                <div className="VpCouponsContainerLastValueContainer">
                                    <label className="VpCouponsContainerLastValue">{item.total_price} Rs</label>
                                </div>

                            </div>
                                                </>
                                            ))
                                        }
                                        
                            </>
                                    ) :
                                    (
                                        <label>No Sku</label>
                                    )
                            }







                  
                        </div>
                    </div>) : (<label>No data</label>)
            }
        </div>
    )
}

export default VpCoupons
