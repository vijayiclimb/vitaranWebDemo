import React,{useState,useEffect} from 'react'
import{CurrentCountSection,Container,Card,DateTitle,DateValue,CardCount,CardTotallTitle,CardContainer,CardTotal,CardIcon2,CardIcon,CountSectionCard,CardIncrease,CardDate,CardTitle,CountSection,CardTotalValue,CardTotalTitle} from './styles/countStyle'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { makeStyles } from '@material-ui/core/styles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import {useSelector} from 'react-redux'


const useStyles = makeStyles((theme) => ({
    user:{
        width: "50px",
        height: "25px",
        color: "#fff",
    },
    arrow:{
        width: "50px",
        height: "25px",
        color: "#fff",
    }
}));

const Count = ({role}) => {
    const classes = useStyles();
    const SubdataCount = useSelector(state => state.subscriberAnalytics)
    const date = new Date();


    const day = date.getDate();
    const year = date.getFullYear();
    const month=`0${date.getMonth()+1}`.slice(-2);

    const fdate = `${day}-${month}-${year}`
    

   const[fday,setFday]=useState("");

   useEffect(()=>{
    if(date.getUTCDay()===0){
        setFday("SUNDAY")
    }
    else if(date.getUTCDay()===1){
        setFday("MONDAY")
    }
    else if(date.getUTCDay()===2){
        setFday("TUESDAY")
    }
    else if(date.getUTCDay()===3){
     setFday("WEDNESDAY")
    }
    else if(date.getUTCDay()===4){
     setFday("THURSDAY")
 }
 else if(date.getUTCDay()===5){
     setFday("FRIDAY")
 }
 else if(date.getUTCDay()===6){
     setFday("SATURDAY")
 }
   },[])

   
 


    return (
        <>
        <Container>
            <CurrentCountSection>
              <Card>
                  <CardCount>{SubdataCount && SubdataCount.SubscriberStateCount? SubdataCount.SubscriberStateCount.All : 0 }</CardCount>
                  <CardTitle>All</CardTitle>
              </Card>
              <Card>
              <CardCount>{SubdataCount && SubdataCount.SubscriberStateCount? SubdataCount.SubscriberStateCount.NeverActive : 0}</CardCount>
                  <CardTitle>Never Active</CardTitle>
              </Card>
              <Card>
              <CardCount>{SubdataCount && SubdataCount.SubscriberStateCount? SubdataCount.SubscriberStateCount.Active : 0}</CardCount>
                  <CardTitle>Active</CardTitle>
              </Card>
              <Card>
              <CardCount>{SubdataCount && SubdataCount.SubscriberStateCount? SubdataCount.SubscriberStateCount.Applied : 0}</CardCount>
                  <CardTitle>Applied</CardTitle>
              </Card>
              
              <Card>
              <CardCount>{SubdataCount && SubdataCount.SubscriberStateCount? SubdataCount.SubscriberStateCount.Expired : 0}</CardCount>
                  <CardTitle>Expired</CardTitle>
              </Card>
            </CurrentCountSection>




            <CountSection>
              <CardTotal>
              <CardIcon>
                 <PeopleOutlineIcon className={classes.user}/>
                 </CardIcon>
                 <CountSectionCard>
                    <CardTotalValue>{SubdataCount && SubdataCount.RoleCount? SubdataCount.RoleCount.role : 0}</CardTotalValue>
                    <CardTotallTitle>{role}</CardTotallTitle>
                 </CountSectionCard>
              </CardTotal>


              <CardIncrease>
             <CardIcon2>
              <ArrowUpwardIcon className={classes.arrow} />
              </CardIcon2>
              <CountSectionCard>
              
              <CardTotalValue>{SubdataCount && SubdataCount.increaseDecreasePercent? SubdataCount.increaseDecreasePercent : 0}</CardTotalValue>
                    <CardTotalTitle><ExpandLessIcon/>Inrease</CardTotalTitle>
                     </CountSectionCard>
              </CardIncrease>



              <CardDate>
              <CardContainer>
                  <DateValue>{fdate}</DateValue>
                  <DateTitle>{fday}</DateTitle>
                  </CardContainer>
              </CardDate>
            </CountSection>
        </Container>
        </>
    )
}

export default Count
