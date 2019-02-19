import React from 'react'
import './userOutput.css'

function UserOutput(props) {
  
    return (
      <div>
        <p>Hello {props.username} </p>
        <p>Hello {props.username}</p>
        <p>Hello {props.username}</p>
                       
      </div>
    )
  
}

export default UserOutput
