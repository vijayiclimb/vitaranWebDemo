import React from 'react'
import Chart from "react-apexcharts";
import './styles/RetailerSubscriptionGraph.scss';
import {useSelector} from 'react-redux'




const RetailerSubscriptionGraph = ({role}) => {

  const weeklydata = useSelector(state => state.subscriberAnalytics)

  // console.log(weeklydata.weeklyDataList)
  const active=[];
  const All=[];
  const week=[];

// console.log(weeklydata.weeklyDataList);
  weeklydata.weeklyDataList && weeklydata.weeklyDataList.length!==0 && weeklydata.weeklyDataList.map((item,index)=>{
    
      active.push(item.active_users);
      All.push(item.allusers);
      week.push(`WK${item.WK}`);
      console.log(item)
    
  })


  const Retailer = [90,60,70,30,40,80];
  const Rider=[20,30,40,50,70,90];
  const Wholeseller=[15,45,86,50,30,65];
  const distributor=[15,25,86,90,20,45];


  
const options={
    
  options:{
    chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [5, 5],
    curve: 'straight',
    dashArray: [0, 0 ]
  },
  legend: {
    tooltipHoverFormatter: function(val, opts) {
      return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
    }
  },
  markers: {
    size: 0,
    hover: {
      sizeOffset: 6
    }
  },
  xaxis: {
    categories: week,
  },
  tooltip: {
    y: [
      {
        title: {
          formatter: function (val) {
            return val ;
          }
        }
      },
      {
        title: {
          formatter: function (val) {
            return val ;
          }
        }
      },
      {
        title: {
          formatter: function (val) {
            return val;
          }
        }
      }
    ]
  },
  grid: {
    borderColor: '#f1f1f1',
  }
},

series: [{
    name: "All User",
    data: All
  },
  {
    name: "Active",
    data: active
  }
],
 
}


const optionsOne={
    
  options:{
    chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    },
  },
  colors:[ "#b3cce6",'#8cb3d9','#3973ac','#204060'],
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [5, 5,5,5],
    curve: 'straight',
    dashArray: [0, 0  ]
  },
  legend: {
    tooltipHoverFormatter: function(val, opts) {
      return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
    }
  },
  markers: {
    size: 1,
    hover: {
      sizeOffset: 6
    }
  },
  xaxis: {
    categories: week,
  },
  tooltip: {
    y: [
      {
        title: {
          formatter: function (val) {
            return val ;
          }
        }
      },
      {
        title: {
          formatter: function (val) {
            return val ;
          }
        }
      },
      {
        title: {
          formatter: function (val) {
            return val;
          }
        }
      }
    ]
  },
  grid: {
    borderColor: '#f1f1f1',
  }
},

series: [
  
  {
    name:"Retailers",
    data:Retailer
  },
  {
    name:"Rider",
    data:Rider
  },
  {
    name:"Wholeseller",
    data:Wholeseller
  },
  {
    name:"Distributor",
    data: distributor
  }
],
 
}

    return (
        <div className="graphWrapperSub">
        <label className="graphTitleSub">{role} Graph</label>
        <div className="graphsectionSub">
             <div className="graphContainerSub">
             {role==="All"?
             (
              <Chart
              options={optionsOne.options}
              series={optionsOne.series}
              type="line"
              width="800"
              height="350"
              className="BidGraphSub"
              />
             ):
             (  <Chart
              options={options.options}
              series={options.series}
              type="line"
              width="800"
              height="350"
              className="BidGraphSub"
              />)}
      
        </div>
        </div>
       
            
        </div>
    )
}

export default RetailerSubscriptionGraph
