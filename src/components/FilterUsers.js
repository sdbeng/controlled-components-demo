import React, { Component } from 'react'

export class FilterUsers extends Component {
    state = {
        users: [
            {
              username: 'Jeff',
              online: true
            },
            {
              username: 'Alan',
              online: false
            },
            {
              username: 'Mary',
              online: true
            },
            {
              username: 'Jim',
              online: false
            },
            {
              username: 'Sara',
              online: true
            },
            {
              username: 'Laura',
              online: true
            }
          ]
    }
  render() {
    // const usersOnline = null; // change code here
    const usersOnline = this.state.users.filter(user => user.online); 
    console.log('usersOnline:',usersOnline)

    // const renderOnline = null; // change code here
    // const renderOnline = usersOnline.map((item) => (
    //     <li key={item.username}>{item.username}</li>
    // ))

    // or use an explicit return
    const renderOnline = usersOnline.map(f => {
        return <li key={f.username}>{f.username}</li>
      })

    return (
      <div>
      <h1>Current Online Users:</h1>
      <ul>
        {renderOnline}
      </ul>
      </div>
    )
  }
}

export default FilterUsers
