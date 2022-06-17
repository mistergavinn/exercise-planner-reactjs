import React, { Component } from 'react';

class InputDistance extends Component {
    state = { distance: ''}
    
    handleChange =(e) => {
        this.setState({ distance: e.target.value})
    }

    render() { 
        return (
            <div className=''>
            <form>
                <span className=''>Distance:</span><br/>
                <input type='text'
                value={this.state.distance}
                placeholder='Planned Distance'
                onChange={this.handleChange} />
            </form>
            <span>{this.state.distance}</span>
            </div>
        );
    }
}
 
export default InputDistance;