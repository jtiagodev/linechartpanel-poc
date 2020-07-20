import React, { useState } from "react";
import Header from "./Header";
import TimeOptions from "./TimeOptions";
import LineChart from "./LineChart";
import { Flex } from "./Grid";
import moment from "moment";

const LineChartPanel = props => {
  const { text, data, lineChartOptions } = props;
  const [since, setSince] = useState();
  const [to, setTo] = useState(moment(new Date()).format("YYYY-MM-DD"));

  return (
    <Flex flexDirection="column">
      <Flex>
        <Header text={text} />
      </Flex>
      <Flex style={{ marginTop: "20px" }}>
        <TimeOptions since={since} setSince={setSince} to={to} setTo={setTo} />
      </Flex>
      <Flex style={{ marginTop: "20px" }}>
        <LineChart data={data} options={lineChartOptions} />
      </Flex>
    </Flex>
  );
};

export default LineChartPanel;
