import React from 'react'
//Dependencies

//Material UI
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Radio from '@material-ui/core/Radio'
//Components

class Signup extends React.Component{
  constructor(){
    super()
    this.state = {
      job_seeker: true,
      recruiter: false,
      user_type: "",
      email: "",
      password: "",
      first_name: "",
      last_name:""
    }
  }

  radioToggle=(e)=>{
    const {job_seeker,recruiter} = this.state
    this.setState({job_seeker: !job_seeker})
    this.setState({recruiter: !recruiter})
    this.setState({user_type: e.target.value}) 
  }

  inputHandle =(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }

  submitButton=()=>{
    this.setState({user_type:"",email:"",password:"",first_name:"",last_name:""})
  }

  render(){
    return(
      <div style = {{display:"flex", flexDirection: "column", width: "250px", margin: "0 auto"}}>
        <Typography variant = "h5">Signup</Typography>

        <TextField label="email" name ="email" onChange = {(e)=>this.inputHandle(e)} value ={this.state.email}/>

        <TextField label = "password" name = "password" onChange = {(e)=>this.inputHandle(e)} placeholder = {this.state.password} type = "password"/>

        <TextField label = "first name" name = "first_name" onChange = {(e)=>this.inputHandle(e)} value = {this.state.first_name}/>

        <TextField label = "last name" name = "last_name" onChange = {(e)=>this.inputHandle(e)} value = {this.state.last_name}/>

        <p>Job Seeker 
          <span>
            <Radio checked = {this.state.job_seeker} 
            label = "job seeker" 
            name = "job_seeker" 
            onClick = {(e)=>this.radioToggle(e)}
            value = "job_seeker"
            />
          </span>
        </p>
          
        <p>Recruiter 
          <span>
            <Radio checked = {this.state.recruiter} 
            label = "job poster" 
            name = "recruiter" 
            onClick = {(e)=>this.radioToggle(e)}
            value = "recruiter"
            />
          </span>
        </p>    
        <Button onClick = {()=>this.submitButton()}>Sign Up</Button>
      </div>
    )
  }
}

export default Signup