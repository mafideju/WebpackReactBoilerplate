import { Route } from 'react-router-dom'


const Router = () => {
  return (
    <div>
      <Route exact path='/sobre' component={sobre} />
      <Route exact path='/contato' component={contato} />
    </div>
  )
}

export default Router