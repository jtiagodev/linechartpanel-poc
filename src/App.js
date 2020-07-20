import React from "react";
import "./styles.css";

import LineChartPanel from "./LineChartPanel";
import mockData from "./mockData";
import { lineChartOptions, parseChartData } from "./parser";
import moment from "moment";

export default function App() {
  return (
    <LineChartPanel
      lineChartOptions={lineChartOptions}
      data={parseChartData(mockData)}
      title="Eficiência de Aprovação"
    />
  );
}
