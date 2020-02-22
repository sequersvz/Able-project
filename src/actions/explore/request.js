import API from "../../API"
import { listKitchensRes } from "."
import { getValidValue, filteringParams, getConcatenatedValue } from "../utils"
import geolocation from "../../libs/react.geocode"

export const listKitchensReq = (
  params,
  from,
  size,
  trending
) => async dispatch => {
  try {
    const { chipTags, description } = getValidValue(params)

    let filter = {
      cuisineType: getConcatenatedValue(chipTags, description).split(" "),
      description: getConcatenatedValue(chipTags, description),
      location:
        "location" in params
          ? await geolocation.getLatLon(params.location)
          : null,
      minimumPeople: { gte: params.peopleNumberArray[0] },
      maximumPeople: { lte: params.peopleNumberArray[1] },
      price: { between: params.price }
    }

    filter = filteringParams(filter)
    // const response = await API.listItemKitchens(filter, from, size)
    // dispatch(listKitchensRes(response, trending))

    // return new Promise(res =>
    //   Object.prototype.hasOwnProperty.call(response, "data") &&
    //   response.data.length > 0
    //     ? res({ toSearch: false })
    //     : res({ toSearch: true, error: response.error })
    // )

    return new Promise(res => {
      setTimeout(() => {
        res({ toSearch: false })
      }, 1000)
    })
  } catch (err) {
    console.log(err)
    // TODO: This needs better error handling!
    dispatch(listKitchensRes({ data: { listItemKitchens: [] } }))
  }
}
