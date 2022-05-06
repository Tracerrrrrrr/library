import React, { Suspense } from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Toast from "./components/Toast/Toast"
const Login=React.lazy(()=>import('./components/Login/Login'))
const Register=React.lazy(()=>import('./components/Register/Register'))
const Create=React.lazy(()=>import('./components/Create/Create'))
const token=localStorage.getItem("Id")
const App=()=> {
  return (
   <>
   <Suspense fallback={<Toast/>}>
   <Router>
     <Navbar/>
     <Routes>
       <Route path='/' element={<Login/>}/>
       <Route path="/create" element={<Create/>}/>
       <Route path='/register' element={<Register/>}/>
     </Routes>
   </Router>
   </Suspense>
   </>
  )
}

export default App