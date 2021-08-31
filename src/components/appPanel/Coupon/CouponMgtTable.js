import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
// import './styles/table.scss'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { red, purple, white } from '@material-ui/core/colors';




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

const CouponMgtTable = ({data}) => {
    const classes = useStyles();
    const Head = ["Name", "order ID", "Quantity","Order Date", "Pickup Date", "Action"];
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    let orderList  = useSelector(state => state.couponMgt.orderList);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };
    

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
                  orderList &&  orderList.length!==0 ? (
                    <TableBody>
                      {
                        orderList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => (
                          <TableRow key={index}>
                            <TableCell className={classes.TableBody} align="center">{item.SubscriberName}</TableCell>
                            <TableCell className={classes.TableBody} align="center">{item.Couponid}</TableCell>
                            <TableCell className={classes.TableBody} align="center">{item.SKUName}</TableCell>
                            <TableCell className={classes.TableBody} align="center">{item.Quantity}</TableCell>
                            <TableCell className={classes.TableBody} align="center">{item.dateOfApplication}</TableCell>
  
                            <TableCell className={classes.TableBody} align="center"><RedButton variant="contained" type="button">Details</RedButton></TableCell>
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

export default CouponMgtTable
