const express=require('express');
const {register,login}=require('../controllers/userController')
const user_routes=express.Router()

user_routes.post('/register',register);

user_routes.post('/login',login);

module.exports=user_routes;