/* global AWS_CONFIG */
/* eslint no-undef: "error" */
import React from "react"
import ReactDOM from "react-dom"
import Amplify from "aws-amplify"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import "libs/i18n"
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import App from "core/app/app.redux"
import * as serviceWorker from "./serviceWorker"
import rootReducer from "./reducers"

// GLOBAL AWS_CONFIG
const {
  IDENTITY_POOL_ID,
  USER_POOL_ID,
  USER_POOL_WEB_CLIENT_ID,
  CLIENT_BUCKET_NAME,
  GRAPHQL_ENDPOINT,
  AWS_REGION
} = AWS_CONFIG

const middleware = applyMiddleware(thunk)
const store = createStore(rootReducer, composeWithDevTools(middleware))

Amplify.configure({
  Auth: {
    identityPoolId: IDENTITY_POOL_ID,
    // REQUIRED - Amazon Cognito Region
    region: AWS_REGION,
    // OPTIONAL - Amazon Cognito Federated Identity Pool Region
    // Required only if it's different from Amazon Cognito Region
    identityPoolRegion: AWS_REGION,
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: USER_POOL_ID,
    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: USER_POOL_WEB_CLIENT_ID
  },
  Storage: {
    bucket: CLIENT_BUCKET_NAME,
    region: AWS_REGION
  },
  API: {
    aws_appsync_graphqlEndpoint: GRAPHQL_ENDPOINT,
    aws_appsync_region: AWS_REGION,
    aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS"
  }
})

const theme = createMuiTheme({
  palette: {
    primary: { main: "#203F2B" },
    secondary: { main: "#8D8D8D" }
  },
  spacing: 4
})

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
