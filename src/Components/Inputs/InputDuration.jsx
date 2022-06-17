import React, { Component } from 'react';

class InputDuration extends Component {
    state = { duration: '' }
    
    handleChange = (e) => {
        this.setState({ duration: e.target.value})
    }

    render() { 
        return (
            <div className=''>
            <form>
            <span className=''>Duration:</span><br/>
                <input type='text'
                value={this.state.duration}
                placeholder='Planned Duration'
                onChange={this.handleChange} />
            </form>
            <span>{this.state.duration}</span>
            </div>
        );
    }
}
 
export default InputDuration;