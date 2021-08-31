import React from 'react';
import './styles/VitaranPartnerTransactionSummaryDetailTable.scss';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { useSelector } from 'react-redux';

const head = ["Date",  "Details", "Transaction No.", "Debit", "Credit", "Balance"]
const useStyles = makeStyles({
    root: {
        width: '100%',

    },
    container: {
        maxHeight: 600,
        minHeight: 600
    },
    title: {
        fontSize: "16px",
        fontWeight: "600"
    },
    headcell: {
        fontWeight: "600",
        fontSize: "16px"
    },
    cell: {
        fontSize: "14px",


    }
});


const rows = [
    { date: "12-01-2022", name: "vij", detail: "subscription", id: "Trans13w2", debit: "200", credit: "100", balance: "25,000" },
    { date: "12-01-2022", name: "vij", detail: "subscription", id: "Trans13w2", debit: "200", credit: "100", balance: "25,000" },
    { date: "12-01-2022", name: "vij", detail: "subscription", id: "Trans13w2", debit: "200", credit: "100", balance: "25,000" },
    { date: "12-01-2022", name: "vij", detail: "subscription", id: "Trans13w2", debit: "200", credit: "100", balance: "25,000" },
    { date: "12-01-2022", name: "vij", detail: "subscription", id: "Trans13w2", debit: "200", credit: "100", balance: "25,000" },
    { date: "12-01-2022", name: "vij", detail: "subscription", id: "Trans13w2", debit: "200", credit: "100", balance: "25,000" },
    { date: "12-01-2022", name: "vij", detail: "subscription", id: "Trans13w2", debit: "200", credit: "100", balance: "25,000" },
    { date: "12-01-2022", name: "vij", detail: "subscription", id: "Trans13w2", debit: "200", credit: "100", balance: "25,000" },
    { date: "12-01-2022", name: "vij", detail: "subscription", id: "Trans13w2", debit: "200", credit: "100", balance: "25,000" },
    { date: "12-01-2022", name: "vij", detail: "subscription", id: "Trans13w2", debit: "200", credit: "100", balance: "25,000" },
    { date: "12-01-2022", name: "vij", detail: "subscription", id: "Trans13w2", debit: "200", credit: "100", balance: "25,000" },
    { date: "12-01-2022", name: "vij", detail: "subscription", id: "Trans13w2", debit: "200", credit: "100", balance: "25,000" },
]

const VitaranPartnerTransactionSummaryDetailTable = () => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const state = useSelector(state => state.vpTransactionSummary);

    console.log(state)

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div className="VitaranPartnerTransactionSummaryDetailTableContainer">
            <div className="VitaranPartnerTransactionSummaryDetailTableContainerTitle">
                <label className={classes.title}>Transaction Summary</label>
            </div>
            <div style={{ padding: "10px" }}>
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
                                {
                                    state && state.List && state.List.length !== 0 ? (
                                        <>
                                            {state.List.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                                return (
                                                    <TableRow >
                                                        <TableCell align="center" className={classes.cell}>{row.date}</TableCell>
                                                    
                                                        <TableCell align="center" className={classes.cell}>{row.details}</TableCell>
                                                        <TableCell align="center" className={classes.cell}>{row.transaction_id}</TableCell>
                                                        <TableCell align="center" className={classes.cell}>{row.debit}</TableCell>
                                                        <TableCell align="center" className={classes.cell}>{row.credit}</TableCell>
                                                        <TableCell align="center"><label className="VitaranPartnerTransactionSummaryDetailTableLabel">₹{row.balance}</label></TableCell>
                                                    </TableRow>
                                                );
                                            })}
                                        </>
                                    ) : (
                                        <TableRow >
                                            <TableCell align="center" className={classes.cell}>No Data</TableCell>
                                        </TableRow>
                                    )
                                }

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
        </div>
    )
}

export default VitaranPartnerTransactionSummaryDetailTable
