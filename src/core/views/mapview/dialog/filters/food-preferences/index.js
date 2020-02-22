import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import FiltersLayout from "../filtersLayout";
import CheckboxFood from "./checkbox";
import { withStyles } from "@material-ui/core/styles";

const layoutFilter = [
  {
    name: "Organic"
  },
  {
    name: "Light salad"
  },
  {
    name: "Warm food"
  },
  {
    name: "Salad bar"
  }
];

const styles = {
  root: {
    marginTop: "20px"
  }
};

class FoodPreferences extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid className={classes.root} container justify="center" spacing={6}>
        {layoutFilter.map(e => (
          <Grid item key={e}>
            <FiltersLayout name={e.name} key={e.name}>
              <CheckboxFood value={"True"} label={"Yes"} />
              <CheckboxFood value={"False"} label={"No"} />
            </FiltersLayout>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default withStyles(styles)(FoodPreferences);
