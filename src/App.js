import React, { useEffect, useState } from 'react'
import LandingPage from './Components/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AdminPortal from './Components/Admin/AdminPortal'
import UserPortal from './Components/User/UserPortal'
import NavBar from './Components/NavBar'
import AddUsers from './Components/Admin/AddUsers'
import Books from './Components/Books'

const App = () => {

  const [userRole, setUserRole] = useState(null); // This will store either 'admin' or 'user'

    // Mock login to set the role (replace this with your actual authentication logic)
    useEffect(() => {
      const loggedUserRole = localStorage.getItem('userRole'); // This can be 'admin' or 'user'
      setUserRole(loggedUserRole);
    }, []);

    const handleLogin = (userRole) => {
      setUserRole(userRole); // Set user role on login
      localStorage.setItem('userRole', userRole); // Storing role in localStorage (or use your preferred method)
    };
  
    const handleLogout = () => {
      setUserRole(null);
      localStorage.removeItem('userRole'); // Remove role on logout
    };


  return (
    <>

  <BrowserRouter>
  <NavBar/>

  <Routes>
            {/* Public routes */}

  <Route element={<LandingPage/>} path='/' />
   {/* Admin-specific routes */}
   {userRole === 'admin' ? (
          <>
            <Route path="/admin-portal/*" element={<AdminPortal />} />
            
          </>
        ) : null}

          {/* User-specific routes */}
          {userRole === 'user' ? (
          <>
            <Route path="/user-portal/*" element={<UserPortal />} />
          </>
        ) : null}

  






{/*     
    <Route element={<LandingPage/>} path='/' />
    <Route element={<AdminPortal/>} path='/adminportal/*' />
    <Route element={<UserPortal/>} path='/userportal/*' /> */}

  </Routes>
  </BrowserRouter>


    </>
  )
}

export default App