import React, { Component } from 'react'

class TodoList extends Component {
    render() {
        console.log('this.props[TodoList]',this.props)
        return (
            <div>
                <ul>
                    {this.props.todos.map((todo) => {
                        return <li key={todo.id}> {todo.text} </li>
                    })}
                </ul>
            </div>
        )
    }
}
export default TodoList