import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../TodoList/actions'

const Form = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='todo' />
      <button type='submit'>Enviar</button>
    </form>
  )
}

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (e) => {
    e.preventDefault()
    dispatch(addTodo(e.target.todo.value))
    e.target.todo.value = ''
  }
})

export default connect(null, mapDispatchToProps)(Form)
