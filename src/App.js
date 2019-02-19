import React, { Component } from "react";
// import Form from "./components/Form";
// import MyComponent from './components/MyComponent'
// import EventListener from "./components/EventListener";
// import Ternary from "./components/Ternary";
import './App.css'

// import Frameworks from "./components/Frameworks";
// import FilterUsers from "./components/FilterUsers";
// import RandomQuote from "./components/RandomQuote";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

class App extends Component {
  state = {
    username: 'Francis'
  }
  onChangeHandler = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  render() {
    return (
      <div className="msgBox">
      
        <div>
          <UserInput onChange={this.onChangeHandler} />
        </div>
        <div className="msg__content">
          <UserOutput username={this.state.username} />
        </div>
      </div>)
  }
}

export default App;
// <div className="msgBox">
//   <RandomQuote />
//   </div>)