import React, { Component } from 'react'

export class Ex1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: 'CamperBot'
        }
      }
  render() {
    return (
      <div>
      <Navbar name={this.state.name} />
      </div>
    )
  }
}

export default Ex1

export class Navbar extends Component {
    
      render() {
        return (
        <div>
          <h1>Hello, my name is: {this.props.name} </h1>
        </div>
        );
      }
}

