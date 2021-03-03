import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import HeroFavorite from '../components/HeroFavorite'

function Favorite(props) {
  // const dispatch = useDispatch()
  const data = useSelector(state => state.favorite)
  console.log(data, 'ini halaman di favorite')

const checkLength = () =>{
  if (data.length === 0) {
    return <h1> You Don't Have Any Favorite</h1>
    
  }
}

  return (
    <>
    {checkLength()}
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
