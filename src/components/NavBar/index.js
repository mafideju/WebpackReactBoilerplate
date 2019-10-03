import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
// import Sobre from '../Sobre'
// import Contato from '../Contato'

const NavBar = () => {
  return (
    <div style={{ padding: '16px' }}>
      <NavLink
        activeStyle={{ color: 'red' }}
        style={{ marginRight: '16px' }}
        exact to='/'
      >
        House
      </NavLink>
      <NavLink
        activeStyle={{ color: 'orangered' }}
        style={{ marginRight: '16px' }}
        exact to='/sobre'
      >
        Sobre
      </NavLink>
      <NavLink
        activeStyle={{ color: 'red' }}
        exact to='/contato'
      >
        Contato
      </NavLink>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/sobre' component={Sobre} />
        <Route exact path='/contato' component={Contato} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

const Home = () => {
  return (
    <h1>Principal</h1>
  )
}

const NotFound = () => {
  return (
    <h1>Página não Encontrada</h1>
  )
}

const Sobre = () => {
  return (
    <div>
      <h1>Sobre</h1>
      <h3>Página de Sobre</h3>
    </div>
  )
}

const Contato = () => {
  return (
    <div>
      <h1>Contato</h1>
      <h3>Página de Contato</h3>
    </div>
  )
}

export default NavBar
