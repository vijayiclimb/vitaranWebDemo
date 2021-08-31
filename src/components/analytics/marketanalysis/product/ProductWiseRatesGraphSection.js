import React from 'react'
import Chart from "react-apexcharts";
import './styles/ProductWiseRatesGraphSection.scss'


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


  const optionsTwo = {
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

const ProductWiseRatesGraphSection = () => {
    return (
        <div className=" ProductWiseRatesGraphSection">
            <div className="ProductWiseRatesWeekGraphgraphWrapper">
            <label className="ProductWiseRatesWeekGraphgraphTitle">Weekly Product Wise Rates</label>

            <div className="ProductWiseRatesWeekrGraphgraphContainer">
                <Chart
                    options={optionsOne.options}
                    series={optionsOne.series}
                    type="bar"
                    width="500"
                    height="350"
                    className="ProductWiseRatesWeekGraphGraph"
                />
            </div>



        </div>
        <div className="ProductDailyRatesDailyGraphgraphWrapper">
        <label className="ProductWiseRatesDailyGraphgraphTitle">DailyProduct Wise Rates</label>

            <div className="ProductDailyRatesWDailyGraphgraphContainer">
                <Chart
                    options={optionsTwo.options}
                    series={optionsTwo.series}
                    type="bar"
                    width="500"
                    height="350"
                    className="ProductWiseRatesDailyGraph"
                />
            </div>



        </div>
        </div>
    )
}

export default ProductWiseRatesGraphSection
