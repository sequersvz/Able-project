import React, { useState, useMemo } from "react"
import { Container, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { wizardInitialValue, trendingParams, user } from "config/explore.config"
import { ErrorSearch } from "shared/errors"
import { WizardSearch } from "./wizard"
import { ExploreHeader } from "./header"
import { CategoryLayout } from "./sections/category.layout"
import { RecommendLayout } from "./sections/recommend.layout"

const useStyles = makeStyles({
  root: {
    padding: "80px 5%",
    marginLeft: 265
  }
})

const fetchTrendingKitchens = listKitchensReq => {
  listKitchensReq(
    trendingParams.filter,
    trendingParams.from,
    trendingParams.size,
    true
  )
}

export const Explore = ({
  exploreState,
  exploreState: { listItemKitchens, listItemKitchensTrending },
  handleExploreActions,
  handleExploreActions: { listKitchensReq }
}) => {
  // useEffect(() => {
  //   if (!listItemKitchensTrending) {
  //     fetchTrendingKitchens(listKitchensReq)
  //   }
  // }, [listItemKitchensTrending, listKitchensReq])
  const [initialValuesState, setInitialValues] = useState(wizardInitialValue)
  const initialValues = useMemo(() => initialValuesState, [initialValuesState])
  const [localState, setLocalState] = useState({
    openWizard: false,
    isFiltered: false,
    toSearch: true
  })
  const classes = useStyles()
  return localState.openWizard ? (
    <WizardSearch
      localState={localState}
      initialValues={initialValues}
      setInitialValues={setInitialValues}
      setLocalState={setLocalState}
      exploreState={exploreState}
      handleExploreActions={handleExploreActions}
    />
  ) : (
    <Container style={{ overflowX: "hidden" }}>
      <Box className={classes.root}>
        <ExploreHeader
          initialValues={initialValues}
          localState={localState}
          setLocalState={setLocalState}
          handleExploreActions={handleExploreActions}
        />
        {!localState.isFiltered && <CategoryLayout user={user} />}
        {(listItemKitchens && listItemKitchens.length > 0) ||
        (listItemKitchensTrending && listItemKitchensTrending.length > 0) ? (
          <RecommendLayout
            localState={localState}
            exploreState={exploreState}
            handleExploreActions={handleExploreActions}
          />
        ) : (
          <Box marginTop={10}>
            <ErrorSearch />
          </Box>
        )}
      </Box>
    </Container>
  )
}
