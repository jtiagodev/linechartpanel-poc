import React, { useEffect, useState } from "react";
import { Flex } from "./Grid";
import TimePicker from "./TimePicker";
import { Grid } from "@material-ui/core";
import moment from "moment";
import TimeOption from "./TimeOption";

const demoTimeOptions = [
  {
    id: "lastWeek",
    value: moment()
      .subtract(1, "weeks")
      .startOf("isoWeek"),
    label: "Semana passada"
  },
  {
    id: "lastMonth",
    value: moment()
      .subtract(1, "months")
      .startOf("isoMonth"),
    label: "Mês passado"
  },
  {
    id: "last3Months",
    value: moment()
      .subtract(3, "months")
      .startOf("isoMonth"),
    label: "Últimos 3 meses"
  },
  {
    id: "last6Months",
    value: moment()
      .subtract(6, "months")
      .startOf("isoMonth"),
    label: "Últimos 6 meses"
  }
];

const TimeOptions = props => {
  const { since, setSince, to, setTo, timeOptions = demoTimeOptions } = props;
  const [clicked, setClicked] = useState(null);

  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Flex>
        {timeOptions.map((timeOption, i) => {
          return (
            <TimeOption
              key={i}
              optionId={timeOption.id}
              setClicked={setClicked}
              clicked={clicked}
              onClick={() => {
                setSince(timeOption.value);
              }}
              label={timeOption.label}
            />
          );
        })}
      </Flex>
      <TimePicker since={since} setSince={setSince} to={to} setTo={setTo} />
    </Grid>
  );
};

export default TimeOptions;
