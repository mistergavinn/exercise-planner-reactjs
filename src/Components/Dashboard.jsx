import React, { Component } from 'react';
import StatDashboard from './Displays/StatDashboard';
import WeekView from './Displays/WeekView';

class Dashboard extends Component {
    state = {  } 
    render() { 
        return (
          <div>
            <header>
              <h1 className="p-1">Exercise Planner Development</h1>
            </header>
            <div className="col-12 border-outline">
              <StatDashboard />
            </div>

            <div className="row border-outline">
              <div className="col-12 week-view-container border-outline">
                <WeekView />
              </div>
            </div>
          </div>
        );
    }
}
 
export default Dashboard;