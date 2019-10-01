import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'

const thunkIsMe = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(dispatch, getState)
  }
  return next(action)
}

const storeEnhancer = compose(
  applyMiddleware(thunkIsMe),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const storeConfig = createStore(rootReducer, storeEnhancer)
// store.subscribe(() => {
//   console.log('STORE => ', store.getState())
// })
