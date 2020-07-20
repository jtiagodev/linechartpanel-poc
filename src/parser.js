import * as R from "ramda";
import produce from "immer";
import { formatNumber, translate_this_label } from "./translate";

export const trimDataWithDateRange = (from, to, data) => {
  const dataSetsResult = data.datasets.map(dataSet => {
    const filteredData = R.filter(
      dataEntry => dataEntry.t < to && dataEntry.t > from,
      dataSet.data
    );

    const dataSetResult = {
      ...dataSet,
      data: filteredData
    };

    return dataSetResult;
  });

  const objectResult = {
    ...data,
    datasets: dataSetsResult
  };

  return objectResult;
};

export const parseChartData = data => {
  const res = {
    datasets: [
      {
        label: "PO aprovados",
        data: [
          {
            t: new Date("2019-12-20"),
            y: 150
          },
          {
            t: new Date("2020-01-20"),
            y: 145
          },
          {
            t: new Date("2020-02-20"),
            y: 145
          },
          {
            t: new Date("2020-03-20"),
            y: 140
          },
          {
            t: new Date("2020-04-20"),
            y: 110
          },
          {
            t: new Date("2020-05-20"),
            y: 130
          },
          {
            t: new Date("2020-06-20"),
            y: 140
          },
          {
            t: new Date("2020-07-20"),
            y: 90
          },
          {
            t: new Date("2020-08-20"),
            y: 120
          }
        ],
        backgroundColor: ["rgba(0, 0, 0, 0.0)"],
        borderColor: ["#E0D011"],
        pointBackgroundColor: "#E0D011",
        borderWidth: 2,
        lineTension: 0,
        pointRadius: 4
      },
      {
        label: "DF aprovados",
        data: [
          {
            t: new Date("2019-12-20"),
            y: 40
          },
          {
            t: new Date("2020-01-20"),
            y: 45
          },
          {
            t: new Date("2020-02-20"),
            y: 45
          },
          {
            t: new Date("2020-03-20"),
            y: 45
          },
          {
            t: new Date("2020-04-20"),
            y: 45
          },
          {
            t: new Date("2020-05-20"),
            y: 45
          },
          {
            t: new Date("2020-06-20"),
            y: 45
          },
          {
            t: new Date("2020-07-20"),
            y: 100
          },
          {
            t: new Date("2020-08-20"),
            y: 120
          }
        ],
        backgroundColor: ["rgba(0, 0, 0, 0.0)"],
        borderColor: ["#81BC00"],
        pointBackgroundColor: "#81BC00",
        borderWidth: 2,
        lineTension: 0,
        pointRadius: 4
      }
    ]
  };
  return res;
};

export const lineChartOptions = {
  tooltips: {
    enabled: false
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return translate_this_label(value);
          },
          maxTicksLimit: 11
        },
        type: "time"
      }
    ],
    yAxes: [
      {
        ticks: {
          min: 0,
          max: 200,
          stepSize: 50
        }
      }
    ]
  },
  // https://www.chartjs.org/docs/latest/configuration/legend.html
  legend: {
    position: "bottom",
    labels: {
      usePointStyle: true,
      boxWidth: 6
    }
  }
};
