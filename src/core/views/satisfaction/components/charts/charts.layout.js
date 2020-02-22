import React, { useEffect, createRef } from "react"
import Chartjs from "chart.js"
import chroma from "chroma-js"
import PropTypes from "prop-types"

const defaultType = "bar"

const defaultData = {
  labels: ["Red", "Blue"],
  datasets: [
    {
      label: "Blue is betther than Red - change my mind",
      data: [17, 19],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1
    }
  ]
}

const defaultOptions = {}

export const Chart = ({ type, data, options }) => {
  // ref html element canvas
  const ref = createRef()

  // background color with chroma and data values:
  data.datasets.forEach(e => {
    e.backgroundColor = chroma
      .scale(["#283c86", "#45a247"])
      .colors(e.data.length)
  })

  // useEffect for functional components
  useEffect(() => {
    // canvas context
    const ctx = ref.current.getContext("2d")
    // chart.js init
    // eslint-disable-next-line no-unused-vars
    const chartInstance = new Chartjs(ctx, {
      type,
      data,
      options
    })
  }, [data, options, ref, type])

  return <canvas ref={ref} aria-label={`chart-type-${type}`} />
}

Chart.defaultProps = {
  type: defaultType,
  data: defaultData,
  options: defaultOptions
}

Chart.propTypes = {
  type: PropTypes.string,
  data: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    datasets: PropTypes.arrayOf(
      PropTypes.shape({
        data: PropTypes.arrayOf(PropTypes.number.isRequired)
      })
    ).isRequired
  }),
  options: PropTypes.shape({})
}
