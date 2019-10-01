import React from 'react'
import { Link, Route } from 'react-router-dom'

const NavBar = () => {
  return (
    <div style={{ padding: '16px' }}>
      <Link style={{ marginRight: '16px' }} to='/'>House</Link>
      <Link style={{ marginRight: '16px' }} to='/sobre'>Sobre</Link>
      <Link to='/contato'>Contato</Link>

      <Route exact path='/sobre' component={sobre} />
      <Route exact path='/contato' component={contato} />
    </div>
  )
}

const sobre = () => {
  return (
    <div>
      <h1>Sobre</h1>
      <h3>Página de Sobre</h3>
    </div>
  )
}

const contato = () => {
  return (
    <div>
      <h1>Contato</h1>
      <h3>Página de Contato</h3>
    </div>
  )
}

export default NavBar
