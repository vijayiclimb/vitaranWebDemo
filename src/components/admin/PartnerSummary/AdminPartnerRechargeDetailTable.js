
import './styles/AdminPartnerRechargeDetailTable.scss';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { CenterFocusStrong } from '@material-ui/icons';
import { useSelector } from 'react-redux';

const head = ["Transaction ID", "Recharge Date", "Recharge Amount"]
const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 470,
        minHeight:460
    },
    title:{
        fontSize:"14px",
        fontWeight:"600"
    },
    headcell:{
        fontWeight:"600",
        fontSize:"14px"
    }
});

const rows = [
    {transactionid:"TRANS122343",Date:"12-01-2222",Amount:"12000"},
    {transactionid:"TRANS122343",Date:"12-01-2222",Amount:"12000"},
    {transactionid:"TRANS122343",Date:"12-01-2222",Amount:"12000"},
    {transactionid:"TRANS122343",Date:"12-01-2222",Amount:"12000"},
    {transactionid:"TRANS122343",Date:"12-01-2222",Amount:"12000"},
]

const AdminPartnerRechargeDetailTable = () => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const state = useSelector(state => state.partnerSummary);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div className="AdminPartnerRechargeDetailTableContainer">
            <div className="AdminPartnerRechargeDetailTableContainerTitle">
                <label className={classes.title}>Recharge Summary</label>
            </div>
            {
                state && state.RechargeList && state.RechargeList.length!==0? (
                    <div>
                <Paper className={classes.root}>
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">  
                            <TableHead>
                                <TableRow>
                                    {head.map((column, index) => (
                                        <TableCell
                                            key={index}
                                            align="center"
                                            className={classes.headcell}

                                        >
                                            {column}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
            {state.RechargeList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow >
                     <TableCell align="center">{row.transaction_id}</TableCell>
                     <TableCell align="center">{row.transaction_date}</TableCell>
                     <TableCell align="center">{row.recharge_amount}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={state.RechargeList.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </Paper>
            </div>
                ):(
                    <div>
                    <Paper>
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">  
                            <TableHead>
                                <TableRow>
                                    {head.map((column, index) => (
                                        <TableCell
                                            key={index}
                                            align="center"
                                            className={classes.headcell}

                                        >
                                            {column}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
        
                <TableRow >
                     {/* <TableCell align="center">{row.transactionid}</TableCell> */}
                   No Data
                </TableRow>
              
          </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={20}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                    </Paper>
                    </div>
                )
            }
           
        </div>
    )
}

export default AdminPartnerRechargeDetailTable
