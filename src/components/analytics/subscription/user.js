import React from 'react'
import { Container, FirmContainer, Firm, ProfileContainer,Card,Title,WeekCard,UsageCardValue,UsageCardValu,UsageCardTitle,UsageAverageValue,UsageAverageValu,UsageAverageTitle, ProfileImg, DetailList, DetailContainer, DetailsLabel, Details, Icon, Label, LabelValue,WeekContainer,WeekOne,WeekTwo } from './styles/profilestyles'
import Yel from '../../../images/yel.jpg'
import Steve from '../../../images/steve.jpg'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles'
import CallIcon from '@material-ui/icons/Call';
import BusinessIcon from '@material-ui/icons/Business';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {useSelector} from 'react-redux';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import {CircularProgress} from '@material-ui/core';
import './styles/user.scss';

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

const Profile = () => {

    const Subs = useSelector(state => state.subscriberAnalytics);
  
 
    const loader = Subs.profileLoader;
    const classes = useStyles();
    return (

        loader? (<Container><CircularProgress /></Container>): (
        <Container>
            <FirmContainer>
                <Firm src={Yel}></Firm>
                <ProfileContainer>
                    <ProfileImg src={Steve}>
                    </ProfileImg>
                </ProfileContainer>
            </FirmContainer>

            <div className="SubscriberAnalyticsUserDetailSection">
                                <div className="SubscriberAnalyticsUserDetailSectionList">
                                    <div className="SubscriberAnalyticsUserDetailTitleSection">
                                        <div className="SubscriberAnalyticsUserDetailTitleIcon"><AccountCircleIcon className={classes.icon} /></div>
                                        <label className="SubscriberAnalyticsUserDetailTitle">Name</label>
                                    </div>
                                    <div className="SubscriberAnalyticsUserDetailValueSection">
                                        <label className="SubscriberAnalyticsUserDetailValue">{Subs.subscriberDetails && Subs.subscriberDetails? Subs.subscriberDetails.name : null}</label>
                                    </div>
                                </div>
                                <div className="SubscriberAnalyticsUserDetailSectionList">
                                    <div className="SubscriberAnalyticsUserDetailTitleSection">
                                        <div className="SubscriberAnalyticsUserDetailTitleIcon"><CallIcon className={classes.icon} /></div>
                                        <label className="SubscriberAnalyticsUserDetailTitle">Mobile</label>
                                    </div>
                                    <div className="SubscriberAnalyticsUserDetailValueSection">
                                        <label className="SubscriberAnalyticsUserDetailValue">{Subs.subscriberDetails && Subs.subscriberDetails? Subs.subscriberDetails.mobile: null} </label>
                                    </div>
                                </div>

                                <div className="SubscriberAnalyticsUserDetailSectionList">
                                    <div className="SubscriberAnalyticsUserDetailTitleSection">
                                        <div className="SubscriberAnalyticsUserDetailTitleIcon"><SupervisorAccountIcon className={classes.icon} /></div>
                                        <label className="SubscriberAnalyticsUserDetailTitle">FirmName</label>
                                    </div>
                                    <div className="SubscriberAnalyticsUserDetailValueSection">
                                        <label className="SubscriberAnalyticsUserDetailValue">{Subs.subscriberDetails && Subs.subscriberDetails? Subs.subscriberDetails.firm_name : null                 }</label>
                                    </div>
                                </div>

                                <div className="SubscriberAnalyticsUserDetailSectionList">
                                    <div className="SubscriberAnalyticsUserDetailTitleSection">
                                        <div className="SubscriberAnalyticsUserDetailTitleIcon"><LocationOnIcon className={classes.icon} /></div>
                                        <label className="SubscriberAnalyticsUserDetailTitle">Address</label>
                                    </div>
                                    <div className="SubscriberAnalyticsUserDetailValueSection">
                                        <label className="SubscriberAnalyticsUserDetailValue">{Subs.subscriberDetails && Subs.subscriberDetails? Subs.subscriberDetails.address : null}</label>
                                    </div>
                                </div>
                            </div>




             <WeekContainer>
                 <WeekOne>
                    <Title>Subscriber Usage</Title>
                    <WeekCard>
                    {Subs.subscriberDetails&& Subs.subscriberDetails.weekly_usage? Subs.subscriberDetails.weekly_usage.map((item,index)=>(
                        <Card><UsageCardTitle>{item.WK}</UsageCardTitle><UsageCardValu>{item.subsCount}</UsageCardValu></Card>
                    )) : null }
                    
                    {/* <Card><UsageCardTitle>W6</UsageCardTitle><UsageCardValue>05</UsageCardValue></Card>
                    <Card><UsageCardTitle>W5</UsageCardTitle><UsageCardValue>05</UsageCardValue></Card>
                    <Card><UsageCardTitle>W4</UsageCardTitle><UsageCardValue>05</UsageCardValue></Card>
                    <Card><UsageCardTitle>W3</UsageCardTitle><UsageCardValue>05</UsageCardValue></Card>
                    <Card><UsageCardTitle>W2</UsageCardTitle><UsageCardValue>05</UsageCardValue></Card> */}
                    </WeekCard>
                 </WeekOne>
                 <WeekTwo>
                 <Title>Average value per Transaction</Title>
                 <WeekCard>
                 {Subs.subscriberDetails && Subs.subscriberDetails.weekly_avg_transaction? Subs.subscriberDetails.weekly_avg_transaction.map((item,index)=>(
                    <Card><UsageAverageTitle>{item.WK}</UsageAverageTitle><UsageCardValu>{parseFloat(item.avgTransaction).toFixed(2)}</UsageCardValu></Card>
                    )) : null}
                    {/* <Card><UsageAverageTitle>W6</UsageAverageTitle><UsageAverageValue>500</UsageAverageValue></Card>
                    <Card><UsageAverageTitle>W5</UsageAverageTitle><UsageAverageValue>600</UsageAverageValue></Card>
                    <Card><UsageAverageTitle>W4</UsageAverageTitle><UsageAverageValue>300</UsageAverageValue></Card>
                    <Card><UsageAverageTitle>W3</UsageAverageTitle><UsageAverageValue>200</UsageAverageValue></Card>
                    <Card><UsageAverageTitle>W2</UsageAverageTitle><UsageAverageValue>900</UsageAverageValue></Card> */}
                    </WeekCard>
                 </WeekTwo>
             </WeekContainer>



        </Container>
        )
    )
}

export default Profile
