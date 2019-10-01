import uuid from 'uuid'
import { ADD_TODO, TOGGLE_TODO } from './types'

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { id: uuid(), text }
})

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id }
})
