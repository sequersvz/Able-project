import React from "react"

import { Box, InputBase, Paper, IconButton } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import FlashOnIcon from "@material-ui/icons/FlashOn"
import FilterListTwoToneIcon from "@material-ui/icons/FilterListTwoTone"
import { makeStyles } from "@material-ui/core/styles"
import { wizardInitialValue } from "config/explore.config"
import Proptype from "prop-types"
import { FilterButton } from "./filters/buttons"

const useStyles = makeStyles({
  paper: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 2,
    boxShadow: "0px 5px 15px -10px rgba(0,0,0,0.6)",
    border: "1px solid rgba(102, 102, 102, 0.2)"
  },
  iconButton: {
    padding: "12px 12px 12px 15px"
  },
  radiusBox: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center"
  }
})

const FilterHeader = ({
  initialValues: { peopleNumberArray, price },
  setLocalState,
  clearKitchens
}) => {
  const peopleLabel = peopleNumberArray[1]
    ? `${peopleNumberArray[1]} people`
    : `${peopleNumberArray[0]}+ people`
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      marginTop={5}
    >
      <Box>
        <FilterButton label={`Max ${price[1]} DKK`} active />
        <FilterButton label={peopleLabel} active />
        <FilterButton label="More Filters" />
      </Box>
      <FilterButton
        label="Clear Filters"
        actionClick={() =>
          setLocalState(prev => ({
            ...prev,
            initialValues: wizardInitialValue,
            isFiltered: false,
            toSearch: true
          })) && clearKitchens()
        }
      />
    </Box>
  )
}

export const ExploreHeader = ({
  initialValues,
  localState: { isFiltered },
  setLocalState,
  handleExploreActions: { clearKitchens }
}) => {
  const classes = useStyles()
  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box width={300}>
          <Paper className={classes.paper}>
            <IconButton aria-label="search" className={classes.iconButton}>
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder={'Try "Organic"'}
              inputProps={{ "aria-label": "Sog" }}
              name="description"
              value={initialValues.description || ""}
              onChange={({ target: { name, value } }) =>
                setLocalState(prev => ({
                  ...prev,
                  initialValues: {
                    ...prev.initialValues,
                    [name]: value
                  }
                }))
              }
            />
          </Paper>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box className={classes.radiusBox} marginRight={3} bgcolor="#EAEBEB">
            <FilterListTwoToneIcon />
          </Box>
          <Box
            className={classes.radiusBox}
            bgcolor="#203F2B"
            onClick={() =>
              setLocalState(prev => ({
                ...prev,
                openWizard: true,
                stepView: 0
              }))
            }
          >
            <FlashOnIcon style={{ color: "#FFFFFF" }} />
          </Box>
        </Box>
      </Box>
      {isFiltered && (
        <FilterHeader
          initialValues={initialValues}
          setLocalState={setLocalState}
          clearKitchens={clearKitchens}
        />
      )}
    </>
  )
}

FilterHeader.propTypes = {
  initialValues: Proptype.shape({
    peopleNumberArray: Proptype.arrayOf(Proptype.number.isRequired),
    price: Proptype.arrayOf(Proptype.number.isRequired),
    description: Proptype.string
  }).isRequired,
  setLocalState: Proptype.func.isRequired,
  clearKitchens: Proptype.func.isRequired
}

ExploreHeader.propTypes = {
  initialValues: Proptype.shape({
    peopleNumberArray: Proptype.arrayOf(Proptype.number.isRequired),
    price: Proptype.arrayOf(Proptype.number.isRequired),
    description: Proptype.string
  }).isRequired,
  localState: Proptype.shape({
    isFiltered: Proptype.bool.isRequired
  }).isRequired,
  setLocalState: Proptype.func.isRequired,
  handleExploreActions: Proptype.shape({
    clearKitchens: Proptype.func.isRequired
  }).isRequired
}
