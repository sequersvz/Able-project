import React from "react"
import { Container, Box, Grid } from "@material-ui/core"
import GetAppIcon from "@material-ui/icons/GetApp"
import FilterListTwoToneIcon from "@material-ui/icons/FilterListTwoTone"
import { makeStyles } from "@material-ui/core/styles"

import { PageHeader } from "shared/layouts/header/page.header"
import { RatingBarChart, BarChartSelection } from "./charts/bar"
import { RatingSpiderChart, SpiderChartSelection } from "./charts/polarArea"
import { RadialSeriesChart } from "./charts/line"
// import { RadialSeriesChart } from "./radialchart"

const useStyles = makeStyles({
  root: {
    padding: "80px 5%",
    marginLeft: 265
  }
})

const headerIcons = [
  {
    icon: <FilterListTwoToneIcon style={{ width: 20 }} />,
    bgcolor: "#EAEBEB",
    margin: 3,
    id: 1
  },
  {
    icon: <GetAppIcon style={{ color: "#FFFFFF", width: 20 }} />,
    bgcolor: "#203F2B",
    id: 2
  }
]

export const Satisfaction = () => {
  const classes = useStyles()
  return (
    <Container style={{ overflowX: "hidden" }}>
      <Box className={classes.root}>
        <PageHeader title="Satisfaction" icons={headerIcons} />

        <Box marginTop={20}>
          <Grid container>
            <Grid item xs={7}>
              <RatingBarChart />
            </Grid>
            <Grid item xs={5}>
              <BarChartSelection />
            </Grid>
            <Grid item xs={7}>
              <RatingSpiderChart />
            </Grid>
            <Grid item xs={5}>
              <SpiderChartSelection />
            </Grid>
            <Grid item xs={7}>
              <RadialSeriesChart />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
