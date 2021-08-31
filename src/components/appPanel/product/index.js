import React,{useState} from 'react'
import { GetProductMgtList } from '../../../actions/appPanel/ProductMgt'
import ProductMgtCard from './card'
import ProductMgtCategories from './Categories'
import ProductMgtDetail from './productDetail'
import './styles/index.scss'
import { useDispatch } from 'react-redux'
import AddProductMgtForm from './AddProductMgtForm'
import UpdateProductMgtForm from './UpdateProductMgtForm'
import Croll from './Croll'


const ProductMgt = ({place}) => {
     const dispatch = useDispatch();
     const[showAdd,setShowAdd]=useState(false);
     const[edit,setEdit]=useState(false);

    React.useEffect(()=>{
     dispatch(GetProductMgtList(place))
    },[place])

    const handleClick=()=>{
        setShowAdd(true);
    }

    const handleShow=()=>{
        setEdit(!edit)
    }

    return (
        <div className="proMgt_container">
            <ProductMgtCard />
            <ProductMgtCategories place={place} click={handleClick}/>

            {
                showAdd? ( <AddProductMgtForm zone={place} showAdd={showAdd} setShowAdd={setShowAdd}/>):                   
                (<>{edit?( <UpdateProductMgtForm  zone={place}  edit={edit} setEdit={setEdit}/>)
                    :(<ProductMgtDetail  edit={edit} setEdit={setEdit}/>)
                }</>)
            }

 {/* <Croll/> */}
            
           
           
        </div>
    )
}

export default ProductMgt
