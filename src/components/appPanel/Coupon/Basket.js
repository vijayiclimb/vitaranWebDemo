import './styles/basket.scss';
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { BASKETDETAIL } from '../../../constants/appPanel/coupon';
import MiniCoin from '../../../images/MiniCoin.png';





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

const Basket = () => {
    const dispatch = useDispatch();
    const coupon = useSelector(state => state.couponMgt);
    const [id, setId] = useState(coupon.couponBasketId);

    const handleChange = (item) => {
        setId(item.basket_id);
        console.log(item)
        dispatch({ type: BASKETDETAIL, payload: item });

    }
    // console.log(coupon)
    // console.log(coupon.couponBasketList);
    // console.log(id)
    return (
        <div className="BasketWrapper">
            <div className="BasketHeader">
                <label className="BasketTitle">Coupon Baseket</label>
                {/* <button>Add</button> */}
            </div>

            <div className="Container">


                <Carousel responsive={responsive} >
                    {
                        coupon.couponBasketList.length !== 0 ? (coupon.couponBasketList.map((item, index) => (
                            <>
                                {/* {item.DealStatus==="INACTIVE"? null : ( */}
                                <div className={`CardImageCouponBasket ${coupon.couponBasketId === item.basket_id ? "CardBorderCouponBasket" : null}`} onClick={() => handleChange(item)} key={index} >
                                    <img src={`${item.sku_image}`} alt="marl" />
                                </div>
                                <div className="idSection" style={{ minHeight: "60px", display: "flex", alignItems: "flex-start" }}>
                                    <label className="idTitle">{item.sku_name}</label>
                                </div>
                                <div className="priceSection">
                                    <label className="price">₹{item.unit_price}</label>
                                </div>
                                <div className="CoinReedemSection">
                                    <label><label className="CoinReedemSectionCoins">{item.coins_used}</label><img style={{marginLeft:"2px"}} src={MiniCoin}/>Redeemable Coins</label>
                                </div>

                                {/* )
                                  }
                                 */}
                            </>
                        )))
                            : (<h1>no Data</h1>)
                    }
                </Carousel>


            </div>
        </div>
    )
}

export default Basket
const deal = [
    "one",
    "two", "three", "four", "five"
]