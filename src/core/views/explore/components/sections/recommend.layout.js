import React from "react"
import { Box } from "@material-ui/core"
import Proptype from "prop-types"
import { ExploreRecommend } from "./recommend/explore.recommend"
import { FilterRecommend } from "./recommend/filter.recommend"

export const RecommendLayout = ({
  localState: { isFiltered },
  exploreState: { listItemKitchens, listItemKitchensTrending },
  handleExploreActions: { setKitchenSelected }
}) => {
  return (
    <Box marginTop={20}>
      {isFiltered ? (
        <FilterRecommend
          listItemKitchens={listItemKitchens}
          setKitchenSelected={setKitchenSelected}
        />
      ) : (
        <ExploreRecommend
          listItemKitchensTrending={listItemKitchensTrending}
          setKitchenSelected={setKitchenSelected}
        />
      )}
    </Box>
  )
}

RecommendLayout.propTypes = {
  localState: Proptype.shape({ isFiltered: Proptype.bool.isRequired })
    .isRequired,
  exploreState: Proptype.shape({
    listItemKitchensTrending: Proptype.arrayOf(
      Proptype.shape({
        id: Proptype.number.isRequired,
        kitchenName: Proptype.string.isRequired
      })
    ).isRequired,
    listItemKitchens: Proptype.arrayOf(
      Proptype.shape({
        id: Proptype.number.isRequired,
        kitchenName: Proptype.string.isRequired
      })
    ).isRequired
  }).isRequired,
  handleExploreActions: Proptype.shape({
    setKitchenSelected: Proptype.func.isRequired
  }).isRequired
}
