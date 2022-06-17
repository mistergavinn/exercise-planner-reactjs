import React, { Component } from 'react';
import InputDistance from '../Inputs/InputDistance';
import InputDuration from '../Inputs/InputDuration';
import InputNotes from '../Inputs/InputNotes';

import "./DayView.scss";

class DayView extends Component {
    state = { 
        day: this.props.day
     } 
    render() { 
        return (
            <div className='border-outline view-container'>
                <div>
                    <h3>{this.state.day}</h3>
                    <InputDistance />
                    <InputDuration />
                    <InputNotes />
                </div>
            </div>
        );
    }
}
 
export default DayView;