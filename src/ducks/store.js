import {createStore, applyMiddleware, combineReducers,compose} from 'redux'
import promise from 'redux-promise-middleware'

import userReducer from './reducers/userReducer'
import authReducer from './reducers/authReducer'
import jobReducer from './reducers/jobReducer'

import firebase from 'firebase'
import firebaseConfig from '../FirebaseConfig'
import {firebaseReducer} from 'react-redux-firebase'

firebase.initializeApp(firebaseConfig)

const config = {
  userProfile: 'users',
  enableLogging: false
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose

const mainReducer = combineReducers({
  user:userReducer,
  auth:authReducer,
  job:jobReducer, 
  firebase:firebaseReducer
})

const store = createStore(mainReducer, composeEnhancers(applyMiddleware(promise)))

export default store