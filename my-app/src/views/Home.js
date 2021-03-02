import React from 'react'
import Heroes from '../components/Heroes'
import fetchData from '../hooks/fetchData'

function Home() {
  // const [superhero, setSuperheroes] = useState([])
  const { data, error, loading } = fetchData('https://akabab.github.io/superhero-api/api/all.json')


    return (
      <div>
        <pre>{JSON.stringify(data)}</pre>

        <div className="container">
          <div className="row mb-2 mt-2">
            {
              loading ? <lottie-player src= "https://assets10.lottiefiles.com/datafiles/wk8EJuzzGk9yWa1/data.json"  background="transparent"  speed="1"  style={{'width': '300px', 'height': '300px'}}  loop  autoplay></lottie-player> : 
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
