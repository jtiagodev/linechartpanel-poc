import React from "react";
import "./styles.css";

import LineChartPanel from "./LineChartPanel";
import { parseChartData, chartOptions } from "./parser";
import mockData from "./mockData";

export default function App() {
  return <LineChartPanel />;
}
