import React from 'react'
import NavBar from '../NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Books from '../Books'
import ReadBooks from '../ReadBooks'

const UserPortal = () => {
  return (
    <>
    <NavBar/>
    
    
    <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Books/>} path='/books'/>
        <Route element={<ReadBooks/>} path='/readBooks/:id' />
      



    </Routes>
 


    </>


  )
}

export default UserPortal