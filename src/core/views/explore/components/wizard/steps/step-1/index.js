import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"

import {
  Grid,
  Box,
  Typography,
  InputBase,
  Paper,
  IconButton
} from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import { makeStyles } from "@material-ui/core/styles"
import { OptionChip } from "shared/chips/option.chip"

const useStyles = makeStyles({
  root: {
    padding: "2px 4px",
    width: 480,
    borderRadius: 2,
    margin: "0 auto",
    textAlign: "left",
    border: "1px solid #203F2B",
    boxShadow: "none",
    height: 45
  },
  iconButton: {
    padding: "8px 8px",
    color: "#203F2B"
  },
  input: {
    width: "80%",
    color: "#666666",
    fontSize: 18,
    top: 2,

    "& input:placeholder": {
      color: "#666666"
    }
  },
  typography: {
    color: "#000000"
  }
})

const chipsContent = [
  { label: "wizardForm.stepOne.chipTagPlantBased", value: "plantbased" },
  { label: "wizardForm.stepOne.chipTagOrganic", value: "organic" },
  { label: "wizardForm.stepOne.chipTagRichSalad", value: "rich salad" },
  { label: "wizardForm.stepOne.chipTagColdCuts", value: "cold cuts" },
  {
    label: "wizardForm.stepOne.chipTagWarmDishes",
    value: "warm dishes"
  },
  { label: "wizardForm.stepOne.chipTagCake", value: "cake" },
  { label: "wizardForm.stepOne.chipTagCheese", value: "cheese" },
  { label: "wizardForm.stepOne.chipTagGreenSalad", value: "green salad" }
]

export const FirstStep = ({
  initialValues,
  setInitialValues,
  setLocalState
}) => {
  const classes = useStyles()
  const { t } = useTranslation()

  const handleChipSelect = (value, active) => {
    setLocalState(prev => ({
      ...prev,
      toSearch: true
    }))
    return active
      ? setInitialValues({
          ...initialValues,
          chipTags: initialValues.chipTags.filter(e => e !== value)
        })
      : setInitialValues({
          ...initialValues,
          chipTags: initialValues.chipTags
            ? [...initialValues.chipTags, value]
            : [value]
        })
  }

  return (
    <Box marginTop={40}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <Typography variant="h4" className={classes.typography}>
            {t("wizardForm.stepOne.title")}
          </Typography>
        </Grid>
        <Grid item>
          <Box marginTop={12}>
            <Paper className={classes.root}>
              <IconButton className={classes.iconButton} aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase
                className={classes.input}
                placeholder={t("wizardForm.stepOne.inputPlaceHolder")}
                inputProps={{ "aria-label": "Sog" }}
                name="description"
                onChange={({ target: { name, value } }) => {
                  setLocalState(prev => ({
                    ...prev,
                    toSearch: true
                  }))
                  setInitialValues({ ...initialValues, [name]: value })
                }}
                value={initialValues.description || ""}
              />
            </Paper>
          </Box>
        </Grid>
        <Grid item>
          <Box marginTop={6} width={400}>
            {chipsContent.map(e => (
              <OptionChip
                key={`tags_filters_key-${e.value}`}
                label={t(e.label)}
                handleChipSelect={handleChipSelect}
                value={e.value}
                active={Boolean(
                  initialValues.chipTags &&
                    initialValues.chipTags.filter(
                      element => element === e.value
                    )[0]
                )}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

FirstStep.propTypes = {
  initialValues: PropTypes.shape({
    description: PropTypes.string,
    chipTags: PropTypes.array
  }).isRequired,
  setLocalState: PropTypes.func.isRequired,
  setInitialValues: PropTypes.func.isRequired
}
