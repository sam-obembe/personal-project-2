import axios from 'axios'

const jobState = {
  jobsCreated : []
}

const GET_CREATED_JOBS = "GET_CREATED_JOBS"

export const getCreatedJobs = ()=>{
  return{
    type: GET_CREATED_JOBS,
    payload: axios.get(`/recruiter/jobPosts`)
  }
}

export default function(state = jobState, action){
  switch(action.type){
    case `${GET_CREATED_JOBS}_FULFILLED`:
      return Object.assign({},state,{jobsCreated:action.payload.data})
    default: return state
  }

}