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
    return jobsCreated.map(job=>{
      return <JobsListItem job = {job} key = {job.job_id} getJobs = {this.props.getCreatedJobs}/>
    })

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