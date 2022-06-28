import React, { Component } from 'react';
import WeeklyStats from './WeeklyStats';

class StatDashboard extends Component {
  state = {  } 
  componentDidMount() {
    console.log("did mount StatDashboard");
    console.log('props',this.props);
  }
  componentDidUpdate() {
    console.log("did update StatDashboard");
    console.log('props',this.props);
  }
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
                <WeeklyStats dayViews={this.props.dayViews}/>
              </div>
            </div>
          </div>
        );
    }
}
 
export default StatDashboard;