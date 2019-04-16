import React from 'react'
import SideBar from './SideBar'
import SuggestionsList from './Suggestions/SuggestionsList'

class UserDashboard extends React.Component{
  render(){
    return(
      <div style = {{display:"flex"}}>
        <SideBar/>
        <SuggestionsList/>
      </div>
    )
  }
}

export default UserDashboard