import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './Components/Landing'
import UserDashboard from './Components/UserComponents/UserDashboard'
import RecruiterDashboard from './Components/RecruiterComponents/RecruiterDashboard'


export default(
  <Switch>
    <Route exact path = "/" component = {Landing}/>
    <Route exact path = "/user/home" component = {UserDashboard}/>
    <Route exact path = "/recruiter/home" component = {RecruiterDashboard}/>
  </Switch>
)