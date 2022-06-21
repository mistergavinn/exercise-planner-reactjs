import React, { Component } from 'react';

class InputDistance extends Component {
    state = { distance: this.props.distance}
    
    handleChange =(e) => {
        this.setState({ distance: e.target.value});
        this.props.onDistChange(e.target.value);
    }

    render() { 
        console.log("Input distance", this.state.distance);
        return (
            <div className=''>
            <form>
                <span className=''>Distance:</span><br/>
                <input type='text'
                defaultValue={this.props.distance}
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