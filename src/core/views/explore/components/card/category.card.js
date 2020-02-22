import React from "react"
import Proptype from "prop-types"

import { Card, CardMedia, Typography } from "@material-ui/core"
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded"
import { makeStyles } from "@material-ui/core/styles"
import testimg2 from "assets/img/kitchens/test-img-2.jpg"

const useStyles = makeStyles({
  root: {
    width: 268,
    height: 80,
    display: "inline-flex",
    alignItems: "center",
    borderRadius: 0,
    paddingRight: 20,
    marginRight: 25,
    boxShadow: " 0px 5px 20px -20px rgba(0,0,0,0.8)",
    border: "1px solid rgba(102, 102, 102, 0.1)"
  },
  image: {
    width: "35%",
    height: "100%",
    marginRight: 15
  },
  icon: {
    marginLeft: "auto",
    fontSize: "0.8em"
  }
})

export const CardLayout = ({ label }) => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardMedia image={testimg2} className={classes.image} />
      <Typography variant="body1">{label}</Typography>
      <ArrowForwardIosRoundedIcon className={classes.icon} />
    </Card>
  )
}

CardLayout.propTypes = {
  label: Proptype.string.isRequired
}
