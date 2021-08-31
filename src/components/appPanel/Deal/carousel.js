import { TextField } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { Container } from './styles/carouselStyle'
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import './styles/carousel.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { getDealList } from '../../../actions/appPanel/Deals';


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
        items: 4,
    
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
    const deals = useSelector(state => state.dealMgt);
    const [dealId, setDealId] = useState("");
    const [skuName, setSkuName] = useState([]);
    const [q,setQ]=useState('');
    const [searchColumn,setSearchColumn]=useState(["DealId"]);
    // let settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     cssEase: "linear",
    // };

    useEffect(() => {
        dispatch(getDealList(place, dealId));
    }, [dealId])

  

    React.useEffect(()=>{
        if(deals.dealList.length!==0){
            setSkuName(deals.dealList)
        }

    },[deals.dealList])

    const Searchfilter=(datas)=>{
        return datas.filter((row)=>
                                    searchColumn.some(column=>row[column].toString().toLowerCase().indexOf(q.toLowerCase())>-1)
            
         )
    }

    // console.log(deals && deals.dealList[0].DealImage.replace(/\s/g, ""))

    return (

        <Container>

            <Autocomplete
               
                options={skuName}
                getOptionLabel={(option) => option.DealId}

                renderInput={(params) => <TextField {...params} margin="normal" label="Search Deals" className={classes.search} variant="outlined"
                
                onSelect={(e)=>setQ(e.target.value)}
                 onChange={(e)=>setQ(e.target.value)} />}
            />
    

            <Carousel responsive={responsive}  id="dealMgtCarousel" >
                {
                    deals &&   deals.dealList && deals.dealList.length !== 0 && Searchfilter(deals.dealList).map((item, index) => (
                        <>
                            {/* {item.DealStatus==="INACTIVE"? null : ( */}
                            <div className={`CardImage ${deals.DealId === item.DealId ? "CardBorder" : null}`} key={index} onClick={() => setDealId(item.DealId)}>
                                <img src={`${item.DealImage.replace(/\s/g, "")}`} alt="marl" />
                            </div>
                            <div className="idSection">
                                <label className="idTitle">Deal ID: </label><label className="idValue">{item.DealId}</label>
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
