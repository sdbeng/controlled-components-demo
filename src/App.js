import React from "react";
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

function App() {
  return (
  <div className="msgBox">
  <div>
  <UserInput />
  </div>
  <div className="msg__content">
  <UserOutput />
  </div>
  
  </div>)

}

export default App;
// <div className="msgBox">
//   <RandomQuote />
//   </div>)