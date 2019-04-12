import React from 'react'
import LandingNav from './LandingNav'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'


class Landing extends React.Component{
  constructor(){
    super()
    this.state = {
      login: true
    }
  }
  render(){
    return(    
      <div className = "mainDiv">

        <LandingNav/>
        <div>
        <div style = {{width: "40vw", margin: "0 auto"}}>
          <Paper>
            <Typography variant = "h3">Hi</Typography>
          </Paper>
        </div>
        </div>
        
      </div>
    )
  }
}

export default Landing