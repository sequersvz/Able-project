import React from "react"
import clsx from "clsx"

import { makeStyles, withStyles } from "@material-ui/core/styles"
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  Container
} from "@material-ui/core"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 11,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)"
  },
  active: {
    "& $line": {
      borderColor: "#203F2B"
    }
  },
  completed: {
    "& $line": {
      borderColor: "#203F2B"
    }
  },
  line: {
    borderColor: "#EEEFEE",
    zIndex: 2
  }
})(StepConnector)

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#203F2B",
    display: "flex",
    height: 22,
    alignItems: "center"
  },
  active: {
    color: "#FFFFFF"
  },
  completed: {
    color: "#FFFFFF",
    zIndex: 1
  },
  boxStep: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: "50%",
    zIndex: 10
  }
})

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles()
  const { active, completed, icon } = props
  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed
      })}
    >
      {completed ? (
        <Box className={classes.boxStep} bgcolor="#203F2B">
          {icon}
        </Box>
      ) : (
        <Box
          className={classes.boxStep}
          bgcolor={active ? "#203F2B" : "#EEEFEE"}
        >
          {icon}
        </Box>
      )}
    </div>
  )
}

const useStyles = makeStyles({
  boxContainer: {
    borderBottom: "1px solid #E5E6E5",
    position: "fixed",
    width: "100%",
    backgroundColor: "#FFFFFF",
    height: 90,
    padding: "23px 0",
    zIndex: 100,
    top: 0
  },
  boxIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "flex-start",
    width: 40,
    height: 40,
    borderRadius: "50%",
    zIndex: 10,
    backgroundColor: "#EEEFEE",
    marginRight: "-3%",
    cursor: "pointer",
    color: "#203F2B"
  },
  stepper: {
    flexBasis: 800,
    padding: 10,
    backgroundColor: "transparent",
    margin: "0 auto"
  }
})

export const HeaderSteps = ({ setLocalState, stepView }) => {
  const classes = useStyles()
  return (
    <Box className={classes.boxContainer}>
      <Container>
        <Box display="flex">
          <Box
            className={classes.boxIcon}
            onClick={() =>
              (stepView === 2 &&
                setLocalState(localState => ({
                  ...localState,
                  openWizard: false,
                  isFiltered: true
                }))) ||
              setLocalState(localState => ({
                ...localState,
                openWizard: false
              }))
            }
          >
            <ChevronLeftIcon />
          </Box>
          <Stepper
            alternativeLabel
            activeStep={stepView}
            connector={<QontoConnector />}
            className={classes.stepper}
          >
            {[1, 2, 3].map(label => (
              <Step key={label}>
                <StepLabel StepIconComponent={QontoStepIcon} />
              </Step>
            ))}
          </Stepper>
        </Box>
      </Container>
    </Box>
  )
}
