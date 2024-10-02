import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../CSS/navbar.css'


const NavBar = () => {
    
    const [userRole, setUserRole] = useState('admin');
    const navigate = useNavigate();
    useEffect(() => {
        // Assuming you get the role from localStorage (after login)
        const role = localStorage.getItem("userRole"); // It can be 'admin' or 'user'
        setUserRole(role);
      }, []);


      const handleLogout = () => {
        // Clear user role and other login info when logging out
        localStorage.removeItem("userRole");
        setUserRole(null);
        navigate('/');

      };

  return (
    <>
        <div className="navBar">
        <div className="logo">DIGI LIBRARY</div>
        <div className="links">


            <li><NavLink to="/" style={({ isActive }) => {return isActive ? { color: "yellow" } : {};}}>HOME</NavLink></li>
            <li><NavLink to="/books" style={({ isActive }) => {return isActive ? { color: "yellow" } : {};}}>BOOKS</NavLink></li>
            <li><NavLink to="/users" style={({ isActive }) => {return isActive ? { color: "yellow" } : {};}}>USERS</NavLink></li>
            {
                userRole === 'admin' && (
                   <>
                     <li><NavLink to="/addBooks" style={({ isActive }) => {return isActive ? { color: "yellow" } : {};}}>ADD BOOKS</NavLink></li>
                     <li><NavLink to="/addUsers" style={({ isActive }) => {return isActive ? { color: "yellow" } : {};}}>ADD USERS</NavLink></li>
                   </>
                )
            }
           
            <li><button onClick={handleLogout}>LOGOUT</button></li>

        </div>
    </div>
    </>
    );
    };

export default NavBar;