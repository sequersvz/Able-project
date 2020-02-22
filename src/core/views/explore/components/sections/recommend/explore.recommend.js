import React from "react"
import Proptype from "prop-types"
import { Box, Typography } from "@material-ui/core"
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded"
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded"
import { makeStyles } from "@material-ui/core/styles"
import KitchenCarousel from "libs/alice.carousel"
import { RecommendCard } from "../../card/recommend.card"

const useStyles = makeStyles({
  boxIcon: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    backgroundColor: "rgba(102, 102, 102, 0.2)"
  },
  icon: {
    fontSize: "1em"
  }
})

export const ExploreRecommend = ({
  listItemKitchensTrending,
  setKitchenSelected
}) => {
  const classes = useStyles()
  return (
    <>
      <KitchenCarousel
        Component={RecommendCard}
        listItemKitchensTrending={listItemKitchensTrending}
        setKitchenSelected={setKitchenSelected}
      >
        {(prev, next) => (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            marginBottom={5}
          >
            <Typography variant="h6">We think you&rsquo;d like...</Typography>
            <Box display="flex" alignItems="center">
              <Box
                display="inline-flex"
                justifyContent="center"
                alignItems="center"
                className={classes.boxIcon}
                marginRight={1}
                onClick={prev}
              >
                <ArrowBackIosRoundedIcon className={classes.icon} />
              </Box>
              <Box
                display="inline-flex"
                justifyContent="center"
                alignItems="center"
                className={classes.boxIcon}
                onClick={next}
              >
                <ArrowForwardIosRoundedIcon className={classes.icon} />
              </Box>
            </Box>
          </Box>
        )}
      </KitchenCarousel>
    </>
  )
}

ExploreRecommend.propTypes = {
  listItemKitchensTrending: Proptype.arrayOf(
    Proptype.shape({
      id: Proptype.number.isRequired,
      kitchenName: Proptype.string.isRequired
    })
  ).isRequired,
  setKitchenSelected: Proptype.func.isRequired
}
