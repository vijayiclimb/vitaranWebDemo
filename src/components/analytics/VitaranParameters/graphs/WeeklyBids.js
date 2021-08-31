import React from 'react'
import Chart from "react-apexcharts";
import './styles/WeeklyBids.scss';



const options={
  options: {
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
      curve: 'straight'
    },
  
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['WK07','WK06','WK05','WK04','WK03','WK02'],
    }
  },




  series: [{
      name: "Bids",
      data: [45, 52, 38, 24, 33, 26]
    },
  ],

}

const WeeklyBids = () => {
    return (
        <div className="WeeklyBidsgraphWrapper">
        <label className="WeeklyBidsgraphTitle">Weekly Bids</label>
     
             <div className="WeeklyBidsgraphContainer">
        <Chart
              options={options.options}
              series={options.series}
              type="line"
              width="500"
              height="350"
              className="WeeklyBidsGraph"
              />

        </div>
       
            
        </div>
    )
}

export default WeeklyBids

