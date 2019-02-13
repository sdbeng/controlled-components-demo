/* React: Manage Updates with Lifecycle Methods
Another lifecycle method is componentWillReceiveProps() which is called whenever a component is receiving new props. This method receives the new props as an argument, which is usually written as nextProps. You can use this argument and compare with this.props and perform actions before the component updates. For example, you may call setState() locally before the update is processed.

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
    console.log(this.props)
    console.log(nextProps)
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