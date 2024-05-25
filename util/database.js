const mongoose=require('mongoose')
//const url=
//"mongodb+srv://john:1234@cluster0.agirnva.mongodb.net/testdb?retrywr"

const connectionDB=(url)=>{
  console.log('trying to connect to db')
  return mongoose.connect(url)
}
module.exports=connectionDB;

//VERSION 1

//mongoose.connect(url)
//.then(()=>console.log('connected successfully...'))
//.catch((err)=>console.log(err))