import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import HeroFavorite from '../components/HeroFavorite'

function Favorite(props) {
  // const dispatch = useDispatch()
  const data = useSelector(state => state.favorite)
  console.log(data, 'ini halaman di favorite')



  return (
    <>
      <h1>Ini Halaman Favorite</h1>
      <div className="container">
        <div className="row mb-2 mt-2">

          {
            data.map((hero) => (
            <HeroFavorite key={hero.id} heroes={hero} />
          ))
          
          }


        </div>
      </div>
    </>
  )
}
export default Favorite
