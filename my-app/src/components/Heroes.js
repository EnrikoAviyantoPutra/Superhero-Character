import React from 'react'
// import Detail from '../views/Details'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addHeroFavorite } from '../store/action'
import Swal from 'sweetalert2'


export default function Heroes(data) {
  // console.log(data, '<<<<<<<<<<<<<<<<<<<<ini hero')
  const hero = data.heroes
  const history = useHistory()
  const dispatch = useDispatch()
  const dataFavorite = useSelector(state => state.favorite)

  const getDetail = (id) => {
    // console.log(id, '<<<<<<<<<<<')
    history.push(`/detail/${id}`)

  }
  const addFavorite = (hero) => {
    console.log(dataFavorite, '<<<<<<cek data faovirite di store');
    console.log(hero, 'XXXXXXXXXXXXini di data yang mau di add di favorite di halaman home')
    for (let i = 0; i < dataFavorite.length; i++) {
      if (dataFavorite[i].id === hero.id) {
        return Swal.fire({
          icon: 'error',
          title:'Already Added to Favorite' 
        })
      }
    }
    dispatch(addHeroFavorite(hero))
    Swal.fire ({
      icon: 'success',
      title: 'Added to Favorite'
    })
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
              getDetail(hero.id)
            }
            className="btn btn-primary">Detail</button>
          <button
            onClick={() =>
              // <Detail id={hero.id} /> 
              // console.log(hero.id, 'ini button click')
              addFavorite(hero)
            }
            className="btn btn-info text-white ml-2">Favorite</button>
        </div>
      </div>
    </div>

  )
}

