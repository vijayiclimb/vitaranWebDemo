import React from 'react';
import Chart from "react-apexcharts";
import './lowCompanyGraph.scss';


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
                return val + " (mins)"
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
        name: "Retailer",
        data: [45, 52, 38, 24, 33, 26]
      },
      {
        name: "Rider",
        data: [35, 41, 62, 42, 13, 18]
      },
      {
        name: 'Wholesaler',
        data: [87, 57, 74, 99, 75, 38]
      }
    ],
     
}

const LowGraphCompany = () => {
    return (
        <div className="GraphContainer">
             <Chart
              options={options.options}
              series={options.series}
              type="line"
              width="500"
            />
        </div>
    )
}

export default LowGraphCompany
