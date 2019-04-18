require('dotenv').config()
const express = require('express')
const app = express()

//dependencies
const bodyParser = require('body-parser')
const session  = require('express-session')
//firebase firestore related
const admin = require('firebase-admin')
const firebase = require('firebase/app')
const firebaseConfig = require('../src/FirebaseConfig')
require('firebase/auth')
require('firebase/firestore')

//controllers
const ac = require('./controller/authController')
const jc = require('./controller/jobController')

const port = process.env.port
admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig.service)
})

// const db = admin.firestore()

app.set('db',admin.firestore())



firebase.initializeApp(firebaseConfig.config)

app.use(bodyParser.json())

app.use(session({
  secret: process.env.SESH_SEC,
  resave: true,
  saveUninitialized: false
}))


app.post(`/register`,ac.registerUser)
app.post(`/signin`, ac.signIn)
app.post(`/logout`, ac.logout)

//jobs
app.post(`/jobs/create`,jc.createJob)
app.delete(`/jobs/delete/:jobId`,jc.deleteJob)

app.listen(port,()=>console.log(`listening on ${port}`))
