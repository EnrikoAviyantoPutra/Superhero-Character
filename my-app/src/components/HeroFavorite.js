import React from 'react'
// import Detail from '../views/Details'
import {useHistory} from 'react-router-dom'

export default function Heroes(data) {
  console.log(data, '<<<<<<<<<<<<<<<<<<<<ini hero di favorite')
  const hero = data.heroes
  const history = useHistory()

 const  getDetail = (id) =>  {
    // console.log(id, '<<<<<<<<<<<')
    history.push(`/detail/${id}`)

  }


  return (
  // const Hero = this.props.heroes
  
    <div className="col">
      <div className="card mt-3" style={{ width: '14rem' }}>
        <img src={hero.images.sm} className="card-img-top" alt="" style={{ height: '50%' }} />
        <div className="card-body">
          <h5 className="card-title">{hero.name}</h5>
          <p className="card-text">Race: {hero.appearance.race}</p>
          <p className="card-text">Publisher: {hero.biography.publisher}</p>
          <button 
          onClick={() => 
          // <Detail id={hero.id} /> 
          // console.log(hero.id, 'ini button click')
          getDetail (hero.id)
          } 
          className="btn btn-primary">Detail</button>
        </div>
      </div>
    </div>

  )
}

