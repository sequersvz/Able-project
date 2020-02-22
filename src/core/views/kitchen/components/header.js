import React from "react"
import testimg2 from "assets/img/kitchens/test-img-2.jpg"

import { makeStyles } from "@material-ui/core/styles"
import { CardMedia, Box, Typography } from "@material-ui/core"
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded"

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: 500,
    color: "#FFFFFF"
  },
  image: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "100px 0 40px 60px"
  },
  boxIcon: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    backgroundColor: "rgba(102, 102, 102, 0.5)",
    cursor: "pointer"
  },
  backIcon: {
    fontSize: "1em"
  }
})

export const KitchenHeader = ({ history, kitchenName }) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <CardMedia className={classes.image} image={testimg2}>
        <Box
          className={classes.boxIcon}
          display="flex"
          justifyContent="center"
          alignItems="center"
          onClick={() => history.push("/explore")}
        >
          <ArrowBackIosRoundedIcon className={classes.backIcon} />
        </Box>
        <Box>
          <Typography
            variant="h4"
            component="span"
            className={classes.typography}
          >
            {kitchenName}
          </Typography>
        </Box>
      </CardMedia>
    </Box>
  )
}
