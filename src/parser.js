export const parseChartData = (data, label = "Estado de Fila de Trabalho") => {
  const res = {
    labels: data.map(entry => entry.title),
    datasets: [
      {
        label,
        data: data.map(entry => entry.amount),
        backgroundColor: data.map(entry => entry.color),
        borderColor: data.map(entry => entry.color),
        borderWidth: 0
      }
    ],
    text: "Estado de Fila de Trabalho"
  };

  return res;
};

export const chartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  cutoutPercentage: 80,
  legend: {
    display: false
  },
  tooltips: {
    enabled: true
  }
};
