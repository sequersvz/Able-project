/* global AWS_CONFIG */
import React, { Component } from "react"
import GoogleMapReact from "google-map-react"
import Marker from "./marker"

const { GOOGLE_API_KEY } = AWS_CONFIG

class LayoutItemMap extends Component {
  static defaultProps = {
    center: {
      lat: 55.6660195,
      lng: 12.5859257
    },
    zoom: 13
  }

  render() {
    const { kitchens } = this.props

    return (
      <div style={{ height: "500px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          {kitchens.map((e, i) => (
            <Marker
              name={e.kitchenName}
              lat={e.location[0]}
              lng={e.location[1]}
              key={`item_kitchens_map-${i}`}
            />
          ))}
        </GoogleMapReact>
      </div>
    )
  }
}

export default LayoutItemMap
