import React from "react"
import { Box, Typography } from "@material-ui/core"
import Proptype from "prop-types"
import { CardLayout } from "../card/category.card"

const cards = [
  { label: "Lunchs", id: 1 },
  { label: "Fruits", id: 2 },
  { label: "Events", id: 3 }
]

export const CategoryLayout = ({ user }) => {
  return (
    <Box marginTop={20} overflow="hidden">
      <Typography variant="h6">How may we help, {user}?</Typography>

      <Box marginTop={5} overflow="hidden" position="relative" height={100}>
        <Box width={1300} position="absolute">
          {cards.map(e => (
            <CardLayout key={`caterogies_cards-${e.id}`} label={e.label} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

CategoryLayout.propTypes = {
  user: Proptype.string.isRequired
}
