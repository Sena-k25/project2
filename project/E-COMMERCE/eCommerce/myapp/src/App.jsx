import { useContext } from 'react'
import './App.css'
import {  Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Adbar from './components/Adbar'
import Electronics from './components/Electronics'
import Insert from './components/Insert'
import View from './components/View'
import Login from './components/Login'
import Signup from './components/Signup'
import AdminNavbar from './components/AdminNavbar'
import Authcontext from './Authcontext'



const App= ()=> {
  const { user } = useContext(Authcontext)
  return (
    <>
    {user?.role === "admin" ? <AdminNavbar /> : <Navbar />}
      <Routes>
        <Route path='/home' element = { <Adbar/> }></Route>
        <Route path='/electronics' element = { <Electronics/> }></Route>
         <Route path='/view' element = { <View/> }></Route>
        <Route path='/login' element = { <Login/>}></Route>
        <Route path='/Signup' element = { <Signup/>}></Route>
        <Route path='/adminpage' element = { <AdminNavbar/>}></Route>
        <Route path='/add' element = { <Insert/> }></Route>
        {user?.role === "admin" && <Route path="/add" element={<Insert />} />}
      </Routes>
      
    </>
  )
}

export default App