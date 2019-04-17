const authState = {
  
}

//action types
const SIGNUP = "SIGNUP"

//action creators
export function signup(){
  return (dispatch,getState)=>{
    //do auth stuff
    dispatch({type: 'SIGNUP', payload: "credentials"})
  }
}



export default function(state = authState, action){
  switch(action.type){
    case SIGNUP:
      return state
    default: return state
  }
}

