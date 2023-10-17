import React from 'react'
import { TableContainer,Table, TableHead, TableBody, TableRow, TableCell, Paper} from '@mui/material'

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight: "300px"}}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const tableData =[{
  "id": 1,
  "first_name": "Martin",
  "last_name": "Babb",
  "email": "mbabb0@china.com.cn",
  "gender": "Male",
  "ip_address": "84.153.88.231"
}, {
  "id": 2,
  "first_name": "Peyton",
  "last_name": "Janks",
  "email": "pjanks1@gmpg.org",
  "gender": "Male",
  "ip_address": "134.28.217.208"
}, {
  "id": 3,
  "first_name": "Clark",
  "last_name": "Bissett",
  "email": "cbissett2@mac.com",
  "gender": "Male",
  "ip_address": "132.90.30.207"
}, {
  "id": 4,
  "first_name": "Jeremie",
  "last_name": "Whettleton",
  "email": "jwhettleton3@ed.gov",
  "gender": "Male",
  "ip_address": "229.37.224.88"
}, {
  "id": 5,
  "first_name": "Darrel",
  "last_name": "Spiby",
  "email": "dspiby4@google.com.au",
  "gender": "Male",
  "ip_address": "164.143.120.230"
}]