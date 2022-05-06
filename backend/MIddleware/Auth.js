const jwt=require('jsonwebtoken')
module.exports=(req,res,next)=>{
  try{
    const token=req.headers.authorization.spilit(" ")[1] 
    const decoded=jwt.verify(req.body.token,process.env.TOKEN_KEY) 
    req.userData=decoded;
    next()
  }
  catch(error){
  return res.status(401).json({
    message:"Auth Failed!"
  })
  }
}