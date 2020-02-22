import React from "react"
import chroma from "chroma-js"
import { Box, Typography } from "@material-ui/core"
import { OptionChip } from "shared/chips/option.chip"
import { Chart } from "./charts.layout"

const dataBar = {
  data: {
    labels: [
      "Lasagna",
      "Spaghetti Bolognese",
      "Rasberry Ricotta",
      "Chocolate Canelloni",
      "Organic Mozarella"
    ],
    datasets: [
      {
        data: [70, 80.2, 70.5, 90, 50.75],
        borderWidth: 0
      }
    ]
  },
  options: {
    legend: false
  }
}

dataBar.data.datasets.forEach(e => {
  e.backgroundColor = chroma.scale(["#C33764", "#1D2671"]).colors(e.data.length)
})

export const RatingSpiderChart = () => {
  return (
    <>
      <Box marginTop={10}>
        <Typography variant="body1" color="secondary">
          Top 5 dishes
        </Typography>
        <Box
          marginTop={5}
          height={300}
          width={470}
          bgcolor="#c7c7c7"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Chart
            type="polarArea"
            data={dataBar.data}
            options={dataBar.options}
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
