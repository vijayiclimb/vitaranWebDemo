import React,{useState,useEffect} from 'react'
import {Container,Reasons,Title} from './biderStyle';
import './styles/orderer.scss';
import { Button, TableHead } from '@material-ui/core';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import { red,purple } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import {useDispatch,useSelector} from 'react-redux';
import { AddReason, getFirstReasons, RemoveReason } from '../../../actions/appPanel/cancellation';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import ClearIcon from '@material-ui/icons/Clear';

const RedButton = withStyles((theme) => ({
  root: {
      color: theme.palette.getContrastText(purple[500]),
      width:"80px",
      height:"35px",
      marginRight:"10px",
      backgroundColor: red[700],
      '&:hover': {
          backgroundColor: red[800],
      },
  },
}))(Button);

const useStyles = makeStyles({
  paper: {
    width: '100%',
    maxHeight: 360,
    minHeight: 300,
},
container: {
  borderRadius:"10px",
    maxHeight: 360,
    minHeight: 360,
},
    table: {
      minWidth: 400,
    },
    button:{
        marginTop: "20px"  
      },

      headcell:{
          marginTop:"50px"
      }
  });

  
const RedButtonTwo = withStyles((theme) => ({
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



const Bider = () => {
    const classes = useStyles();
    const dispatch=useDispatch();
   const reasons = useSelector(state => state.cancelMgt.biderReasons);
   const [inp, setInp] = useState('');
 

   
       
    let type = 'Bidder';

useEffect(()=>{
    dispatch(getFirstReasons(type))
},[])



const handleRemove=(id)=>{
  let param={
      "reason_id":`${id}`
  }
  dispatch(RemoveReason(param))
}

const handleSubmit = () => {


  if(!inp || /^\s*$/.test(inp) ){
      return
  }
  let param = {
      "type": "Bidder",
      "reason": `${inp}`

  }

  console.log(param)
  dispatch(AddReason(param,type,setInp));
  

}


    return (
      <div className="OrdererContainer">
     
   
             

      <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
              <TableHead >
                  <TableRow >
                      <TableCell 
                      className={classes.headcell}
                      style={{backgroundColor:"#F0F0F0"}}
                          align="left" >
                          <Title >Bidder Reasons</Title>
                      </TableCell>
                  </TableRow>
              </TableHead>
              {
                        reasons && reasons.length !== 0 ? (
                            <TableBody>
                                {reasons.map((row, index) => (
                                    <TableRow key={index} >
                                        <TableCell align="left" style={{display:"flex",justifyContent:"space-between",fontSize:"14px"}}>{index + 1}. {row.reason}  <span onClick={()=>dispatch(RemoveReason(row && row.reason_id,type))} style={{cursor:"pointer"}}><ClearIcon style={{cursor:"pointer",color:"#c4c4c4"}}/></span> </TableCell>


                                    </TableRow>
                                ))}
                                <TableRow>
                                <TableCell align="left"><input value={inp} style={{width:"100%",cursor:"pointer",height:"100%",outline:"none",border:"none"}}  onChange={(e) => setInp(e.target.value)} type="text"/></TableCell>
                                </TableRow>

                            </TableBody>
                        )
                            :
                            (
                               
                                <TableBody>
                                <TableCell align="left">No Data</TableCell>
                                <TableRow>
                                <TableCell align="left"><input value={inp} style={{width:"100%",height:"100%",cursor:"pointer",outline:"none",border:"none"}}  onChange={(e) => setInp(e.target.value)} type="text"/></TableCell>
                                </TableRow>
                                </TableBody>
                               

                                        )
                    }

          </Table>
      </TableContainer>

<div style={{display:"flex",flexDirection:"row"}}>
<RedButton  className={classes.button} variant="contained" onClick={handleSubmit} color="primary">ADD</RedButton>
</div>

</div>
    )
}

export default Bider
