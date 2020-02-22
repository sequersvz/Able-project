import React, { Component } from "react";
import FiltersLayout from "../filtersLayout";
import InputMaxMin from "./input";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    marginTop: "60px"
  }
};

class PeopleNumber extends Component {
  state = {
    value: {
      Min: "",
      Max: ""
    }
  };

  handleChange = name => event => {
    if (event.target.value >= 1) {
      this.setState({
        value: {
          ...this.state.value,
          [name]: event.target.value
        }
      });
    }
  };

  render() {
    const { value } = this.state;
    const { classes } = this.props;

    return (
      <Grid className={classes.root} container justify="center" spacing={6}>
        <FiltersLayout name="Number of people">
          <InputMaxMin
            name={"Min"}
            value={value}
            handleChange={this.handleChange}
          />
          <InputMaxMin
            name={"Max"}
            value={value}
            handleChange={this.handleChange}
          />
        </FiltersLayout>
      </Grid>
    );
  }
}

export default withStyles(styles)(PeopleNumber);
