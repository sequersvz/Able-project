import React from "react"
import { Box, Typography } from "@material-ui/core"
import { OptionChip } from "shared/chips/option.chip"
import { Chart } from "./charts.layout"

const dataBar = {
  data: {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    datasets: [
      {
        data: [5, 4, 4, 3, 4.6, 2.5]
      }
    ]
  },
  options: {
    legend: false
  }
}

export const RatingBarChart = () => {
  return (
    <>
      <Box marginTop={5}>
        <Typography variant="body1" color="secondary">
          Customer orders over past week
        </Typography>
        <Box marginTop={5} height={240} width={470} bgcolor="#c7c7c7">
          <Chart type="bar" data={dataBar.data} options={dataBar.options} />
        </Box>
      </Box>
    </>
  )
}

export const BarChartSelection = () => {
  return (
    <>
      <Box marginTop={5}>
        <Typography variant="body1" color="secondary">
          best day
        </Typography>
        <Box marginTop={3}>
          <OptionChip label="Monday" />
        </Box>
      </Box>
      <Box marginTop={10}>
        <Typography variant="body1" color="secondary">
          worst day
        </Typography>
        <Box marginTop={3}>
          <OptionChip label="Saturday" />
        </Box>
      </Box>
    </>
  )
}
