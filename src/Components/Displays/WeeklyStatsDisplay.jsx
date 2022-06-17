import React, { Component } from 'react';
import './WeeklyStatsDisplay.scss';

class WeeklyStatsDisplay extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <h3>Weekly Total</h3>
                <div className='text-align-left'>
                    <table>
                        <tr>
                            <td>Distance: </td>&nbsp;
                            <td> test value </td>
                        </tr>
                        <tr>
                            <td>Time: </td>&nbsp;
                            <td> test value </td>
                        </tr>
                    </table>
                </div>
               
            </div>
        );
    }
}
 
export default WeeklyStatsDisplay;