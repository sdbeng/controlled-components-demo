// Observe how the data flows between the components and how the single source of truth remains the state of the parent component. Admittedly, this example is a bit contrived, but should serve to illustrate how data and callbacks can be passed between React components.
import React, { Component } from 'react'

export class Callbacks extends Component {
    constructor(props) {
        super(props);
        this.state = {
          inputValue: ''
        }
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(event) {
        this.setState({
          inputValue: event.target.value
        });
      }
      render() {
        return (
           <div>
            { /* change code below this line */ }
    <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
    <RenderInput input={this.state.inputValue}/>
            { /* change code above this line */ }
           </div>
        );
      }
}

export default Callbacks

class GetInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>Get Input:</h3>
          <input
            value={this.props.input}
            onChange={this.props.handleChange}/>
        </div>
      );
    }
  };
  
  class RenderInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>Input Render:</h3>
          <p>{this.props.input}</p>
        </div>
      );
    }
  };
