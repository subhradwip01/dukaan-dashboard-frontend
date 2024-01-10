import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../UI";

const DataTable = ({ columns, data }) => {
  console.log(columns)
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((col) => (
            <TableHead>{col.header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((dataItem) => (
          <TableRow>
            {columns.map((colItem) => (
              <TableCell>
                {colItem.cell(dataItem[colItem.accesorKey])}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export { DataTable };
