import React from "react"

import { Container, Box } from "@material-ui/core"
import FilterListTwoToneIcon from "@material-ui/icons/FilterListTwoTone"
import GetAppIcon from "@material-ui/icons/GetApp"
import AddIcon from "@material-ui/icons/Add"
import { makeStyles } from "@material-ui/core/styles"
import { PageHeader } from "shared/layouts/header/page.header"
import { TablePeople } from "./table"

const useStyles = makeStyles({
  root: {
    padding: "80px 10%",
    marginLeft: 265
  }
})

const headerIcons = [
  {
    icon: <FilterListTwoToneIcon style={{ width: 20 }} />,
    bgcolor: "#EAEBEB",
    margin: 3,
    id: 1
  },
  {
    icon: <GetAppIcon style={{ width: 20 }} />,
    bgcolor: "#EAEBEB",
    margin: 3,
    id: 2
  },
  {
    icon: <AddIcon style={{ color: "#FFFFFF", width: 30 }} />,
    bgcolor: "#203F2B",
    id: 3
  }
]

export const People = () => {
  const classes = useStyles()
  return (
    <Container>
      <Box className={classes.root}>
        <PageHeader title="People" icons={headerIcons} />

        <Box marginTop={20}>
          <TablePeople />
        </Box>
      </Box>
    </Container>
  )
}
