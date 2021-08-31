import React,{useState} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TextField from '@material-ui/core/TextField';
import './styles/VitaranPartnerAgentMgtCarousel.scss';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiPlus } from 'react-icons/bi'
import AddIcon from '@material-ui/icons/Add';
import { red, purple, blue } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Prof from '../../../images/Rectangle 483.png';
import Rating from '@material-ui/lab/Rating';
import { useSelector,useDispatch } from 'react-redux';
import { GetVpAgentDetails } from '../../../actions/VitaranPartner/AgentMgt';


const StyledRating = withStyles({
    iconFilled: {
      color: ' #053E5E',

    },
    iconHover: {
      color: '#ff3d47',
    },
  })(Rating);



const BlueButtonTwo = withStyles((theme) => ({
    root: {
        color: "#053E5E",
        border: "2px solid #053E5E",
        width: "150px",
        height: "35px",
        textTransform: "none",
        fontSize: "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

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

const responsive = {
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



const VitaranPartnerAgentMgtCarousel = ({ showAdd, setShowAdd }) => {
    // const classes = useStyles();
    const [value, setValue] = React.useState(2);
    const state = useSelector(state => state.vpAgentMgt)
    const[id,setId]=useState({
        PartnerId:"",
        AgentId:""
    });
 const dispatch = useDispatch();

 const handleClick=(partnerId,agentId)=>{
     setId({
         ...id,
         PartnerId:partnerId,
         AgentId:agentId
     })
 }

    React.useEffect(()=>{

        let param={
            "partner_id":`${id.PartnerId}`,
            "agent_id":`${id.AgentId}`
        }
    
         dispatch(GetVpAgentDetails(param))
    },[id])

    return (
        <div className="VitaranPartnerAgentMgtCarouselContainer">
        {
            state && state.List && state.List.length!==0?(
                <Carousel responsive={responsive}>
                {/* <div className="VitaranPartnerAgentMgtCarouselCardContainerAdd">
                        <div className="VitaranPartnerAgentMgtCarouselCardWrapperAdd">
                               <div className="VitaranPartnerAgentMgtCarouselImageContainerAdd">
                                    <div className="VitaranPartnerAgentMgtCarouselImageContainerAddIcon" >
                                        <AddIcon style={{objectFit:"cover",width:"90px",height:"90px",color:"#C4C4C4"}}/>
                                    </div>
                               </div>
                               <div className="VitaranPartnerAgentMgtCarouselTextContainerAdd">
                                   <label className="VitaranPartnerAgentMgtCarouselTextOneAdd">Add New Partner</label>
                                   
                               </div>
                        </div>
                            
                        </div> */}
                {
                    state.List.map((item, index) => {
                        return (
                            <div className={`VitaranPartnerAgentMgtCarouselCardContainer ${state.Id === item.agent_id ? `VitaranPartnerAgentMgtCarouselCardBorder` : `VitaranPartnerAgentMgtCarouselCardOneBorder`}`} key={index} onClick={()=>handleClick(item.partner_id,item.agent_id)}>
                                <div className="VitaranPartnerAgentMgtCarouselCardWrapper">
                                    <div className="VitaranPartnerAgentMgtCarouselImageContainer">
                                        <div style={{ width: "90px", height: "90px", overflow: "hidden", borderRadius: "100%" }}>
                                            <img src={item.agent_img} alt="mm" style={{ objectFit: "cover", width: "90px", height: "90px" }} />
                                        </div>
                                    </div>
                                    <div className="VitaranPartnerAgentMgtCarouselTextContainer">
                                        <label className="VitaranPartnerAgentMgtCarouselTextOne">{item.name}</label>
                                        <label className="VitaranPartnerAgentMgtCarouselTextTwo">{item.zone}</label>
                                        {/* <label className="VitaranPartnerAgentMgtCarouselTextThree">
                                            <StyledRating
                                               
                                                value={value}
                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                            />
                                        </label> */}
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </Carousel>
            ):(
                <label>No data</label>
            )
        }

            

            <div className="VitaranPartnerAgentMgtCarouselContainerButton">
                <BlueButtonTwo onClick={() => setShowAdd(true)}>Add new <AddIcon style={{ width: "18px", height: "18px" }} /></BlueButtonTwo>

            </div>
        </div>
    )
}

export default VitaranPartnerAgentMgtCarousel
