import React from 'react'
import { Con, Container, FirmContainer, RedButton, OrderContainer, CouponMgtReasonContainer, CouponMgtautoCompleteContainer, CouponMgtButtonContainer, OrderAccept, Loading, Button, OrderHead, OrderStatusContainer, OrderStatusLabel, OrderStatusValueDate, OrderStatusLabelDate, OrderStatusValue, OrderDetail, OrderStatus, OrderStatusDate, OrderLabel, OrderValue, OrderTable, Firm, ProfileContainer, Card, Title, WeekCard, UsageCardValue, UsageCardValu, UsageCardTitle, UsageAverageValue, UsageAverageValu, UsageAverageTitle, ProfileImg, DetailList, DetailContainer, DetailsLabel, Details, Icon, Label, LabelValue, WeekContainer, WeekOne, WeekTwo } from './styles/CouponMgtUserStyle'
import Yel from '../../../images/yel.jpg'
import Steve from '../../../images/steve.jpg'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './styles/CouponMgtUser.scss';
import CallIcon from '@material-ui/icons/Call';
import { TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useToasts } from 'react-toast-notifications'
import { CancelOrder } from '../../../actions/appPanel/Deals';
import { CircularProgress } from '@material-ui/core';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { withStyles } from '@material-ui/core/styles';
import { red, purple, white } from '@material-ui/core/colors';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const CouponMgtRedButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(purple[500]),
        marginRight: "10px",
        backgroundColor: red[700],
        '&:hover': {
            backgroundColor: red[800],
        },
    },
}))(Button);


const useStyles = makeStyles({
    icon: {
        width: "20px",
        height: "20px",
        color: "white",
    },
    textField: {
        marginRight: "10px",
        width: 200,
    }
})

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#ba000d",
        }
    },
});



const CouponMgtUser = ({ data, status }) => {
    let coupon = useSelector(state => state.couponMgt);
    const { addToast } = useToasts();
    const [reason, setReason] = React.useState('');
    const dispatch = useDispatch();

    // const Subs = useSelector(state => state.subscriberAnalytics);

    //    console.log(Subs.subscriberDetails);

    const OrderReasons = [
        { title: 'Made By mistake' },
        { title: 'Price too high' },
        { title: 'Orders Out' }
    ]
    const convertDate = (date) => {



        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];


        const CouponsDate = new Date(date)
        const day = CouponsDate.getDate();
        const year = CouponsDate.getFullYear();
        const month = monthNames[CouponsDate.getMonth()];

        const fdate = `${day}-${month}-${year}`
        return fdate
    }

    const classes = useStyles();


    const handleCancel = (CouponId, reason, orderId) => {
        dispatch(CancelOrder(CouponId, reason, orderId));
        console.log(CouponId, reason, orderId)


    }

    // React.useEffect(() => {
    //     if (Coupons.CancellationToastMessageSuccess.length !== 0) {
    //         addToast('Cancelled Succesully', { appearance: 'success', autoDismiss: true, });
    //     }
    // }, [Coupons.CancellationToastMessageSuccess])

    // console.log(Coupons.orderDetails.length);

    return (
       

                <div className="CouponMgtUserContainer">
                <Container>
                {
                    coupon.orderList && coupon.orderList.length!==0?(

                        <>

                        <FirmContainer>
                        <Firm src={Yel}></Firm>
    
    
                        <ProfileContainer>
                            <ProfileImg src={Steve}>
    
                            </ProfileImg>
                        </ProfileContainer>
                    </FirmContainer>
    
                    <div className="CouponMgtUserDetailSection">
                        <div className="CouponMgtUserDetailSectionList">
                            <div className="CouponMgtUserDetailTitleSection">
                                <div className="CouponMgtUserDetailTitleIcon"><AccountCircleIcon className={classes.icon} /></div>
                                <label className="CouponMgtUserDetailTitle">Name</label>
                            </div>
                            <div className="CouponMgtUserDetailValueSection">
                                <label className="CouponMgtUserDetailValue">{coupon.orderDetail && coupon.orderDetail.subscribername}</label>
                            </div>
                        </div>
                        <div className="CouponMgtUserDetailSectionList">
                            <div className="CouponMgtUserDetailTitleSection">
                                <div className="CouponMgtUserDetailTitleIcon"><CallIcon className={classes.icon} /></div>
                                <label className="CouponMgtUserDetailTitle">Mobile</label>
                            </div>
                            <div className="CouponMgtUserDetailValueSection">
                                <label className="CouponMgtUserDetailValue">{coupon.orderDetail && coupon.orderDetail.mobile}</label>
                            </div>
                        </div>
    
                        <div className="CouponMgtUserDetailSectionList">
                            <div className="CouponMgtUserDetailTitleSection">
                                <div className="CouponMgtUserDetailTitleIcon"><SupervisorAccountIcon className={classes.icon} /></div>
                                <label className="CouponMgtUserDetailTitle">Stakeholder</label>
                            </div>
                            <div className="CouponMgtUserDetailValueSection">
                                <label className="CouponMgtUserDetailValue">{coupon.orderDetail && coupon.orderDetail.role}</label>
                            </div>
                        </div>
    
                        <div className="CouponMgtUserDetailSectionList">
                            <div className="CouponMgtUserDetailTitleSection">
                                <div className="CouponMgtUserDetailTitleIcon"><LocationOnIcon className={classes.icon} /></div>
                                <label className="CouponMgtUserDetailTitle">Pick Up</label>
                            </div>
                            <div className="CouponMgtUserDetailValueSection">
                                <label className="CouponMgtUserDetailValue">{coupon.orderDetail && coupon.orderDetail.address}</label>
                            </div>
                        </div>
                    </div>
    
                    <OrderContainer>
                        <OrderHead>Transaction</OrderHead>
                        <OrderTable>
                            <OrderDetail>
                                <OrderLabel>
                                    Coupon ID
                                </OrderLabel>
                                <OrderValue>
                                   {coupon.couponDetail && coupon.couponDetail.couponid}
                                </OrderValue>
                            </OrderDetail>
                            <OrderDetail>
                                <OrderLabel>
                                    Quantity
                                </OrderLabel>
                                <OrderValue>
                                  {coupon.orderDetail && coupon.orderDetail.quantity}
                                </OrderValue>
                            </OrderDetail>
                            <OrderDetail>
                                <OrderLabel>
                                    Order ID
                                </OrderLabel>
                                <OrderValue>
                                {coupon.orderDetail && coupon.orderDetail.orderid}
                                </OrderValue>
                            </OrderDetail>
                            <OrderDetail>
                                <OrderLabel>
                                    Total Price
                                </OrderLabel>
                                <OrderValue>
                                {coupon.orderDetail && coupon.orderDetail.totalprice}
                                </OrderValue>
                            </OrderDetail>
                        </OrderTable>
    
    
                        <>{
                                    status === "ORDER_RAISED" ? (
                                        <>
                                            <OrderStatusContainer>
                                            
                                                 <div className="orderStatusWrapper">
                                                    <div className="orderStatusLabelWrapper"><label className="orderStatusLabel">Order Status:</label></div>
                                                    <div className="orderStatusValueWrapper"><label className="orderStatusValue">{coupon.orderDetail && coupon.orderDetail.orderstatus}</label></div>
                                                 </div>

                                                 <div className="orderStatusWrapperDate">
                                                    <div className="orderStatusLabelWrapperDate"><label className="orderStatusLabelDate">Order Date:</label></div>
                                                    <div className="orderStatusValueWrapperDate"><label className="orderStatusValueDate">12-jul-2020</label></div>
                                                 </div>


                                                 <div className="orderStatusWrapperDate">
                                                    <div className="orderStatusLabelWrapperDate"><label className="orderStatusLabelDate">Pickup Date:</label></div>
                                                    <div className="orderStatusValueWrapperDate"><label className="orderStatusValueDate">12-jul-2020</label></div>
                                                 </div>
                                               

                               


                                            </OrderStatusContainer>

                                            <OrderAccept>
                                                <CouponMgtautoCompleteContainer>
                                                    <Autocomplete


                                                        options={OrderReasons}
                                                        getOptionLabel={(option) => option.title}


                                                        renderInput={(params) => <TextField {...params} margin="normal" style={{ width: 250 }} label="cancellation reasons" onSelect={(e) => setReason(e.target.value)} />}
                                                    />

                                                </CouponMgtautoCompleteContainer>
                                                <CouponMgtButtonContainer>
                                                    <RedButton variant="contained"
                                                        >Cancel</RedButton>
                                                </CouponMgtButtonContainer>

                                            </OrderAccept>

                                        </>
                                    ) :
                                        (
                                            <>
                                                {
                                                    status === "Canceled" ?
                                                        (
                                                            <OrderStatusContainer>
                                                                


                                                         
                                                 <div className="orderStatusWrapper">
                                                    <div className="orderStatusLabelWrapper"><label className="orderStatusLabel">Order Status:</label></div>
                                                    <div className="orderStatusValueWrapper"><label className="orderStatusValue">{coupon.orderDetail && coupon.orderDetail.orderstatus}</label></div>
                                                 </div>

                                                 <div className="orderStatusWrapperDate">
                                                    <div className="orderStatusLabelWrapperDate"><label className="orderStatusLabelDate">Order Date:</label></div>
                                                    <div className="orderStatusValueWrapperDate"><label className="orderStatusValueDate">12-jul-2020</label></div>
                                                 </div>


                                                 <div className="orderStatusWrapperDate">
                                                    <div className="orderStatusLabelWrapperDate"><label className="orderStatusLabelDate">Pickup Date:</label></div>
                                                    <div className="orderStatusValueWrapperDate"><label className="orderStatusValueDate">12-jul-2020</label></div>
                                                 </div>


                                                           
                                                 <div className="orderStatusWrapperDate">
                                                    <div className="orderStatusLabelWrapperDate"><label className="orderStatusLabelDate">Cancellation reason:</label></div>
                                                    <div className="orderStatusValueWrapperDate"><label className="orderStatusValueDate">Too High</label></div>
                                                 </div>
    
                                                                

                                                            </OrderStatusContainer>
                                                        )
                                                        :
                                                        (
                                                            <>{
                                                                status === "ORDER_COMPLETED" ?
                                                                    (
                                                                        <OrderStatusContainer>
                                                                                                   
                                                 <div className="orderStatusWrapper">
                                                    <div className="orderStatusLabelWrapper"><label className="orderStatusLabel">Order Status:</label></div>
                                                    <div className="orderStatusValueWrapper"><label className="orderStatusValue">{coupon.orderDetail && coupon.orderDetail.orderstatus}</label></div>
                                                 </div>

                                                 <div className="orderStatusWrapperDate">
                                                    <div className="orderStatusLabelWrapperDate"><label className="orderStatusLabelDate">Order Date:</label></div>
                                                    <div className="orderStatusValueWrapperDate"><label className="orderStatusValueDate">12-jul-2020</label></div>
                                                 </div>


                                                 <div className="orderStatusWrapperDate">
                                                    <div className="orderStatusLabelWrapperDate"><label className="orderStatusLabelDate">Pickup Date:</label></div>
                                                    <div className="orderStatusValueWrapperDate"><label className="orderStatusValueDate">12-jul-2020</label></div>
                                                 </div>


                                                                    </OrderStatusContainer>
                                                                    )
                                                                    :
                                                                    null
                                                            }
                                                            </>
                                                        )
                                                }
                                            </>

                                        )
                                }
                                </>
    
                                    </OrderContainer>

                                    </>

                    )
                    :
                    (
                        <label>no data</label>
                    )
                }
    
    
               
    
                                </Container>
    
    
            </div>
    
    
    )
}
            

                    export default CouponMgtUser
