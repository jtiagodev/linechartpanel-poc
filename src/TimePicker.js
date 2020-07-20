import React, { useContext, useState } from "react";
import { Flex } from "./Grid";
import { TextField } from "@material-ui/core";

const MuiDatePickerFromTo = props => {
  const { since, setSince, to, setTo } = props;

  return (
    <Flex flexDirection="row">
      <Flex style={{ marginRight: "10px" }}>
        <TextField
          id={`datepicker-from`}
          type="date"
          onChange={evt => {
            setSince(evt.target.value);
          }}
        />
      </Flex>
      <span>-</span>
      <Flex style={{ marginLeft: "10px" }}>
        <TextField
          id={`datepicker-to`}
          type="date"
          onChange={evt => {
            setTo(evt.target.value);
          }}
        />
      </Flex>
    </Flex>
  );
};

export default MuiDatePickerFromTo;
