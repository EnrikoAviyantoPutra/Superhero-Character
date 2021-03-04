// reducer untuk fetch  data detail character 
const initialState = {
  superhero: {},
  loading: false
}

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'FETCHDETAIL/SUPERHERO':
      return { ...state, superhero: payload }
    case 'FETCHDETAIL/LOADING':
      return {...state, loading: payload}
    default:
      return state
  }

}

export default reducer

