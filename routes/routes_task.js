const express=require('express');
const {createTask,getAllTasks,getCompletedTasks,findById,deleteById} = require('../controllers/taskcontroller');

const task_routes=express.Router()
//http://localhost:8080/task [post]
task_routes.post('/',createTask)

//http://localhost:8080/task [GET]
task_routes.get('/',getAllTasks);
task_routes.get('/completed',getCompletedTasks)
task_routes.get('/:id',findById)
task_routes.get('/:id',deleteById)


module.exports=task_routes;