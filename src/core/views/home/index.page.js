import React from "react"
import { Link } from "react-router-dom"
import Button from "@material-ui/core/Button"

const Home = () => {
  return (
    <div style={{ marginLeft: 300 }}>
      <Link to="/explore">
        <Button variant="contained">Explore</Button>
      </Link>
    </div>
  )
}

export default Home
