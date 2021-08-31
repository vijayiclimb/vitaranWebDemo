import { TextField } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { Container } from './styles/carouselStyle'
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import './styles/CouponMgtcarousel.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { getDealList } from '../../../actions/appPanel/Deals';
import { GETCOUPONDETAILS } from '../../../constants/appPanel/coupon';
import Coin from '../../../images/coinsfinal.png'


const useStyles = makeStyles((themes) => ({
    search: {
        width: "50%",
        color: "black",
    },
}))

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    
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



const Carousels = ({ place }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const coupon = useSelector(state => state.couponMgt);
    const [couponid, setCouponId] = useState("");
    const [list, setList] = useState([]);
    const [q,setQ]=useState('');
    const [searchColumn,setSearchColumn]=useState(["coupon_id"]);
    // let settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     cssEase: "linear",
    // };

    // useEffect(() => {
    //     dispatch(getDealList(place, dealId));
    // }, [dealId])

  

    React.useEffect(()=>{
        if(coupon.couponList.length!==0){
            setList(coupon.couponList)
        }

    },[coupon.couponList])

    const Searchfilter=(datas)=>{
        return datas.filter((row)=>
                                    searchColumn.some(column=>row[column].toString().toLowerCase().indexOf(q.toLowerCase())>-1)
            
         )
    }

    const handleClick=(item)=>{
        //  console.log(item)
         setCouponId(item.coupon_id);
         dispatch({type:GETCOUPONDETAILS,payload:item})
    }

    // console.log(deals && deals.dealList[0].DealImage.replace(/\s/g, ""))

    return (

        <Container>

            <Autocomplete
               
                options={list}
                getOptionLabel={(option) => option.coupon_id}

                renderInput={(params) => <TextField {...params} margin="normal" label="Search coupons" className={classes.search} variant="outlined"
                
                onSelect={(e)=>setQ(e.target.value)}
                 onChange={(e)=>setQ(e.target.value)} />}
            />
    

            <Carousel responsive={responsive}  id="dealMgtCarousel" >
                {
                  coupon &&  coupon.couponList && coupon.couponList.length !== 0 && Searchfilter(coupon.couponList).map((item, index) => (
                        <>
                            {/* {item.DealStatus==="INACTIVE"? null : ( */}
                            <div className={`CardImageCouponMgt ${coupon.couponId === item.coupon_id ? "CardBorder" : null}`} key={index} onClick={()=>handleClick(item)}>
                                <div className="ImageContainerCouponMgt">
                                    <div className="ImageWrapperCouponMgt">
                                    {/* <img src="http://3.7.71.29:6001/imgs/wallet_coin.png"  alt="img"/>  */}
                                    <img src={Coin}  alt="img"/> 
                                   </div>
                                     
                                    <label >25 coins</label>            
                                </div>
                                <div className="TextContainerCouponMgt">
                                    <label className="TextContainerCouponMgtTitleOne">{item.term_desc}</label>
                                    <div className="TextContainerCouponMgtTitleTwoContainer">
                                    <label className="TextContainerCouponMgtTitleTwo">₹{item.term_value}</label>
                                    </div>
                                </div>
                                <div>

                                  
                                </div>
                            </div>
                            <div className="idSection">
                                <label className="idTitle">Coupon ID: </label><label className="idValue">{item.coupon_id}</label>
                            </div>

                            {/* )
                                  }
                                 */}
                        </>
                    ))
                }

            </Carousel>


        </Container>
    )
}

export default Carousels
