// reducer untuk fetch all data all character 
const initialState = {
  superheroes: [],
  loading: false
}

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'FETCHDATA/SUPERHEROES':
      return { ...state, superheroes: payload }
    case 'FETCHDATA/LOADING':
      return {...state, loading: payload}
    default:
      return state
  }

}

export default reducer