  const express=require('express');
  const {createBlog,findBlogsByUser}=require('../controllers/blogController');
  const authMiddleware = require('../middleware/auth');
  const blog_routes=express.Router()

  // blog_routes.post('./:email',createBlog)
  // blog_routes.get('./:email',findBlogsByUser)
  blog_routes.post('/',authMiddleware,createBlog);
  blog_routes.get('/user',authMiddleware,findBlogsByUser);
  module.exports=blog_routes;
