import React, { Component } from 'react'
// React: Create a Controlled Form
// The last challenge showed that React can control the internal state for certain elements like input and textarea, which makes them controlled components. This applies to other form elements as well, including the regular HTML form element.

// We've a button which submits the form. You can see it has the type set to submit indicating it is the button controlling the form. Add the input element in the form and set its value and onChange() attributes. Then complete the handleSubmit method so that it sets the component state property submit to the current input value in the local state.

// Note:  You also must call event.preventDefault() in the submit handler, to prevent the default form submit behavior which will refresh the web page.

// Finally, create an h1 tag after the form which renders the submit value from the component's state. You can then type in the form and click the button (or press enter), and you should see your input rendered to the page.

export class ControlledForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          input: '',
          submit: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
        this.setState({
          input: event.target.value
        });
      }
      handleSubmit(event) {
        // change code below this line
        event.preventDefault()
    this.setState({
      submit:this.state.input
    })
        // change code above this line
      }
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      { /* change code below this line */ }
<input value={this.state.input} onChange={this.handleChange}/>
      { /* change code above this line */ }
      <button type='submit'>Submit!</button>
    </form>
    { /* change code below this line */ }
<h1>{this.state.submit}</h1>
      </div>
    )
  }
}

export default ControlledForm
