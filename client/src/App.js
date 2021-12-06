import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/homepage'
import Login from './pages/loginPage'
import Register from './pages/register'

const App = () => {
  return (
      <div>
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/register" exact component={Register}/>
            <Route path="/Home" exact component={Home}/>
        </BrowserRouter>
      </div>
  )
}
export default App