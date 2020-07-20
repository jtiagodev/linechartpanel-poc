import React from "react";
import { Typography } from "@material-ui/core";

const Header = props => {
  const { title } = props;
  return <Typography variant="h5">{title}</Typography>;
};

export default Header;
