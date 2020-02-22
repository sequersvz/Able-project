import React, { useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"
import { KitchenHeader } from "./header"
import { KitchenFooter } from "./footer"
import { KitchenDescription } from "./description"

const useStyles = makeStyles({
  root: {
    overflow: "hidden",
    minHeight: "100vh",
    width: "100vw",
    marginLeft: 265
  },
  boxContainer: {
    flexGrow: 1,
    padding: "0 30% 30px 60px",
    marginTop: 40
  }
})

export const KitchenDetails = ({
  history,
  exploreState: { kitchenSelected, wizardValues }
}) => {
  const classes = useStyles()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Box display="flex" flexDirection="column" className={classes.root}>
      <KitchenHeader
        history={history}
        kitchenName={kitchenSelected.kitchenName}
      />
      <Box className={classes.boxContainer}>
        <KitchenDescription description={kitchenSelected.description} />
      </Box>
      <KitchenFooter
        price={kitchenSelected.price}
        peopleNumber={wizardValues.peopleNumber}
      />
    </Box>
  )
}
