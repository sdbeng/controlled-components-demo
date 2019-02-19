import React, { Component } from 'react'

export class UserInput extends Component {
  render() {
    return (
      <div>
        <h1>UserInput</h1>
        <form>
        <label>for user input</label>
        <input 
        type="text"
        onChange={this.onHandleChange}
        />
        </form>
      </div>
    )
  }
}

export default UserInput
