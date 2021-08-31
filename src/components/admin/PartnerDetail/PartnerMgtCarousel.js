import React,{useState} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TextField from '@material-ui/core/TextField';   
import './styles/AdminPartnerMgtCarousel.scss' ;
import { AiOutlinePlus } from 'react-icons/ai';
import {BiPlus} from 'react-icons/bi'
import AddIcon from '@material-ui/icons/Add';
import { red, purple,blue } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Prof from '../../../images/Rectangle 485.png';
import {useSelector,useDispatch} from 'react-redux';
import {GetAdminPartnerDetail} from '../../../actions/Admin/AdminPartnerMgt'



const BlueButtonTwo = withStyles((theme) => ({
    root: {
        color: "#053E5E",
        border: "2px solid #053E5E",
        width: "150px",
        height: "35px",
        textTransform: "none",
        fontSize:"14px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",

        backgroundColor: theme.palette.getContrastText(purple[500]),
        // '&:hover': {
        //     backgroundColor: red[800],
        //     color: theme.palette.getContrastText(purple[500]),
        // },
        // '&:active': {
        //     backgroundColor: red[800],
        //     color: theme.palette.getContrastText(purple[500]),
        // },
        // '&:focused': {
        //     backgroundColor: red[800],
        //     color: theme.palette.getContrastText(purple[500]),
        // }
    },
}))(Button);

const responsive= {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const ph=[
    "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",

]


for(let i=0;i<=ph.length;i++){
    if(i<ph.length){
        console.log("yes")
    }

}

const AdminPartnerMgtCarousel = ({showAdd,setShowAdd}) => {
    const dispatch = useDispatch();
    // const classes = useStyles();
    const state = useSelector(state => state.partner);
    const [id,setId]=useState(0);
    console.log(id)
    // console.log(state.PartnerId)
   


 React.useEffect(()=>{
     if(id.length!=0){
        dispatch(GetAdminPartnerDetail(id)) 
     }
     
    // GetAdminPartnerDetail
 },[id])

    return (
        <div className="AdminPartnerMgtCarouselContainer">
        
        <Carousel responsive={responsive}>
        {/* <div className="AdminPartnerMgtCarouselCardContainerAdd">
                        <div className="AdminPartnerMgtCarouselCardWrapperAdd">
                               <div className="AdminPartnerMgtCarouselImageContainerAdd">
                                    <div className="AdminPartnerMgtCarouselImageContainerAddIcon" >
                                        <AddIcon style={{objectFit:"cover",width:"90px",height:"90px",color:"#C4C4C4"}}/>
                                    </div>
                               </div>
                               <div className="AdminPartnerMgtCarouselTextContainerAdd">
                                   <label className="AdminPartnerMgtCarouselTextOneAdd">Add New Partner</label>
                                   
                               </div>
                        </div>
                            
                        </div> */}
                {

                    
                    state && state.List && state.List.length!==0 && state.List.map((item,index)=>(
                        <div className={`AdminPartnerMgtCarouselCardContainer ${state.PartnerId===item.partner_id? `AdminPartnerMgtCarouselCardBorder` : `AdminPartnerMgtCarouselCardOneBorder`}`} key={index} onClick={()=>setId(parseInt(item.partner_id))}>
                        <div className="AdminPartnerMgtCarouselCardWrapper">
                               <div className="AdminPartnerMgtCarouselImageContainer">
                                    <div style={{width:"90px",height:"90px",overflow:"hidden",borderRadius:"100%"}}>
                                          <img src={item.profile_img} alt="mm" style={{objectFit:"cover",width:"90px",height:"90px"}}/>
                                    </div>
                               </div>
                               <div className="AdminPartnerMgtCarouselTextContainer">
                                   <label className="AdminPartnerMgtCarouselTextOne">{item.name}</label>
                                   <label className="AdminPartnerMgtCarouselTextTwo">{item.zone}</label>
                                   <label className="AdminPartnerMgtCarouselTextThree">₹{item.balance_amt}</label>
                               </div>
                        </div>
                            
                        </div>
                    )
                    )
                }
                </Carousel>
                  
               <div className="AdminPartnerMgtCarouselContainerButton">
                  <BlueButtonTwo onClick={()=>setShowAdd(true)}>Add new <AddIcon style={{width:"18px",height:"18px"}}/></BlueButtonTwo>
                 
               </div>
        </div>
    )
}

export default AdminPartnerMgtCarousel
