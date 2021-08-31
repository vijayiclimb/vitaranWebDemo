
import './styles/categoryGraph.scss'
import React from 'react'
import Chart from "react-apexcharts";



const CategoryGraph = () => {

  
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

export default CategoryGraph
