import React, { Component } from "react";
// import Form from "./components/Form";
// import MyComponent from './components/MyComponent'
// import EventListener from "./components/EventListener";
// import Ternary from "./components/Ternary";
import './App.css'

// import Frameworks from "./components/Frameworks";
// import FilterUsers from "./components/FilterUsers";
// import RandomQuote from "./components/RandomQuote";
// import UserInput from "./components/UserInput";
// import UserOutput from "./components/UserOutput";

// class App extends Component {
//   state = {
//     username: 'Francis',
//     showDiv:false
//   }
//   onChangeHandler = (e) => {
//     this.setState({
//       username: e.target.value
//     })
//   }
//   onToggle = () => {
//     this.setState({
//       showDiv:!this.state.showDiv
//     })
//   }
//   deletePersonHandler = (personIndex) => {
//     // const persons = this.state.persons.slice();
//     const persons = [...this.state.persons];
//     persons.splice(personIndex, 1);
//     this.setState({persons: persons});
//   }
//   render() {
//     return (
//       <div className="msgBox">
//         <div>
//           <UserInput 
//           onChange={this.onChangeHandler}
//            />
//         </div>
//         <button
//         style={{margin:10, padding:5, color:'#387', borderRadius:9}}
//       onClick={this.onToggle}
//          >toggleDiv</button>
//         {this.state.showDiv ? 
//           <div className="msg__content">
//           <UserOutput 
//           username={this.state.username} 
//            />
//         </div> : null
//         }
        
//       </div>)
//   }
// }

// export default App;
// <div className="msgBox">
//   <RandomQuote />
//   </div>)

// Lifecycle in plain sight
import LifecycleComponent from "./components/LifecycleComponent";

export class App extends Component {
  state={
    points:0
  }
  static getDerivedPropsFromState(props, state){
    return {
      points:61
    }
  }
  componentDidMount(){
    console.log('calling CDM...')
  }
  render() {
    console.log('calling render...')
    return (
      <div>
        <LifecycleComponent />
        <h3>Score: {this.state.points} </h3>
      </div>
    )
  }
}

export default App
