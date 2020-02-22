import React from "react"

import { Card, CardMedia, Typography, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import testImg from "assets/img/kitchens/test-img.jpg"

const useStyles = makeStyles({
  card: {
    width: 550,
    height: 280,
    borderRadius: 2,
    border: "1.5px solid transparent",
    zIndex: 2,
    padding: 5,
    boxShadow: "none"
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
    padding: "20px 30px",
    boxShadow: "inset 0px -140px 50px -90px rgba(0,0,0,0.75)",
    borderRadius: 2
  },
  typography: {
    color: "#FFFFFF"
  }
})

export const CardLayout = ({ name, active, margin }) => {
  const classes = useStyles()
  return (
    <Card
      className={classes.card}
      style={{ borderColor: active && "#203F2B", marginBottom: margin && 100 }}
    >
      <Box className={classes.box}>
        <CardMedia className={classes.img} image={testImg} title="image title">
          <Typography variant="subtitle1" className={classes.typography}>
            {name}
          </Typography>
        </CardMedia>
      </Box>
    </Card>
  )
}
