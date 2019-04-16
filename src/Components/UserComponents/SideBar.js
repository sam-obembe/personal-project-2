import React from 'react'
//dependencies
import {Link} from 'react-router-dom'
//material UI imports
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Toolbar from '@material-ui/core/Toolbar'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'

//components
import LikesList from './Likes/LikesList'
import MatchesList from './Matches/MatchesList'

class SideBar extends React.Component{
  constructor(){
    super()
    this.state = {
      toShow: "Likes"
    }
  }

  tabToggle=(listName)=>{
    this.setState({toShow:listName})
  }

  listToShow =()=>{
    if(this.state.toShow ==="Likes"){
      return <LikesList/>
    }else{
      return <MatchesList/>
    }
  }
  render(){
    return(
      <div style = {{width:"33%", height: "100vh"}}>
        <Toolbar style = {{backgroundColor: "teal", color:"white"}}>
          <Avatar alt = "avatar" src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
          <Typography variant = "h5">My Profile</Typography>
          <Link to = "/"><Button>Logout</Button></Link>
        </Toolbar>

        <Paper style = {{height: "90vh"}}>
            <Tabs>
              <Tab label = "Likes" onClick = {()=>this.tabToggle("Likes")}/>
              <Tab label = "Matches" onClick = {()=>this.tabToggle("Matches")}/>
            </Tabs>
            
            <Typography variant = "h2">This is the sidebar</Typography>
            {this.listToShow()}
        </Paper>
      </div>
    )
  }
}

export default SideBar
