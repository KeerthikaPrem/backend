const CustomApiError = require('../error/customApiError');
const Blog=require('../models/blog');
const User=require('../models/user');
const createBlog=async(req,res,next)=>{
  try{
    // const email=req.params.email;
    const user = req.user;
    // console.log(email);
    console.log(user);
    const blog=req.body;
    let author=await User.findOne({email:user.email});
    blog.author=author;
    console.log(blog);
    const newBlog=await Blog.create(blog); 
    res.status(200).json(newBlog);
  }catch(error){
    console.log(error);
    // res.send(500).json(newBlog);
    next(new CustomApiError(error.message,500))
  }
}
const findBlogsByUser=async(req,res,next)=>{
  // const email=req.params.email;
  const user = req.user;
  try{
    const author=await User.findOne({email:user.email});
    console.log(author);
    const blogs=await Blog.find({author:author._id});
    res.status(200).json(blogs)
  }catch(error){
    console.log(error);
    // res.status(500).json(error);
    next(new CustomApiError(error.message,500));
  }
};

module.exports={createBlog,findBlogsByUser};
