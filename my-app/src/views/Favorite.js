import React from 'react'
import { useSelector} from 'react-redux'
import HeroFavorite from '../components/HeroFavorite'

function Favorite(props) {
  // const dispatch = useDispatch()
  const data = useSelector(state => state.favorite.favorite)
  console.log(data, 'ini halaman di favorite')

const checkLength = () =>{
  if (data.length === 0) {
    return <div className='container'>
        {/* <lottie-player src="https://assets9.lottiefiles.com/private_files/lf30_jq4i7W.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player> */}
    <div className='d-flex flex-row justify-content-center'>
    <h1> You Don't Have Any Favorite</h1>

    </div>

    </div>
        
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
