import React, { Component } from 'react'

class Cars extends Component {
  constructor(props) {
    super(props)
    }
  render() {
    const Car = this.props.carsModel
    return (
          <div className="col">
            <div className="card mt-3" style={{width: '14rem'}}>
              <img src={Car.img_url} className="card-img-top" alt=""  style= {{height: '50%'}}/>
              <div className="card-body">
              <h5 className="card-title">{Car.make} {Car.model}</h5>
              <p className="card-text">Price: ${Car.price}</p>
              <a href="" className="btn btn-primary">Detail</a>
              </div>
            </div>
          </div>
    )
  }
}

export default Cars