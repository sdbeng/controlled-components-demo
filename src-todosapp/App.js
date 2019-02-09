import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(){
    super()
    this.state = {todos:[], text:''}
    this.handleChange = this.handleChange.bind(this)
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
  }
  handleChange(e){
    this.setState({
      text:e.target.value
    })
  }
  onHandleSubmit(e){
    e.preventDefault()
    if(!this.state.text.length){
      return;
    }
    // create object
    const newTodo = {
      text:this.state.text,
      id:Date.now()
    }
    this.setState(state => ({
      todos:state.todos.concat(newTodo),
      // todos:{...state.todos, newTodo},//check spread syntax
      text:''
    }))
  }

  render() {
    return (
      <div className="App">
      <TodoList todos={this.state.todos} />
      <form onSubmit={this.onHandleSubmit} >
      <label htmlFor="newitem">Start your todo list:</label>
      <input
      id="newitem"
      onChange={this.handleChange}
      value={this.state.text}
      />
      <button>Add #{this.state.todos.length+1} </button>
      </form>
         
      </div>
    );
  }
}

export default App;
