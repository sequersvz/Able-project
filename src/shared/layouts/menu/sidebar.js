import React from "react"
import { NavLink } from "react-router-dom"

import { Box, Avatar } from "@material-ui/core"
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded"
import { makeStyles } from "@material-ui/core/styles"
import AbleLogo from "assets/img/logo/able-green-logo.png"

const useStyles = makeStyles({
  root: {
    minWidth: 265,
    backgroundColor: "#F8F8F8",
    boxShadow: "inset -10px 0px 20px -20px rgba(0,0,0,0.75)",
    position: "fixed",
    height: "100vh"
  },
  box: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    paddingRight: 30
  },
  expandMore: {
    color: "#666666"
  },
  boxLogo: {
    flexGrow: 4
  }
})

const navLinksRoutes = [
  {
    label: "Explore",
    route: "/explore",
    id: 1
  },
  {
    label: "Orders",
    route: "/orders",
    id: 2
  },
  {
    label: "People",
    route: "/people",
    id: 3
  },
  {
    label: "Satisfaction",
    route: "/satisfaction",
    id: 4
  },
  {
    label: "Settings",
    route: "/settings",
    id: 5
  }
]

export const SidebarLayout = ({ children }) => {
  const classes = useStyles()
  return (
    <Box style={{ width: "100%" }} display="flex">
      <Box className={classes.root}>
        <Box className={classes.box}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width={90}
            style={{ flexGrow: 4 }}
          >
            <NavLink to={navLinksRoutes.find(e => e.label === "Explore").route}>
              <img
                src={AbleLogo}
                alt="able main logo"
                style={{ width: "100%" }}
              />
            </NavLink>
          </Box>
          <Box style={{ flexGrow: 1 }}>
            {navLinksRoutes.map(e => (
              <Box marginBottom={5} key={`NavLink-item-${e.id}`}>
                <NavLink
                  className="navMenu-item__sidebar"
                  activeClassName="navMenu-active"
                  to={e.route}
                >
                  {e.label}
                </NavLink>
              </Box>
            ))}
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{ flexGrow: 4 }}
          >
            <Avatar alt="user avatar">AB</Avatar>
            <ExpandMoreRoundedIcon className={classes.expandMore} />
          </Box>
        </Box>
      </Box>
      {children}
    </Box>
  )
}
