import React, { Component } from 'react';
import WeeklyStats from './WeeklyStats';

class StatDashboard extends Component {
    state = {  } 
    render() { 
        return (
          <div>
            <h3>Statistics Dashboard area</h3>
            <div className="row border-outline">
              <div className="col-4 border-outline">
                MISC COMPONENT
              </div>
              <div className="col-4 border-outline">
                Pace/Power/HR zones component
              </div>
              <div className="col-4 border-outline">
                <WeeklyStats />
              </div>
            </div>
          </div>
        );
    }
}
 
export default StatDashboard;