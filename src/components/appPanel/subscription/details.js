import React,{useState,useEffect} from 'react';
import './styles/SubMgtDetail.scss';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';
import SubMgtTable from './table';
import SubMgtUser from './user';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { USERDETAILS, USERLIST } from '../../../constants/appPanel/subscription';


const useStyles = makeStyles((theme) => ({
    textField: {
          width:"100%",
    },
}));



const RedCheckbox = withStyles({
    root: {
      color: "#bdbdbd",
      '&$checked': {
        color: red[800],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

const SubMgtDetail = ({place,job}) => {
    const dispatch = useDispatch();
    const SubState = useSelector(state => state.subMgt)
    let userlist  = SubState.userList;

    let PrimaryList = SubState.PrimaryList;
    const [checked, setChecked] = useState([]);
    const [checkedItem, setCheckedItem] = useState([]);
    const [columns, setColumn] = useState([
        { "id": 1, "name": "active",Label:"Active" },
        { "id": 2, "name": "never_applied",Label:"Never Active" },
        { "id": 3, "name": "applied",Label:"Applied" },
      
        { "id": 5, "name": "expired",Label:"Expired" },
        

    ]);
    const classes = useStyles();
    const [q, setQ] = useState("");
    let usernew = [];
    const [searchColumn, setSearchColumn] = useState(["first_name","last_name", "Mobile"]);
    const[filteredData,setFilteredData]=useState([]);

    const Searchfilter = (datas) => {
        return datas.filter((row) =>
            searchColumn.some(column => row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1)

        )
    }






    const handleChecked = (value) => {

        const currentIndex = checked.indexOf(value.id)
        const newChecked = [...checked];
        const newCheckedItem = [...checkedItem];


        if (currentIndex === -1) {
            newChecked.push(value.id);
            newCheckedItem.push(value.name);
        }
        else {
            newChecked.splice(currentIndex, 1)
            newCheckedItem.splice(currentIndex, 1);
        }

        setChecked(newChecked);
        setCheckedItem(newCheckedItem);
    }

const DataFilter=(data,PrimaryData,check)=>{
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j <check.length; j++) {
            if (data[i].SubcriptionStatus.toLowerCase() === check[j].toLowerCase()) {
                
                usernew.push(data[i]);


            }
        }
    }
    setFilteredData(usernew);

    if(usernew && usernew.length!==0){
       dispatch({type:USERDETAILS,payload:usernew[0]})
    }
                                                                                                                                                                                                              
    if(check.length===0){
        setFilteredData(PrimaryData)
        dispatch({type:USERDETAILS,payload:PrimaryData[0]})
     
    }
}


    React.useEffect(()=>{
        
    DataFilter(userlist,PrimaryList,checkedItem)   

    },[checkedItem,userlist])

    React.useEffect(()=>{
        
        DataFilter(userlist,PrimaryList,checkedItem)   
    
        },[userlist])


    console.log(filteredData)

    

    return (
        <div className="SubMgtDetailContainer">
            <div className="SubMgtDetailOne">
                <div className="SubMgtDetailOneSearch">
                <TextField  label="Search User" value={q} onChange={(e) => setQ(e.target.value)} className={classes.textField} variant="outlined" />
                </div>
                <div className="SubMgtDetailOneCheckbox">

                
                   {
                      
                          columns.map((column,index)=>(
                           <div className="SubMgtDetailCheckItem">
                           <RedCheckbox onChange={() => handleChecked(column)} key={index}></RedCheckbox>
                          
                           <label className="SubMgtDetailCheckItemTitle" 
                           style={{
                               color:'black'
                               
                               }}  
                           key={column.id}>{column.Label}</label>
                           </div>
                       ))  
                 
                      
                   }
                </div>
                <div className="SubMgtDetailOneTable">
                     <SubMgtTable search={Searchfilter}  data={filteredData} />
                </div>
            </div>
            <div className="SubMgtDetailTwo">
                <SubMgtUser checkedItem={checkedItem} zone={place} role={job} data={filteredData}/>
            </div>
        </div>
    )
}

export default SubMgtDetail
