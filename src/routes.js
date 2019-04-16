import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './Components/Landing'
import UserDashboard from './Components/UserComponents/UserDashboard'


export default(
  <Switch>
    <Route exact path = "/" component = {Landing}/>
    <Route exact path = "/user/home" component = {UserDashboard}/>
  </Switch>
)