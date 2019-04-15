import React from 'react'
//Dependencies

//Material UI
import Paper from '@material-ui/core/Paper'
import Switch from '@material-ui/core/Switch'

//Components
import LandingNav from './LandingNav'
import Login from './Authentication/Login'
import SignUp from './Authentication/SignUp'


class Landing extends React.Component{
  constructor(){
    super()
    this.state = {
      login: true
    }
  }

  formShow=()=>{
    const {login} = this.state
    if(login){
      return <Login/>
    }else{
      return <SignUp/>
    }
  }

  formToggle=()=>{
    const {login} = this.state
    if(login){
      this.setState({login:false})
    }else{
      this.setState({login: true})
    }
  }

  render(){
    return(    
      <div className = "mainDiv">

        <LandingNav/>
        <div>
          <div style = {{width: "40vw", margin: "0 auto", padding: "30px"}}>
            <Paper elevation = {2}>
              <p>Toggle to signup or login <span><Switch checked = {this.state.login} onChange={()=>this.formToggle()}/></span></p>
              {this.formShow()}
            </Paper>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Landing