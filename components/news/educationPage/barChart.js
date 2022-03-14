import React, { Component } from "react";

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        
        colors: props.color,
        title: {
          text: "نمودار پرورش 10 روز اول جوجه گوشتی",
          align: "center",
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: true,
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            fontFamily: "iransans",
            color: "#b30000",
          },
        },
        chart: {
          id: "basic-bar",
          
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.35,
          },
          animations: {
            enabled: true,
            easing: "easeinout",
            speed: 800,
            animateGradually: {
              enabled: true,
              delay: 10,
            },
            dynamicAnimation: {
              enabled: true,
              speed: 450,
            },
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            s̶t̶a̶r̶t̶i̶n̶g̶S̶h̶a̶p̶e̶: "flat",
            e̶n̶d̶i̶n̶g̶S̶h̶a̶p̶e̶: "flat",
            borderRadius: 0,
            columnWidth: "70%",
            barHeight: "70%",
            distributed: false,
            rangeBarOverlap: true,
            rangeBarGroupRows: true,
            colors: {
              ranges: [
                {
                  from: 0,
                  to: 0,
                  color: "#ff9900",
                },
              ],
              backgroundBarColors: [],
              backgroundBarOpacity: 1,
              backgroundBarRadius: 0,
            },
          },
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: props.categories,
        },
        yaxis: {
          show:true,
          seriesName: "[]",
          
        },
        
      },

      series: props.data
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width={this.props.width}
              height={this.props.height}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BarChart;
