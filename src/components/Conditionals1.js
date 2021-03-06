/* React: Render with an If/Else Condition
Another application of using JavaScript to control your rendered view is to tie the elements that are rendered to a condition. When the condition is true, one view renders. When it's false, it's a different view. You can do this with a standard if/else statement in the render() method of a React component.

 */

import React, { Component } from 'react'

export class Conditionals1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        }
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
        this.setState({
            display: !this.state.display
        });
    }
    render() {
        if (this.state.display) {
            return (
                <div>
                    <button
                        onClick={this.toggleDisplay}>Toggle Display
               </button>
                    <h1>Displayed!</h1>
                </div>
            )
        } else {
            return (
                <div>
                    <button
                        onClick={this.toggleDisplay}>Toggle Display
               </button>
                </div>
            )
        }
    }
}

export default Conditionals1
