import React from "react"
import { connect } from "react-redux"
import { Orders } from "core/views/orders/components"

const OrdersPage = ({ history, ordersState, handleOrdersActions }) => {
  return (
    <Orders
      history={history}
      ordersState={ordersState}
      handleOrdersActions={handleOrdersActions}
    />
  )
}

const mapStateToProps = state => ({
  ordersState: state.orders
})

// const mapDispatchToProps = dispatch => ({
//   handleExploreActions: {
//     listKitchensReq: (filter, from, size, trending = false) =>
//       dispatch(listKitchensReq(filter, from, size, trending)),
//     setKitchenSelected: id => dispatch(kitchenSelected(id)),
//     exploreIsFiltered: bool => dispatch(exploreIsFiltered(bool)),
//     wizardClearValues: () => dispatch(wizardClearValues()),
//     setWizardInputsValues: params => dispatch(setWizardInputsValues(params))
//   }
// });

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  null
)(OrdersPage)
