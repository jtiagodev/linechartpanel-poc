import React from "react";
import { Flex } from "./Grid";
import TimePicker from "./TimePicker";
import { Grid } from "@material-ui/core";
import moment from "moment";

const demoTimeOptions = [
  {
    value: moment()
      .subtract(1, "weeks")
      .startOf("isoWeek")
      .format("DD-MM-YYYY"),
    label: "Semana passada"
  },
  {
    value: moment()
      .subtract(1, "months")
      .startOf("isoMonth")
      .format("DD-MM-YYYY"),
    label: "Mês passado"
  },
  {
    value: moment()
      .subtract(3, "months")
      .startOf("isoMonth")
      .format("DD-MM-YYYY"),
    label: "Últimos 3 meses"
  },
  {
    value: moment()
      .subtract(6, "months")
      .startOf("isoMonth")
      .format("DD-MM-YYYY"),
    label: "Últimos 6 meses"
  }
];

const TimeOptions = props => {
  const { since, setSince, to, setTo, timeOptions = demoTimeOptions } = props;

  return (
    <Grid container spacing={3}>
      <Grid xs={8}>
        {timeOptions.map((timeOption, i) => {
          return (
            <button
              key={i}
              onClick={evt => {
                setSince(timeOption.value);
                alert(timeOption.value);
              }}
            >
              {timeOption.label}
            </button>
          );
        })}
      </Grid>
      <Grid xs={4}>
        <Flex justifyContent="flex-end">
          <TimePicker
            since={since}
            setSince={setSince}
            to={to}
            setTo={setTo}
            // onChange={evt => {
            //   alert(evt.target.value);
            // }}
          />
        </Flex>
      </Grid>
    </Grid>
  );
};

export default TimeOptions;
