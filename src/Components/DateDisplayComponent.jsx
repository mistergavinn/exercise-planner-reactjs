import React, { Component } from 'react';


const current = new Date();
const month = current.toLocaleString('en-US', { month: 'short'});
let date = `${current.getDate()}`;
let dateMonth = `${date} ${month}`;

class DateDisplay extends Component {

    state = {  } 
    render() { 
        return (
            <div>
                {dateMonth}
            </div>
        );
    }
}
 
export default DateDisplay;