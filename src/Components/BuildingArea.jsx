import React, { Component } from 'react';


import './BuildingArea.scss';

const current = new Date();
const month = current.toLocaleString('en-US', { month: 'short'});
let date = current.getDate();
let dateMonth = `${date} ${month}`;
let fullDay = current.toLocaleString('en-US', {weekday: 'long'});

class BuildingArea extends Component {
    state = { 

     } 
    render() { 
        return (
            <div className="border-outline ">
                <div className='test-area'>

                </div>

            </div>
        );
    }
}

export default BuildingArea;