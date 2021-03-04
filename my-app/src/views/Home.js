import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import Heroes from '../components/Heroes'
import { getSuperheroes } from '../store/action'

function Home() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.superheroes.superheroes)
  const loading = useSelector (state => state.superheroes.loading)
  
  useEffect(() => {
    
    dispatch(getSuperheroes())
  }, [])
  
  console.log(data, '>>>>>>>>>>>>>ini s ebelum ditaruh di html')
  console.log(loading, '<<<<<<<<<<<<<<<<<<ini status loading' )

  if (loading) return <div className='container'>
    <div className='d-flex flex-col justify-content-center align-items-center'>

      <lottie-player src="https://assets10.lottiefiles.com/datafiles/wk8EJuzzGk9yWa1/data.json" background="transparent" speed="1" style={{ 'width': '300px', 'height': '300px' }} loop autoplay>LOADING....</lottie-player><br></br>
    </div>

  </div>

  return (
    <div>

      <div className="container">
        <div className="row mb-2 mt-2">
          {
              data.map((hero) => (
                <Heroes key={hero.id} heroes={hero} />
              ))
          }

        </div>
      </div>
    </div>
  )

}
export default Home
