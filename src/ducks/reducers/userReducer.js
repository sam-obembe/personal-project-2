const userState = {
  first_name: "",
  last_name: "",
  email: "",
  user_type: "",
  user_id: ""
}

const SET_USER_INFO = "SET_USER_INFO"

export const setDetails =(details)=>{
  return{
    type: SET_USER_INFO,
    payload: details
  }
}

export const getCreatedJobs = ()=>{
  return (dispatch,getState, {getFirebase, getFirestore})=>{
    
  }
}

export default function(state = userState, action){

  switch(action.type){

    case SET_USER_INFO:
      console.log(action.payload)
      return Object.assign({},state,action.payload);
      
    default: return state
  }
}