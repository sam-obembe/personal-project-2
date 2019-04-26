//redux dependecies and middleware
import {createStore, applyMiddleware, combineReducers,compose} from 'redux'
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'


//react-redux-firebase and redux-firestore imports
import {reduxFirestore,getFirestore} from 'redux-firestore'
import {reactReduxFirebase,getFirebase} from 'react-redux-firebase'
import {config} from '../FirebaseConfig'


//reducers
import userReducer from './reducers/userReducer'
import authReducer from './reducers/authReducer'
import jobReducer from './reducers/jobReducer'
import {firebaseReducer} from 'react-redux-firebase'

//firebase imports
import firebase from 'firebase/app'

const fbConfig = firebase.initializeApp(config)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose

const mainReducer = combineReducers({
  user:userReducer,
  auth:authReducer,
  job:jobReducer, 
  firebase:firebaseReducer
})


const store = createStore(mainReducer, composeEnhancers(
  applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore}),promise),
  reactReduxFirebase(fbConfig),
  reduxFirestore(fbConfig)
  ))

export default store