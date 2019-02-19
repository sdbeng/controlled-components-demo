import React, { Component } from 'react'

export class UserInput extends Component {
  render() {
    return (
      <div>
        <h1>UserInput</h1>
        <form>
        <label>for user input</label>
        <input 
        value={this.props.username}
        type="text"
        onChange={this.props.onChange}
        />
        </form>
      </div>
    )
  }
}

export default UserInput
