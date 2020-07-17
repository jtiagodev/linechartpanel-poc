import React from "react";
import Header from "./Header";
import TimeOptions from "./TimeOptions";
import LineChart from "./LineChart";
import { Flex } from "./Grid";

const LineChartPanel = props => {
  return (
    <Flex flexDirection="column">
      <Header {...props} />
      <TimeOptions {...props} />
      <LineChart {...props} />
    </Flex>
  );
};

export default LineChartPanel;
