/* React: Optimize Re-Renders with shouldComponentUpdate
So far, if any component receives new state or new props, it re-renders itself and all its children. This is usually okay. But React provides a lifecycle method you can call when child components receive new state or props, and declare specifically if the components should update or not. The method is shouldComponentUpdate(), and it takes nextProps and nextState as parameters.

/

*/
import React from 'react

class OnlyEvens extends React.Component {
    constructor(props) {
      super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
      console.log('Should I update?');
       // change code below this line
       if(this.props.value % 2 === 0){
         console.log('OnlyEvens LOG this.props.value', this.props.value)
         return true;
       } 
      return false
       // change code above this line
    }
    componentWillReceiveProps(nextProps) {
      console.log('Receiving new props...');
    }
    componentDidUpdate() {
      console.log('Component re-rendered.');
    }
    render() {
      return <h1>{this.props.value}</h1>
    }
  };
  
  class Controller extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 0
      };
      this.addValue = this.addValue.bind(this);
    }
    addValue() {
      this.setState({
        value: this.state.value + 1
      });
    }
    render() {
      return (
        <div>
          <button onClick={this.addValue}>Add</button>
          <OnlyEvens value={this.state.value}/>
        </div>
      );
    }
  };
