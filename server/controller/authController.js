const firebase = require('firebase/app')
require('firebase/auth')
require('firebase/firestore')

module.exports = {
  registerUser: async(req,res)=>{
    let credentials = req.body
    let {email, password,first_name,last_name,user_type} = credentials
    const db = req.app.get("db")

    try{
      //create user
      await firebase.auth().createUserWithEmailAndPassword(email,password).then(async ()=>{
        //get current user instance
        var user = firebase.auth().currentUser
        //add user details to  firebase
        await db.collection('users').doc(user.uid).set({
          email:email,
          first_name:first_name,
          last_name:last_name,
          user_type:user_type
        })
        .catch(err=>console.log(err))

      }).catch((err)=>{
        console.log(err.code)
      })

      res.status(200).send("registered")
    }

    catch(err){
      console.log("could not complete")
    }
    
  },

  signIn: async(req,res)=>{
    let {email,password} = req.body
    try{
      await firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
        let user = firebase.auth().currentUser
        console.log(user.uid)
        res.status(200).send("signed in")
      }).catch(err=>console.log(err.code))
    }
    catch(err){
      res.status(400).send("could not register")
    }
  }
}

/*
user id is stored on user.uid
*/