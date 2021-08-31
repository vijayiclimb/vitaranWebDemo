
import './styles/VitaranPartnerRechargeSummaryDetailTable.scss';
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

const head = ["Recharge ID", "Recharge Date", "Recharge Amount"]
const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 470,
        minHeight:460
    },
    title:{
        fontSize:"16px",
        fontWeight:"600"
    },
    headcell:{
        fontWeight:"600",
        fontSize:"16px"
    },
    cell:{
        fontSize:"14px"
    }
});

const rows = [
    {Rechargeid:"TRANS122343",Date:"12-01-2222",Amount:"12000"},
    {Rechargeid:"TRANS122343",Date:"12-01-2222",Amount:"12000"},
    {Rechargeid:"TRANS122343",Date:"12-01-2222",Amount:"12000"},
    {Rechargeid:"TRANS122343",Date:"12-01-2222",Amount:"12000"},
    {Rechargeid:"TRANS122343",Date:"12-01-2222",Amount:"12000"},
]

const VitaranPartnerRechargeSummaryDetailTable = () => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div className="VitaranPartnerRechargeDetailTableContainer">
            <div className="VitaranPartnerRechargeDetailTableContainerTitle">
                <label className={classes.title}>Recharge Summary</label>
            </div>
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
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow >
                     <TableCell align="center" className={classes.cell}>{row.Rechargeid}</TableCell>
                     <TableCell align="center" className={classes.cell}>{row.Date}</TableCell>
                     <TableCell align="center" className={classes.cell}>₹{row.Amount}</TableCell>
                </TableRow>
              );
            })}
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

export default VitaranPartnerRechargeSummaryDetailTable
