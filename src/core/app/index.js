import React, { Suspense } from "react"
import { Auth } from "aws-amplify"
import { Authenticator, Greetings, SignUp } from "aws-amplify-react"
import { Router } from "react-router-dom"
import { Box, RadioGroup, FormControlLabel, Radio } from "@material-ui/core"
import { SidebarLayout } from "shared/layouts/menu/sidebar"
import RouterApp from "../router/router.app"
import { history } from "../router/history"
// import i18n from "../../i18next";

import "./App.css"

const I18nHandleComp = () => {
  // const handleChange = ({ target: { value } }) => {
  //   i18n.changeLanguage(value);
  // };
  return (
    <Box display="flex" justifyContent="flex-end">
      <RadioGroup
        aria-label="position"
        name="position"
        // onChange={handleChange}
        row
      >
        <FormControlLabel
          value="en"
          control={<Radio color="primary" />}
          label="English"
          labelPlacement="top"
        />
        <FormControlLabel
          value="es"
          control={<Radio color="primary" />}
          label="Español"
          labelPlacement="top"
        />
      </RadioGroup>
    </Box>
  )
}

const AppContainer = ({ authState, user }) => {
  // this will show form if the user is not logged in
  if (authState !== "signedIn") return null

  return (
    <>
      {/* <I18nHandleComp /> */}
      <Suspense fallback="loading">
        <Box display="flex" style={{ height: "100%" }}>
          <Router history={history}>
            <SidebarLayout>
              <RouterApp user={user} />
            </SidebarLayout>
          </Router>
        </Box>
      </Suspense>
    </>
  )
}

const App = ({ currentUser, userLoggedIn, userSignedOut }) => {
  const myhandleLogout = () => {
    Auth.signOut()
    handleAuthStateChange("signIn")
  }

  const handleAuthStateChange = authState => {
    switch (authState) {
      case "signedIn":
        Auth.currentAuthenticatedUser().then(user => userLoggedIn(user))
        break
      case "signIn":
        userSignedOut()
        break
      default:
        break
    }
  }

  return (
    <div className="App">
      <Authenticator hide={[Greetings, SignUp]}>
        <AppContainer
          onStateChange={handleAuthStateChange}
          hideDefault={!(currentUser === null)}
          {...{ currentUser }}
        />
      </Authenticator>
    </div>
  )
}

export default App
