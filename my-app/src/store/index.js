import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import heroesReducer from './reducers/heroes'
import heroReducer from './reducers/hero'
import favoriteReducer from './reducers/favorite'
// import logger from './middleware/logger'

const rootReducer = combineReducers ({
  superheroes: heroesReducer,
  superhero: heroReducer,
  favorite: favoriteReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk))

export default store