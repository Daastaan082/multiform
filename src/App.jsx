import React from "react"
import Navbar from "./Component/Navbar"
import Home from "./Pages/Home"
import { Route, Routes } from "react-router-dom"
import SignUp from "./Pages/SignUp"
import Login from './Pages/Login'
import CreateFormReport from "./Pages/CreateFormReport"

const App = () => {
  return (
   <div>
   <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/pricing' element={<CreateFormReport/>}/>
    </Routes>
   </div>
  )
}
  
export default App