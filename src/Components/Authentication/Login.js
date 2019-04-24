import React from 'react'
//Dependencies

import {Redirect} from 'react-router-dom'
import axios from 'axios'

//Material UI
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
//import Radio from '@material-ui/core/Radio'
//Components

//redux imports
import {setDetails} from '../../ducks/reducers/userReducer'
import {connect} from 'react-redux'

class Login extends React.Component{
  constructor(){
    super()
    this.state = {
      email: "",
      password: "",
      user_type: "",
      success: false
    }
  }

  submitLogin =async()=>{
    const {email,password} = this.state
    let details = await axios.post(`/signin`,{email,password}).then(res=>res.data.details
    )
    this.setState({user_type:details.user_type,success:true})
    await this.props.setDetails(details)
  }

  inputHandle = (e)=>{
    this.setState({[e.target.name]:e.target.value})
  }

  loginSuccess = ()=>{
    if(this.state.success && this.state.user_type==="job_seeker"){
      return <Redirect to = "/user/home"/>
    }else if(this.state.success && this.state.user_type === "recruiter"){
      return <Redirect to = "/recruiter/home"/>
    }
  }

  render(){
    return(
      <div>
        {this.loginSuccess()}
        <div style = {{display:"flex", flexDirection: "column", width: "200px", margin: "0 auto"}}>

          <Typography variant = "h6">Login</Typography>

          <TextField label = "email" name = "email" onChange = {(e)=>this.inputHandle(e)}/><br/>
          
          <TextField label = "password" name = "password" type = "password" onChange = {(e)=>this.inputHandle(e)}/>
        
          <Button onClick ={()=>this.submitLogin()} >Login</Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return state.user
}

export default connect(mapStateToProps,{setDetails})(Login)


 /* 
  Redundant code
  <p>Job seeker 
    <span>
    <Radio checked = {this.state.job_seeker} onClick = {(e)=>this.radioToggle(e)} value = "job_seeker"/>
    </span>
  </p>
  
  <p>Recruiter 
    <span>
    <Radio checked = {this.state.recruiter} onClick = {(e)=>this.radioToggle(e)} value = "recruiter"/>
    </span>
  </p>

  radioToggle = (e)=>{
    const {job_seeker,recruiter} = this.state
    this.setState({job_seeker:!job_seeker, recruiter:!recruiter, user_type: e.target.value})
  }

  */