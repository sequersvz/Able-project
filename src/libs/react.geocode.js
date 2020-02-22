/* global AWS_CONFIG */
import Geocode from "react-geocode"

const { GOOGLE_API_KEY } = AWS_CONFIG

Geocode.setApiKey(GOOGLE_API_KEY)

const geolocation = {}

geolocation.getLatLon = async direction => {
  const resp = await Geocode.fromAddress(direction)
  const { lat, lng: lon } = resp.results[0].geometry.location

  return {
    location: {
      lat,
      lon
    }
  }
}

export default geolocation
