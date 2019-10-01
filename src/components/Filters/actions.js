import { SET_VISIBILITY_FILTER } from './types'

export const setFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  payload: { filter }
})
