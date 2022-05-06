const express = require("express");
const router = express.Router();
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const authorBook=require("../Models/AuthorsBookSchema")
router.get('/',(req,res)=>{
    return res.json({message:"Hello from author side"})
})
router.post('/create',async(req,res)=>{
    const { authorname,age,dob,bookname,publishedon,price } =
    req.body;
    if(!authorname)
    {
        return res.json({
            message:"Please Enter Author Name"
        })
    }
    if(!age)
    {
        return res.json({
            message:"Please Enter Age"
        })
    }
    if(!dob)
    {
        return res.json({
            message:"Please Enter Valid Date Of Birth"
        })
    }
    if(!bookname)
    {
        return res.json({
            message:"Please Enter Name Of Book"
        })
    }
    if(!publishedon)
    {
        return res.json({
            message:"Please Enter Publishing Date"
        })
    }
    if(!price)
    {
        return res.json({
            message:"Please Enter Price"
        })
    }
    try{
    const authorbook=new authorBook({
        authorname:req.body.authorname,
        age:req.body.age,
        dob:req.body.dob,
        bookname:req.body.bookname,
        publishedon:req.body.publishedon,
        price:req.body.price
    })
   const AuthorBookSave= await authorbook.save()
   if(AuthorBookSave)
   {
       return res.json({
           message:"Added A New Book With Author",
           details:AuthorBookSave
       })
   }
}
catch(err)
{
    return res.json({
        err:err
    })
}
})
router.get('/getbooksandauthors',async(req,res)=>{
    try{
        const bookandauthor= await authorBook.find()
        if(bookandauthor)
        {
            return res.json(bookandauthor)
        }
    }
    catch(err)
    {
        return res.json({
            err:err
        })
    }
 
})
router.delete('/delete/:id',async(req,res)=>{
    const DelteId=req.params.id;
    try{
        const bookandauthordelete= await authorBook.findByIdAndDelete(DelteId)
        if(bookandauthordelete)
        {
            return res.status(200).json({message:"Deleted"})
        }
        else{
            return res.json({err:"Not deleted"})
        }
    }
    catch(err)
    {
        console.log(err)
    }
})
module.exports=router;