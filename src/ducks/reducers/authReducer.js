const authState = {
  
}

const SIGNUP = "SIGNUP"


export function signup(){
  return{
    type: SIGNUP,
  }
}



export default function(state = authState, action){
  switch(action.type){
    case SIGNUP:
      return state
    default: return state
  }
}

