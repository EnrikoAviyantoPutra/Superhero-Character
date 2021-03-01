import React, { Component } from 'react'

class NewTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: ''
    }
  }
  addTodo = (e) => {
    this.setState({
      newTodo: e.target.value
    })

  }
  render() {
    return (
      <div>

        <input type='text' onChange={this.addTodo} />
        <button onClick={this.addJediTodo}>Jedi Todo</button>
      </div>
    )
  }
}

export default NewTodo