import React from "react"
import ListKitchens from "./searchItem/card"
import MapKitchens from "./searchItem/map"

const searchResults = ({ kitchens, viewMap, searchTerm }) => {
  const filterKitchen = kitchens.filter(
    e => e.kitchenName.indexOf(searchTerm) !== -1
  )

  if (viewMap) {
    return <MapKitchens kitchens={filterKitchen} />
  }
  return <ListKitchens kitchens={filterKitchen} />
}

export default searchResults
