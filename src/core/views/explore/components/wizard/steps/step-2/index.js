import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"

import {
  Grid,
  Typography,
  Box,
  TextField,
  MenuItem,
  InputLabel,
  Select,
  Slider
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  input: {
    width: "450px",
    fontWeight: "500",
    margin: "0 auto"
  },
  typography: {
    color: "#000000"
  },
  slider: {
    width: "450px",
    fontWeight: "500",
    margin: "0 auto",

    "& .MuiSlider-track, & .MuiSlider-rail": {
      bottom: 11.5,
      height: 1
    },
    "& .MuiSlider-thumb": {
      marginLeft: 0
    }
  },
  sliderLabel: {
    color: "rgba(0, 0, 0, 0.54)"
  }
})

export const SecStep = ({ initialValues, setInitialValues, setLocalState }) => {
  const classes = useStyles()
  const { t } = useTranslation()

  const handleChangeInput = obj => {
    setLocalState(prev => ({
      ...prev,
      toSearch: true
    }))
    setInitialValues({
      ...initialValues,
      ...obj
    })
  }

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
        <Box marginTop={40}>
          <Typography variant="h4" className={classes.typography}>
            {t("wizardForm.stepTwo.title")}
          </Typography>
        </Box>
      </Grid>
      <Grid item>
        <Box marginTop={15}>
          <TextField
            label={t("wizardForm.stepTwo.locatedInput")}
            className={classes.input}
            placeholder="Nordsjaellan"
            inputProps={{ "aria-label": "befinder" }}
            name="location"
            onChange={({ target: { name, value } }) =>
              handleChangeInput({ [name]: value })
            }
            value={initialValues.location || ""}
          />
        </Box>
      </Grid>
      <Grid item>
        <Box marginTop={15}>
          <InputLabel htmlFor="people-number">
            {t("wizardForm.stepTwo.peopleInput")}
          </InputLabel>
          <Select
            className={classes.input}
            onChange={({ target: { name, value } }) =>
              handleChangeInput({ [name]: value })
            }
            inputProps={{
              name: "peopleNumber",
              id: "people-number"
            }}
            value={initialValues.peopleNumber}
          >
            <MenuItem value="1-10">1 - 10 people</MenuItem>
            <MenuItem value="11-20">11 - 20 people</MenuItem>
            <MenuItem value="21-40">21 - 40 people</MenuItem>
            <MenuItem value="41">41+ people</MenuItem>
          </Select>
        </Box>
      </Grid>
      <Grid item>
        <Box marginTop={12}>
          <Typography className={classes.sliderLabel} component="span">
            {t("wizardForm.stepTwo.priceInput.label")}
          </Typography>
          <Typography variant="h6" className={classes.typography}>
            {`${initialValues.price[0]} DKK `}
            <Typography
              variant="h6"
              component="span"
              className={classes.sliderLabel}
            >
              {t("wizardForm.stepTwo.priceInput.to")}
            </Typography>
            {` ${initialValues.price[1]} DKK`}
          </Typography>
          <Slider
            className={classes.slider}
            aria-labelledby="range-slider"
            name="Price"
            onChange={(event, value) => handleChangeInput({ price: value })}
            value={initialValues.price}
          />
        </Box>
      </Grid>
    </Grid>
  )
}

SecStep.propTypes = {
  initialValues: PropTypes.shape({
    price: PropTypes.array,
    peopleNumber: PropTypes.string,
    peopleNumberArray: PropTypes.array,
    location: PropTypes.string
  }).isRequired,
  setLocalState: PropTypes.func.isRequired,
  setInitialValues: PropTypes.func.isRequired
}
