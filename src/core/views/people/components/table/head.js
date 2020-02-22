import React from "react";

import { TableHead } from "@material-ui/core";

export const TableHeader = ({
  classes,
  TableRow,
  TableCell,
  Box,
  Typography,
  Icons: { UpArrow, DownArrow }
}) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell
          className={classes.tableCell}
          align="left"
          style={{ position: "relative" }}
        >
          <Typography variant="caption" style={{ color: "#000000" }}>
            Person{" "}
          </Typography>
          <Box
            display="inline-flex"
            justifyContent="space-around"
            alignItems="center"
            flexDirection="column"
            position="absolute"
            top={18}
          >
            <UpArrow style={{ height: 12, color: "#000000" }} />
            <DownArrow style={{ height: 12 }} />
          </Box>
        </TableCell>
        <TableCell className={classes.tableCell} align="left">
          Schedule
        </TableCell>
        <TableCell className={classes.tableCell} align="left">
          Role
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
