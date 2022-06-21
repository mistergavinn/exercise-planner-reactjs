import React, { Component } from 'react';
import DayView from './DayView';

class WeekView extends Component {
    state = { 
        dayViews: [
            { id: 1, day: 'Monday', adddate: 0, distance: 0, duration:0}, 
            { id: 2, day: 'Tuesday', adddate: 1, distance: 0, duration:0},  
            { id: 3, day: 'Wednesday', adddate: 2, distance: 0, duration:0},
            { id: 4, day: 'Thursday', adddate: 3, distance: 0, duration:0},
            { id: 5, day: 'Friday', adddate: 4, distance: 0, duration:0},
            { id: 6, day: 'Saturday', adddate: 5, distance: 0, duration:0},
            { id: 7, day: 'Sunday', adddate: 6, distance: 0, duration:0}  
        ]
     } 

     handleDistChange = (dayId, distance) => {
        const dayViews = [...this.state.dayViews];
        const index = dayViews.map(c => c.id).indexOf(dayId);
        dayViews[index].distance = distance;
        this.setState({dayViews});
     }
     handleDurationChange = (dayId, duration) => {
        const dayViews = [...this.state.dayViews];
        const index = dayViews.map(c => c.id).indexOf(dayId);
        dayViews[index].duration = duration;
        this.setState({dayViews});
     }

    render() { 
        return (
            <div className="border-outline ">
                <div className='test-area'>
                    {this.state.dayViews.map(dayView => 
                    <DayView key={dayView.id} 
                    dayView = {dayView} 
                    onDistChange ={this.handleDistChange}
                    onDurationChange ={this.handleDurationChange}
                    />)}
                </div>
            </div>
        );
    }
}
 
export default WeekView;