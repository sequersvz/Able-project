import React from "react"
import PropTypes from "prop-types"

import { FirstStep } from "./step-1"
import { SecStep } from "./step-2"
import { ThirdStep } from "./step-3"

export const StepsContainer = ({
  stepView,
  initialValues,
  setInitialValues,
  toSearch,
  setLocalState,
  exploreState: { listItemKitchens, kitchenSelected },
  handleExploreActions: { setKitchenSelected }
}) => {
  switch (stepView) {
    case 0:
      return (
        <FirstStep
          initialValues={initialValues}
          setInitialValues={setInitialValues}
          setLocalState={setLocalState}
        />
      )

    case 1:
      return (
        <SecStep
          initialValues={initialValues}
          setInitialValues={setInitialValues}
          setLocalState={setLocalState}
        />
      )

    case 2:
      return (
        <ThirdStep
          toSearch={toSearch}
          listItemKitchens={listItemKitchens}
          kitchenSelected={kitchenSelected}
          setKitchenSelected={setKitchenSelected}
        />
      )

    default:
      return null
  }
}

StepsContainer.propTypes = {
  stepView: PropTypes.number.isRequired,
  initialValues: PropTypes.shape({
    price: PropTypes.array,
    peopleNumber: PropTypes.string,
    peopleNumberArray: PropTypes.array,
    location: PropTypes.string,
    description: PropTypes.string,
    chipTags: PropTypes.array
  }).isRequired,
  toSearch: PropTypes.bool.isRequired,
  setLocalState: PropTypes.func.isRequired,
  setInitialValues: PropTypes.func.isRequired
}
