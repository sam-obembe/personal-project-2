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
        let user = firebase.auth().currentUser
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

      res.status(200).send({message:"registered",details:{email,first_name,last_name,user_type}})
    }

    catch(err){
      res.status(500).send("could not complete")
    }
    
  },

  signIn: async(req,res)=>{
    let {email,password} = req.body
    const db = req.app.get('db')
    try{
      await firebase.auth().signInWithEmailAndPassword(email,password).then(async ()=>{
        let user = firebase.auth().currentUser
        let user_details = await db.collection('users').doc(user.uid).get().then(doc=>doc.data())
        //console.log(user)
        res.status(200).send({message:"signed in",details:user_details})
      }).catch(err=>console.log(err.code))
    }
    catch(err){
      res.status(500).send("could not register")
    }
  },

  logout: async(req,res)=>{
    await firebase.auth().signOut().then(()=>{
      res.status(200).send("signed out")
    })
  },

  delete: async(req,res)=>{
    const db  = req.app.get('db')
    const {userId} = req.params
    let user = firebase.auth().currentUser

    try{

    
      if(user && userId === user.uid){  
        // let jobsCreated = []
        /*get all jobs created by user and store in jobs*/

        //this block of code is still being tested
        /* 
        await db.collection('jobs').where("creator_id" , "==" , user.uid).delete()
        .then(()=>res.status(200).send("all user created jobs deleted"))
        .catch(err=>res.status(200).send(err))
        */
       await db.collection('users').doc(userId).delete().then(()=>{
        user.delete().then(()=>{
        res.status(200).send("user has been deleted")
        })
      })
        

      }

      else if(user === null){
        res.status(401).send("you are not authorised to delete this account")
      }
    
    }
    catch(err){
      console.log(err)
      res.status(501).json(err)
    }

  }
}

/*
user id is stored on user.uid
*/


/*await db.collection('users').doc(userId).delete().then(()=>{
  user.delete().then(()=>{
  res.status(200).send("user has been deleted")
  })
})*/


/*
await db.collection('jobs').where("creator_id" , "==" , user.uid).get()
    .then(doc=>{
    doc.forEach(docSnap=>jobsCreated.push(docSnap.data()))
   })
  .catch(err=>res.status(200).send(err))
*/