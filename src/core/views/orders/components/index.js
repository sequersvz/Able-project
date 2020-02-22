import React from "react"

import { Container, Box } from "@material-ui/core"
import FilterListTwoToneIcon from "@material-ui/icons/FilterListTwoTone"
import { makeStyles } from "@material-ui/core/styles"
import { PageHeader } from "shared/layouts/header/page.header"
import { TableOrders } from "./table"

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
    id: 1
  }
]

export const Orders = () => {
  const classes = useStyles()
  return (
    <Container>
      <Box className={classes.root}>
        <PageHeader title="Orders" icons={headerIcons} />

        <Box marginTop={20}>
          <TableOrders />
        </Box>
      </Box>
    </Container>
  )
}
