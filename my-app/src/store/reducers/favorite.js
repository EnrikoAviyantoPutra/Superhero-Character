// reducer untuk fetch data favorite 
const initialState = {
    favorite: []
  }
  function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case 'ADDFAVORITE/SUPERHERO':
            return { ...state, favorite: [...state.favorite, payload] }
      default:
        return state
    }
  
  }
  
  export default reducer




