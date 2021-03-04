import React from 'react'

import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addHeroFavorite } from '../store/action'
import { useEffect } from 'react'
import { getDetailSuperhero } from '../store/action'
import Swal from 'sweetalert2'

function Detail(props) {
  const { id } = useParams()

  const dispatch = useDispatch()
  const dataFavorite = useSelector(state => state.favorite.favorite)
  const data = useSelector(state => state.superhero.superhero)
  const loading = useSelector(state => state.superhero.loading)
  // const [loading, setLoading] = useState(false)

  useEffect(() => {
    dispatch(getDetailSuperhero(id))

  }, [])
  console.log(loading, '========================ini loading di detail')
  // console.log(data,'===================================kalau ini data');
  const addFavorite = (hero) => {
    console.log(hero, '<<<<<<<<<<<<<<<<<<<<<ini di data yang mau di add di favorite')
    for (let i = 0; i < dataFavorite.length; i++) {
      if (dataFavorite[i].id === hero.id) {
        return Swal.fire({
          icon: 'error',
          title: 'Already Added to Favorite'
        })
      }
    }
    dispatch(addHeroFavorite(hero))
    Swal.fire({
      icon: 'success',
      title: 'Added to Favorite'
    })
  }

  if (loading) return <div className='container'>
    <div className='d-flex flex-col justify-content-center align-items-center'>

      <lottie-player src="https://assets10.lottiefiles.com/datafiles/wk8EJuzzGk9yWa1/data.json" background="transparent" speed="1" style={{ 'width': '300px', 'height': '300px' }} loop autoplay>LOADING....</lottie-player><br></br>
    </div>

  </div>


  if (data.name) {
    return (
      <div className='container'>
        <h1 className='d-flex flex-row justify-content-center'>Character Preview</h1><br />
        <div className='d-flex row bg-dark shadow'>
          <div className='col-5 ' style={{padding: '30px'}}>
          {/* <br></br> */}
            <img src={data.images.md} alt="" style={{ width: '400px' }} />
          </div>
          <div className='col-7 text-white' style={{padding: '10px'}}>
            <div className="col-7">
              <h4> {data.name} </h4>
              <hr></hr>
              <ul>
                <li>Race : {data.appearance.race} </li>
                <li>Gender : {data.appearance.gender}</li>
              </ul>
              <br />
              <h4> Biography </h4>
              <hr></hr>
              <ul>
                <li>Fullname : {data.biography.fullname} </li>
                <li>Alias : {data.biography.aliases[0]}</li>
                <li>Aligment : {data.biography.alignment}</li>
                <li>Place of Birth : {data.biography.placeOfBirth}</li>
                <li>First Appearance : {data.biography.firstAppearance}</li>
                <li>Publisher : {data.biography.publisher}</li>
              </ul>
              <br />
              <h5> Powerstats </h5>
              <hr></hr>
              <ul>
                <li>Combat : {data.powerstats.combat} </li>
                <li>Power : {data.powerstats.power} </li>
                <li>Strength : {data.powerstats.strength}</li>
                <li>Speed : {data.powerstats.speed}</li>
                <li>Durability : {data.powerstats.durability}</li>
                <li>Intelligence : {data.powerstats.intelligence}</li>
              </ul>
              <button
                onClick={() =>
                  // <Detail id={hero.id} /> 
                  // console.log(hero.id, 'ini button click')
                  addFavorite(data)
                }
                className="btn btn-primary">Add to Favorite</button>
            </div>


            {/* <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text"> Race: {data.appearance.race}</p>
                    <p className="card-text"> Gender: {data.appearance.gender}</p>
                    <p className="card-text"> Aligment: {data.biography.alignment} guy</p>
                    <p className="card-text"> Powerstat:</p>
                    <ul style={{ listStyle: 'none' }}>
                      <li>Strength: {data.powerstats.strength}</li>
                      <li>Combat: {data.powerstats.combat}</li>
                      <li>Power: {data.powerstats.power}</li>
                      <li>Speed: {data.powerstats.speed}</li>
                      <li>intelligence: {data.powerstats.intelligence}</li>
                    </ul>

                  </div>
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    )
  } else {
    return null
  }

}
export default Detail
