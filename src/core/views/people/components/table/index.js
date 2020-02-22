import React from "react";
import { TableHeader } from "./head";
import { TableRowInfo } from "./row";

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Box,
  Typography,
  Avatar
} from "@material-ui/core";
import ExpandLessRoundedIcon from "@material-ui/icons/ExpandLessRounded";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  tableCell: {
    padding: "20px 40px 20px 16px"
  },
  tableCellAvatar: {
    display: "flex",
    alignItems: "center"
  },
  avatar: {
    marginRight: 10
  }
});

const data = [
  {
    first: "Hangakore Ariwana",
    type: "mail@company.dk",
    two: "Week Days",
    third: "Employee"
  },
  {
    first: "Hangakore Ariwana",
    type: "mail@company.dk",
    two: "Week Days",
    third: "Employee"
  },
  {
    first: "Hangakore Ariwana",
    type: "mail@company.dk",
    two: "Week Days",
    third: "Employee"
  },
  {
    first: "Hangakore Ariwana",
    type: "mail@company.dk",
    two: "Week Days",
    third: "Lunch responsible"
  }
];

export const TablePeople = () => {
  const classes = useStyles();
  return (
    <Table>
      <TableHeader
        classes={classes}
        TableRow={TableRow}
        TableCell={TableCell}
        Typography={Typography}
        Box={Box}
        Icons={{
          UpArrow: ExpandLessRoundedIcon,
          DownArrow: ExpandMoreRoundedIcon
        }}
      />
      <TableBody>
        <TableRowInfo
          data={data}
          classes={classes}
          TableRow={TableRow}
          TableCell={TableCell}
          Box={Box}
          Avatar={Avatar}
          Icons={{
            DownArrow: ExpandMoreRoundedIcon
          }}
        />
      </TableBody>
    </Table>
  );
};
