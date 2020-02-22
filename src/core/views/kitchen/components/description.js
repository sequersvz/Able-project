import React from "react"

import { Typography } from "@material-ui/core"
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  typography: {
    fontWeight: 500,
    position: "relative",
    color: "#000000"
  },
  expandMore: {
    color: "#666666",
    position: "absolute"
  }
})

export const KitchenDescription = ({ description }) => {
  const classes = useStyles()
  return (
    <Typography variant="body1" className={classes.typography}>
      {`${description} `}
      {<ExpandMoreRoundedIcon className={classes.expandMore} />}
    </Typography>
  )
}
