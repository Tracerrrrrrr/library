const express = require('express')
const app = express()
const port = 8000;
const authorBook=require("./Routes/AuthorBook")
const user=require("./Routes/User")
const cors=require('cors')
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
const dotenv = require('dotenv');
dotenv.config();
const mongoose=require('mongoose')
app.use(express.json())
app.use(express.urlencoded({
    extended:true,
  }))
  const Db='';
mongoose.connect(Db).then(()=>{
  console.log("Connected to database successfully")
}).catch(err=>{
  console.log(err)
})
app.use('/author',authorBook)
app.use('/user',user)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })