import React, { Component } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(metric, run, bike, others) {
    return { metric, run, bike, others};
};

const rows = [
    createData('Distance', 32, 120, 0),
    createData('Duration (Hours)', 4, 5, 0.2),
];

class WeeklyStats extends Component {
    state = {  } 
    render() { 
        return (
          <div>
            <h3>Weekly Total</h3>
            <div>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 100 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Metrics</TableCell>
                      <TableCell align="center">Run</TableCell>
                      <TableCell align="center">Bike</TableCell>
                      <TableCell align="center">Others</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.metric}
                        </TableCell>
                        <TableCell align="center">{row.run}</TableCell>
                        <TableCell align="center">{row.bike}</TableCell>
                        <TableCell align="center">{row.others}</TableCell>
                      </TableRow>
                    ))}

                    <TableRow>
                      <TableCell align="left" colSpan={2}></TableCell>
                      <TableCell alight="left">Distance</TableCell>
                      <TableCell alight="left">Duration (hours)</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left" colSpan={2}>Total</TableCell>
                      <TableCell alight="center">xxx</TableCell>
                      <TableCell alight="center">7</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        );
    }
}
 
export default WeeklyStats;