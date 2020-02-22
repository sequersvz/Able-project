import React from "react";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

export const TableRowInfo = ({ data, classes, TableRow, TableCell, Box }) => {
  return data.map((e, i) => (
    <TableRow key={`orders_tablerow-${i}`}>
      <TableCell className={classes.tableCell} component="th" scope="row">
        <Box>{e.first}</Box>
        <Box>{e.type}</Box>
      </TableCell>
      <TableCell className={classes.tableCell} align="left">
        {e.two}
      </TableCell>
      <TableCell className={classes.tableCell} align="left">
        {e.third}
      </TableCell>
      <TableCell className={classes.tableCell} align="left">
        {e.fourth}
      </TableCell>
      <TableCell className={classes.tableCell} align="left">
        <MoreHorizIcon />
      </TableCell>
    </TableRow>
  ));
};
