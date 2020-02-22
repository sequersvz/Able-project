import React, { Component } from "react";
import FiltersLayout from "../filtersLayout";
import InputTags from "./inputTags";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    marginTop: "130px"
  }
};

class Tags extends Component {
  state = {
    tagName: []
  };

  handleChange = e => {
    this.setState({ tagName: e.target.value });
  };

  render() {
    const { classes } = this.props;
    const { tagName } = this.state;

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
      PaperProps: {
        style: {
          maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
          width: 250
        }
      }
    };

    return (
      <Grid className={classes.root} container justify="center" spacing={6}>
        <FiltersLayout name="Add Tags">
          <InputTags
            MenuProps={MenuProps}
            tagName={tagName}
            handleChange={this.handleChange}
          />
        </FiltersLayout>
      </Grid>
    );
  }
}

export default withStyles(styles)(Tags);
