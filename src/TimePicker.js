import React, { useContext, useState } from "react";
import { Flex } from "./Grid";
import { TextField } from "@material-ui/core";
import moment from "moment";

const MuiDatePickerFromTo = props => {
  const { since, setSince, to, setTo } = props;

  return (
    <Flex flexDirection="row">
      <Flex style={{ marginRight: "10px" }}>
        <TextField
          id={`datepicker-from`}
          type="date"
          onChange={evt => {
            setSince(new Date(evt.target.value));
          }}
          value={moment(since).format("YYYY-MM-DD")}
          InputLabelProps={{ shrink: true }}
        />
      </Flex>
      <span>-</span>
      <Flex style={{ marginLeft: "10px" }}>
        <TextField
          id={`datepicker-to`}
          type="date"
          onChange={evt => {
            setTo(new Date(evt.target.value));
          }}
          value={moment(to).format("YYYY-MM-DD")}
          InputLabelProps={{ shrink: true }}
        />
      </Flex>
    </Flex>
  );
};

export default MuiDatePickerFromTo;
