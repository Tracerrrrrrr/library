const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
name:{
    type:String,
    required:true,
    unique:true,
},
  email:{
      type:String,
      required:true
  },
  contactnumber:{
      type:Number,
      required:true
  },
  password:{
      type:String,
      required:true
  },   
})
const user=mongoose.model('USER',userSchema)
module.exports=user;