import React from 'react'
import { NavLink } from 'react-router-dom'
import '../CSS/navbar.css'


const NavBar = () => {
  return (
    <>
        <div className="navBar">
        {/* Creative Designers */}
        <div className="logo">DIGI LIBRARY</div>
        <div className="links">
            <li><NavLink to="/adminportal/">HOME</NavLink></li>
            <li><NavLink to="/adminPortal/books">BOOKS</NavLink></li>
            <li><NavLink to="/adminPortal/addBooks">ADD BOOKS</NavLink></li>
            <li><NavLink to="/adminPortal/users">USERS</NavLink></li>
            <li><NavLink to="/adminPortal/addUsers">ADD USERS</NavLink></li>
            <li><NavLink to="/">LOG OUT</NavLink></li>
            
        </div>
    </div>
    
    </>

)
}

export default NavBar