import React from "react"
import { Chip } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Proptype from "prop-types"

const useStyles = makeStyles({
  chip: {
    margin: "5px",
    backgroundColor: "transparent",
    color: "#203F2B",
    fontWeight: 500,
    cursor: "pointer",
    border: "1px solid #EEEFEE",
    "&:hover": {
      backgroundColor: "#203F2B",
      color: "#EAECEB",
      border: "none"
    }
  },
  chipSelected: {
    fontWeight: 500,
    cursor: "pointer",
    margin: "5px",
    backgroundColor: "#203F2B",
    color: "#EAECEB",
    border: "none"
  }
})

export const OptionChip = ({ label, value, active, handleChipSelect }) => {
  const classes = useStyles()
  return (
    <Chip
      clickable={false}
      label={label}
      className={active ? classes.chipSelected : classes.chip}
      onClick={() => handleChipSelect && handleChipSelect(value, active)}
    />
  )
}

OptionChip.propTypes = {
  label: Proptype.string.isRequired,
  value: Proptype.string.isRequired,
  active: Proptype.bool.isRequired,
  handleChipSelect: Proptype.func.isRequired
}
