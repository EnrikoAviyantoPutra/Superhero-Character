import React from 'react'
import Cars from './Cars'
import NewTodo from './newJediTodos'
import Home from './Home'

class App extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   counter: 100,
    //   name: 'Luke Skywalker',
    //   todos: ['Meditate', 'Force Training', 'Lighsaber Training', 'Phscical training ']

    // }
  }


  // lightUp = () => {
  //   console.log('Sweessshhh')
  //   this.setState({
  //     counter: this.state.counter + 1
  //   })
  // }
  // lightOff = () => {
  //   console.log('SIuuuupppp')
  //   this.setState({
  //     counter: this.state.counter - 1
  //   })
  // }
  // addJediTodo = (newTodo) => {
  //   const existingTodos = [...this.state.todos, newTodo]


  //   // const existingTodos = this.state.todos
  //   // existingTodos.push(this.state.newTodo)

  //   this.setState({
  //     todos: existingTodos
  //   })

  // }
  // addTodo = () => {
  //   this.props.onAddTodo(this.state.newTodo)
  // }

  // componentDidMount() {
  //   console.log('component did mount')
  //   fetch('https://private-anon-23f98508f6-carsapi1.apiary-mock.com/cars')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data)
  //       this.setState({
  //         cars: data
  //       })
  //     })
  // }
  render() {
    return (
      <div>
        {/* <pre>{JSON.stringify(this.state.cars)}</pre> */}
        <Home />
        {/* <div className="container">
          <div className="row mb-2 mt-2">
            {this.state.cars.map((car) => (
              <Cars key={car.id} carsModel={car} />
            ))
            }

          </div> */}

        </div>




      /* <h1>{this.state.name}</h1><br/>
        <button onClick={this.lightUp}>Light Me Up</button>
        <h1>{this.state.counter}</h1>
        <button onClick = {this.lightOff}>Off Mode</button> */
    )
  }
}

export default App