import React from 'react'
// import {Bar} from 'react-chartjs-2';
// import './styles/graph.scss';
import Chart from "react-apexcharts";


const options ={
    options: {
      chart: {
        type: 'bar',
          height: 350
      },
      xaxis: {
        categories: ["12-May","13-May","14-May","15-May","16-May","17-May",]
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
    },
    series: [
      {
        name: "series-1",   
        data: [30, 40, 45, 50, 49, 60   ]
      }
    ]
  };


const DealAnalyticsGraph = () => {

   

    return (
        <div className="graph_container">
             <Chart
              options={options.options}
              series={options.series}
              type="bar"
              width="500"
            />
        </div>
    )
}

export default DealAnalyticsGraph
