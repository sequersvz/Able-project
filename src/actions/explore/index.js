import { exploreStatus } from "./types"

const listKitchensRes = ({ data }, trending) => {
  return trending
    ? {
        type: exploreStatus.LIST_KITCHENS_TRENDING,
        payload: data.listItemKitchens
      }
    : {
        type: exploreStatus.LIST_KITCHENS,
        payload: data
      }
}

const kitchenSelected = id => {
  return {
    type: exploreStatus.KITCHEN_SELECTED,
    payload: id
  }
}

const clearKitchens = () => {
  return {
    type: exploreStatus.WIZARD_CLEARVALUES
  }
}

export { listKitchensRes, kitchenSelected, clearKitchens }
