
const authState = {
  
}

//action types
const SIGNUP = "SIGNUP"
const LOGIN = "LOGIN"

//action creators
export function signup(){
  return (dispatch,getState)=>{
    //do auth stuff
    dispatch({type: 'SIGNUP', payload: "credentials"})
  }
}

export function login(email,password){

  return{
    type: LOGIN
  }
}



export default function(state = authState, action){
  switch(action.type){
    case SIGNUP:
      return state
    default: return state
  }
}

