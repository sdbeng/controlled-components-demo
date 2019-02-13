import React, { Component } from 'react'

export class InlineStyles extends Component {
  render() {
    return (
        <div style={styles}>Style Me!</div>
      );
  }
}

const styles = {
    color:'purple',
    fontSize:40,
    border:'2px solid purple'
}

export default InlineStyles
