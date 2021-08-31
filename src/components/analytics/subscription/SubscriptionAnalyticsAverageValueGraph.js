import React from 'react'
import Chart from "react-apexcharts";
import './styles/SubscriptionAnalyticsAverageValueGraph.scss';

import {useSelector} from 'react-redux'


const SubscriptionAnalyticsAverageValueGraph = () => {

    const DataList =  useSelector(state => state.subscriberAnalytics);
  let week=[];
  let Low=[];
  let Medium=[];
  let High=[];
  let VeryHigh=[];

  
  
  DataList.avgValuePerTransactionDataList && DataList.avgValuePerTransactionDataList.length!==0 && DataList.avgValuePerTransactionDataList.map((item,index)=>{
    
    // active.push(item.activeUsers);
    // All.push(item.allUsers);
    if(item){
           week.push(item.WK);
           Low.push(item.Low);
           Medium.push(item.Medium);
           High.push(item.High);
           VeryHigh.push(item.veryhigh)
    }
  
})





  

const options = {
    options :{
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
  colors:[ "#b3cce6",'#8cb3d9','#3973ac','#204060'],
  dataLabels: {
    enabled: true,
    offset:-6,
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
    categories: week,
    offset:-20,
  },
},
series: [{
    name:"Low",
    data: Low
  }, {
    name:"Medium",
    data:Medium
  },
  {
    name:"High",
    data:High
  }, {
    name:"Very High",
    data: VeryHigh
  }],
  
  };



    return (
        <div className="SubscriptionAnalyticsAverageValueGraphgraphWrapper">
            {/* <label className="SubscriptionAnalyticsAverageValueGraphgraphTitle">Daily Bids</label> */}

            <div className="SubscriptionAnalyticsAverageValueGraphgraphContainer">
                <Chart
                    options={options.options}
                    series={options.series}
                    type="bar"
                    width="900"
                    height="370"
                    className="SubscriptionAnalyticsAverageValueGraphGraph"
                />
            </div>



        </div>
    )
}

export default SubscriptionAnalyticsAverageValueGraph
