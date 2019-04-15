import React from 'react'
//Dependencies

//Material UI
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
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
      <div style = {{width: "60%", margin: "0 auto"}}>
        <Typography variant = "h6">Login</Typography>
        <TextField label = "email" name = "email"/><br/>
        <TextField label = "password" name = "password" type = "password"/>
        <Button>Login</Button>
      </div>
    )
  }
}

export default Login