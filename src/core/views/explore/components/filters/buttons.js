import React from "react"
import Proptype from "prop-types"

import { Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "5px 10px",
    border: "1px solid rgba(102, 102, 102, 0.2)",
    borderRadius: 2,
    cursor: "pointer"
  }
})

export const FilterButton = ({ label, active, actionClick }) => {
  const classes = useStyles()
  return (
    <Box
      className={classes.root}
      color={active && "#FFFFFF"}
      bgcolor={active && "#203F2B"}
      marginRight={2}
      onClick={actionClick}
    >
      {label}
    </Box>
  )
}

FilterButton.propTypes = {
  label: Proptype.string.isRequired,
  active: Proptype.bool.isRequired,
  actionClick: Proptype.func.isRequired
}
