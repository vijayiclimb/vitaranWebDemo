import React from 'react'
import Chart from "react-apexcharts";
import './styles/OrderVsBid.scss';



const options={
    
    options:{
      chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      },
    },
    // colors:[ "#ff0066",'#F0F0F0','#000000'],
    dataLabels: {
      enabled: false
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
      categories: ['WK07','WK06','WK05','WK04','WK03','WK02'],
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
              return val;
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
      data: [45, 52, 38, 24, 33, 26]
    },
    {
      name: "Orders",
      data: [35, 41, 62, 42, 13, 18]
    },
    {
      name: 'BidsVsOrders',
      data: [87, 57, 74, 99, 75, 38]
    }
  ],
   
}

const OrderVsBid = () => {
    return (
        <div className="graphWrapper">
        <label className="graphTitle">Orders vs Bids</label>
        <div className="graphsection">
             <div className="graphContainer">
        <Chart
              options={options.options}
              series={options.series}
              type="line"
              width="800"
              height="350"
              className="OrderVsBidGraph"
              />
        </div>
        </div>
       
            
        </div>
    )
}

export default OrderVsBid
