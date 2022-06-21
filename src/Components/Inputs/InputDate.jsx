import React, { Component } from 'react';

class InputDate extends Component {
    state = { 
        date:''
     } 

     handleChange = (e) => {
        this.setState({ date: e.target.value})
    }

    render() { 
        return (
            <div className=''>
            <form>
                <span className=''>Date:</span><br/>
                <input type='date'
                value={this.state.date}
                placeholder=''
                onChange={this.handleChange} />
            </form>
            <span>{this.state.date}</span>
            </div>
        );
    }
}
 
export default InputDate;