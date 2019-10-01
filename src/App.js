import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Form from './components/Form'
import TodoList from './components/TodoList'
import Filters from './components/Filters'
import NavBar from './components/NavBar'

const App = () => (
  <div>
    <BrowserRouter>
      <NavBar />
      <Form />
      <TodoList />
      <Filters />
    </BrowserRouter>
  </div>
)

export default App
