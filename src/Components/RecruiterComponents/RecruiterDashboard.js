import React from 'react'
import JobsList from './Jobs/JobsList'
import AddCircle from '@material-ui/icons/AddCircle'
import JobCreate from './Jobs/JobCreate'


class RecruiterDashboard extends React.Component{
  constructor(){
    super()
    this.state = {
      showForm: false
    }
  }

  showForm = ()=>{
    if(this.state.showForm){
      return <JobCreate shouldOpen = {this.state.showForm} toggle = {this.formToggle}/>
    }
  }

  formToggle = ()=>{
    const {showForm} = this.state
    this.setState({showForm: !showForm})
  }

  render(){
   
    return(
      <div>
        <h1>This is the recruiter dashboard</h1>
        <AddCircle onClick = {()=>this.formToggle()}/>
        <JobsList/>
        {this.showForm()}

      </div> 
    )
  }
}



export default RecruiterDashboard