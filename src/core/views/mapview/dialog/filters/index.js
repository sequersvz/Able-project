import React from "react";
import "../style.css";
import Header from "./header";
import FoodPreferences from "./food-preferences";
import PeopleNumber from "./people-number";
import Tags from "./tags";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const styles = {
  root: {
    backgroundColor: "#ffffff",
    position: "relative"
  }
};

const dialogFilters = props => {
  const { classes, open } = props;

  return (
    <Dialog
      fullScreen
      open={open}
      TransitionComponent={Transition}
      className={classes.root}
    >
      <Container>
        <Header {...props} />

        <Grid container>
          <Grid item xs={12}>
            <FoodPreferences />
          </Grid>

          <Grid item xs={12}>
            <PeopleNumber />
          </Grid>

          <Grid item xs={12}>
            <Tags />
          </Grid>

          {/* <Grid item xs={12}>
          <SelectTags />
        </Grid> */}
        </Grid>
      </Container>
    </Dialog>
  );
};

export default withStyles(styles)(dialogFilters);
