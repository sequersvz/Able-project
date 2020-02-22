import { exploreStatus } from "../actions/explore/types"

const explore = (state = {}, action) => {
  switch (action.type) {
    case exploreStatus.LIST_KITCHENS:
      return {
        ...state,
        ...action.payload,
        isFiltered: true,
        toSearch: false
      }
    case exploreStatus.LIST_KITCHENS_TRENDING:
      return {
        ...state,
        listItemKitchensTrending: action.payload
      }
    case exploreStatus.KITCHEN_SELECTED:
      return {
        ...state,
        kitchenSelected: action.payload
      }
    case exploreStatus.CLEAR_KITCHENS:
      return {
        ...state,
        listItemKitchens: []
      }
    default:
      return state
  }
}

export default explore
