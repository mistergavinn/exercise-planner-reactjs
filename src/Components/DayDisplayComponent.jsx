import React, { Component } from 'react';
import './DayDisplayComponent.scss';

const days = [
    { key:1, value: 'Monday'},
    { key:2, value: 'Tuesday'},
    { key:3, value: 'Wednesday'},
    { key:4, value: 'Thursday'},
    { key:5, value: 'Friday'},
    { ley:6, value: 'Saturday'},
    { key:7, value: 'Sunday'}
    ];

class DayDisplay extends Component {

    render() { 
        return (
            <div className='container'>
                <div className='row' wrap='nowrap'>
                {
                    React.Children.toArray(
                        days.map(({key,value}) => 
                        <div className='col border-outline'>
                            <h5> {value} </h5>
                        </div>)
                    )
                }
                </div>
            </div>
        );
    }
}
 
export default DayDisplay;