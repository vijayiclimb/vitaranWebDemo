import React, { useState } from 'react'
import './styles/category.scss'
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { useSelector,useDispatch } from 'react-redux';
import { SETCATEGORY, SETPRODUCT, SETSKU } from '../../../constants/appPanel/ProductMgt';
import { GetAllBrand, GetProductSkuDetails, GetProductSkuList, SearchProductMgt } from '../../../actions/appPanel/ProductMgt';
import AddIcon from '@material-ui/icons/Add';
import { GetProductMgtList } from '../../../actions/appPanel/ProductMgt'
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles({
    paper: {
        width: '100%',
        maxHeight: 360,
        minHeight: 300,
    },
    container: {
        maxHeight: 360,
        minHeight: 360,
    },
    containerTwo: {
        maxHeight: 360,
        minHeight: 360,
    },
    pagination: {
        minWidth: 100,
        maxWidth: 400,
    },
    search: {
        minWidth: 650,
        width: "50%",
    },
    rowHead: {
        backgroundColor: '#053E5E',
        color: 'white'
    },
    tableCell:{
        cursor:"pointer",
    }

});

const ProductMgtCategories = ({place,job,click}) => {
    const classes = useStyles();
    const dispatch  = useDispatch();
    const [searched, setSearched] = useState("");
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const state = useSelector(state => state.productMgt);
    const[category,setCategory]=useState(state.Category);
    const [product,setProduct]=useState(state.Product);
    const [sku,setSku]=useState(state.Sku);
    const[q,setQ]=useState('');
    
    const cancelSearch = () => {
        setSearched("");

    };

   console.log(q)

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

   

    React.useEffect(()=>{
        dispatch({type:SETCATEGORY,payload:category});
        dispatch(GetAllBrand(place,category))

    },[place,category])


    React.useEffect(()=>{
        dispatch({type:SETPRODUCT,payload:product});
          dispatch(GetProductSkuList(place,product));
          
    },[place,product])

    
  React.useEffect(()=>{
      dispatch({type:SETSKU,payload:sku});
      dispatch(GetProductSkuDetails(place,sku))
  },[place,sku])

  React.useEffect(()=>{
       dispatch(SearchProductMgt(place,q));
  },[q])


//   React.useEffect(() => {
//       if(state.updatesuccess){
//       dispatch(GetProductMgtList(place))   
//       }
    
// }, [state.updatesuccess])


// React.useEffect(() => {
//     if(state.AddSuccess){
//     dispatch(GetProductMgtList(place))   
//     }
  
// }, [state.AddSuccess])

    return (
        <div className="categoryContainer">
           <Autocomplete
               
               options={state.SearchList}
               getOptionLabel={(option) => option}

               renderInput={(params) => <TextField {...params} margin="normal" label="Search Sku" className={classes.search} variant="outlined"
               
               onSelect={(e)=>setQ(e.target.value)}
               onKeyDown={(e)=>setQ(e.target.value)}
                onChange={(e)=>setQ(e.target.value)} />}
           />
   
            <div className="TableContainer">
            <div className="product">
                    {state.CategoryList && state.CategoryList.length !== 0 ? (
                        <Paper className={classes.paper}>

                            <TableContainer className={classes.container}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead >
                                        <TableRow style={{ backgroundColor: '#053E5E', color: 'white' }}>
                                            <TableCell style={{ backgroundColor: '#053E5E', color: 'white',fontWeight:"700",fontSize:"16px" }}
                                                align="center" >
                                                Category
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {state.CategoryList.map((row, index) => (
                                            <TableRow key={index} >
                                                <TableCell style={{ backgroundColor:`${state.Category===row? '#f2f2f2':'white'}`,  }} onClick={()=>setCategory(row)} className={classes.tableCell} align="left">{index+1}. {row}</TableCell>


                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    ) : (
                        <h1>no data</h1>
                    )}

                    {/* <TablePagination
                className={classes.pagination}
                    rowsPerPageOptions={[5,10, 25, 100]}
                    component="div"
                    count={arr.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                /> */}

                </div>
                <div className="product">
                    {state.ProductList && state.ProductList.length !== 0 ? (
                        <Paper className={classes.paper}>

                            <TableContainer className={classes.container}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead >
                                        <TableRow style={{ backgroundColor: '#053E5E', color: 'white' }}>
                                            <TableCell style={{ backgroundColor: '#053E5E', color: 'white',fontWeight:"700",fontSize:"16px" }}
                                                align="center" >
                                                Product
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {state.ProductList.map((row, index) => (
                                            <TableRow key={index} >
                                                <TableCell style={{ backgroundColor:`${state.Product===row? '#f2f2f2':'white'}`,  }} onClick={()=>setProduct(row)} className={classes.tableCell} align="left">{index+1}. {row}</TableCell>


                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    ) : (
                        <h1>no data</h1>
                    )}

                    {/* <TablePagination
                className={classes.pagination}
                    rowsPerPageOptions={[5,10, 25, 100]}
                    component="div"
                    count={arr.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                /> */}

                </div>
                <div className="product">
                {state.SkuList && state.SkuList.length !== 0 ? (
                        <Paper className={classes.root}>

                            <TableContainer className={classes.containerTwo}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead >
                                        <TableRow style={{ backgroundColor: '#053E5E', color: 'white' }}>
                                            <TableCell style={{ backgroundColor: '#053E5E', color: 'white',fontWeight:"700",fontSize:"16px" }}
                                                align="center" >
                                                Product Sku
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {state.SkuList.map((row, index) => (
                                            <TableRow key={index} >
                                                <TableCell style={{ backgroundColor:`${state.Sku===row? '#f2f2f2':'white'}`,  }} onClick={()=>setSku(row)}  className={classes.tableCell} align="left">{index+1}. {row}</TableCell>


                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    ) : (
                        <h1>no data</h1>
                    )}
                        {/* <TablePagination
                className={classes.pagination}
                    rowsPerPageOptions={[5,10, 25, 100]}
                    component="div"
                    count={arr.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                /> */}

                <div className="ProductMgtAddContainer">
                        <button type="button" onClick={click} className="ProductMgtAdd">
                            <AddIcon />
                        </button>
                    </div>
                 
                </div>


            </div>
        </div>
    )
}

export default ProductMgtCategories
