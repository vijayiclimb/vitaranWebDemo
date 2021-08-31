export const convertDate = (date) => {
    let day=0;
    let year=0;
    let month=0;
    let Hour=0;
    let Minutes=0;
    let seconds=0;

    const TodaysDate = new Date();
    seconds=TodaysDate.getSeconds();


     const dealsDate = new Date(date)
     day = dealsDate.getDate();
     year = dealsDate.getFullYear();
     month = `0${dealsDate.getMonth() + 1}`.slice(-2);
     Hour = dealsDate.getHours();
     Minutes=dealsDate.getMinutes();


     if(day<10){
        day= `0${day}`
    }

    if(Hour<10){
        Hour = `0${Hour}`
    }

    if(Minutes<10){
        Minutes=`0${Minutes}`
    }

    if(seconds<10){
        seconds=`0${seconds}`
    }

    const fdate = `${year}-${month}-${day}  ${Hour}:${Minutes}:${seconds}`

    return fdate
};

export const convertFormFormat=(date)=>{
    const dealsDate = new Date(date);
    let day=0;
    let year=0;
    let month=0;
    let Hour=0;
    let Minutes=0;

   
    day = dealsDate.getDate();
    year = dealsDate.getFullYear();
     month = `0${dealsDate.getMonth() + 1}`.slice(-2);
    Hour = dealsDate.getHours();
    Minutes=dealsDate.getMinutes();
    // "2017-05-24T10:30"

    if(day<10){
        day= `0${day}`
    }

    if(Hour<10){
        Hour = `0${Hour}`
    }

    if(Minutes<10){
        Minutes=`0${Minutes}`
    }

    const fdate = `${year}-${month}-${day}T${Hour}:${Minutes}`
    
    
    return fdate
}

export const SubMgtDisplay=(date)=>{
    let day=0;
    let year=0;
    let month=0;

    const dealsDate = new Date(date)
     day = dealsDate.getDate();
     year = dealsDate.getFullYear();
     month = `0${dealsDate.getMonth() + 1}`.slice(-2);

     if(day<10){
        day= `0${day}`
    }

     let finalDate = `${day}/${month}/${year}`

     return finalDate
}


export const SubMgtDatePickerFormat=(date)=>{
    let day=0;
    let year=0;
    let month=0;

    //2017-05-24

    const dealsDate = new Date(date)
     day = dealsDate.getDate();
     year = dealsDate.getFullYear();
     month = `0${dealsDate.getMonth() + 1}`.slice(-2);

     if(day<10){
        day= `0${day}`
    }

    let finalDate = `${year}-${month}-${day}`

    console.log(finalDate)


     return finalDate
}



export const SubMgtDateApiFormat=(date)=>{
    let day=0;
    let year=0;
    let month=0;
    let Hour=0;
    let Minutes=0;
    let seconds=0;

    //2017-05-24
    const dealsDate = new Date(date)
     let todaysDate = new Date();

     console.log(todaysDate)
  
     day = dealsDate.getDate();
     year = dealsDate.getFullYear();
     month = `0${dealsDate.getMonth() + 1}`.slice(-2);
     Hour = todaysDate.getHours();
     Minutes= todaysDate.getMinutes();


     if(day<10){
        day= `0${day}`
    }

    if(Hour<10){
        Hour = `0${Hour}`
    }

    if(Minutes<10){
        Minutes=`0${Minutes}`
    }

    if(seconds<10){
        seconds=`0${seconds}`
    }

    let fdate = `${year}-${month}-${day}  ${Hour}:${Minutes}:${seconds}`

     return fdate
}


export const SubMgtTableDate=(date)=>{
    let day=0;
    let year=0;
    let month=0;

    const SubDate = new Date(date)
     day = SubDate.getDate();
     year = SubDate.getFullYear();
     month = `0${SubDate.getMonth() + 1}`.slice(-2);

     if(day<10){
        day= `0${day}`
    }

     let finalDate = `${day}/${month}/${year}`

     return finalDate
}



export const ApproveSubscriptionDate = (date) => {
    let day=0;
    let year=0;
    let month=0;
    let Hour=0;
    let Minutes=0;
    let seconds=0;

    const TodaysDate = new Date();
    seconds=TodaysDate.getSeconds();


     const dealsDate = new Date(date)
     day = dealsDate.getDate();
     year = dealsDate.getFullYear();
     month = `0${dealsDate.getMonth() + 1}`.slice(-2);
     Hour = dealsDate.getHours();
     Minutes=dealsDate.getMinutes();


    //  if(day<10){
    //     day= `0${day}`
    // }

    if(Hour<10){
        Hour = `0${Hour}`
    }

    if(Minutes<10){
        Minutes=`0${Minutes}`
    }

    if(seconds<10){
        seconds=`0${seconds}`
    }

    const fdate = `${year}-${month}-${day}  `

    return fdate
};