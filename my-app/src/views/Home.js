import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import Heroes from '../components/Heroes'
import { fetchDataSuperheroes } from '../store/action'


function Home() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.superheroes)
  const test = useSelector(state => state.test)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://akabab.github.io/superhero-api/api/all.json')
      .then(res => res.json())
      .then(data => {
        // console.log(data, '<<<<<<<<<<ini setelah fetch')
        dispatch(fetchDataSuperheroes(data))
      })
      .finally(_ => {
        setTimeout(() => {
          setLoading(false)
        }, 2000)
      })
  }, [])

  console.log(data, '>>>>>>>>>>>>>ini sebelum ditaruh di html');

  return (
    <div>
      <h1>{test}</h1>

      <div className="container">
        <div className="row mb-2 mt-2">
          {
            loading ? <lottie-player src="https://assets10.lottiefiles.com/datafiles/wk8EJuzzGk9yWa1/data.json" background="transparent" speed="1" style={{ 'width': '300px', 'height': '300px' }} loop autoplay>LOADING....</lottie-player> :
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
