import React from 'react'
//material UI imports
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import { ExpansionPanelSummary, ExpansionPanelDetails, ExpansionPanelActions, Button } from '@material-ui/core';


const JobListItem=(props)=>{
  const {job} = props
  console.log(job)
  return(
    <div>
      <ExpansionPanel style = {{width:"750px"}}>
        <ExpansionPanelSummary>
          <p>{job.job_title}</p>
        </ExpansionPanelSummary>
        
        <ExpansionPanelDetails>
          <p>{job.job_duration}</p><br/>
          <p>{job.job_fee}</p><br/>
          <p>{job.job_description}</p><br/>
          <p>{job.job_title}</p><br/>
        </ExpansionPanelDetails>

        <ExpansionPanelActions>
          <Button>See Suggestions</Button>
          <Button>Delete</Button>
        </ExpansionPanelActions>

      </ExpansionPanel>
    </div>
  )
}

export default JobListItem