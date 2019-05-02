import React from 'react'
import axios from 'axios'
import SuggestionsList from './SuggestionsList'

//material UI imports

class Suggestions extends React.Component{
  constructor(){
    super()
    this.state = {
      jobSuggestions: []
    }
  }

  componentDidMount(){
    axios.get(`/user/jobs/suggestions`).then(res=>{
      console.log(res.data)
      this.setState({jobSuggestions:res.data})
    })
  }

  render(){
    let{jobSuggestions} = this.state
    return(
      <div style = {{backgroundColor:"grey", width:"100vw", height:"100vh"}}>
          <h1>This is where the list of job suggestions would go</h1>
          <SuggestionsList suggestions = {jobSuggestions}/>

      </div>
    )
  }
}
export default Suggestions