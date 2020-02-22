import React from "react"
import chroma from "chroma-js"
import { RadialGauge, RadialGaugeSeries } from "reaviz"

import { Box, Typography } from "@material-ui/core"

const categoryData = [
  {
    key: "Presentation",
    data: 10
  },
  {
    key: "Taste",
    data: 8
  },
  {
    key: "Texture",
    data: 7
  },
  {
    key: "Smell",
    data: 8
  },
  {
    key: "Delivery time",
    data: 5
  }
]

export const RadialSeriesChart = () => {
  return (
    <>
      <Box marginTop={5}>
        <Typography variant="body1" color="secondary">
          Customer meal ratings
        </Typography>
        <Box marginTop={5} height={250} width={900} bgcolor="#c7c7c7">
          <RadialGauge
            data={categoryData.sort((a, b) => b.data - a.data)}
            width={900}
            height={250}
            series={
              <RadialGaugeSeries
                minGaugeWidth={10}
                colorScheme={chroma
                  .scale(["#203F2B", "#2A8149"])
                  .colors(categoryData.length)}
              />
            }
            minValue={0}
            maxValue={10}
          />
        </Box>
      </Box>
    </>
  )
}
