import { connect } from "react-redux"
import { userSignedIn, userSignedOut } from "actions"
import App from "."

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => {
  return {
    userLoggedIn: user => {
      dispatch(userSignedIn(user))
    },
    userSignedOut: () => {
      dispatch(userSignedOut())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
