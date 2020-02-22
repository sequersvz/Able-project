import React from "react";

import { TableHead } from "@material-ui/core";
import ExpandLessRoundedIcon from "@material-ui/icons/ExpandLessRounded";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";

export const TableHeader = ({
  classes,
  TableRow,
  TableCell,
  Box,
  Typography
}) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell className={classes.tableCell}>Supplier</TableCell>
        <TableCell
          className={classes.tableCell}
          align="left"
          style={{ position: "relative" }}
        >
          <Typography variant="caption" style={{ color: "#000000" }}>
            From{" "}
          </Typography>
          <Box
            display="inline-flex"
            justifyContent="space-around"
            alignItems="center"
            flexDirection="column"
            position="absolute"
            top={18}
          >
            <ExpandLessRoundedIcon style={{ height: 12, color: "#000000" }} />
            <ExpandMoreRoundedIcon style={{ height: 12 }} />
          </Box>
        </TableCell>
        <TableCell className={classes.tableCell} align="left">
          To
        </TableCell>
        <TableCell className={classes.tableCell} align="left">
          Pax Price
        </TableCell>
        <TableCell className={classes.tableCell} align="left"></TableCell>
      </TableRow>
    </TableHead>
  );
};
