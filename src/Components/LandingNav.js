import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'


const LandingNav = ()=>{
  return(
    <div style = {{marginBottom: "30px"}}>
      <AppBar color = "default">
        <Typography variant = 'h6'>This is the landing nav bar</Typography>
      </AppBar>
    </div>
  )
}

export default LandingNav