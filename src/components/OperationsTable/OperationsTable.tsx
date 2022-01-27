import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Operation } from "../../types";
import { getStatusRepr } from "../../utils/getStatusRepr";

export interface OperationsTableProps {
  list: Operation[];
}

export const OperationsTable: React.FC<OperationsTableProps> = ({ list }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={styles.table} aria-label="operations table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell sx={styles.headCellCentered}>Name</TableCell>
            <TableCell sx={styles.headCellCentered}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((operation) => (
            <TableRow key={operation.id} sx={styles.tableRow}>
              <TableCell>{operation.id}</TableCell>
              <TableCell sx={styles.cellCentered}>{operation.name}</TableCell>
              <TableCell sx={styles.cellCentered}>
                {getStatusRepr(operation.status)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const styles = {
  headCellCentered: {
    textAlign: "center",
    width: "50%",
  },
  tableRow: {
    "&:last-child td, &:last-child th": { border: 0 },
  },
  cellCentered: {
    textAlign: "center",
  },
  table: {
    minWidth: 650,
  },
};
