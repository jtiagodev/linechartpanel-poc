import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  timeOption: {
    display: "flex",
    alignSelf: "center",
    color: "#000000",
    backgroundColor: "#ffffff",
    padding: `0px 8px`,
    borderRadius: 8 * 3,
    maxWidth: "150px",
    fontSize: "14px"
  },
  timeOptionClicked: {
    display: "flex",
    alignSelf: "center",
    color: "#ffffff",
    backgroundColor: "#81BC00",
    padding: `0px 8px`,
    borderRadius: 8 * 3,
    maxWidth: "150px",
    fontSize: "14px"
  }
});

const TimeOption = ({
  optionId,
  classes,
  label,
  onClick,
  clicked,
  setClicked,
  rest
}) => {
  return (
    <Typography
      className={
        clicked === optionId ? classes.timeOptionClicked : classes.timeOption
      }
      onClick={() => {
        onClick();
        setClicked(optionId);
      }}
    >
      {label}
    </Typography>
  );
};

export default withStyles(styles)(TimeOption);
