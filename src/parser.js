import * as R from "ramda";
import produce from "immer";
import { formatNumber, translate_this_label, hexToRgb } from "./translate";

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

export const parseChartData = (datasets = []) => {
  let resDatasets = [];

  datasets.forEach(dataSet => {
    const entry = {
      label: dataSet.label,
      backgroundColor: "rgba(0, 0, 0, 0.0)",
      borderColor: dataSet.color,
      borderWidth: 2,
      pointRadius: 4,
      lineTension: 0,
      pointBackgroundColor: "white",
      showLine: true,
      data: dataSet.data.map(dataEntry => {
        return { t: new Date(dataEntry.t), y: dataEntry.y };
      })
    };
    resDatasets.push(entry);
  });
  return { datasets: resDatasets };
};

export const lineChartOptions = {
  elements: {
    point: {
      radius: 4,
      pointStyle: "circle"
    }
  },
  tooltips: {
    enabled: true,
    yAlign: "bottom",
    callbacks: {
      title: function(tooltipItem, data) {
        return data.datasets[tooltipItem[0].datasetIndex].label;
      },
      label: function(tooltipItem, data) {
        return tooltipItem.value;
      },
      // https://codepen.io/ezra_siton/pen/dyoQeGe?editors=1011
      // chart.config.data.datasets[tooltipItem.datasetIndex].borderColor
      labelColor: function(tooltipItem, data) {
        if (tooltipItem.datasetIndex === 0) {
          return {
            borderColor: "#FFFFFF",
            backgroundColor: "#FFCD2E"
          };
        }
      }
    },
    titleFontSize: 12,
    titleFontColor: "white",
    titleFontStyle: "normal",
    bodyFontColor: "white",
    bodyFontSize: 24,
    displayColors: false,
    yPadding: 10,
    xPadding: 10
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
