const mongoose = require('mongoose')
const TaskSchema=new mongoose.Schema({
  'name':{
    type:String,
    required:[true,'Name property is required']
  },
  'completed':{
    type:Boolean,
    default:false
  },
  'department':{
    type:String,
    required:[true,'department property is required']
  }
})
module.exports=mongoose.model('Task',TaskSchema)