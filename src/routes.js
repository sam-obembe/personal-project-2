import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './Components/Landing'


export default(
  <Switch>
    <Route path = "/" component = {Landing}/>
  </Switch>
)