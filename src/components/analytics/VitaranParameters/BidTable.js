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
import './styles/BidTable.scss'



const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 850,
        minHeight:730,
    },
});

const BidTable = () => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const columns = ["SKU Name","Lowest Price","Average Price","Highest Price"];

    const rows=[
        {Name:"Gold Flake Red",Lowest:"1200.00",Average:"1200.00",Highest:"1200.00"},
        {Name:"RajniGandha",Lowest:"1200.00",Average:"1200.00",Highest:"1200.00"},
        {Name:"Pepper Msala",Lowest:"1200.00",Average:"1200.00",Highest:"1200.00"},
        {Name:"Mojo Pizazaaaa",Lowest:"1200.00",Average:"1200.00",Highest:"1200.00"},
        {Name:"Gold Flake Red",Lowest:"1200.00",Average:"1200.00",Highest:"1200.00"},
        {Name:"Gold Flake Red",Lowest:"1200.00",Average:"1200.00",Highest:"1200.00"},
        {Name:"Gold Flake Red",Lowest:"1200.00",Average:"1200.00",Highest:"1200.00"},
  
    ]

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <div className="TableContainer">
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
                                    <TableCell  align="center">{row.Lowest}</TableCell>
                                    <TableCell  align="center">{row.Average}</TableCell>
                                    <TableCell  align="center">{row.Highest}</TableCell>
                               
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

export default BidTable
