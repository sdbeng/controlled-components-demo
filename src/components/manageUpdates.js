/* React: Manage Updates with Lifecycle Methods
Another lifecycle method is componentWillReceiveProps() which is called whenever a component is receiving new props. This method receives the new props as an argument, which is usually written as nextProps. You can use this argument and compare with this.props and perform actions before the component updates. For example, you may call setState() locally before the update is processed.

Another method is componentDidUpdate(), and is called immediately after a component re-renders. Note that rendering and mounting are considered different things in the component lifecycle. When a page first loads, all components are mounted and this is where methods like componentWillMount() and componentDidMount() are called. After this, as state changes, components re-render themselves. The next challenge covers this in more detail.

Next, add componentDidUpdate() in the Dialog component, and log a statement that says the component has updated. This method works similar to componentWillUpdate(), which is provided for you. Now click the button to change the message and watch your browser console. The order of the console statements show the order the methods are called.

Note: You'll need to write the lifecycle methods as normal functions and not as arrow functions to pass the tests (there is also no advantage to writing lifecycle methods as arrow functions).
*/

import React from 'react'

class Dialog extends React.Component {
    constructor(props) {
      super(props);
    }
    componentWillUpdate() {
      console.log('Component is about to update...');
    }
    // change code below this line
  componentWillReceiveProps(nextProps){
    console.log('this.props',this.props)
    console.log('nextProps',nextProps)
  }
  componentDidUpdate(){
    console.log('The component has updated')
  }
    // change code above this line
    render() {
      return <h1>{this.props.message}</h1>
    }
  };
  
  class Controller extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: 'First Message'
      };
      this.changeMessage = this.changeMessage.bind(this);
    }
    changeMessage() {
      this.setState({
        message: 'Second Message'
      });
    }
    render() {
      return (
        <div>
          <button onClick={this.changeMessage}>Update</button>
          <Dialog message={this.state.message}/>
        </div>
      );
    }
  };

  /* This is what I see in the console!! as i trigger the button
this.props {message: "First Message"}
frame.js:90 nextProps {message: "Second Message"}
frame.js:90 Component is about to update...
frame.js:90 Component has updated...
*/