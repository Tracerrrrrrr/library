const mongoose=require('mongoose')
const authorbookSchema=new mongoose.Schema({
authorname:{
    type:String,
    required:true,
},
age:{
    type:String,
    required:true,
},
dob:{
    type:String,
    required:true
},
bookname:{
    type:String,
    required:true,
},
publishedon:{
    type:String,
    required:true,
},
price:{
    type:String,
    required:true
},
},{timestamps:true})
const authorBook=mongoose.model('AUTHORBOOK',authorbookSchema)
module.exports=authorBook;