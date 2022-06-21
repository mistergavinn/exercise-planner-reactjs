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
                    <h2>{this.props.month}</h2>
                    <h3>{this.props.day}</h3>
                    <InputDistance 
                        distance={this.props.distance} 
                        onDistChange={(distance) => this.props.onDistChange(this.props.id,distance)}/>
                    <InputDuration />
                    <InputNotes />
                </div>
            </div>
        );
    }
}
 
export default DayView;