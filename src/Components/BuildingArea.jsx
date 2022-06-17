import React, { Component } from 'react';
import DayView from './Displays/DayView';

import './BuildingArea.scss';

class BuildingArea extends Component {
    state = { 
        dayViews: [
            { id: 1, day: 'Monday'}, 
            { id: 2, day: 'Tuesday'},  
            { id: 3, day: 'Wednesday'},
            { id: 4, day: 'Thursday'},
            { id: 5, day: 'Friday'},
            { id: 6, day: 'Saturday'},
            { id: 7, day: 'Sunday'}  
        ]
     } 
    render() { 
        return (
            <div className="border-outline ">
                <div className='test-area'>
                    {this.state.dayViews.map(dayView => 
                    <DayView key={dayView.id} day={dayView.day} selected={true}/>)}
                </div>
            </div>
        );
    }
}
 
export default BuildingArea;