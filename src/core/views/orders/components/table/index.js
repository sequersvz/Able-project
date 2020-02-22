import React from "react";
import { TableHeader } from "./head";
import { TableRowInfo } from "./row";

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Box,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  tableCell: {
    padding: "20px 40px 20px 16px"
  }
});

const data = [
  {
    first: "Cofoco",
    type: "Lunch Kitchen",
    two: "Sep 3, 2019",
    third: "Sep 17, 2019",
    fourth: "DKK 65"
  },
  {
    first: "Cofoco",
    type: "Lunch Kitchen",
    two: "Sep 3, 2019",
    third: "Sep 17, 2019",
    fourth: "DKK 65"
  },
  {
    first: "Cofoco",
    type: "Lunch Kitchen",
    two: "Sep 3, 2019",
    third: "Sep 17, 2019",
    fourth: "DKK 65"
  },
  {
    first: "Cofoco",
    type: "Lunch Kitchen",
    two: "Sep 3, 2019",
    third: "Sep 17, 2019",
    fourth: "DKK 65"
  }
];

export const TableOrders = () => {
  const classes = useStyles();
  return (
    <Table>
      <TableHeader
        classes={classes}
        TableRow={TableRow}
        TableCell={TableCell}
        Typography={Typography}
        Box={Box}
      />
      <TableBody>
        <TableRowInfo
          data={data}
          classes={classes}
          TableRow={TableRow}
          TableCell={TableCell}
          Box={Box}
        />
      </TableBody>
    </Table>
  );
};
