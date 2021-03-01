import React from 'react'
import Cars from './Cars'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cars: []

    }
  }
  componentDidMount() {
    console.log('component did mount')
    fetch('https://private-anon-23f98508f6-carsapi1.apiary-mock.com/cars')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      this.setState({
        cars: data
      })
    })
  }
  render() {
    return (
      <div>
      <pre>{JSON.stringify(this.state.cars)}</pre>
      <div className="container">
        <div className="row mb-2 mt-2">
          {this.state.cars.map((car) => (
            <Cars key={car.id} carsModel={car} />
          ))
          }

        </div>

      </div>

    </div>


    )

  }

}

export default Home