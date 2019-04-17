//redux dependecies and middleware
import {createStore, applyMiddleware, combineReducers,compose} from 'redux'
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import {getFirestore} from 'redux-firestore'
import {getFirebase} from 'react-redux-firebase'

//reducers
import userReducer from './reducers/userReducer'
import authReducer from './reducers/authReducer'
import jobReducer from './reducers/jobReducer'
import {firebaseReducer} from 'react-redux-firebase'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose

const mainReducer = combineReducers({
  user:userReducer,
  auth:authReducer,
  job:jobReducer, 
  firebase:firebaseReducer
})


const store = createStore(mainReducer, composeEnhancers(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore}),promise)))

export default store