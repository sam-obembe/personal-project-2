import React from 'react'
//Dependencies
import {Link} from 'react-router-dom'

//Material UI
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Radio from '@material-ui/core/Radio'
//Components

class Login extends React.Component{
  constructor(){
    super()
    this.state = {
      job_seeker: true,
      recruiter: false,
      email: "",
      password: "",
      user_type: ""
    }
  }

  radioToggle = (e)=>{
    const {job_seeker,recruiter} = this.state
    this.setState({job_seeker:!job_seeker, recruiter:!recruiter, user_type: e.target.value})
  }

  render(){
    return(
      <div style = {{display:"flex", flexDirection: "column", width: "200px", margin: "0 auto"}}>
        <Typography variant = "h6">Login</Typography>
        <TextField label = "email" name = "email"/><br/>
        <TextField label = "password" name = "password" type = "password"/>
        <p>Job seeker <span><Radio checked = {this.state.job_seeker} onClick = {(e)=>this.radioToggle(e)} value = "job_seeker"/></span></p>
        <p>Recruiter <span><Radio checked = {this.state.recruiter} onClick = {(e)=>this.radioToggle(e)} value = "recruiter"/></span></p>
        <Link to = "/user/home"><Button>Login</Button></Link>
      </div>
    )
  }
}

export default Login