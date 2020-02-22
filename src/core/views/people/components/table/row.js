import React from "react";

export const TableRowInfo = ({
  data,
  classes,
  TableRow,
  TableCell,
  Box,
  Avatar,
  Icons: { DownArrow }
}) => {
  return data.map((e, i) => (
    <TableRow key={`orders_tablerow-${i}`}>
      <TableCell className={classes.TableCell} component="th" scope="row">
        <Box className={classes.tableCellAvatar}>
          <Avatar className={classes.avatar}>LE</Avatar>
          <Box>
            <Box>{e.first}</Box>
            <Box>{e.type}</Box>
          </Box>
        </Box>
      </TableCell>
      <TableCell className={classes.tableCell} align="left">
        {e.two}
      </TableCell>
      <TableCell className={classes.tableCell} align="left">
        {e.third}
        <DownArrow
          style={{ position: "relative", top: 5, height: 20, color: "#000000" }}
        />
      </TableCell>
    </TableRow>
  ));
};
