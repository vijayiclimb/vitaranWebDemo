import React from 'react'
import { Con, Container, FirmContainer, RedButton, OrderContainer, DealMgtReasonContainer, DealMgtautoCompleteContainer, DealMgtButtonContainer, OrderAccept, Loading, Button, OrderHead, OrderStatusContainer, OrderStatusLabel, OrderStatusValueDate, OrderStatusLabelDate, OrderStatusValue, OrderDetail, OrderStatus, OrderStatusDate, OrderLabel, OrderValue, OrderTable, Firm, ProfileContainer, Card, Title, WeekCard, UsageCardValue, UsageCardValu, UsageCardTitle, UsageAverageValue, UsageAverageValu, UsageAverageTitle, ProfileImg, DetailList, DetailContainer, DetailsLabel, Details, Icon, Label, LabelValue, WeekContainer, WeekOne, WeekTwo } from './styles/userStyle'
import Yel from '../../../images/yel.jpg'
import Steve from '../../../images/steve.jpg'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './styles/userStyle.scss'
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

const DealMgtRedButton = withStyles((theme) => ({
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


const User = ({ status, data }) => {
    const deals = useSelector(state => state.dealMgt);
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


        const dealsDate = new Date(date)
        const day = dealsDate.getDate();
        const year = dealsDate.getFullYear();
        const month = monthNames[dealsDate.getMonth()];

        const fdate = `${day}-${month}-${year}`
        return fdate
    }

    const classes = useStyles();


    const handleCancel = (userId,dealId, reason, orderId) => {
        dispatch(CancelOrder(userId,dealId, reason, orderId));
        console.log(userId,dealId, reason, orderId)


    }

    React.useEffect(() => {
        if (deals.CancellationToastMessageSuccess.length !== 0) {
            addToast('Cancelled Succesully', { appearance: 'success', autoDismiss: true, });
        }
    }, [deals.CancellationToastMessageSuccess])

   

    return (
        <div className="DealMgtUserContainer">
            <Container>
                {data.length !== 0 && deals.orderDealList.length !== 0 ?
                    (
                        <>
                            <FirmContainer>
                                <Firm src={Yel}></Firm>


                                <ProfileContainer>
                                    <ProfileImg src={Steve}>

                                    </ProfileImg>
                                </ProfileContainer>
                            </FirmContainer>

                            <div className="DealMgtUserDetailSection">
                                <div className="DealMgtUserDetailSectionList">
                                    <div className="DealMgtUserDetailTitleSection">
                                        <div className="DealMgtUserDetailTitleIcon"><AccountCircleIcon className={classes.icon} /></div>
                                        <label className="DealMgtUserDetailTitle">Name</label>
                                    </div>
                                    <div className="DealMgtUserDetailValueSection">
                                        <label className="DealMgtUserDetailValue">{`${deals.orderDetails.first_name} ${deals.orderDetails.last_name}`}</label>
                                    </div>
                                </div>
                                <div className="DealMgtUserDetailSectionList">
                                    <div className="DealMgtUserDetailTitleSection">
                                        <div className="DealMgtUserDetailTitleIcon"><CallIcon className={classes.icon} /></div>
                                        <label className="DealMgtUserDetailTitle">Mobile</label>
                                    </div>
                                    <div className="DealMgtUserDetailValueSection">
                                        <label className="DealMgtUserDetailValue">{deals.orderDetails.mobile}</label>
                                    </div>
                                </div>

                                <div className="DealMgtUserDetailSectionList">
                                    <div className="DealMgtUserDetailTitleSection">
                                        <div className="DealMgtUserDetailTitleIcon"><SupervisorAccountIcon className={classes.icon} /></div>
                                        <label className="DealMgtUserDetailTitle">Stakeholder</label>
                                    </div>
                                    <div className="DealMgtUserDetailValueSection">
                                        <label className="DealMgtUserDetailValue">{deals.orderDetails.role}</label>
                                    </div>
                                </div>

                                <div className="DealMgtUserDetailSectionList">
                                    <div className="DealMgtUserDetailTitleSection">
                                        <div className="DealMgtUserDetailTitleIcon"><LocationOnIcon className={classes.icon} /></div>
                                        <label className="DealMgtUserDetailTitle">Pick Up</label>
                                    </div>
                                    <div className="DealMgtUserDetailValueSection">
                                        <label className="DealMgtUserDetailValue">{deals.orderDetails.address}</label>
                                    </div>
                                </div>
                            </div>

                            <OrderContainer>
                                <OrderHead>Transaction</OrderHead>
                                <OrderTable>
                                    <OrderDetail>
                                        <OrderLabel>
                                            Deal ID
                                        </OrderLabel>
                                        <OrderValue>
                                            {deals.orderDetails.dealid}
                                        </OrderValue>
                                    </OrderDetail>
                                    <OrderDetail>
                                        <OrderLabel>
                                            Quantity
                                        </OrderLabel>
                                        <OrderValue>
                                            {deals.orderDetails.quantity}
                                        </OrderValue>
                                    </OrderDetail>
                                    <OrderDetail>
                                        <OrderLabel>
                                            Order ID
                                        </OrderLabel>
                                        <OrderValue>
                                            {deals.orderDetails.orderid}
                                        </OrderValue>
                                    </OrderDetail>
                                    <OrderDetail>
                                        <OrderLabel>
                                            Total Price
                                        </OrderLabel>
                                        <OrderValue>
                                            {deals.orderDetails.totalprice}
                                        </OrderValue>
                                    </OrderDetail>
                                </OrderTable>


                                <>{
                                    status === "PENDING" ? (
                                        <>
                                            <OrderStatusContainer>
                                            
                                                 <div className="orderStatusWrapper">
                                                    <div className="orderStatusLabelWrapper"><label className="orderStatusLabel">Order Status:</label></div>
                                                    <div className="orderStatusValueWrapper"><label className="orderStatusValue">{deals.orderDetails && deals.orderDetails.orderstatus}</label></div>
                                                 </div>

                                                 <div className="orderStatusWrapperDate">
                                                    <div className="orderStatusLabelWrapperDate"><label className="orderStatusLabelDate">Order Date:</label></div>
                                                    <div className="orderStatusValueWrapperDate"><label className="orderStatusValueDate">{convertDate(deals.orderDetails.orderdate)}</label></div>
                                                 </div>


                                                 <div className="orderStatusWrapperDate">
                                                    <div className="orderStatusLabelWrapperDate"><label className="orderStatusLabelDate">Pickup Date:</label></div>
                                                    <div className="orderStatusValueWrapperDate"><label className="orderStatusValueDate">{convertDate(deals.orderDetails.orderdate)}</label></div>
                                                 </div>
                                               

                               


                                            </OrderStatusContainer>

                                            <OrderAccept>
                                                <DealMgtautoCompleteContainer>
                                                    <Autocomplete


                                                        options={OrderReasons}
                                                        getOptionLabel={(option) => option.title}


                                                        renderInput={(params) => <TextField {...params} margin="normal" style={{ width: 250 }} label="cancellation reasons" onSelect={(e) => setReason(e.target.value)} />}
                                                    />

                                                </DealMgtautoCompleteContainer>
                                                <DealMgtButtonContainer>
                                                    <RedButton variant="contained"
                                                        id="DealMgtCancelDealButton"
                                                        onClick={() =>
                                                            handleCancel(deals.orderDetails.user_id,deals.orderDetails.dealid, reason, deals.orderDetails.orderid)
                                                        }>Cancel</RedButton>
                                                </DealMgtButtonContainer>

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
                                                    <div className="orderStatusValueWrapper"><label className="orderStatusValue">{deals.orderDetails && deals.orderDetails.orderstatus}</label></div>
                                                 </div>

                                                 <div className="orderStatusWrapperDate">
                                                    <div className="orderStatusLabelWrapperDate"><label className="orderStatusLabelDate">Order Date:</label></div>
                                                    <div className="orderStatusValueWrapperDate"><label className="orderStatusValueDate">{convertDate(deals.orderDetails.orderdate)}</label></div>
                                                 </div>


                                                 <div className="orderStatusWrapperDate">
                                                    <div className="orderStatusLabelWrapperDate"><label className="orderStatusLabelDate">Pickup Date:</label></div>
                                                    <div className="orderStatusValueWrapperDate"><label className="orderStatusValueDate">{convertDate(deals.orderDetails.orderdate)}</label></div>
                                                 </div>


                                                           
                                                 <div className="orderStatusWrapperDate">
                                                    <div className="orderStatusLabelWrapperDate"><label className="orderStatusLabelDate">Cancellation reason:</label></div>
                                                    <div className="orderStatusValueWrapperDate"><label className="orderStatusValueDate">{deals.orderDetails.canceledReason}</label></div>
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
                                                    <div className="orderStatusValueWrapper"><label className="orderStatusValue">{deals.orderDetails && deals.orderDetails.orderstatus}</label></div>
                                                 </div>

                                                 <div className="orderStatusWrapperDate">
                                                    <div className="orderStatusLabelWrapperDate"><label className="orderStatusLabelDate">Order Date:</label></div>
                                                    <div className="orderStatusValueWrapperDate"><label className="orderStatusValueDate">{convertDate(deals.orderDetails.orderdate)}</label></div>
                                                 </div>


                                                 <div className="orderStatusWrapperDate">
                                                    <div className="orderStatusLabelWrapperDate"><label className="orderStatusLabelDate">Pickup Date:</label></div>
                                                    <div className="orderStatusValueWrapperDate"><label className="orderStatusValueDate">{convertDate(deals.orderDetails.orderdate)}</label></div>
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
                    ) :
                    (
                        <label>no data</label>
                    )}
            </Container>


        </div>



    )
}

export default User




