import React from 'react'
import Chart from "react-apexcharts";
import './styles/productGraph.scss'
import { useSelector } from 'react-redux'

const ProductGraph = () => {
  const Product = useSelector(state => state.productAnalytics);


  let week = [];
  let avg = [];
  let active = [];

  if(Product.activeGraph.length!==0){
    Product.activeGraph.map((item,index)=>{
      week.push(`Wk${item.wk}`);
      // avg.push(item.avgValue);
      active.push(item.activeuser);
      // console.log(item)
    })
  }

 

  const options ={
    options: {
      chart: {
        type: 'line',
          height: 350
      },
      title: {
        text: 'Average Value'
      },
      stroke: {
        width: [0, 4]
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
      },
      xaxis: {
        categories: week
      },
      
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded' ,
          dataLabels: {
          position: 'top',
        },
        },
       
      },
    },
    series: [
      {
        name: 'Average Value',
        type: 'line',
        data: [23, 92, 35, 27, 43, 22]
      }, {
        name: 'Active Users',
        type: 'column',
        data: active
      }
    ]
  };



    return (
        <div className="graph_container">
              <Chart
              options={options.options}
              series={options.series}
              type="line"
              width="500"
            />
        </div>
    )
}

export default ProductGraph
