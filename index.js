const connectionDB=require('./util/database')
const express=require('express')
const cors=require('cors');
const task_routes=require('./routes/routes_task');
const user_routes = require('./routes/user_data');
const blog_routes = require('./routes/blog_routes');
const errorHandler = require('./error/error-handler');

const app=express()
require('dotenv').config()
app.use(express.json())
app.use(cors())
const start=async ()=>{
  try{
    await connectionDB(process.env.MONGO_LOCAL_URL);
    console.log('connected');
    app.listen(8080,()=>{
      console.log('server listening at the port 8080')
    })
  }catch(err){
    console.log(err)
  }
}
start();
app.use('/task',task_routes);
app.use('/user',user_routes);
app.use('/blog',blog_routes);
app.use(errorHandler)
//version 1
//app.listen(8000,()=>{
  // console.log('server listening port 8000')
// })