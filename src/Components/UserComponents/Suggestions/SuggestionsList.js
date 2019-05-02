import React,{Component} from 'react'
import ListItem from './ListItem'

class SuggestionsList extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  listJobs=()=>{
    let {suggestions} = this.props
    return suggestions.map((job,i)=>{
      return <ListItem job = {job} key = {job.job_id}/>
    })
  }

  render(){
    return(
      <div style = {{ minWidth: "250px", maxWidth:"75%"}}>
        {this.listJobs()}
      </div>
    )
  }
}

export default SuggestionsList