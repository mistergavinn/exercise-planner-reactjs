import React, { Component } from 'react';

import './InputNotes.scss'

class InputNotes extends Component {
    state = { notes: '' } 

    handleChange = (e) => {
        this.setState({ notes: e.target.value})
    }

    render() { 
        return (
            <div>
            <form>
                <span className=''>Notes:</span><br/>
                <textarea
                    rows={6} 
                    value= {this.state.notes} 
                    onChange= {this.handleChange}
                    placeholder="Details..." />
            </form>
            <span>{this.state.notes}</span>
            </div>
        );
    }
}
 
export default InputNotes;