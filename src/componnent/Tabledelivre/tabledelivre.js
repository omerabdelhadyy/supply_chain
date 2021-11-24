import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function CustomizedTables({ data, width }) {
  return (
    <TableContainer component={Paper} style={{ width: width, marginTop: 20 }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Time</StyledTableCell>
            <StyledTableCell align="center">latitude</StyledTableCell>
            <StyledTableCell align="center">longitude</StyledTableCell>
            <StyledTableCell align="center">temperature °</StyledTableCell>
            {/* <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map?.((item) => {
            var fields = item.location.split("__");
            return (
              <StyledTableRow key={item.name}>
                <StyledTableCell component="th" scope="row">
                  {new Date(item?.createdAt).toString().substring(0, 21)}
                </StyledTableCell>
                <StyledTableCell align="center">{fields[0]}</StyledTableCell>
                <StyledTableCell align="center">{fields[1]}</StyledTableCell>
                <StyledTableCell align="center">
                  {item.temperature}
                </StyledTableCell>
                {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
