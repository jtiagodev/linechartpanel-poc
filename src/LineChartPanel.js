import React, { useState, useEffect } from "react";
import Header from "./Header";
import TimeOptions from "./TimeOptions";
import LineChart from "./LineChart";
import { Flex } from "./Grid";
import { trimDataWithDateRange } from "./parser";

const LineChartPanel = props => {
  const { title, data, lineChartOptions } = props;
  const [since, setSince] = useState(new Date("1990-01-01"));
  const [to, setTo] = useState(new Date());
  const [chartData, setChartData] = useState(
    trimDataWithDateRange(since, to, data)
  );

  useEffect(() => {
    setChartData(trimDataWithDateRange(since, to, data));
  }, [since, to, data]);

  return (
    <Flex flexDirection="column">
      <Flex style={{ marginLeft: "15px" }}>
        <Header title={title} />
      </Flex>
      <Flex style={{ margin: "15px 45px 15px 15px" }}>
        <TimeOptions since={since} setSince={setSince} to={to} setTo={setTo} />
      </Flex>
      <Flex style={{ marginTop: "20px" }}>
        <LineChart data={chartData} options={lineChartOptions} />
      </Flex>
    </Flex>
  );
};

export default LineChartPanel;
