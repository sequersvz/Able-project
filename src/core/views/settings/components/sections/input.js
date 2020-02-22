import React from "react"

import { TextField, InputLabel, Select, MenuItem } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  input: {
    width: "300px",
    fontWeight: "500"
  }
})

export const InputField = ({ label, value }) => {
  const classes = useStyles()
  return (
    <TextField
      label={label}
      className={classes.input}
      inputProps={{ "aria-label": "befinder" }}
      name={label}
      style={{ marginBottom: 35 }}
      value={value}
    />
  )
}

export const InputSelect = ({ label, marginNone, value }) => {
  const classes = useStyles()
  return (
    <>
      <InputLabel htmlFor={label}>{label}</InputLabel>
      <Select
        className={classes.input}
        inputProps={{
          name: label
        }}
        style={{ marginBottom: marginNone ? 5 : 35 }}
        value={value}
      >
        <MenuItem value={value}>{value}</MenuItem>
        <MenuItem value={1}>Option</MenuItem>
        <MenuItem value={2}>Option 2</MenuItem>
      </Select>
    </>
  )
}
