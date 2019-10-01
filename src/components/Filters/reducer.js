import { SET_VISIBILITY_FILTER, SHOW_ALL } from './types'

export const initialState = SHOW_ALL

const filters = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload.filter
  }
  return state
}

export default filters
