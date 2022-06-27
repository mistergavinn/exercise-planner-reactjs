import React, { Component } from 'react';
import DayView from './DayView';
import WeeklyStats from './WeeklyStats';

class WeekView extends Component {

    render() { 
        return (
            <div className="border-outline ">
                <div className="col-9">
                    <div className='test-area'>
                        {this.props.dayViews.map(dayView => 
                        <DayView key={dayView.id} 
                        dayView = {dayView} 
                        onDistChange={(dayId, distance) => this.props.onDistChange(dayId, distance)}
                        onDurationChange={(dayId, duration) => this.props.onDurationChange(dayId, duration)}
                        onNotesChange={(dayId, notes) => this.props.onNotesChange(dayId, notes)}
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