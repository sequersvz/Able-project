import React from "react"
import Proptype from "prop-types"

import { Card, CardMedia, Typography, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import testImg from "assets/img/kitchens/test-img.jpg"

const useStyles = makeStyles({
  card: {
    width: 400,
    height: 250,
    borderRadius: 0,
    zIndex: 2,
    boxShadow: "0px 0px 15px -9px rgba(0,0,0,0.75)",
    display: "inline-block",
    marginRight: 25
  },
  box: {
    width: "100%",
    height: "100%",
    boxShadow: "0px 0px 16px -13px #000000"
  },
  img: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: "4% 5%",
    boxShadow: "inset 0px -140px 50px -90px rgba(0,0,0,0.75)"
  },
  typography: {
    color: "#FFFFFF"
  }
})

export const RecommendCard = ({ label, marginBottom, actionClick }) => {
  const classes = useStyles()
  return (
    <Card
      className={classes.card}
      style={{ marginBottom: marginBottom && 20 }}
      onClick={actionClick}
    >
      <Box className={classes.box}>
        <CardMedia className={classes.img} image={testImg} title="image title">
          <Typography variant="subtitle1" className={classes.typography}>
            {label}
          </Typography>
        </CardMedia>
      </Box>
    </Card>
  )
}

RecommendCard.propTypes = {
  label: Proptype.string.isRequired,
  marginBottom: Proptype.bool.isRequired,
  actionClick: Proptype.func.isRequired
}
