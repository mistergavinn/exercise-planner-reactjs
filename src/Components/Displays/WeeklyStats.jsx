import React, { Component } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ShowAllDistance from './ShowAllDistance';

function createData(metric, run, bike, others) {
    return { metric, run, bike, others};
};

let rows = [
    createData('Distance', 32, 120, 0),
    createData('Duration (Hours)', 4, 5, 0.2),
];

class WeeklyStats extends Component {
  // state = {
  //   dayViews: this.props.dayViews,
  //   totalDistance: 0
  // }
  componentDidMount() {
    console.log("did mount WeeklStats");
    console.log('props',this.props);
  }
  componentDidUpdate() {
    console.log("did update WeeklStats");
    console.log('props',this.props);
  }

  getAllDistance = () => {
    // console.log("GetAllDist method");
    // console.log(this.props);
    // const dayViews = this.props.dayViews;
    // const totalDistance = dayViews.reduce((total, current) => total + parseInt(current.distance,10),0);
    // console.log("totalDistance is: ",totalDistance);
    return <h3>test</h3>;
  }

    render() { 
        return (
          <div>
            <h3>Weekly Total</h3>
            <button onClick={this.getAllDistance}></button>
            <div>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 100 }} aria-label="Weekly total" size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left"></TableCell>
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
                      <TableCell alight="center">Distance</TableCell>
                      <TableCell alight="center">Duration (hours)</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left" colSpan={2}>Total</TableCell>
                      <TableCell alight="center">{this.getAllDistance()}</TableCell>
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