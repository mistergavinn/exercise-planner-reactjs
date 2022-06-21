import React, { Component } from 'react';
import InputDate from '../Inputs/InputDate';
import InputDistance from '../Inputs/InputDistance';
import InputDuration from '../Inputs/InputDuration';
import InputNotes from '../Inputs/InputNotes';

import "./DayView.scss";

class DayView extends Component {
    state = { 
        
     } 

    render() { 
        console.log('dayview props',this.props);
        return (
            <div className='border-outline view-container'>
                <div>
                    <InputDate />
                    <h2>{this.props.dayView.month}</h2>
                    <h3>{this.props.dayView.day}</h3>
                    <InputDistance 
                        distance={this.props.dayView.distance} 
                        onDistChange={(distance) => this.props.onDistChange(this.props.dayView.id, distance)}
                    />
                    <InputDuration 
                        duration ={this.props.dayView.duration}
                        onDurationChange={(duration) => this.props.onDurationChange(this.props.dayView.id, duration)}
                    />
                    <InputNotes />
                </div>
            </div>
        );
    }
}
 
export default DayView;