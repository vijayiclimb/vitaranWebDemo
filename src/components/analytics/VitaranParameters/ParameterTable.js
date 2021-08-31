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
import './styles/ParameterTable.scss'



const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 850,
        minHeight:730,
    },
});

const ParameterTable = () => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const columns = ["Name","Mobile","Firm Name","Address","Expiry Date","Actions"];

    const rows=[
        {name:"Wade",mobile:"8217847430",firmName:"ICS PVT LTD",address:"kasturi Nagar",date:"12-01-2021",actions:"Details"},
        {name:"Wade",mobile:"8217847430",firmName:"ICS PVT LTD",address:"kasturi Nagar",date:"12-01-2021",actions:"Details"},
        {name:"Wade",mobile:"8217847430",firmName:"ICS PVT LTD",address:"kasturi Nagar",date:"12-01-2021",actions:"Details"},
        {name:"Wade",mobile:"8217847430",firmName:"ICS PVT LTD",address:"kasturi Nagar",date:"12-01-2021",actions:"Details"},
        {name:"Wade",mobile:"8217847430",firmName:"ICS PVT LTD",address:"kasturi Nagar",date:"12-01-2021",actions:"Details"},
        {name:"Wade",mobile:"8217847430",firmName:"ICS PVT LTD",address:"kasturi Nagar",date:"12-01-2021",actions:"Details"},
        {name:"Wade",mobile:"8217847430",firmName:"ICS PVT LTD",address:"kasturi Nagar",date:"12-01-2021",actions:"Details"},
        {name:"Wade",mobile:"8217847430",firmName:"ICS PVT LTD",address:"kasturi Nagar",date:"12-01-2021",actions:"Details"},
        {name:"Wade",mobile:"8217847430",firmName:"ICS PVT LTD",address:"kasturi Nagar",date:"12-01-2021",actions:"Details"},
        {name:"Wade",mobile:"8217847430",firmName:"ICS PVT LTD",address:"kasturi Nagar",date:"12-01-2021",actions:"Details"},
        {name:"Wade",mobile:"8217847430",firmName:"ICS PVT LTD",address:"kasturi Nagar",date:"12-01-2021",actions:"Details"},
        {name:"Wade",mobile:"8217847430",firmName:"ICS PVT LTD",address:"kasturi Nagar",date:"12-01-2021",actions:"Details"},
     
  
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
                                    <TableCell align="center">{row.name}</TableCell>
                                    <TableCell  align="center">{row.mobile}</TableCell>
                                    <TableCell  align="center">{row.firmName}</TableCell>
                                    <TableCell  align="center">{row.address}</TableCell>
                                    <TableCell  align="center">{row.date}</TableCell>
                                    <TableCell  align="center"><button className="lalParamter">{row.actions}</button></TableCell>
                               
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

export default ParameterTable
