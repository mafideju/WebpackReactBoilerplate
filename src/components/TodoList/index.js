import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from './actions'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../Filters/types'

const TodoList = ({ handleToggle, todos, activeFilter }) => {
  return (
    <div>
      <ul>
        {getVisibleTodos(todos, activeFilter).map(todo => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? 'grey' : 'black'
            }}
            onClick={handleToggle(todo.id)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

const getVisibleTodos = (todos, activeFilter) => {
  switch (activeFilter) {
    case SHOW_ALL:
      return todos
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  activeFilter: state.filters
})

const mapDispatchToProps = (dispatch) => ({
  handleToggle: (id) => (e) => {
    dispatch(toggleTodo(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
