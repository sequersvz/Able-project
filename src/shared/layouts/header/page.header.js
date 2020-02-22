import React from "react"

import { Box, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import PropTypes from "prop-types"

const useStyles = makeStyles({
  radiusBox: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center"
  }
})

export const PageHeader = ({ title, icons }) => {
  const classes = useStyles()
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography variant="h6">{title}</Typography>

      <Box>
        {icons.map(e => (
          <Box
            key={`icon-${title}-${e.id}`}
            className={classes.radiusBox}
            bgcolor={e.bgcolor}
            marginRight={e.margin}
          >
            {e.icon}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  icons: PropTypes.instanceOf(Array).isRequired
}
