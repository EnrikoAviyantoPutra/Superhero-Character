export function fetchDataSuperheroes(payload) {
    return { type: 'FETCHDATA/SUPERHEROES', payload}
}

export function fetchDetailSuperhero(payload) {
  console.log(payload ,'<<<<<<<<<<<ini untuk di fetch detail');
  return { type: 'FETCHDETAIL/SUPERHERO', payload}
}

export function addHeroFavorite(payload) {
  return { type: 'ADDFAVORITE/SUPERHERO', payload}
}


export function getSuperheroes() {
  return async (dispatch) => {
    try {
      dispatch(setLoadingSuperheroes(true))
      const response = await fetch ('https://akabab.github.io/superhero-api/api/all.json')
      const data = await response.json()
      // console.log(data, "==================")
      dispatch(fetchDataSuperheroes(data))
      dispatch(setLoadingSuperheroes(false))
    } catch (err) {
      console.log(err);
    }
  }
}

export function getDetailSuperhero(payload) {
  return async (dispatch) => {
    try {
      dispatch(setLoadingDetail(true))
      const response = await fetch (`https://akabab.github.io/superhero-api/api/id/${payload}.json`)
      const data = await response.json()
      console.log(data, '<<<<<<<<<<<<<<<<<ini data detail di action')
      dispatch(fetchDetailSuperhero(data))
      setTimeout(() =>{
        dispatch(setLoadingDetail(false))
      },500)
    } catch (err) {
      console.log(err)
    }
  }
}

export function setLoadingSuperheroes(payload) {
  return { type: 'FETCHDATA/LOADING', payload }
}


export function setLoadingDetail(payload) {
  return { type: 'FETCHDETAIL/LOADING', payload }
}