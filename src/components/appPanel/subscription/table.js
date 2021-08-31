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
import './styles/SubMgtTable.scss';
import {useSelector} from 'react-redux';
import { USERDETAILS } from '../../../constants/appPanel/subscription';
import { useDispatch } from 'react-redux';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { red,purple,white} from '@material-ui/core/colors';
import { SubMgtTableDate } from '../../../function';
// import {Button} from '@material-ui/core'
// import MuiTableHead from "@material-ui/core/TableHead";




const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 500,
        minHeight:500,
    },
    TableHead:{
        fontSize:"16px",
        fontWeight:"700",
        borderBottom:"2px solid black",
    },
    TableBody:{
        fontSize:"14px",
        fontWeight:"500"
    },
    noData:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    }
});

// const TableHead = withStyles(theme => ({
//     root: {
//       backgroundColor: 'orange'
//     }
//   }))(MuiTableHead);

const RedButton = withStyles((theme) => ({
    root: {
      color: red[700],
      border: "2px solid #DC1D13",
      width:"80px",
      height:"35px",
      textTransform:"none",
      backgroundColor: theme.palette.getContrastText(purple[500]),
      '&:hover': {
        backgroundColor: red[800],
        color: theme.palette.getContrastText(purple[500]),
      },
      '&:active':{
        backgroundColor: red[800],
        color: theme.palette.getContrastText(purple[500]),
      },
      '&:focused':{
        backgroundColor: red[800],
        color: theme.palette.getContrastText(purple[500]),
      }
    },
  }))(Button);

const SubMgtTable = ({search,data}) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const columns = ["Name","Mobile","FirmName","Address","ExpiryDate","Actions"];
    const SubState = useSelector(state => state.subMgt)
    let userlist =[];
     userlist  = SubState.userList;

    React.useEffect(()=>{
       if(SubState.userList && SubState.userList.length!==0){
        userlist  = SubState.userList
       }
    },[SubState.userList])
    let userDetails  = SubState.userDetails;




  
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (

       

        userlist.length===0? (<h1>No Data</h1>):
        (
      
            
            <div className="TableContainer">
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead style={{backgroundColor:"white"}}>
                            <TableRow >
                            
                                {columns.map((column,index) => (
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
                             data.length!==0?
                             (
                                 <TableBody>
                                 {search(data).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,index) =>(
                                <TableRow style={row===userDetails? ({backgroundColor:' #fde9e8', color: 'white',}) : null}  key={index} >
                                    <TableCell className={classes.TableBody} align="center">{row.first_name}{row.last_name}</TableCell>
                                    <TableCell className={classes.TableBody} align="center">{row.Mobile}</TableCell>
                                    <TableCell className={classes.TableBody} align="center">{row.FirmName}</TableCell>
                                    <TableCell className={classes.TableBody}  align="center">{row.Address}</TableCell>
                                    <TableCell className={classes.TableBody} align="center">{row.ExpiryDate? (SubMgtTableDate(row.ExpiryDate)) : row.ExpiryDate}</TableCell>
                                    <TableCell className={classes.TableBody} align="center"><RedButton  type="button" onClick={()=>dispatch({type:USERDETAILS,payload:row})} variant="contained" color="primary">Detail</RedButton></TableCell>
                               
                                </TableRow>   ))}
                                 </TableBody>
                             )
                             :
                             (
                                 <TableBody className={classes.noData}>
                                     no users found 
                                 </TableBody>
                             )
                         }
                         </>
                       
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </div>

        )
        

    )
}

export default SubMgtTable

