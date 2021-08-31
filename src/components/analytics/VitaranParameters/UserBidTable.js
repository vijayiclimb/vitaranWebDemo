import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import './styles/UserBidTable.scss'


const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 850,
        minHeight:600,
    },
});


const UserBidTable = () => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const columns = ["Name","Eligible For Bids","Bids Applied","Bids Selected as L1","Fullfilled Pickup","Cancelled By Orderer","Cancelled by Bider"];

    const rows=[
        {Name:"Gold Flake Red",Eligible:"1200.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Blue",Eligible:"1600.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Red",Eligible:"1200.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Red",Eligible:"1200.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Red",Eligible:"1200.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Blue",Eligible:"1600.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Red",Eligible:"1200.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Red",Eligible:"1200.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Red",Eligible:"1200.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Blue",Eligible:"1600.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Red",Eligible:"1200.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Red",Eligible:"1200.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Red",Eligible:"1200.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Blue",Eligible:"1600.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Red",Eligible:"1200.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Red",Eligible:"1200.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Red",Eligible:"1200.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Blue",Eligible:"1600.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Red",Eligible:"1200.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Red",Eligible:"1200.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Red",Eligible:"1200.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Blue",Eligible:"1600.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Red",Eligible:"1200.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Red",Eligible:"1200.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Red",Eligible:"1200.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Blue",Eligible:"1600.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Red",Eligible:"1200.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Red",Eligible:"1200.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Red",Eligible:"1200.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Blue",Eligible:"1600.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Red",Eligible:"1200.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Red",Eligible:"1200.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Red",Eligible:"1200.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Blue",Eligible:"1600.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Red",Eligible:"1200.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Red",Eligible:"1200.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Red",Eligible:"1200.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Blue",Eligible:"1600.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Red",Eligible:"1200.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Red",Eligible:"1200.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Red",Eligible:"1200.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Blue",Eligible:"1600.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Red",Eligible:"1200.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
        {Name:"Gold Flake Red",Eligible:"1200.00",Applied:"1200.00",Selected:"1200.00",Fullfilled:"25",CancelledOrder:"26",CancelledBider:"30w"},
    
  
    ]

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <div className="UserBidTableContainer">
             <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column,index) => (
                                    <TableCell
                                    align="center"
                                        key={index} >
                                        {column}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,index) =>(
                                <TableRow key={index}>
                                    <TableCell align="center">{row.Name}</TableCell>
                                    <TableCell  align="center">{row.Eligible}</TableCell>
                                    <TableCell  align="center">{row.Applied}</TableCell>
                                    <TableCell  align="center">{row.Selected}</TableCell>
                                    <TableCell  align="center">{row.Fullfilled}</TableCell>
                                    <TableCell  align="center">{row.CancelledOrder}</TableCell>
                                    <TableCell  align="center">{row.CancelledBider}</TableCell>
                               
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    )
}

export default UserBidTable
