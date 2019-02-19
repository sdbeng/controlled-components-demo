import React from 'react'

function UserInput (props) {
  
    return (
      <div>
        <h1>UserInput</h1>
        <form>
        <label
        style={{margin:10}}
        >user input</label>
        <input 
        value={props.username}
        type="text"
        onChange={props.onChange}
        />
        <button
       style={{margin:15, padding:10, color:'#387', borderRadius:19}}
        >toggleDiv</button>
        </form>
      </div>
    )
  
}

export default UserInput
