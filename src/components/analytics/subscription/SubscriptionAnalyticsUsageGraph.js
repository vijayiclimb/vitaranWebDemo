import React from 'react'
import Chart from "react-apexcharts";
import './styles/SubscriptionAnalyticsUsageGraph.scss';
import { useSelector } from 'react-redux'



const options = {
  options: {
    chart: {
      type: 'bar',
      height: 430
    },
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          position: 'top',
        },
      }
    },
    colors: ["#b3cce6", '#8cb3d9', '#3973ac', '#204060'],
    dataLabels: {
      enabled: true,
      offset: -6,
      style: {
        fontSize: '12px',
        colors: ['#fff']
      }
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#fff']
    },
    tooltip: {
      shared: true,
      intersect: false
    },
    xaxis: {
      categories: ['WK01', 'WK02', 'WK03', 'WK04', 'WK05', 'WK06'],
      offset: -20,
    },
  },
  series: [{
    name: "Low",
    data: [44, 55, 41, 64, 22, 43]
  }, {
    name: "Medium",
    data: [53, 32, 33, 52, 13, 44]
  },
  {
    name: "High",
    data: [44, 55, 41, 64, 22, 43]
  }, {
    name: "Very High",
    data: [53, 32, 33, 52, 13, 44]
  }],

};

const SubscriptionAnalyticsUsageGraph = () => {

  const DataList = useSelector(state => state.subscriberAnalytics);
  let week = [];
  let Low = [];
  let Medium = [];
  let High = [];
  let Inactive = [];
  let temp = [];

  let tempSeries = [
  ]
  


if (typeof DataList.subscriberUsageDataList != "undefined"){
    if(DataList.subscriberUsageDataList.HIGH && DataList.subscriberUsageDataList.HIGH.length!==0){
      DataList.subscriberUsageDataList.HIGH.map((item,index)=>{
        week.push(parseInt(item.WK));
        High.push(item.count_per_week)
      })
    }

    if(DataList.subscriberUsageDataList.INACTIVE && DataList.subscriberUsageDataList.INACTIVE.length!==0){
      DataList.subscriberUsageDataList.INACTIVE.map((item,index)=>{
        // week.push(parseInt(item.WK));
        Inactive.push(item.count_per_week)
      })
    }

    if(DataList.subscriberUsageDataList.LOW && DataList.subscriberUsageDataList.LOW.length!==0){
      DataList.subscriberUsageDataList.LOW.map((item,index)=>{
        // week.push(parseInt(item.WK));
        Low.push(item.count_per_week)
      })
    }

    if(DataList.subscriberUsageDataList.MEDIUM && DataList.subscriberUsageDataList.MEDIUM.length!==0){
      DataList.subscriberUsageDataList.MEDIUM.map((item,index)=>{
        // week.push(parseInt(item.WK));
        Medium.push(item.count_per_week)
      })
    }
}

  // DataList.subscriberUsageDataList && DataList.subscriberUsageDataList.map((item, index) => {

    // active.push(item.activeUsers);
    // All.push(item.allUsers);


    // item && item.map((item, index) => {
    //   if (item.status === "LOW") {
    //     week.push(item.wk);
    //     Low.push(item.value);
    //   }
    //   if (item.status === "INACTIVE") {

    //     Inactive.push(item.value);
    //   }
    //   if (item.status === "MEDIUM") {

    //     Medium.push(item.value);
    //   }
    //   if (item.status === "HIGH") {

    //     High.push(item.value);
    //   }
    // })

    
    // Medium.push(item.medium);
    // High.push(item.high);
    // VeryHigh.push(item.veryhigh);
    // week.push(`wk${item.wk}`);

  // })


  // console.log(week, Low,Medium,High,Inactive);
  // Deal.concat([newAddress])

   
  if(week.length!==0){
    let obj={};
    let i =0;
    week.map((item,index)=>{
        obj={
          name:item,
          data:[Low[i],Medium[i],High[i],Inactive[i]]
        }

        // console.log(obj)
        tempSeries.push(obj)
        i++;
    })
    // console.log(tempSeries)                     
  }





  

  const options = {
    options: {
      chart: {
        type: 'bar',
        height: 430
      },
      plotOptions: {
        bar: {
          horizontal: false,
          dataLabels: {
            position: 'top',
          },
        }
      },
      colors: ["#c6d8ec", '#9fbedf', '#79a4d2', '#538ac6', '#2d5886', '#203f60'],
      dataLabels: {
        enabled: true,
        offset: -6,
        style: {
          fontSize: '12px',
          colors: ['#fff']
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['#fff']
      },
      tooltip: {
        shared: true,
        intersect: false
      },
      xaxis: {
        categories: ['Low User', 'Medium User', 'High User', 'Inactive'],
        offset: -20,
      },
    },
    series: tempSeries,

  };




  return (
    <div className="SubscriptionAnalyticsUsageGraphgraphWrapper">
      {/* <label className="SubscriptionAnalyticsUsageGraphgraphTitle">Daily Bids</label> */}

      <div className="SubscriptionAnalyticsUsageGraphgraphContainer">
        <Chart
          options={options.options}
          series={options.series}
          type="bar"
          width="900"
          height="370"
          className="SubscriptionAnalyticsUsageGraphGraph"
        />
      </div>



    </div>
  )
}

export default SubscriptionAnalyticsUsageGraph

