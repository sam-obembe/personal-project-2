import React from 'react'
//redux imports
import {connect} from 'react-redux'
import {getCreatedJobs} from '../../../ducks/reducers/jobReducer'
import JobsListItem from './JobsListItem'

class JobList extends React.Component{
  componentDidMount(){
    this.props.getCreatedJobs()
  }

  listCreatedJobs=()=>{
    const {jobsCreated}  = this.props
    for(let i = 0; i<jobsCreated.length; i++){
      console.log(jobsCreated[i])
      return (
        <JobsListItem job = {jobsCreated[i]}/>
      )
    }
  }
  render(){
    const {jobsCreated} = this.props
    return(
      <div>
        { jobsCreated.length && this.listCreatedJobs()}

      </div>
    )
  }
}

function mapStateToProps(state){
  return {jobsCreated: state.job.jobsCreated}
}

export default connect(mapStateToProps,{getCreatedJobs})(JobList)