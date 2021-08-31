import React from 'react'
import Chart from "react-apexcharts";
import './styles/DailyBids.scss';



const options={
   
  options:{
    chart: {
    height: 350,
    type: 'bar',
    zoom: {
      enabled: false
    },
  },
dataLabels: {
              enabled: true,
              formatter: function (val) {
                return val + "%";
              },
              offsetY: -20,
              style: {
                fontSize: '12px',
                colors: ["#304758"]
              }
            },
  stroke: {
    width: [5, 7, 5],
    curve: 'straight',
    dashArray: [0, 8, 5]
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
    categories: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
  },
  tooltip: {
    y: [
      {
        title: {
          formatter: function (val) {
            return val + " (Overall Percentage)"
          }
        }
      },
      {
        title: {
          formatter: function (val) {
            return val + " per session"
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
    name: "Bids",
    data: [45, 52, 38, 24, 33, 26,88]
  },

],
   
}

const DailyBids = () => {
    return (
        <div className="DailyBidsgraphWrapper">
        <label className="DailyBidsgraphTitle">Daily Bids</label>
  
             <div className="DailyBidsgraphContainer">
        <Chart
              options={options.options}
              series={options.series}
              type="bar"
              width="500"
              height="350"
              className="DailyBidsGraph"
              />
        </div>
       
       
            
        </div>
    )
}

export default DailyBids
