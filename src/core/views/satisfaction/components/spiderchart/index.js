import React from "react"
import chroma from "chroma-js"
import { PieChart, PieArcSeries } from "reaviz"

import { Box, Typography } from "@material-ui/core"
import { OptionChip } from "../../../../../utils/chips/option.chip"

const data = [
  { key: "Lasagna", data: 70 },
  { key: "Spaghetti Bolognese", data: 80.2 },
  { key: "Rasberry Ricotta", data: 70.5 },
  { key: "Chocolate Canelloni", data: 90 },
  { key: "Organic Mozarella", data: 50.75 }
]

export const RatingSpiderChart = () => {
  return (
    <>
      <Box marginTop={10}>
        <Typography variant="body1" color="secondary">
          Top 5 dishes
        </Typography>
        <Box marginTop={5} height={300} width={470} bgcolor="#c7c7c7">
          <PieChart
            data={data}
            series={
              <PieArcSeries
                explode
                colorScheme={chroma
                  .scale(["#203F2B", "#2A8149"])
                  .colors(data.length)}
              />
            }
          />
        </Box>
      </Box>
    </>
  )
}

export const SpiderChartSelection = () => {
  return (
    <>
      <Box marginTop={10}>
        <Typography variant="body1" color="secondary">
          Dishes most recommended by customers
        </Typography>
        <Box marginTop={3}>
          <OptionChip label="Lasagna" />
          <OptionChip label="Spaghetti Bolognese" />
          <OptionChip label="Rasberry Ricotta" />
          <OptionChip label="Chocolate Canelloni" />
          <OptionChip label="Organic Mozarella" />
        </Box>
      </Box>
    </>
  )
}
