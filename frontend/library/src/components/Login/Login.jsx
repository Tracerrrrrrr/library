import {Link,useNavigate} from 'react-router-dom'
import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'
import axios from 'axios';
const te="http://localhost:8000/user/login"
const Login=()=> {
  const handleSocialLogin = (user) => {
    console.log(user);
  };
  
  const handleSocialLoginFailure = (err) => {
    console.error(err);
  };
  let navigate=useNavigate();
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const loginData=async(e)=>{
    e.preventDefault()
    if(!email)
    {
      window.alert("Please Enter Your Email")
    } 
    else if(!password)
    {
      window.alert("Please Enter Your Password")
    } 
    else{
      const postData={email,password}
      console.log(postData)
  const result=await axios.post(te,postData,{headers:{
    'Content-Type':'application/json'
  }})
  if(result)
  {
    console.log(result.data.token)
    window.alert(result.data.message)
    localStorage.setItem('Id',JSON.stringify(result.data.token))
    navigate("/create")
  }
  else{
    toast.error("Please Login Again")
  }
}}

  return (
<>
<Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    >
      <div className="text-cen">
      <TextField
          id="standard-password-input"
          label="Email"
          type="text"
          autoComplete="current-password"
          variant="standard"
          errorMessages={['maxNumber:9', 'matchRegexp:^[a-z,A-Z]$']}
          validators={['Maximum 9 Chracters Are Allowed', '']}
          onChange={(e)=>setEmail(e.target.value)}
        />
         <TextField
          id="standard-password-input"
          label="Password"
          type="text"
          autoComplete="current-password"
          variant="standard"
          onChange={(e)=>setPassword(e.target.value)}
        />
    <button className='btn btn-success my-2' onClick={loginData}>Login</button>
       <p className='my-4'>Already Have An Account ?<Link to='/register' className='tet'>Sign-in </Link></p>
    </div>
    </Box>
    
   
</>
  )
}

export default Login;