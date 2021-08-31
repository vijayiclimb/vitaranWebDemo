import React from 'react'
import Chart from "react-apexcharts";
import './styles/VitaranAvsarGraph.scss';



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
    categories: ['WK01','WK02','WK03','WK04','WK05','WK06'],
    offset:-20,
  },
},
series: [{
    name:"Low",
    data: [44, 55, 41, 64, 22, 43]
  }, {
    name:"Medium",
    data: [53, 32, 33, 52, 13, 44]
  },
  {
    name:"High",
    data: [44, 55, 41, 64, 22, 43]
  }, {
    name:"Very High",
    data: [53, 32, 33, 52, 13, 44]
  }],
  
  };

const VitaranAvsarGraph = () => {
    return (
        <div className="VitaranAvsarGraphgraphWrapper">
            {/* <label className="VitaranAvsarGraphgraphTitle">Daily Bids</label> */}

            <div className="VitaranAvsarGraphgraphContainer">
                <Chart
                    options={options.options}
                    series={options.series}
                    type="bar"
                    width="900"
                    height="370"
                    className="VitaranAvsarGraphGraph"
                />
            </div>



        </div>
    )
}

export default VitaranAvsarGraph
