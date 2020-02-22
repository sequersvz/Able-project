import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    margin: "10px"
  }
};

const checkboxFood = ({ classes, value, label, name }) => {
  return (
    <FormControlLabel
      value={value}
      control={<Checkbox color="primary" />}
      label={label}
      labelPlacement="start"
      className={classes.root}
    />
  );
};

export default withStyles(styles)(checkboxFood);
