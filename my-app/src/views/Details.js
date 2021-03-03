import React from 'react'

import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDetailSuperhero, addHeroFavorite } from '../store/action'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

function Detail(props) {
  const { id } = useParams()
  // console.log(id,'<<<<<<<<<<<<<<<<<<ini di halaman detail' );
  // const { data, loading } = fetchData(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
  // console.log(data, '>>>>>>>>>>>>>>>>>>>>>>>ini data detail')
  const dispatch = useDispatch()
  const dataFavorite = useSelector(state => state.favorite)
  const data = useSelector(state => state.superhero)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
      .then(res => res.json())
      .then(data => {
        // console.log(data, '<<<<<<<<<<ini setelah fetch')
        dispatch(fetchDetailSuperhero(data))
      })
      .finally(_ => {
        setTimeout(() => {
          setLoading(false)
        }, 2000)
      })
  }, [])


  const addFavorite = (hero) => {
    console.log(hero, '<<<<<<<<<<<<<<<<<<<<<ini di data yang mau di add di favorite')
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
  if (data.name) {
    return (
      <>
        <h1>Character Preview</h1><br />
        {/* <h2>{data.name}</h2> */}

        {loading ? <lottie-player src="https://assets10.lottiefiles.com/datafiles/wk8EJuzzGk9yWa1/data.json" background="transparent" speed="1" style={{ 'width': '300px', 'height': '300px' }} loop autoplay>LOADING....</lottie-player> :
          <div className="">
            <div>

            </div>

            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={data.images.sm} alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    {/* <p className="card-text"> True Name: {data.biography.fullname}</p> */}
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
                    <button
                      onClick={() =>
                        // <Detail id={hero.id} /> 
                        // console.log(hero.id, 'ini button click')
                        addFavorite(data)
                      }
                      className="btn btn-primary">Add to Favorite</button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </>
    )
  } else {
    return null
  }

}
export default Detail
