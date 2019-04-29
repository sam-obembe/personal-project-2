import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import { DialogTitle } from '@material-ui/core';
//import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import axios from 'axios'

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

  submitJob = async()=>{
    const {fee,description,duration,title} = this.state
    await axios.post('/jobs/create',{
      job_description: description,
      job_duration: duration,
      job_title: title,
      job_fee: fee
    })
    .then(async (res) =>{
      await this.setState({
        fee: 0, description: "",
        duration: "", title: ""
      })
      await this.props.toggle()
    })
    .catch(err=>alert("could not create job"))
  }

  render(){
    return(
      <div>
        <Dialog open = {this.props.shouldOpen}>
          
          <DialogTitle>Create a new job</DialogTitle>

          <div style = {{marginLeft: "10%"}}>
            <TextField name = "title" 
            type = "string" value = {this.state.title}
            label = "title" variant = "outlined"
            margin = "normal"
            style = {{width: "80%"}}
            onChange = {(e)=>this.inputHandle(e)}/><br/>

            <TextField name = "duration" 
            type = "string" value = {this.state.duration} 
            label = "duration" variant = "outlined"
            margin = "normal"
            style = {{width: "80%"}}
            onChange = {(e)=>this.inputHandle(e)}/> <br/>

            <textarea name = "description" 
            type = "string" value = {this.state.description} 
            label = "description" variant = "outlined"
            margin = "normal"
            style = {{width: "80%", height: "100px"}}
            onChange = {(e)=>this.inputHandle(e)}/> <br/>

            <TextField name = "fee" 
            type = "number" value = {this.state.fee} 
            label = "fee" variant = "outlined"
            margin = "normal"
            style = {{width: "80%"}}
            onChange = {(e)=>this.inputHandle(e)}/> <br/>

            <Button onClick = {()=>this.props.toggle()}>Cancel</Button>
            <Button onClick = {()=>this.submitJob()}>Create</Button>
          </div>
          
        </Dialog>
      </div>
    )
  }
}

export default JobCreate