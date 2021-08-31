import React from 'react';
import './styles/VitaranPartnerRechargeSummaryDetailCard.scss'
import {CgUserList} from 'react-icons/cg';
import {AiOutlineUser,AiOutlineProfile} from 'react-icons/ai'
import {FcViewDetails} from 'react-icons/fc'
import Firm from '../../../images/Rectangle 308.png';
import Prof from '../../../images/Rectangle 485.png';
import { makeStyles } from '@material-ui/core/styles';
import {BiPhone,BiBuildings} from 'react-icons/bi';
import {GoLocation} from 'react-icons/go';
import {GrMail} from 'react-icons/gr'
import {FiMail} from 'react-icons/fi'



const useStyles = makeStyles({
  icon:{
      width:"18px",
      height:"18px",
      fontWeight:"600"
  }
  });

const VitaranPartnerRechargeSummaryDetailCard = () => {
    const classes = useStyles();
    return (
        <div className="VitaranPartnerRechargeDetailCardContainer">
           
           <div className="VitaranPartnerRechargeDetailCardContainerOne">
        
           <div className="VitaranPartnerRechargeDetailCardOneImageContainer">
               <img src={Firm} alt="firmImg" />
           </div>
           <div className="VitaranPartnerRechargeDetailCardTwoImageContainer">
               <img src={Prof} alt="firmImg" />
           </div>

           <div className="VitaranPartnerRechargeDetailCardDetailSection">
               <div className="VitaranPartnerRechargeDetailCardDetailList">
                   <div className="VitaranPartnerRechargeDetailCardDetailListOne">
                      <div className="VitaranPartnerRechargeDetailCardDetailListOneIcon">
                        <AiOutlineUser className={classes.icon}/>
                      </div>
                      <div className="VitaranPartnerRechargeDetailCardDetailListOneTitle">
                          <label>Name:</label>
                      </div>
                   </div>
                   <div className="VitaranPartnerRechargeDetailCardDetailListTwo">
                        <label className="VitaranPartnerRechargeDetailCardDetailListTwoValue">Elonaa Muskuuuu</label>
                   </div>
               </div>

               <div className="VitaranPartnerRechargeDetailCardDetailList">
                   <div className="VitaranPartnerRechargeDetailCardDetailListOne">
                      <div className="VitaranPartnerRechargeDetailCardDetailListOneIcon">
                        <AiOutlineProfile className={classes.icon}/>
                      </div>
                      <div className="VitaranPartnerRechargeDetailCardDetailListOneTitle">
                          <label>Partner ID:</label>
                      </div>
                   </div>
                   <div className="VitaranPartnerRechargeDetailCardDetailListTwo">
                        <label className="VitaranPartnerRechargeDetailCardDetailListTwoValue">123456</label>
                   </div>
               </div>

               <div className="VitaranPartnerRechargeDetailCardDetailList">
                   <div className="VitaranPartnerRechargeDetailCardDetailListOne">
                      <div className="VitaranPartnerRechargeDetailCardDetailListOneIcon">
                        <BiPhone className={classes.icon}/>
                      </div>
                      <div className="VitaranPartnerRechargeDetailCardDetailListOneTitle">
                          <label>Mobile:</label>
                      </div>
                   </div>
                   <div className="VitaranPartnerRechargeDetailCardDetailListTwo">
                        <label className="VitaranPartnerRechargeDetailCardDetailListTwoValue">8217847430</label>
                   </div>
               </div>

               <div className="VitaranPartnerRechargeDetailCardDetailList">
                   <div className="VitaranPartnerRechargeDetailCardDetailListOne">
                      <div className="VitaranPartnerRechargeDetailCardDetailListOneIcon">
                        <BiBuildings className={classes.icon}/>
                      </div>
                      <div className="VitaranPartnerRechargeDetailCardDetailListOneTitle">
                          <label>Firm:</label>
                      </div>
                   </div>
                   <div className="VitaranPartnerRechargeDetailCardDetailListTwo">
                        <label className="VitaranPartnerRechargeDetailCardDetailListTwoValue">IClimb Systems</label>
                   </div>
               </div>

               <div className="VitaranPartnerRechargeDetailCardDetailList">
                   <div className="VitaranPartnerRechargeDetailCardDetailListOneVV">
                      <div className="VitaranPartnerRechargeDetailCardDetailListOneIcon">
                        <GoLocation className={classes.icon}/>
                      </div>
                      <div className="VitaranPartnerRechargeDetailCardDetailListOneTitle">
                          <label>Address:</label>
                      </div>
                   </div>
                   <div className="VitaranPartnerRechargeDetailCardDetailListTwo">
                        <label className="VitaranPartnerRechargeDetailCardDetailListTwoValue">106, 1st A Main Rd, East of NGEF Layout, Kasturi Nagar, Bengaluru, Karnataka 560043</label>
                   </div>
               </div>

               <div className="VitaranPartnerRechargeDetailCardDetailList">
                   <div className="VitaranPartnerRechargeDetailCardDetailListOne">
                      <div className="VitaranPartnerRechargeDetailCardDetailListOneIcon">
                        <FiMail className={classes.icon}/>
                      </div>
                      <div className="VitaranPartnerRechargeDetailCardDetailListOneTitle">
                          <label>Email ID:</label>
                      </div>
                   </div>
                   <div className="VitaranPartnerRechargeDetailCardDetailListTwo">
                        <label className="VitaranPartnerRechargeDetailCardDetailListTwoValue">VijayRavi324@gmail.com</label>
                   </div>
               </div>
           </div>
           </div>
        </div>
    )
}

export default VitaranPartnerRechargeSummaryDetailCard
