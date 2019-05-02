import React from 'react'
import SideBar from './SideBar'
import Suggestions from './Suggestions/Suggestions'

class UserDashboard extends React.Component{
  render(){
    return(
      <div style = {{display:"flex"}}>
        <SideBar/>
        <Suggestions/>
      </div>
    )
  }
}

export default UserDashboard