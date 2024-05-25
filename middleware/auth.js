const jwt=require('jsonwebtoken');
const CustomApiError=require("../error/customApiError");
const authMiddleware=async(req,res,next)=>{
  const authHeader=req.headers.authorization;
  //
  console.log(authHeader);
  if(!authHeader || !authHeader.startsWith('Bearer')){
    next(new CustomApiError('Not Authorized',401))//go to errorhandler
  }
  //take the payload which contains the data
  try{
    const token=authHeader.split(' ')[1];
    console.log(token)
    const decoded=jwt.verify(token,process.env.JSON_SECRETKEY);
    //fetch the user details
    const {email,username,role}=decoded;
    console.log(decoded)
    req.user={email,username,role}
    next()
  }catch(error){
    console.log(error)
    next(new CustomApiError('Not a valid token',401))
  }
}
module.exports=authMiddleware