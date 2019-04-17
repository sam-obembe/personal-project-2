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

const port = process.env.port
admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig.service)
})

// const db = admin.firestore()

app.set('db',admin.firestore())



firebase.initializeApp(firebaseConfig.config)

app.use(bodyParser())

app.use(session({
  secret: process.env.SESH_SEC,
  resave: true,
  saveUninitialized: false
}))


app.post(`/register`,ac.registerUser)
app.post(`/signin`, ac.signIn)

app.listen(port,()=>console.log(`listening on ${port}`))
