import React, { Component } from 'react';
import DayView from './DayView';
import WeeklyStats from './WeeklyStats';

class WeekView extends Component {
    state = { 
        dayViews: [
            { id: 1, day: 'Monday', adddate: 0, distance: 0, duration:0, notes:''}, 
            { id: 2, day: 'Tuesday', adddate: 1, distance: 0, duration:0, notes:''},  
            { id: 3, day: 'Wednesday', adddate: 2, distance: 0, duration:0, notes:''},
            { id: 4, day: 'Thursday', adddate: 3, distance: 0, duration:0, notes:''},
            { id: 5, day: 'Friday', adddate: 4, distance: 0, duration:0, notes:''},
            { id: 6, day: 'Saturday', adddate: 5, distance: 0, duration:0, notes:''},
            { id: 7, day: 'Sunday', adddate: 6, distance: 0, duration:0, notes:''}  
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
     handleNotesChange = (dayId, notes) => {
        const dayViews = [...this.state.dayViews];
        const index = dayViews.map(c => c.id).indexOf(dayId);
        dayViews[index].notes = notes;
        this.setState({dayViews});
     }

    render() { 
        return (
            <div className="border-outline ">
                <div className="col-9">
                    <div className='test-area'>
                        {this.state.dayViews.map(dayView => 
                        <DayView key={dayView.id} 
                        dayView = {dayView} 
                        onDistChange ={this.handleDistChange}
                        onDurationChange ={this.handleDurationChange}
                        onNotesChange ={this.handleNotesChange}
                        />)}
                    </div>
                </div>
                <div className="col-3">
                    <WeeklyStats />
                </div>
            </div>
        );
    }
}
 
export default WeekView;