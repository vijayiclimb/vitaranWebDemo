import React, { useState } from 'react'
import { Container, User, Title, SubTitle,TableContainerS, TitleContainer, DetailContainer } from './styles/userstyle'
import Profile from './user'
import { useSelector } from 'react-redux'
import { getProfile } from '../../../actions/analytics/subscription'
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { red, purple, white } from '@material-ui/core/colors';
import { SubMgtDisplay } from '../../../function'




const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 650,
    minHeight: 650,
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

const SubscriptionUser = ({ place, job }) => {
  const Subs = useSelector(state => state.subscriberAnalytics);
  const type = "low";
  const dispatch = useDispatch();
  const classes=useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);


  let head = ["Name", "Mobile", "FirmName", "Address", "Expiry Date", "Action"]

  const handleClick = () => {
    dispatch(getProfile(place, job, type));
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
};

  return (
    <Container id='subscriptionuser'>
      <TitleContainer>
        <Title>{Subs && Subs.Title}</Title>
        <SubTitle>{Subs && Subs.type}</SubTitle>
      </TitleContainer>

      <DetailContainer>
        <TableContainerS>
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead style={{ backgroundColor: "white" }}>
                  <TableRow >

                    {head.map((column, index) => (
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
                  Subs.subscriberFilteredList &&  Subs.subscriberFilteredList.length!==0?
                  (
                    <TableBody>
                          {Subs.subscriberFilteredList && Subs.subscriberFilteredList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                            <TableRow  key={index} >
                              <TableCell className={classes.TableBody} align="center">{row.name}</TableCell>
                              <TableCell className={classes.TableBody} align="center">{row.mobile}</TableCell>
                              <TableCell className={classes.TableBody} align="center">{row.firm_name}</TableCell>
                              <TableCell className={classes.TableBody} align="center">{row.address}</TableCell>
                              <TableCell className={classes.TableBody} align="center">{SubMgtDisplay(row.expiry_date)}</TableCell>
                              <TableCell className={classes.TableBody} align="center"><RedButton type="button"  variant="contained" onClick={()=>dispatch(getProfile(place,job,row.user_id))} color="primary">Detail</RedButton></TableCell>

                            </TableRow>))}
                        </TableBody>
                  ):
                  (
                          <label>no users</label>
                  )
                }
                  
                       
                      
                     
                  
                </>

              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={Subs.subscriberFilteredList.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>
        
</TableContainerS>
        <User><Profile /></User>

      </DetailContainer>
    </Container>
  )
}

export default SubscriptionUser
