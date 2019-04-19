const firebase = require('firebase/app')

module.exports = {

  createJob: async(req,res)=>{
    const userId = firebase.auth().currentUser.uid
    const db = req.app.get('db')
    const {job_description,job_duration,job_fee,job_title} = req.body

    try{
      await db.collection('users').doc(userId).collection('jobs_created').add({
        job_description,
        job_duration,
        job_fee,
        job_title
      }).then((ref)=>{
        db.collection('jobs').doc(ref.id).set({
          creator_id: userId,
          job_description,
          job_duration,
          job_fee,
          job_title,
        })
      }).then((ref)=>res.status(200).send(`a document has been created ${ref.id}`))
    }
    catch(err){
      res.status(500).send(`could not create`)
    }
  },

  deleteJob: async(req,res)=>{
    const {jobId} = req.params
    const db = req.app.get('db')
    const userId = firebase.auth().currentUser.uid
    //get creator_id
    let {creator_id} = await db.collection('jobs').doc(jobId).get().then((doc)=>{
      return doc.data()
    })
    //check if creator_id === firebase.auth().currentUser.uid
    try{
      //delete job if they are equal
      if( firebase.auth().currentUser.uid && creator_id ===userId ){

        await db.collection('users').doc(userId).collection('jobs_created').doc(jobId).delete().then(()=>{
          db.collection('jobs').doc(jobId).delete().then(()=>{
            res.status(200).send('job was deleted')
          })
        })

      }
      else{
        res.status(401).send('unauthorised, please sign in as the job creator')
      }
    }
    
    catch(err){
      res.status(500).send('error')
    } 
  }
}