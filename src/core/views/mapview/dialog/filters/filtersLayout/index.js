import React, { Component, Fragment } from "react";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = {};

class FiltersLayout extends Component {
  state = {
    anchorEl: null
  };

  handle = e => {
    this.setState({ anchorEl: e.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { children, name } = this.props;

    return (
      <Fragment>
        <Button variant="contained" onClick={this.handle}>
          {name}
        </Button>

        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
        >
          {children}
        </Popover>
      </Fragment>
    );
  }
}

export default withStyles(styles)(FiltersLayout);
