const mongoose=require('mongoose');
const BlogSchema=new mongoose.Schema({
  title:{
    type:String,
    require:true,
  },
  content:{
    type:String,
    require:true
  },
  author:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
  },
  tags:{
    type:[String],
    default:[],
  },
  createdAt:{
    type:Date,
    default:Date.now,
  },
  updatedAt:{
    type:Date,
    default:Date.now,
  },
  likes:{
    type:Number
  }
})

const Blog=mongoose.model('Blog',BlogSchema);
module.exports=Blog;