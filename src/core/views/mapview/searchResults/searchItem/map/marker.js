import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

const marker = ({ name }) => {
  return (
    <Tooltip title={name} placement="top" color="primary">
      <Icon fontSize="large">place</Icon>
    </Tooltip>
  );
};

export default marker;
