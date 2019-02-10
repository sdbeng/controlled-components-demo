import React, { Component } from 'react'

export class ControlledInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
          input: ''
        };
        // change code below this line
    this.handleChange = this.handleChange.bind(this)
        // change code above this line
      }
      // change code below this line
    handleChange(event){
    this.setState({
      input:event.target.value
    })
    }
  render() {
    return (
      <div>
      <input value={this.state.input} onChange={this.handleChange}/>
      { /* change code above this line */}
      <h4>Controlled Input:</h4>
      <p>{this.state.input}</p>
    
      </div>
    )
  }
}

export default ControlledInput
