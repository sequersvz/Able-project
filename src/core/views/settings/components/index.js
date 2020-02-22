import React from "react"
import { Container, Box, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { GeneralDetails } from "./sections/general.details"
import { BillingDetails } from "./sections/billing.details"

const useStyles = makeStyles({
  root: {
    padding: "80px 10%",
    marginLeft: 265
  },
  button: {
    display: "inline-block",
    border: "1px solid rgba(102, 102, 102, 0.2)",
    padding: "10px 30px"
  }
})

export const Settings = () => {
  const classes = useStyles()
  return (
    <Container>
      <Box className={classes.root}>
        <Typography variant="h6">Settings</Typography>

        <Box marginTop={25}>
          <GeneralDetails Typography={Typography} />
        </Box>
        <Box marginTop={10}>
          <BillingDetails />
        </Box>
        <Box marginTop={10}>
          <Box
            className={classes.button}
            style={{ color: "rgba(102, 102, 102, 0.2)" }}
          >
            Save changes
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
