import React from "react";
import Box from "@material-ui/core/Box";
// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import Grid from "@material-ui/core/Grid";

const header = props => {
  const {
    // classes ,
    handle
  } = props;

  return (
    <Box mt={10} display="flex" justifyContent="flex-end">
      <Button variant="contained" disabled>
        Reset
      </Button>
      <Button
        variant="outlined"
        color="primary"
        // className={classes.button}
        onClick={() => handle("close")}
      >
        Save
      </Button>
    </Box>
  );
};

export default header;
