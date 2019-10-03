import React from 'react'
import { Route, Switch } from 'react-router-dom'

const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/sobre' component={Sobre} />
      <Route exact path='/contato' component={Contato} />
      <Route component={NotFound} />
    </Switch>
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

export default Router
