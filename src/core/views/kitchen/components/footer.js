import React from "react";

import { Container, Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: "10px 0",
    borderTop: "1px solid #666666",
    width: "100%",
    boxShadow: "1px -4px 16px -12px rgba(0,0,0,0.6)",
    alignContent: "flex-end"
  },
  button: {
    padding: "5px 20px",
    fontWeight: 500,
    textTransform: "none",
    boxShadow: "none"
  },
  boxFooter: {
    padding: "0 5%"
  },
  typography: {
    fontWeight: 500,
    color: "#000000"
  },
  typoLight: {
    color: "#666666"
  }
});

const peopleValidNumber = people => {
  return Number(people && people.split("-")[1]) || 1;
};

export const KitchenFooter = ({ price, peopleNumber }) => {
  const classes = useStyles();
  const totalPrice =
    Math.round(price * peopleValidNumber(peopleNumber) * 100) / 100;
  return (
    <Box className={classes.root}>
      <Container>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          className={classes.boxFooter}
        >
          <Typography
            className={classes.typoLight}
            variant="body2"
            component="span"
          >
            Total:{" "}
            <Typography
              className={classes.typography}
              variant="body2"
              component="span"
            >
              {totalPrice} DKK
            </Typography>
          </Typography>
          <Button
            variant="contained"
            className={classes.button}
            color="primary"
          >
            Continue
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
