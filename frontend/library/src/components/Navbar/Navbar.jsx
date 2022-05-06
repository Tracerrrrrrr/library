import React from 'react'
import './Navbar.css'
import {Link,useNavigate} from 'react-router-dom'
const token=localStorage.getItem("Id")
function Navbar() 
{
  let navigate=useNavigate();
  return (
 <>
 <nav className="navbar navbar-expand-lg navbar-light bg-light wrapper">
  <div className="container-fluid ">
   <div className="text-typing">
   <p>Library </p>
   </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mainclass ">
      {token?<li className="nav-item">
       <Link className="nav-link active nb" aria-current="page" to="/create">Create</Link>
     </li>:  <li className="nav-item">
        <Link className="nav-link active nb" aria-current="page" to="/login">Login</Link>
        </li>}
        </ul>
     </div>
  </div>
</nav>

 </>
  )
}

export default Navbar;