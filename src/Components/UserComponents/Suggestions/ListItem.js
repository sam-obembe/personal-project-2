import React from 'react'
import {ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, ExpansionPanelActions, Button} from '@material-ui/core'
const ListItem = (props)=>{
  let {job} = props
  return(
    <div>
      <ExpansionPanel>
        <ExpansionPanelSummary>
          {job.job_title}, {job.job_fee}
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <p>
            Description: {job.job_description}<br/>
            Duration: {job.job_duration}
          
          </p>
        </ExpansionPanelDetails>

        <ExpansionPanelActions>
          <Button>Like</Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  )
}

export default ListItem