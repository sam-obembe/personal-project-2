const firebase = require('firebase/app')

module.exports = {
  createJob: async(req,res)=>{
    const userId = firebase.auth().currentUser.uid
    const db = req.app.get('db')
    const {job_description,job_duration,job_fee,job_title} = req.body

    try{
      await db.collection('jobs').add({
        creator_id: userId,
        job_description,
        job_duration,
        job_fee,
        job_title,
      }).then((ref)=>res.status(200).send(`a document has been created ${ref.id}`))
    }
    catch(err){
      res.status(500).send(`could not delete`)
    }
  },

  deleteJob: async(req,res)=>{
    const {jobId} = req.params
    const db = req.app.get('db')
    //get creator_id
    let {creator_id} = await db.collection('jobs').doc(jobId).get().then((doc)=>{
      return doc.data()
    })
    //check if creator_id === firebase.auth().currentUser.uid
    try{
      //delete job if they are equal
      if( firebase.auth().currentUser.uid && creator_id === firebase.auth().currentUser.uid ){
        await db.collection('jobs').doc(jobId).delete().then(()=>{
          res.status(200).send('job was deleted')
        })
      }else{
        res.status(401).send('unauthorised, please sign in as the job creator')
      }
    }
    catch(err){
      res.status(500).send('error')
    }
   
    
  }
}