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
      email: "",
      password: ""
    }
  }

  render(){
    return(
      <div style = {{display:"flex", flexDirection: "column", width: "200px", margin: "0 auto"}}>
        <Typography variant = "h6">Login</Typography>
        <TextField label = "email" name = "email"/><br/>
        <TextField label = "password" name = "password" type = "password"/>
        <p>Job seeker <span><Radio/></span></p>
        <p>Job poster <span><Radio/></span></p>
        <Link to = "/user/home"><Button>Login</Button></Link>
      </div>
    )
  }
}

export default Login