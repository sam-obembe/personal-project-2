import React from 'react'
//Dependencies

//Material UI
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
//Components

class Signup extends React.Component{
  render(){
    return(
      <div>
        <Typography variant = "h5">Signup</Typography>
        <TextField label = "email" name = "email"/>
        <TextField label = "password" name = "password"/>
        <Button>Sign Up</Button>
      </div>
    )
  }
}

export default Signup