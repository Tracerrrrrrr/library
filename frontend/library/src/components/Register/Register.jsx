import React from "react";
import {useState} from 'react';
import axios from 'axios'
import {  useNavigate} from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Register.css'
const re="http://localhost:8000/user/register"
const Register=()=>{
  let navigate=useNavigate();
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[contactnumber,setContactnumber]=useState('')
  const[password,setPassword]=useState('')
  const handleOnClick=async(e)=>{
    e.preventDefault();
    if(!name)
    {
      window.alert("Please Enter Your Name")
    }
    else if(!email)
    {
      window.alert("Please Enter Your Email")
    }
    else if(!contactnumber)
    {
      window.alert("Please Enter Your ContactNumber")
    }
    else if(!password)
    {
      window.alert("Please Enter Your PassWord")
    }
    else{
      const postData={name,email,contactnumber,password}
      const result=await axios.post(re,postData,{headers:{
        'Content-Type':'application/json'
      }})
      if(result)
      {
        window.alert(result.data.message)
        navigate("/")
      }
      else{
        window.alert(result.data.err)
      }
    }
  }
    return(
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="text-ce">
        <TextField
          id="standard-password-input"
          label="First Name"
          type="text"
          onChange={(e)=>setName(e.target.value)}
          pattern="[a-zA-Z0-9]+" 
          minLength="4"
          maxLength="10"
          autoComplete="current-password"
          variant="standard"
        />
        <TextField
          id="standard-password-input"
          label="Email"
          type="email"
          onChange={(e)=>setEmail(e.target.value)}
          autoComplete="current-password"
          variant="standard"
        />
        <TextField
          id="standard-password-input"
          label="Contact"
          type="text"
          onChange={(e)=>setContactnumber(e.target.value)}
          autoComplete="current-password"
          variant="standard"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="text"
          onChange={(e)=>setPassword(e.target.value)}
          autoComplete="current-password"
          variant="standard"
        />
            <button className='btn btn-danger' onClick={handleOnClick}>Register</button>
            </div>
      </Box>
    )
}
export default Register;