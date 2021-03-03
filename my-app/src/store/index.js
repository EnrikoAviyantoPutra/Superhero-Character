import { createStore } from 'redux'

const initialState = {
  superheroes: [],
  superhero: {},
  test: 'hello from redux',
  error: null,
  loading: false
}

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'FETCHDATA/SUPERHEROES':
      return { ...state, superheroes: payload }
    case 'FETCHDETAIL/SUPERHERO':
      return { ...state, superhero: payload }

    default:
      return state
  }
}
const store = createStore(reducer)

export default store