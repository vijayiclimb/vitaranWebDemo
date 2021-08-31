import React, { useState } from 'react';
import './styles/VpDeals.scss';
import { TextField, Button } from '@material-ui/core';
import { red, purple } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Bidi from '../../../images/bidi.png'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { GetDealOrderCancel, GetDealOrderComplete, GetDealOrderId, GetDealOrderList } from '../../../actions/VitaranPartner/VpDealMgt';
import { DEALORDERDETAILS } from '../../../constants/vitaranpartner/pickupcenter/PickUpCenter';


const RedButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(purple[500]),
        marginRight: "10px",
        backgroundColor: red[700],
        '&:hover': {
            backgroundColor: red[800],
        },
    },
}))(Button);


const RedButtonTwo = withStyles((theme) => ({
    root: {
        color: "#716F6F",
        border: "2px solid #716F6F",

        textTransform: "none",
        backgroundColor: theme.palette.getContrastText(purple[500]),
        '&:hover': {
            color: "#716F6F",
            border: "2px solid #716F6F",

            textTransform: "none",
            backgroundColor: theme.palette.getContrastText(purple[500]),
        }
    },
}))(Button);



const useStyles = makeStyles((theme) => ({
    button: {
        padding: "0px 25px"
    },
}))

const VpDeals = ({ zone }) => {
    const classes = useStyles();
    const [state, setState] = useState('Pending');
    const dispatch = useDispatch();
    const [text, setText] = useState("");
    const Deal = useSelector(state => state.pickUpCenterAddress);
    const [list, setList] = useState([]);
    const [orderList, setOrderList] = useState([]);
    const [cancelledText, setCancelledText] = useState('');
    const [obj, setObj] = useState({});


    React.useEffect(() => {
        dispatch(GetDealOrderId(zone))
    }, [])



    // React.useEffect(() => {
    //     if (text && text.length !== 0) {
    //         dispatch(GetDealOrderList(text, zone))
    //     }
    // }, [text])

    React.useEffect(() => {
        if (Deal && Deal.DealOrderIdList && Deal.DealOrderIdList.length !== 0) {
            setList(Deal.DealOrderIdList);
        }
    }, [Deal.DealOrderIdList])

    React.useEffect(() => {
        if (Deal && Deal.DealOrderList && Deal.DealOrderList.length !== 0) {
            setOrderList(Deal.DealOrderList)
        }
    }, [Deal.DealOrderList])

    console.log(obj)
    console.log(Deal)
    console.log(list)
    console.log(text);

    const defaultImg = 'http://3.7.71.29:6001/imgs/Noproductimageavailable.png';

    const handleSearch=()=>{
        if (text && text.length !== 0) {
            dispatch(GetDealOrderList(text, zone))
        }
    }

    const handleCancel = () => {
        if (orderList && orderList.length !== 0) {
            let cancelObj =
            {
                "order_id": `${orderList[0].order_id}`,
                "deal_id": `${orderList[0].deal_id}`,
                "zone": `${zone}`,
                "canceled_by": "VitaranPartner",
                "user_id": `${orderList[0].user_id}`,
                "cancel_reason": `${cancelledText}`
            }

            dispatch(GetDealOrderCancel(cancelObj))
        }

    }


    const handleComplete=()=>{
        if(orderList && orderList.length!==0){
            let completeObj={
                "user_id":`${orderList[0].user_id}`,
                "order_id":`${orderList[0].order_id}`,
                "deal_id":`${orderList[0].deal_id}`,
                "zone":`${zone}`
            }

            dispatch(GetDealOrderComplete(completeObj))
        }
    }


    let reasons = [
        "Not Interested",
        "Too Costly",
        "Bad Product"
    ]


    return (
        <div className="VpDealsContainer">
            <div className="VpDealsContainerTop">
                <div className="VpDealsContainerTopOne">
                    <Autocomplete

                        options={list}
                        getOptionLabel={(option) => option.order_id}
                        onChange={(e, v) => setText(v && v.order_id)}
                        renderInput={(params) => <TextField {...params} size="small" variant="outlined" />}
                    />
                </div>
                <div className="VpDealsContainerTopTwo">
                    <RedButton className={classes.button} variant="contained" onClick={handleSearch}>Search</RedButton>
                </div>


            </div>
            {
                orderList && orderList.length !== 0 ? (
                    <div className="VpDealsContainerBottom">
                        {orderList[0].order_status === "Pending" ? (
                            <div className="VpDealsContainerBottomOne">
                                <div className="VpDealsContainerBottomOneStatusContainer">
                                    <label className="VpDealsContainerBottomOneStatusTitle">
                                        Order Status
                                    </label>
                                    <label className="VpDealsContainerBottomOneStatusValue">
                                        Pending
                                    </label>
                                </div>
                                <div className="VpDealsContainerBottomOneDateContainer">
                                    <div className="VpDealsContainerBottomOneDateContainerOne">
                                        <label className="VpDealsContainerBottomOneDateContainerOneTitle">
                                            Order Date:
                                        </label>
                                        <label className="VpDealsContainerBottomOneDateContainerOneValue">
                                            {orderList[0].order_date}
                                        </label>
                                    </div>
                                    <div className="VpDealsContainerBottomOneDateContainerTwo">
                                        <label className="VpDealsContainerBottomOneDateContainerTwoTitle">
                                            PickUpDate:
                                        </label>
                                        <label className="VpDealsContainerBottomOneDateContainerTwoValue">
                                            {orderList[0].pickup_date === null || "nan" || "undefined" ? "12-may-2010" : orderList[0].pickup_date}
                                        </label>
                                    </div>
                                </div>

                                <div className="VpDealsContainerBottomOneReasonContainerTwo">
                                    <Autocomplete

                                        options={reasons}
                                        getOptionLabel={(option) => option}

                                        renderInput={(params) => <TextField {...params} size="small" variant="standard" onSelect={(e) => setCancelledText(e.target.value)} />}
                                    />
                                </div>


                                <div className="VpDealsContainerBottomOneButtonContainer">
                                    <RedButton variant="contained" onClick={handleComplete}>Complete Order</RedButton>
                                    <RedButtonTwo variant="contained" onClick={handleCancel}>Cancel Order</RedButtonTwo>
                                </div>
                                <div>

                                </div>
                            </div>
                        ) : (
                            <>
                                {
                                    orderList[0].order_status === "Completed" ?
                                        (
                                            <div className="VpDealsContainerBottomOneCompleted">
                                                <div className="VpDealsContainerBottomOneStatusContainer">
                                                    <label className="VpDealsContainerBottomOneStatusTitle">
                                                        Order Status
                                                    </label>
                                                    <label className="VpDealsContainerBottomOneStatusValueCompleted">
                                                        Completed
                                                    </label>
                                                </div>
                                                <div className="VpDealsContainerBottomOneDateContainer">
                                                    <div className="VpDealsContainerBottomOneDateContainerOne">
                                                        <label className="VpDealsContainerBottomOneDateContainerOneTitle">
                                                            Order Date:
                                                        </label>
                                                        <label className="VpDealsContainerBottomOneDateContainerOneValue">
                                                            {orderList[0].order_date}
                                                        </label>
                                                    </div>
                                                    <div className="VpDealsContainerBottomOneDateContainerTwo">
                                                        <label className="VpDealsContainerBottomOneDateContainerTwoTitle">
                                                            PickUpDate:
                                                        </label>
                                                        <label className="VpDealsContainerBottomOneDateContainerTwoValue">
                                                            {orderList[0].pickup_date === null || "nan" || "undefined" ? "12-may-2010" : orderList[0].pickup_date}
                                                        </label>
                                                    </div>
                                                </div>
                                                <div>

                                                </div>
                                            </div>
                                        ) :
                                        (
                                            <>
                                                {
                                                    orderList[0].order_status === "Cancelled" ?
                                                        (
                                                            <>
                                                                <div className="VpDealsContainerBottomOneCancelled">
                                                                    <div className="VpDealsContainerBottomOneStatusContainer">
                                                                        <label className="VpDealsContainerBottomOneStatusTitle">
                                                                            Order Status
                                                                        </label>
                                                                        <label className="VpDealsContainerBottomOneStatusValueCancelled">
                                                                            Cancelled
                                                                        </label>
                                                                    </div>
                                                                    <div className="VpDealsContainerBottomOneReasonContainerTwoCancelled">
                                                                        <TextField variant="standard" placeholder="Reasons" value={orderList[0].cancel_reason} disabled={true} />
                                                                    </div>
                                                                    <div className="VpDealsContainerBottomOneDateContainer">
                                                                        <div className="VpDealsContainerBottomOneDateContainerOne">
                                                                            <label className="VpDealsContainerBottomOneDateContainerOneTitle">
                                                                                Order Date:
                                                                            </label>
                                                                            <label className="VpDealsContainerBottomOneDateContainerOneValue">
                                                                                {orderList[0].order_date}
                                                                            </label>
                                                                        </div>
                                                                        <div className="VpDealsContainerBottomOneDateContainerTwo">
                                                                            <label className="VpDealsContainerBottomOneDateContainerTwoTitle">
                                                                                PickUpDate:
                                                                            </label>
                                                                            <label className="VpDealsContainerBottomOneDateContainerTwoValue">
                                                                                {orderList[0].pickup_date === null || "nan" || "undefined" ? "12-may-2010" : orderList[0].pickup_date}
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div>

                                                                    </div>
                                                                </div>
                                                            </>
                                                        ) :
                                                        (
                                                            <>
                                                            </>
                                                        )
                                                }
                                            </>
                                        )
                                }
                            </>

                        )}


                        <div className="VpDealsContainerBottomTwo">
                            <div className="VpDealsContainerBottomTwoTitleContainer">
                                <label className="VpDealsContainerBottomTwoTitle">Order Details</label>
                            </div>

                            <div className="VpDealsContainerBottomTwoDetailsContainer">
                                <div className="VpDealsContainerBottomTwoDetailsListContainer">
                                    <div className="VpDealsContainerBottomTwoDetailsListTitleContainer">
                                        <label className="VpDealsContainerBottomTwoDetailsListTitle">Order ID: </label>
                                    </div>
                                    <div className="VpDealsContainerBottomTwoDetailsListValueContainer">
                                        <label className="VpDealsContainerBottomTwoDetailsListValue">{orderList[0].order_id}</label>
                                    </div>
                                </div>

                                <div className="VpDealsContainerBottomTwoDetailsListContainer">
                                    <div className="VpDealsContainerBottomTwoDetailsListTitleContainer">
                                        <label className="VpDealsContainerBottomTwoDetailsListTitle">Orderer Name: </label>
                                    </div>
                                    <div className="VpDealsContainerBottomTwoDetailsListValueContainer">
                                        <label className="VpDealsContainerBottomTwoDetailsListValue">{orderList[0].orderer_name}</label>
                                    </div>
                                </div>

                                <div className="VpDealsContainerBottomTwoDetailsListContainer">
                                    <div className="VpDealsContainerBottomTwoDetailsListTitleContainer">
                                        <label className="VpDealsContainerBottomTwoDetailsListTitle">Mobile: </label>
                                    </div>
                                    <div className="VpDealsContainerBottomTwoDetailsListValueContainer">
                                        <label className="VpDealsContainerBottomTwoDetailsListValue">{orderList[0].mobile_no}</label>
                                    </div>
                                </div>

                                <div className="VpDealsContainerBottomTwoDetailsListContainer">
                                    <div className="VpDealsContainerBottomTwoDetailsListTitleContainer">
                                        <label className="VpDealsContainerBottomTwoDetailsListTitle">Scheme: </label>
                                    </div>
                                    <div className="VpDealsContainerBottomTwoDetailsListValueContainer">
                                        <label className="VpDealsContainerBottomTwoDetailsListValue">{orderList[0].scheme}</label>
                                    </div>
                                </div>

                            </div>

                            <div className="VpDealsContainerBottomTwoSkuDetailsContainer">
                                <div className="VpDealsContainerBottomTwoSkuImageContainer">
                                    <img src={orderList[0].sku_image === "nan" || null || "undefined" ? `${defaultImg}` : `${orderList[0].sku_image}`} alt="bidi" />
                                </div>
                                <div className="VpDealsContainerBottomTwoSkuIdContainer">
                                    <div className="VpDealsContainerBottomTwoSkuIdContainerOne">
                                        <label>Deal Id</label>
                                    </div>
                                    <div className="VpDealsContainerBottomTwoSkuIdContainerTwo">
                                        <label>{orderList[0].deal_id}</label>
                                    </div>
                                </div>
                                <div className="VpDealsContainerBottomTwoSkuNameContainer">
                                    <div className="VpDealsContainerBottomTwoSkuNameContainerOne">
                                        <label>Sku Name</label>
                                    </div>
                                    <div className="VpDealsContainerBottomTwoSkuNameContainerTwo">
                                        <label>{orderList[0].sku_name}</label>
                                    </div>
                                </div>
                                <div className="VpDealsContainerBottomTwoSkuQuantityContainer">
                                    <div className="VpDealsContainerBottomTwoSkuQuantityContainerOne">
                                        <label>Quantity</label>
                                    </div>
                                    <div className="VpDealsContainerBottomTwoSkuQuantityContainerTwo">
                                        <label>{orderList[0].Quantity}</label>
                                    </div>
                                </div>
                                <div className="VpDealsContainerBottomTwoSkuMrpContainer">
                                    <div className="VpDealsContainerBottomTwoSkuMrpContainerOne">
                                        <label>Mrp</label>
                                    </div>
                                    <div className="VpDealsContainerBottomTwoSkuMrpContainerTwo">
                                        <label>{orderList[0].mrp}</label>
                                    </div>
                                </div>
                                <div className="VpDealsContainerBottomTwoSkuTotalPriceContainer">
                                    <div className="VpDealsContainerBottomTwoSkuTotalPriceContainerOne">
                                        <label>Total Price</label>
                                    </div>
                                    <div className="VpDealsContainerBottomTwoSkuTotalPriceContainerTwo">
                                        <label>{orderList[0].total_price}</label>
                                    </div>
                                </div>
                            </div>

                            <div className="VpDealsContainerLastContainer">
                                <div className="VpDealsContainerLastTitleContainer">
                                    <label className="VpDealsContainerLastTitle">Total Price:</label>
                                </div>
                                <div className="VpDealsContainerLastValueContainer">
                                    <label className="VpDealsContainerLastValue">{orderList[0].total_price} Rs</label>
                                </div>

                            </div>
                        </div>
                    </div>
                ) : (
                    <label>no data</label>
                )
            }

        </div>
    )
}

export default VpDeals

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
];
