import React, { memo } from "react"
import { Switch } from "react-router-dom"
import routerConfig from "./router.config"
import RouteWithSubRoutes from "./RouteWithSubRoutes"

function RouterApp({ user }) {
  const routes = routerConfig()

  return !user ? null : (
    <Switch>
      {routes.map(route => (
        <RouteWithSubRoutes key={route.path} {...route} />
      ))}
    </Switch>
  )
}

export default memo(RouterApp, (prev, next) => prev.user.id === next.user.id)
