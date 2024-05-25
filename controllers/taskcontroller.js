const Task=require('../models/task')
const createTask=async (req,res)=>{
  console.log(Task)
  try{
    const task=await Task.create(req.body)
    console.log(Task);
    res.status(201).json({task})
  }
  catch(err){
    console.log(err)
    res.status(500).json(err)
  }
}
const getAllTasks=async(req,res)=>{
  try{
    const tasks=await Task.find();
    res.status(200).json(tasks)
  }
  catch(err){
    res.status(500).json(err)
  }
}
const getCompletedTasks=async(req,res)=>{
  try{
    const completedTasks=await Task.find({completed:true})
    res.status(200).json(completedTasks)
  }
  catch(err){
    res.status(500).json(err)
  }
}
// http://localhost:8080/task/662a0adbce3767efb91eb6ef
// req.params.id = 662a0adbce3767efb91ebef
const findById = async(req,res)=>{
  const id=req.params.id
  console.log(id)
  try{
    const task=await Task.findById({_id:id})
    res.status(200).json(task)
  }
  catch(err){
    res.status(500).json(err)
  }
}
const deleteById = async(req,res)=>{
  const id=req.params.id
  console.log(id)
  try{
    const task=await Task.deleteById({_id:id})
    res.status(200).json(task)
  }
  catch(err){
    res.status(500).json(err)
  }
}

module.exports={createTask,getAllTasks,getCompletedTasks,findById,deleteById}