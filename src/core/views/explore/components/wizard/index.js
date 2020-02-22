import React, { useState } from "react"
import PropTypes from "prop-types"

import { Container, Box } from "@material-ui/core"
import { HeaderSteps } from "./header"
import { FooterSteps } from "./footer"
import { StepsContainer } from "./steps"

export const WizardSearch = ({
  localState: { toSearch },
  initialValues,
  setInitialValues,
  setLocalState,
  exploreState,
  handleExploreActions,
  handleExploreActions: { listKitchensReq }
}) => {
  const [stepView, setStepView] = useState(0)
  const handleStep = number => {
    setStepView(number)
    return toSearch && number === 2
      ? listKitchensReq(initialValues).then(val =>
          setLocalState(prev => ({
            ...prev,
            toSearch: val.toSearch,
            isFiltered: true
          }))
        )
      : setStepView(number)
  }

  return (
    <Box bgcolor="#FFFFFF" zIndex={100} height="100vh" width="100vw">
      <HeaderSteps setLocalState={setLocalState} stepView={stepView} />
      <Container>
        <StepsContainer
          stepView={stepView}
          initialValues={initialValues}
          setInitialValues={setInitialValues}
          toSearch={toSearch}
          setLocalState={setLocalState}
          exploreState={exploreState}
          handleExploreActions={handleExploreActions}
        />
      </Container>
      <FooterSteps
        setLocalState={setLocalState}
        stepView={stepView}
        handleStep={handleStep}
        exploreState={exploreState}
      />
    </Box>
  )
}

WizardSearch.propTypes = {
  localState: PropTypes.shape({
    toSearch: PropTypes.bool.isRequired
  }).isRequired,
  initialValues: PropTypes.shape({
    price: PropTypes.array,
    peopleNumber: PropTypes.string,
    peopleNumberArray: PropTypes.array,
    location: PropTypes.string,
    description: PropTypes.string,
    chipTags: PropTypes.array
  }).isRequired,
  setInitialValues: PropTypes.func.isRequired,
  setLocalState: PropTypes.func.isRequired
}
