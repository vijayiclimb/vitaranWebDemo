import React from 'react'
import {Button} from '@material-ui/core'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { useSelector,useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { red, purple, white } from '@material-ui/core/colors';
import { GetSkuDetailsProductAnalytics } from '../../../../actions/analytics/market/product';


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 600,
    minHeight: 600,
  },
  TableHead: {
    fontSize: "16px",
    fontWeight: "700",
    borderBottom: "2px solid black",
  },
  TableBody: {
    fontSize: "14px",
    fontWeight: "500"
  },
  noData: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});

const RedButton = withStyles((theme) => ({
  root: {
    color: red[700],
    border: "2px solid #DC1D13",
    width: "80px",
    height: "35px",
    textTransform: "none",
    backgroundColor: theme.palette.getContrastText(purple[500]),
    '&:hover': {
      backgroundColor: red[800],
      color: theme.palette.getContrastText(purple[500]),
    },
    '&:active': {
      backgroundColor: red[800],
      color: theme.palette.getContrastText(purple[500]),
    },
    '&:focused': {
      backgroundColor: red[800],
      color: theme.palette.getContrastText(purple[500]),
    }
  },
}))(Button);



const ProductTable = ({place,role}) => {
  const classes = useStyles(); 
  const dispatch = useDispatch()
  const Head = ["SkuName", `No. of ${role}`, "Average Value","Active Users", "Actions"];
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const Product =useSelector(state => state.productAnalytics.SkuList)


  const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

   

   const handleGetSkuDetail=(sku)=>{
         let param={
          "role":`${role}`,
          "zone":`${place}`,
          "sku_name":`${sku}`
         }


    dispatch(GetSkuDetailsProductAnalytics(param))

   }

    // console.log(Product)
    return (
      <div className="tableContainer">


      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead style={{ backgroundColor: "white" }}>
              <TableRow >

                {Head.map((column, index) => (
                  <TableCell

                    align="center"
                    className={classes.TableHead}
                    key={index} >
                    {column}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <>
              {
                Product &&  Product.length!==0 ? (
                  <TableBody>
                    {
                      Product.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className={classes.TableBody} align="center">{item.sku_name}</TableCell>
                          <TableCell className={classes.TableBody} align="center">{item.no_of_users}</TableCell>
                          <TableCell className={classes.TableBody} align="center">{item.avgtransaction}</TableCell>
                          <TableCell className={classes.TableBody} align="center">{item.activeUsers}</TableCell>
                         

                          <TableCell className={classes.TableBody} align="center"><RedButton variant="contained" color="primary" type="button" onClick={()=>dispatch(GetSkuDetailsProductAnalytics(place,role,item.sku_name))}>Detail</RedButton></TableCell>
                        </TableRow>
                      ))
                    }

                  </TableBody>
                ) : (
                  <TableBody>{
                    `  no Orders found`  
                  }
                
                  </TableBody>
                )
              }
            </>

          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={50}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>

    </div>
    )
}

export default ProductTable
