import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import { DialogTitle } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

class JobCreate extends React.Component{
  state = {
    fee: 0,
    description: "",
    duration: "",
    title: ""
  }

  inputHandle = (e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  render(){
    return(
      <div>
        <Dialog open = {this.props.shouldOpen}>
          <DialogTitle>
            <Typography variant = "h3" > Create a new job </Typography>

            <TextField name = "title" 
            type = "string" value = {this.state.title}
            label = "title" variant = "outlined"
            margin = "normal"
            onChange = {(e)=>this.inputHandle(e)}/><br/>

            <TextField name = "duration" 
            type = "string" value = {this.state.duration} 
            label = "duration" variant = "outlined"
            margin = "normal"
            onChange = {(e)=>this.inputHandle(e)}/> <br/>

            <TextField name = "description" 
            type = "string" value = {this.state.description} 
            label = "description" variant = "outlined"
            margin = "normal"
            onChange = {(e)=>this.inputHandle(e)}/> <br/>

            <TextField name = "fee" 
            type = "number" value = {this.state.fee} 
            label = "fee" variant = "outlined"
            margin = "normal"
            onChange = {(e)=>this.inputHandle(e)}/> <br/>

            <Button onClick = {()=>this.props.toggle()}>Cancel</Button>

          </DialogTitle>
        </Dialog>
      </div>
    )
  }
}

export default JobCreate