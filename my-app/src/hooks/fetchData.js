import { useState, useEffect } from 'react'


function FetchData(endPoint) {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(endPoint)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
      .catch(err => {
        setError(err)
      })
      .finally(_ => {
        setTimeout(()=> {
          setLoading(false)
        },3000)
      })
  }, [endPoint])

  return {
    loading,
    error,
    data
  }

}
export default FetchData