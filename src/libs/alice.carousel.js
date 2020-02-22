import React from "react"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import { useHistory } from "react-router-dom"
import Proptype from "prop-types"

export default class KitchenCarousel extends React.Component {
  assignRef = ref => {
    this.Carousel = ref
  }

  render() {
    const {
      Component,
      children,
      listItemKitchensTrending,
      setKitchenSelected
    } = this.props
    const history = useHistory()
    return (
      <>
        {children(
          () => this.Carousel.slidePrev(),
          () => this.Carousel.slideNext()
        )}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <AliceCarousel
            infinite={false}
            dotsDisabled
            buttonsDisabled
            ref={this.assignRef}
            responsive={{
              0: {
                items: 2
              }
            }}
          >
            {listItemKitchensTrending.map(elem => (
              <Component
                key={elem.id}
                name={elem.kitchenName}
                actionClick={() =>
                  setKitchenSelected(
                    listItemKitchensTrending.filter(a => a.id === elem.id)[0]
                  ) && history.push("explore/kitchen")
                }
              />
            ))}
          </AliceCarousel>
        </div>
      </>
    )
  }
}

KitchenCarousel.propTypes = {
  listItemKitchensTrending: Proptype.arrayOf(
    Proptype.shape({
      id: Proptype.number.isRequired,
      kitchenName: Proptype.string.isRequired
    })
  ).isRequired,
  setKitchenSelected: Proptype.func.isRequired,
  Component: Proptype.func.isRequired,
  children: Proptype.func.isRequired
}
