import React from 'react'
import NavBar from '../NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Books from '../Books'
import ReadBooks from '../ReadBooks'
import AddBooks from './AddBooks'
import AddUsers from './AddUsers'
import Users from '../Users'

const AdminPortal = () => {
  return (
 <>
    <NavBar/>

    <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Books/>} path='/books'/>
        <Route element={<ReadBooks/>} path='/readBooks/:id' />
        <Route element={<AddBooks/>} path='/addBooks'/ >
        <Route element={<AddUsers/>} path='/addUsers'/ >
        <Route element={<Users/>} path='/users'/ >
    </Routes>
 
 </>
  )
}

export default AdminPortal