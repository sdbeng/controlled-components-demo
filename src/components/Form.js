import React, { Component } from "react";

// Handling Multiple Inputs
// When you need to handle multiple controlled input elements, you can add a name attribute to each element and let the handler function choose what to do based on the value of event.target.name.

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };

  onHandleChange = (e) => {
    // console.log('e.target.name:', e.target.name);
    // console.log('e.target.value:', e.target.value);
    // const value = e.target.value
    // const name = e.target.name
    // or
    const {name, value} = e.target
    this.setState({
      [name]:value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log('username submitted', this.state.username);
    console.log('password submitted', this.state.password);

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Username: {this.state.username}</p>
        <p>Password: {this.state.password}</p>

        <input
          type="text"
          name='username'
          placeholder="Username"
          value={this.state.username}         
          onChange={this.onHandleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.onHandleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
