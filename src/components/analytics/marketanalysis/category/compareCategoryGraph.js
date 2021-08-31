import React from 'react'
import Chart from "react-apexcharts";
import './styles/compareGraph.scss'



const optionsOne = {
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
    fontSize: '8px',
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
  categories: ['Low','Medium','High','Very High'],
  offset:-20,
},
},
series: [{
  name:"wk06",
  data: [44, 55, 41, 64]
}, {
  name:"wk05",
  data: [53, 32, 33, 52]
},
{
  name:"wk04",
  data: [44, 55, 41, 64]
}, {
  name:"wk03",
  data: [53, 32, 33, 52]
},
{
  name:"wk02",
  data: [44, 55, 41, 64]
}, {
  name:"wk01",
  data: [53, 32, 33, 52]
}
],

};

const CompareCategoryGraph=()=>{

  return (
    <div className=" CompareGraphSection">
          <div className="CompareWeekGraphgraphWrapper">
          

          <div className="CompareWeekrGraphgraphContainer">
              <Chart
                  options={optionsOne.options}
                  series={optionsOne.series}
                  type="bar"
                  width="500"
                  height="350"
                  className="CompareWeekGraphGraph"
              />
          </div>
      </div>
      </div>
  )
}

export default CompareCategoryGraph
