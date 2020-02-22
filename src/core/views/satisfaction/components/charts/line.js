import React from "react"
import { Box, Typography } from "@material-ui/core"
import { Chart } from "./charts.layout"

const dataBar = {
  data: {
    labels: ["Presentation", "Taste", "Texture", "Smell", "Delivery time"],
    datasets: [
      {
        data: [5, 4, 4, 3, 4.6, 2.5],
        borderWidth: 0
      }
    ]
  },
  options: {
    legend: false,
    maintainAspectRatio: false
  }
}

export const RadialSeriesChart = () => {
  return (
    <>
      <Box marginTop={5}>
        <Typography variant="body1" color="secondary">
          Customer meal ratings
        </Typography>
        <Box marginTop={5} height={250} width={900} bgcolor="#c7c7c7">
          <Chart type="line" data={dataBar.data} options={dataBar.options} />
        </Box>
      </Box>
    </>
  )
}
