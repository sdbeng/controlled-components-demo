import React from 'react'
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility: false
      };
      // change code below this line
  this.toggleVisibility = this.toggleVisibility.bind(this)
      // change code above this line
    }
    // change code below this line
    toggleVisibility(){
        this.setState({
          visibility:!this.state.visibility
        })
        console.log('LOG STATE:', this.state.visibility)
        }
    // change code above this line
    render() {
      if (this.state.visibility) {
        return (
          <div>
            <button 
            className="btn btn-primary"
            onClick={this.toggleVisibility}>Click Me</button>
            <h1>Now you see me!</h1>
          </div>
        );
      } else {
        return (
          <div className="container">
          <h2>Visibility toggle</h2>
            <button onClick={this.toggleVisibility}>Click Me</button>
          </div>
        );
      }
    }
  };
  export default MyComponent