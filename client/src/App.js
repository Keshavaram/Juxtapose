import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/homepage'
import Login from './pages/loginPage'
import Register from './pages/register'
import Welcome from './pages/Welcome'

const App = () => {
  return (
      <div>
        <BrowserRouter>
            <Route path="/Login" exact component={Login} />
            <Route path="/register" exact component={Register}/>
            <Route path="/Home" exact component={Home}/>
            <Route path="/" exact component={Welcome}/>
        </BrowserRouter>
      </div>
  )
}
export default App