import React, { Component } from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default class PieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 13, 43, 22],
      options: {
        chart: {
          
          type: "pie",
        },
        labels: ["راس ۳۰۸", "هوبارد", "آربراکرز پلاس", "آرین", "کاب ۵۰۰"],
        responsive: [
          {
            
          },
        ],
      },
    };
  }

  render() {
    return (
      <>
        <div id="chart" style={{margin:"auto",padding:"0",width:'100%',height:"100%"}}>
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="pie"
          />
        </div>
        
      </>
    );
  }
}
