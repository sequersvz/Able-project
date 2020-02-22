import React from "react"
import { connect } from "react-redux"
import { Explore } from "core/views/explore/components"
import { listKitchensReq } from "actions/explore/request"
import { kitchenSelected, clearKitchens } from "actions/explore"

const ExplorePage = ({ exploreState, handleExploreActions }) => {
  return (
    <Explore
      exploreState={exploreState}
      handleExploreActions={handleExploreActions}
    />
  )
}

const mapStateToProps = state => ({
  exploreState: state.explore
})

const mapDispatchToProps = dispatch => ({
  handleExploreActions: {
    listKitchensReq: (filter, from, size, trending = false) =>
      dispatch(listKitchensReq(filter, from, size, trending)),
    setKitchenSelected: id => dispatch(kitchenSelected(id)),
    clearKitchens: () => dispatch(clearKitchens())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ExplorePage)
