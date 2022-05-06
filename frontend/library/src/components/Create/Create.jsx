import "./Create.css"
import React, { useState ,useEffect} from 'react';
import Box from '@mui/material/Box';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import { Table } from '@mui/material';
import DatePicker from 'react-date-picker';
const token=localStorage.getItem("Id")
const url="http://localhost:8000/author/getbooksandauthors"
const postUrl="http://localhost:8000/author/create"
function Create() {
  const [publishedon, onChange] = useState(new Date());
  const [details,setDetails]=useState([])
  const[authorname,setAuthorname]=useState('')
  const[age,setAge]=useState('')
  const[dob,setDob]=useState('')
  const[bookname,setBookname]=useState('')
  const[price,setPrice]=useState('')
  useEffect(()=>{
    axios.get(url).then(res=>{
      console.log(res)
      setDetails(res.data)
  }).catch(err=>{
      console.log(err)
  })
  },[])
  const Deletebookauthor=async(e)=>{
    console.log(e)
    const deleteData= await axios.delete(`http://localhost:8000/author/delete/${e}`)
    if(deleteData)
    {
   window.alert(deleteData.data.message)
   navigate("/create")
    }
    else{
      window.alert(deleteData.data.err) 
      navigate("/create")
    }
  }
  const createData=async(e)=>{
    e.preventDefault()
    if(!authorname)
    {
      window.alert("Please Enter Author Name")
    }
     else if(!age)
    {
      window.alert("Please Enter Author Age")
    }
    else if(!dob)
    {
      window.alert("Please Choose Date OF Birth")
    }
   else  if(!bookname)
    {
      window.alert("Please Enter Book Name")
    }
   else  if(!publishedon)
    {
      window.alert("Please Enter Publishing Date")
    }
    else if(!price)
    {
      window.alert("Please Enter Price Of Book")
    }
    else
    {
      const PostData={authorname,age,dob,bookname,publishedon,price}
      const result=await axios.post(postUrl,PostData,{headers:{
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
        window.alert(result.data.err)
      }
    }
  }
  const Logout=()=>{
    localStorage.clear()
    navigate("/")
  }
  let navigate=useNavigate();
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
                 {token?<div className="div-center"><button className='btn btn-danger' onClick={Logout}>Logout</button></div>:null}
     {token? <div className="text-ce">
      <TextField id="outlined-basic" onChange={(e)=>setAuthorname(e.target.value)} label="AuthorName" variant="outlined" />
      <TextField id="outlined-basic" onChange={(e)=>setAge(e.target.value)}label="Age" variant="outlined" />
      <TextField id="outlined-basic" onChange={(e)=>setDob(e.target.value)}label="Date Of Birth" variant="outlined" />
      <TextField id="outlined-basic" onChange={(e)=>setBookname(e.target.value)}label="Book Name" variant="outlined" />
      <label>Published Date</label>
      <DatePicker onChange={onChange} value={publishedon}/>
      <TextField id="outlined-basic" onChange={(e)=>setPrice(e.target.value)} label="Price" variant="outlined" />
            <button className='btn btn-danger' onClick={createData}>Add</button>
            </div>:null}
      </Box>
<Table className="my-5">
  <thead>
    <tr>
      <th>Author Name</th>
      <th>Age</th>
      <th>Date Of Birth</th>
      <th>Book Name</th>
      <th>Published On</th>
      <th>Price</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {details.map((detail,index)=>(<tr key={detail._id+index}>
      <td>{detail.authorname}</td>
      <td>{detail.age}</td>
      <td>{detail.dob}</td>
      <td>{detail.bookname}</td>
      <td>{detail.publishedon}</td>
      <td>{detail.price}</td>
      <td><button className="btn btn-danger" onClick={(e)=>Deletebookauthor(detail._id)}>Delete</button></td>
    </tr>))}
  </tbody>
</Table>
</>
  )
}

export default Create