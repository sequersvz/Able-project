import React from "react"
import { useTranslation } from "react-i18next"

import {
  Button,
  makeStyles,
  Box,
  Container,
  Typography
} from "@material-ui/core"
import { useHistory } from "react-router-dom"

const useStyles = makeStyles({
  root: {
    padding: "10px 25px",
    color: "#FFFFFF",
    fontWeight: 500,
    textTransform: "none",
    boxShadow: "none"
  },
  button: {
    color: "#343635",
    fontWeight: 500,
    cursor: "pointer"
  },
  boxContainer: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    borderTop: "1px solid #E5E6E5",
    backgroundColor: "#FFFFFF"
  },
  box: {
    padding: "25px 32%"
  },
  boxExploreMore: {
    border: "1px solid rgba(102, 102, 102, 0.1)",
    padding: "10px 10px"
  }
})

export const FooterSteps = ({
  setLocalState,
  stepView,
  handleStep,
  exploreState: { kitchenSelected }
}) => {
  const classes = useStyles()
  const { t } = useTranslation()
  const history = useHistory()

  return (
    <Box className={classes.boxContainer}>
      <Container>
        <Box
          className={classes.box}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            className={classes.button}
            onClick={() => stepView > 0 && handleStep(stepView - 1)}
            style={{ color: stepView < 1 ? "#666666" : "" }}
          >
            {t("wizardForm.backButton")}
          </Typography>

          {stepView === 2 ? (
            <>
              <Box
                className={classes.boxExploreMore}
                onClick={() =>
                  setLocalState(prev => ({
                    ...prev,
                    openWizard: false
                  }))
                }
              >
                <Typography className={classes.button}>Explore more</Typography>
              </Box>
              <Button
                color="primary"
                className={classes.root}
                variant="contained"
                onClick={() =>
                  kitchenSelected && history.push("explore/kitchen")
                }
              >
                {t("wizardForm.doneButton")} 
              </Button>
            </>
          ) : (
            <Button
              color="primary"
              className={classes.root}
              variant="contained"
              onClick={() => handleStep(stepView + 1)}
            >
              {t("wizardForm.nextButton")}
            </Button>
          )}
        </Box>
      </Container>
    </Box>
  )
}
