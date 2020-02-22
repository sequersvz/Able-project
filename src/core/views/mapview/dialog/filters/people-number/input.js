import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  textField: {
    width: "100px",
    margin: "20px"
  }
};

const InputsMinMax = ({ classes, value, name, handleChange }) => {
  return (
    <TextField
      id="outlined-number"
      label={name}
      value={value[name]}
      onChange={handleChange(name)}
      type="number"
      className={classes.textField}
      InputLabelProps={{
        shrink: true
      }}
      margin="normal"
      variant="outlined"
    />
  );
};

export default withStyles(styles)(InputsMinMax);
