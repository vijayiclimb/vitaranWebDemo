import React from 'react';
import './styles/AdminPartnerRechargeDetailCard.scss'
import { CgUserList } from 'react-icons/cg';
import { AiOutlineUser, AiOutlineProfile } from 'react-icons/ai'
import { FcViewDetails } from 'react-icons/fc'
import Firm from '../../../images/Rectangle 308.png';
import Prof from '../../../images/Rectangle 485.png';
import { makeStyles } from '@material-ui/core/styles';
import { BiPhone, BiBuildings } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
import { GrMail } from 'react-icons/gr'
import { FiMail } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';



const useStyles = makeStyles({
    icon: {
        width: "18px",
        height: "18px",
        fontWeight: "600"
    }
});

const AdminPartnerRechargeDetailCard = () => {
    const classes = useStyles();
    const state = useSelector(state => state.partnerSummary);
    
    return (
        <div className="AdminPartnerRechargeDetailCardContainer">
            {
                state && state.Details && state.Details !== "undefined" ? (
                    <div className="AdminPartnerRechargeDetailCardContainerOne">

                        <div className="AdminPartnerRechargeDetailCardOneImageContainer">
                            <img src={state.Details.Firm_image} alt="firmImg" />
                        </div>
                        <div className="AdminPartnerRechargeDetailCardTwoImageContainer">
                            <img src={state.Details.profile_img} alt="firmImg" />
                        </div>

                        <div className="AdminPartnerRechargeDetailCardDetailSection">
                            <div className="AdminPartnerRechargeDetailCardDetailList">
                                <div className="AdminPartnerRechargeDetailCardDetailListOne">
                                    <div className="AdminPartnerRechargeDetailCardDetailListOneIcon">
                                        <AiOutlineUser className={classes.icon} />
                                    </div>
                                    <div className="AdminPartnerRechargeDetailCardDetailListOneTitle">
                                        <label>Name:</label>
                                    </div>
                                </div>
                                <div className="AdminPartnerRechargeDetailCardDetailListTwo">
                                    <label className="AdminPartnerRechargeDetailCardDetailListTwoValue">{state.Details.first_name}{state.Details.last_name}</label>
                                </div>
                            </div>

                            <div className="AdminPartnerRechargeDetailCardDetailList">
                                <div className="AdminPartnerRechargeDetailCardDetailListOne">
                                    <div className="AdminPartnerRechargeDetailCardDetailListOneIcon">
                                        <AiOutlineProfile className={classes.icon} />
                                    </div>
                                    <div className="AdminPartnerRechargeDetailCardDetailListOneTitle">
                                        <label>Partner ID:</label>
                                    </div>
                                </div>
                                <div className="AdminPartnerRechargeDetailCardDetailListTwo">
                                    <label className="AdminPartnerRechargeDetailCardDetailListTwoValue">{state.Details.partner_id}</label>
                                </div>
                            </div>

                            <div className="AdminPartnerRechargeDetailCardDetailList">
                                <div className="AdminPartnerRechargeDetailCardDetailListOne">
                                    <div className="AdminPartnerRechargeDetailCardDetailListOneIcon">
                                        <BiPhone className={classes.icon} />
                                    </div>
                                    <div className="AdminPartnerRechargeDetailCardDetailListOneTitle">
                                        <label>Mobile:</label>
                                    </div>
                                </div>
                                <div className="AdminPartnerRechargeDetailCardDetailListTwo">
                                    <label className="AdminPartnerRechargeDetailCardDetailListTwoValue">{state.Details.Mobile}</label>
                                </div>
                            </div>

                            <div className="AdminPartnerRechargeDetailCardDetailList">
                                <div className="AdminPartnerRechargeDetailCardDetailListOne">
                                    <div className="AdminPartnerRechargeDetailCardDetailListOneIcon">
                                        <BiBuildings className={classes.icon} />
                                    </div>
                                    <div className="AdminPartnerRechargeDetailCardDetailListOneTitle">
                                        <label>Firm:</label>
                                    </div>
                                </div>
                                <div className="AdminPartnerRechargeDetailCardDetailListTwo">
                                    <label className="AdminPartnerRechargeDetailCardDetailListTwoValue">{state.Details.Firm_name}</label>
                                </div>
                            </div>

                            <div className="AdminPartnerRechargeDetailCardDetailList">
                                <div className="AdminPartnerRechargeDetailCardDetailListOneVV">
                                    <div className="AdminPartnerRechargeDetailCardDetailListOneIcon">
                                        <GoLocation className={classes.icon} />
                                    </div>
                                    <div className="AdminPartnerRechargeDetailCardDetailListOneTitle">
                                        <label>Address:</label>
                                    </div>
                                </div>
                                <div className="AdminPartnerRechargeDetailCardDetailListTwo">
                                    <label className="AdminPartnerRechargeDetailCardDetailListTwoValue">{state.Details.address}</label>
                                </div>
                            </div>

                            <div className="AdminPartnerRechargeDetailCardDetailList">
                                <div className="AdminPartnerRechargeDetailCardDetailListOne">
                                    <div className="AdminPartnerRechargeDetailCardDetailListOneIcon">
                                        <FiMail className={classes.icon} />
                                    </div>
                                    <div className="AdminPartnerRechargeDetailCardDetailListOneTitle">
                                        <label>Email ID:</label>
                                    </div>
                                </div>
                                <div className="AdminPartnerRechargeDetailCardDetailListTwo">
                                    <label className="AdminPartnerRechargeDetailCardDetailListTwoValue">{state.Details.email}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                    :
                    (
                        <label>no data</label>
                    )
            }


        </div>
    )
}

export default AdminPartnerRechargeDetailCard
