import React, { Component } from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default class LineCharts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "دمای واقعی",
          data: [34, 33, 32,31,31,32, 31.5,33,31],
        },
        {
          name: " دمای ایده آل",
          data: [33,33,32.5,32.5,32,32,31.5,31.5,31.5],
        },
        {
          name: "رطوبت واقعی",
          data: [80,75, 70, 74, 73,73,70,71,72],
        },
        {
          name: "رطوبت ایده آل",
          data: [75,75,74,74,73,73,72,72,71,70],
        },
        // {
        //   name: "آرین",
        //   data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        // },
      ],
      options: {
        chart: {
          type: "line",
          zoom: {
            type: "x",
            enabled: true,
            autoScaleYaxis: true,
          },
          toolbar: {
            autoSelected: "zoom",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },

        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.9,
          },
        },
        xaxis: {
          categories: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
          ],
        },
      },
    };
  }

  render() {
    return (
      <div
        id="chart"
        style={{ margin: "auto", padding: "0", width: "100%", height: "100%" }}
      >
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
        />
      </div>
    );
  }
}
