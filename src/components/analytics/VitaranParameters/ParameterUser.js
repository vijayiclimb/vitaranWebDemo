import React from 'react';
import './styles/ParameterUser.scss';
import Yel from '../../../images/yel.jpg'
import steve from '../../../images/steve.jpg';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles'
import CallIcon from '@material-ui/icons/Call';
import BusinessIcon from '@material-ui/icons/Business';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


const useStyles = makeStyles({
    icon: {
        width: "30px",
        height: "30px",
        color: "#053E5E",
    }
})


const ParameterUser = () => {
    const classes = useStyles();

    const weekOne = [
        { wk: '01', count: "20" },
        { wk: '02', count: "20" },
        { wk: '03', count: "20" },
        { wk: '04', count: "20" },
        { wk: '05', count: "20" },
        { wk: '06', count: "20" },
    ]

    const weekTwo = [
        { wk: '01', count: "20" },
        { wk: '02', count: "20" },
        { wk: '03', count: "20" },
        { wk: '04', count: "20" },
        { wk: '05', count: "20" },
        { wk: '06', count: "20" },
    ]

    return (
        <div className="UserContainer">
            <div className="FirmContainer">
                <img src={Yel} alt="yel" className="Firm" />
                <div className="ProfileContainer">
                    <img src={steve} alt="prof" className="Profile" />

                </div>

            </div>
            <div className="ParameterDetailContainer">
                <div className="DetailList">
                    <div className="Details">
                        <div className="DetailsLabel"><span className="icon"><AccountCircleIcon className={classes.icon} /></span><label className="DetailsLabelTitle">Name:</label></div>
                        <label className="DetailsLabelValue">Vijay</label>
                    </div>
                    <div className="Details">
                        <div className="DetailsLabel"><span className="icon"><CallIcon className={classes.icon} /></span><label className="DetailsLabelTitle">Mobile:</label></div>
                        <label className="DetailsLabelValue">8217847430</label>
                    </div>
                    <div className="Details">
                        <div className="DetailsLabel"><span className="icon"><BusinessIcon className={classes.icon} /></span><label className="DetailsLabelTitle">FirmName:</label></div>
                        <label className="DetailsLabelValue">ICS Pvt Ltd</label>
                    </div>
                    <div className="Details">
                        <div className="DetailsLabel"><span className="icon"><LocationOnIcon className={classes.icon} /></span><label className="DetailsLabelTitle">Address:</label></div>
                        <label className="DetailsLabelValue">Malleshwaram,Bangalore</label>
                    </div>
                    <div className="Details">
                        <div className="DetailsLabel"><span className="icon"><CheckCircleIcon className={classes.icon} /></span><label className="DetailsLabelTitle">Subscriber Status:</label></div>
                        <label className="DetailsLabelValue">Active</label>
                    </div>
                    <div className="Details">
                        <div className="DetailsLabel"><span className="icon"><AccountCircleIcon className={classes.icon} /></span><label className="DetailsLabelTitle">StakeHolder:</label></div>
                        <label className="DetailsLabelValue">Rider</label>
                    </div>

                </div>

            </div>

            <div className="ParameterWeekContainer">
                <div className="ParameterWeekOne">
                    <label className="ParameterWeekTitle">Vitaran Labh</label>
                    <div className="ParameterWeekCard">
                        {
                            weekOne.map((item, index) => (
                                <>{
                                    index === 0 ? (
                                        <div className="ParameterWeekOnecard" key={index}>
                                            <label className="ParameterWeekOneTitle">Wk{item.wk}</label>
                                            <label className="ParameterWeekOneValue">{item.count}</label>

                                        </div>
                                    ) : (
                                        <div className="ParameterWeekOnecard" key={index}>
                                            <label className="ParameterWeekOneTitl">Wk{item.wk}</label>
                                            <label className="ParameterWeekOneValu">{item.count}</label>

                                        </div>
                                    )
                                }
                                </>

                            ))
                        }

                    </div>
                </div>
                <div className="ParameterWeekTwo">
                    <label className="ParameterWeekTwoTitle">Vitaran Avsar</label>
                    <div className="ParameterWeekCardTwo">
                        {
                            weekOne.map((item, index) => (
                                <>{
                                    index === 0 ? (
                                        <div className="ParameterWeekTwocard" key={index}>
                                            <label className="ParameterWeekTwoTitle">Wk{item.wk}</label>
                                            <label className="ParameterWeekTwoValue">{item.count}</label>

                                        </div>
                                    ) : (
                                        <div className="ParameterWeekTwocard" key={index}>
                                            <label className="ParameterWeekTwoTitl">Wk{item.wk}</label>
                                            <label className="ParameterWeekTwoValu">{item.count}</label>

                                        </div>
                                    )
                                }
                                </>

                            ))
                        }

                    </div>
                </div>

            </div>





        </div>
    )
}

export default ParameterUser
